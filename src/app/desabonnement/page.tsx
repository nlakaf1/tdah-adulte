// ============================================
// Page Désabonnement - /desabonnement
// Server Component wrapper pour les métadonnées SEO
// Le contenu interactif est délégué au composant client UnsubscribeContent
// ============================================

import type { Metadata } from "next";
import PageHeroBanner from "@/components/shared/PageHeroBanner";
import FooterSection from "@/components/sections/FooterSection";
import UnsubscribeContent from "./UnsubscribeContent";

// --- Métadonnées SEO de la page désabonnement ---
// robots: noindex car cette page ne doit PAS apparaître dans Google
export const metadata: Metadata = {
  title: "Désabonnement - TDAH Adulte",
  description:
    "Désabonnez-vous de la liste de diffusion TDAH Adulte.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesabonnementPage() {
  console.log("Page Désabonnement rendue (server component)");

  return (
    <main>
      {/* Bannière de titre de la page */}
      <PageHeroBanner
        title="Désabonnement"
        subtitle="Gestion de vos préférences email."
      />

      {/* Contenu interactif (client component) */}
      {/* Lit le paramètre ?email= de l'URL et appelle l'API */}
      <UnsubscribeContent />

      {/* Pied de page */}
      <FooterSection />
    </main>
  );
}
