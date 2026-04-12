// ============================================
// Section À Propos — version "vous" (centrée sur le visiteur)
// Remplace les 3 cartes Mission/Histoire/Valeurs
// par un texte narratif qui crée une identification immédiate
// ============================================

import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  ABOUT_TITLE,
  ABOUT_SUBTITLE,
  ABOUT_PARAGRAPHS,
  ABOUT_SIGNATURE,
} from "@/lib/constants";

export default function AboutUsSection() {
  console.log("AboutUsSection rendu");

  return (
    // Section avec fond secondaire pour la différencier visuellement
    <SectionWrapper id="about" className="bg-secondary">
      {/* Titre de section — pas de sous-titre (le texte narratif suffit) */}
      <SectionHeading title={ABOUT_TITLE} subtitle={ABOUT_SUBTITLE} />

      {/* Conteneur centré pour le texte narratif */}
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Chaque paragraphe du texte narratif */}
        {ABOUT_PARAGRAPHS.map((paragraph, index) => {
          // Les phrases courtes et percutantes (index 1 et 2) sont mises en avant
          const isEmphasis = index === 1 || index === 2;

          return (
            <p
              key={index}
              className={`leading-relaxed ${
                isEmphasis
                  ? "text-xl md:text-2xl font-semibold text-foreground"
                  : "text-lg text-muted-foreground"
              }`}
            >
              {paragraph}
            </p>
          );
        })}

        {/* Signature de l'auteur — italique, alignée à droite */}
        <p className="text-base text-primary font-medium italic pt-4 border-t border-border">
          {ABOUT_SIGNATURE}
        </p>
      </div>
    </SectionWrapper>
  );
}
