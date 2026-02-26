// ============================================
// Layout racine de l'application
// Définit la structure HTML, les polices, les métadonnées SEO
// et le provider Toaster pour les notifications
// ============================================

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/sections/Header";
import "./globals.css";

// --- Chargement des polices Google ---
// Geist Sans : police principale pour le texte
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono : police monospace pour le code (si besoin)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Métadonnées SEO complètes ---
// Ces métadonnées sont utilisées par les moteurs de recherche et les réseaux sociaux
export const metadata: Metadata = {
  // Titre de la page affiché dans l'onglet du navigateur
  title: "TDAH Adulte - Recevez vos outils pratiques gratuits",
  // Description pour Google et les réseaux sociaux
  description:
    "Recevez gratuitement votre tableur Excel de calcul des dépenses fixes et votre kit de démarrage pratique pour mieux gérer votre quotidien avec le TDAH adulte.",
  // Mots-clés pour le référencement
  keywords: [
    "TDAH adulte",
    "TDAH outils",
    "gestion TDAH",
    "dépenses fixes",
    "kit démarrage TDAH",
    "organisation TDAH",
    "e-book TDAH",
  ],
  // Auteur du site
  authors: [{ name: "TDAH Adulte" }],
  // Open Graph : métadonnées pour Facebook, LinkedIn, etc.
  openGraph: {
    title: "TDAH Adulte - Vos outils pratiques offerts",
    description:
      "Tableur Excel pour vos dépenses fixes + kit de démarrage pratique. Gratuit pour les lecteurs du e-book.",
    type: "website",
    locale: "fr_FR",
    siteName: "TDAH Adulte",
  },
  // Twitter Card : métadonnées pour Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "TDAH Adulte - Vos outils pratiques offerts",
    description:
      "Tableur Excel pour vos dépenses fixes + kit de démarrage pratique. Gratuit pour les lecteurs du e-book.",
  },
  // Robots : autorise l'indexation par les moteurs de recherche
  robots: {
    index: true,
    follow: true,
  },
};

// --- Composant Layout racine ---
// Enveloppe toutes les pages de l'application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout rendu");

  return (
    // lang="fr" car le contenu est en français
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Toaster : affiche les notifications toast (succès, erreur) */}
        {/* Position en haut au centre, durée de 4 secondes */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "0.5rem",
              padding: "0.75rem 1rem",
            },
          }}
        />

        {/* Header sticky : navigation principale visible sur toutes les pages */}
        <Header />

        {/* Contenu de la page (injecté par Next.js) */}
        {children}
      </body>
    </html>
  );
}
