// ============================================
// API Route : POST /api/send-resources
// Reçoit un email, le valide, envoie les ressources via Resend
// ET ajoute le contact dans l'Audience Resend pour les broadcasts
// ET ajoute le contact dans Loops.so pour la séquence automatique J+3
// ============================================

import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { loops } from "@/lib/loops";
import { validateEmail } from "@/lib/validators";
import { DOWNLOAD_URLS } from "@/lib/constants";
import ResourceEmail from "@/components/emails/ResourceEmail";

export async function POST(request: NextRequest) {
  console.log("API /api/send-resources : requête reçue");

  try {
    // --- Étape 1 : Extraire l'email du corps de la requête ---
    const body = await request.json();
    const { email } = body;

    console.log("Email reçu :", email);

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

    // --- Étape 3 : Envoyer l'email via Resend ---
    // L'adresse "from" vient de la variable d'environnement
    // En dev : onboarding@resend.dev (domaine de test Resend)
    // En prod : votre domaine vérifié
    // On ajoute le nom d'affichage "TDAH Adulte" devant l'email
    // La variable RESEND_FROM_EMAIL contient juste l'email (ex: no-reply@dopasysteme.com)
    const rawEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const fromEmail = `TDAH Adulte <${rawEmail}>`;

    console.log("Envoi de l'email via Resend depuis :", fromEmail);

    // replyTo : adresse de reponse (renforce la legitimite anti-spam)
    const replyTo = process.env.CONTACT_EMAIL || "contact@dopasysteme.com";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: replyTo,
      subject: "Vos ressources gratuites TDAH sont prêtes",
      // Utilise le template React pour générer le HTML de l'email
      react: ResourceEmail({
        downloadExcelUrl: DOWNLOAD_URLS.excel,
        downloadKitUrl: DOWNLOAD_URLS.starterKit,
      }),
    });

    // --- Étape 4 : Gérer la réponse de Resend ---
    if (error) {
      console.log("Erreur Resend :", error);
      return NextResponse.json(
        {
          success: false,
          message: "Erreur lors de l'envoi de l'email.",
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log("Email envoyé avec succès, ID :", data?.id);

    // --- Étape 5 : Ajouter le contact dans l'Audience Resend ---
    // Permet de stocker tous les emails et de les relancer plus tard
    // L'Audience ID vient de la variable d'environnement RESEND_AUDIENCE_ID
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (audienceId) {
      // Ajout du contact dans l'audience (ne bloque pas l'envoi si ca echoue)
      const { data: contactData, error: contactError } =
        await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: audienceId,
        });

      if (contactError) {
        // On log l'erreur mais on ne bloque pas la reponse
        // L'email a deja ete envoye, le contact sera ajoute manuellement si besoin
        console.log("Erreur ajout contact Audience :", contactError);
      } else {
        console.log("Contact ajoute dans l'Audience, ID :", contactData?.id);
      }
    } else {
      console.log("RESEND_AUDIENCE_ID non defini, contact non stocke");
    }

    // --- Étape 6 : Ajouter le contact dans Loops.so ---
    // Loops.so gère la séquence d'emails automatiques (J+3, J+7, etc.)
    // Le contact est créé/mis à jour et entre automatiquement dans la séquence
    const loopsApiKey = process.env.LOOPS_API_KEY;

    if (loopsApiKey) {
      try {
        // updateContact crée le contact s'il n'existe pas, ou le met à jour
        // La propriété "source" permet de savoir d'où vient le contact
        // Un seul objet en argument (pas deux)
        const loopsResp = await loops.updateContact({
          email: email,
          properties: {
            source: "landing-page-tdah",
          },
        });
        console.log("Contact ajouté dans Loops.so :", loopsResp);
      } catch (loopsError) {
        // On log l'erreur mais on ne bloque pas la réponse
        // L'email Resend a déjà été envoyé
        console.log("Erreur ajout contact Loops.so :", loopsError);
      }
    } else {
      console.log("LOOPS_API_KEY non définie, séquence automatique désactivée");
    }

    // --- Étape 7 : Retourner la réponse de succès ---
    return NextResponse.json(
      {
        success: true,
        message: "Email envoyé avec succès !",
      },
      { status: 200 }
    );
  } catch (error) {
    // --- Gestion des erreurs inattendues ---
    console.log("Erreur inattendue dans /api/send-resources :", error);

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
