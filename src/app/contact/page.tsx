// ============================================
// Page Contact - /contact
// Page dediee au formulaire de contact
// Accessible via le header de navigation
// ============================================

import type { Metadata } from "next";
import PageHeroBanner from "@/components/shared/PageHeroBanner";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

// --- Metadonnees SEO specifiques a la page Contact ---
export const metadata: Metadata = {
  title: "Contact - TDAH Adulte | Contactez-nous",
  description:
    "Vous avez une question sur le e-book TDAH Adulte ou les ressources gratuites ? Contactez-nous via notre formulaire.",
  openGraph: {
    title: "Contact - TDAH Adulte | Contactez-nous",
    description:
      "Contactez l'equipe TDAH Adulte pour toute question ou retour sur le e-book et les ressources.",
    type: "website",
    locale: "fr_FR",
    siteName: "TDAH Adulte",
  },
};

export default function ContactPage() {
  console.log("Page Contact rendue");

  return (
    <main>
      {/* Banniere de titre de la page */}
      <PageHeroBanner
        title="Contactez-nous"
        subtitle="Une question ou un retour ? N'hesitez pas a nous ecrire."
      />

      {/* Section formulaire de contact */}
      <ContactSection />

      {/* Pied de page */}
      <FooterSection />
    </main>
  );
}
