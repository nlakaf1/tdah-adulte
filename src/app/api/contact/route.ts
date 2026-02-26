// ============================================
// API Route : POST /api/contact
// Reçoit les données du formulaire de contact
// Envoie un email de notification au propriétaire du site via Resend
// ============================================

import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { validateContactForm } from "@/lib/validators";

export async function POST(request: NextRequest) {
  console.log("API /api/contact : requête reçue");

  try {
    // --- Étape 1 : Extraire les données du formulaire ---
    const body = await request.json();
    const { name, email, message } = body;

    console.log("Données de contact reçues :", { name, email });

    // --- Étape 2 : Valider les données côté serveur ---
    const validation = validateContactForm({ name, email, message });

    if (!validation.valid) {
      console.log("Validation échouée :", validation.errors);
      return NextResponse.json(
        {
          success: false,
          message: "Données invalides.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // --- Étape 3 : Envoyer l'email de notification au propriétaire ---
    // L'email est envoyé à CONTACT_EMAIL (défini dans .env.local)
    const contactEmail =
      process.env.CONTACT_EMAIL || "votre-email@exemple.com";
    // On ajoute le nom d'affichage devant l'email brut
    const rawEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const fromEmail = `TDAH Adulte <${rawEmail}>`;

    console.log("Envoi de la notification de contact à :", contactEmail);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: `Nouveau message de contact - ${name}`,
      // HTML simple pour le message de contact (pas besoin d'un template React complet)
      html: `
        <div style="font-family: sans-serif; max-width: 580px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <hr style="border-color: #e2e8f0;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap; color: #4a5568;">${message}</p>
          <hr style="border-color: #e2e8f0;" />
          <p style="font-size: 12px; color: #a0aec0;">
            Ce message a été envoyé depuis le formulaire de contact de la landing page TDAH Adulte.
          </p>
        </div>
      `,
    });

    // --- Étape 4 : Gérer la réponse de Resend ---
    if (error) {
      console.log("Erreur Resend (contact) :", error);
      return NextResponse.json(
        {
          success: false,
          message: "Erreur lors de l'envoi du message.",
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log("Email de contact envoyé avec succès, ID :", data?.id);

    // --- Étape 5 : Retourner la réponse de succès ---
    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès !",
      },
      { status: 200 }
    );
  } catch (error) {
    // --- Gestion des erreurs inattendues ---
    console.log("Erreur inattendue dans /api/contact :", error);

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
