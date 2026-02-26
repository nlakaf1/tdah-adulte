// ============================================
// Page d'accueil - /
// Landing page principale simplifiee
// Hero + Email Capture + A Propos + Apercu FAQ + Footer
// FAQ et Contact sont sur des pages separees
// ============================================

import HeroSection from "@/components/sections/HeroSection";
import EmailCaptureSection from "@/components/sections/EmailCaptureSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import FaqPreviewSection from "@/components/sections/FaqPreviewSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  console.log("Page d'accueil rendue");

  return (
    <main>
      {/* Section 1 : Hero - Premier ecran vu par le visiteur */}
      <HeroSection />

      {/* Section 2 : Capture d'email - Point de conversion principal */}
      <EmailCaptureSection />

      {/* Section 3 : A Propos - Qui sommes-nous */}
      <AboutUsSection />

      {/* Section 4 : Apercu FAQ - 3 questions + lien vers /faq */}
      <FaqPreviewSection />

      {/* Footer - Pied de page */}
      <FooterSection />
    </main>
  );
}
