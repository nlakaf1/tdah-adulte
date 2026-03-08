// ============================================
// API Route : POST /api/unsubscribe
// Reçoit un email, le valide, puis supprime le contact de l'Audience Resend
// Si la suppression échoue, on marque le contact comme "unsubscribed" en fallback
// Utilisé par la page /desabonnement pour désinscrire un utilisateur
// ============================================

import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { validateEmail } from "@/lib/validators";

export async function POST(request: NextRequest) {
  console.log("API /api/unsubscribe : requête reçue");

  try {
    // --- Étape 1 : Extraire l'email du corps de la requête ---
    const body = await request.json();
    const { email } = body;

    console.log("Email reçu pour désabonnement :", email);

    // --- Étape 2 : Valider l'email côté serveur ---
    // Ne jamais faire confiance aux données du client
    const validation = validateEmail(email);

    if (!validation.valid) {
      console.log("Validation échouée :", validation.error);
      return NextResponse.json(
        { success: false, message: validation.error || "Email invalide." },
        { status: 400 }
      );
    }

    // --- Étape 3 : Récupérer l'Audience ID depuis les variables d'environnement ---
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!audienceId) {
      // Sans Audience ID, on ne peut pas gérer les contacts
      console.log("RESEND_AUDIENCE_ID non défini, impossible de désabonner");
      return NextResponse.json(
        {
          success: false,
          message: "Configuration manquante côté serveur.",
        },
        { status: 500 }
      );
    }

    console.log("Audience ID trouvé :", audienceId);

    // --- Étape 4 : Tenter de supprimer le contact de l'Audience Resend ---
    // resend.contacts.remove() supprime définitivement le contact
    // C'est la méthode préférée car elle retire complètement l'email de la liste
    try {
      const { data: removeData, error: removeError } =
        await resend.contacts.remove({
          email: email,
          audienceId: audienceId,
        });

      if (removeError) {
        // La suppression a échoué — on log l'erreur et on tente le fallback
        console.log(
          "Erreur lors de la suppression du contact :",
          removeError
        );

        // --- Étape 4b : Fallback — marquer comme "unsubscribed" ---
        // Si la suppression échoue (contact pas trouvé, erreur API, etc.)
        // On tente de mettre à jour le statut du contact à "unsubscribed: true"
        // Cela empêche l'envoi de futurs emails sans supprimer le contact
        console.log("Tentative de fallback : marquer comme unsubscribed");

        const { data: updateData, error: updateError } =
          await resend.contacts.update({
            email: email,
            audienceId: audienceId,
            unsubscribed: true,
          });

        if (updateError) {
          // Les deux méthodes ont échoué — on retourne une erreur
          console.log(
            "Erreur lors du fallback update :",
            updateError
          );
          return NextResponse.json(
            {
              success: false,
              message:
                "Impossible de traiter votre désabonnement. Veuillez réessayer.",
            },
            { status: 500 }
          );
        }

        // Le fallback a fonctionné — le contact est marqué comme unsubscribed
        console.log(
          "Contact marqué comme unsubscribed avec succès :",
          updateData
        );

        return NextResponse.json(
          {
            success: true,
            message: "Vous avez été désabonné avec succès.",
          },
          { status: 200 }
        );
      }

      // La suppression a réussi — le contact est retiré de l'Audience
      console.log("Contact supprimé de l'Audience avec succès :", removeData);

      return NextResponse.json(
        {
          success: true,
          message: "Vous avez été désabonné avec succès.",
        },
        { status: 200 }
      );
    } catch (resendError) {
      // Erreur inattendue lors de l'appel à Resend
      console.log("Erreur inattendue Resend :", resendError);

      return NextResponse.json(
        {
          success: false,
          message:
            "Une erreur est survenue lors du désabonnement. Veuillez réessayer.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    // --- Gestion des erreurs inattendues (JSON mal formé, etc.) ---
    console.log("Erreur inattendue dans /api/unsubscribe :", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur inattendue est survenue.",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
