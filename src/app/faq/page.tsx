// ============================================
// Page FAQ - /faq
// Page dediee aux questions frequentes
// Accessible via le header de navigation
// ============================================

import type { Metadata } from "next";
import PageHeroBanner from "@/components/shared/PageHeroBanner";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";

// --- Metadonnees SEO specifiques a la page FAQ ---
export const metadata: Metadata = {
  title: "FAQ - TDAH Adulte | Questions frequentes",
  description:
    "Reponses aux questions frequentes sur les ressources gratuites TDAH Adulte : tableur Excel, kit de demarrage, confidentialite et livraison.",
  openGraph: {
    title: "FAQ - TDAH Adulte | Questions frequentes",
    description:
      "Tout ce que vous devez savoir sur les ressources gratuites complementaires au e-book TDAH Adulte.",
    type: "website",
    locale: "fr_FR",
    siteName: "TDAH Adulte",
  },
};

export default function FaqPage() {
  console.log("Page FAQ rendue");

  return (
    <main>
      {/* Banniere de titre de la page */}
      <PageHeroBanner
        title="Questions frequentes"
        subtitle="Tout ce que vous devez savoir sur les ressources gratuites."
      />

      {/* Section FAQ avec accordion */}
      <FaqSection />

      {/* Pied de page */}
      <FooterSection />
    </main>
  );
}
