// ============================================
// Client Loops.so - Séquences d'emails automatiques
// Utilisé côté serveur uniquement (API routes)
// JAMAIS côté client (pas de CORS, clé API exposée)
// ============================================

import { LoopsClient } from "loops";

// Singleton : une seule instance du client Loops partagée dans toute l'app
// La clé API vient de la variable d'environnement LOOPS_API_KEY
export const loops = new LoopsClient(process.env.LOOPS_API_KEY || "");

console.log("Client Loops.so initialisé");
