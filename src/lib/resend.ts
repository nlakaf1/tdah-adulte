// ============================================
// Client Resend singleton
// Initialise une seule instance de Resend pour toute l'application
// Fichier serveur uniquement (ne jamais importer côté client)
// ============================================

import { Resend } from "resend";

// Crée l'instance Resend avec la clé API depuis les variables d'environnement
// La clé RESEND_API_KEY doit être définie dans .env.local
export const resend = new Resend(process.env.RESEND_API_KEY);

console.log("Client Resend initialisé");
