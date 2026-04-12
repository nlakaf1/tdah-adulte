// ============================================
// Bandeau de preuve sociale
// Placé entre le Hero et la section Email Capture
// Objectif : créer une identification immédiate et débloquer la conversion
// Pas de stat inventée → formulation en fourchette (conforme au PDF juridique)
// ============================================

import { LightBulbIcon } from "@heroicons/react/24/outline";

export default function SocialProofBanner() {
  console.log("SocialProofBanner rendu");

  return (
    // Bandeau pleine largeur avec fond bleu profond et texte clair
    <section className="bg-blue-deep text-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Conteneur centré avec largeur max */}
      <div className="max-w-3xl mx-auto text-center space-y-4">

        {/* Icône ampoule pour attirer l'attention */}
        <LightBulbIcon className="size-8 mx-auto text-yellow-300" />

        {/* Texte principal du bandeau — formulation en fourchette (pas de chiffre inventé) */}
        <p className="text-lg sm:text-xl font-semibold leading-relaxed">
          Les adultes TDAH perdent en moyenne{" "}
          <span className="text-yellow-300">
            plusieurs centaines à plusieurs milliers d&apos;euros par an
          </span>{" "}
          en frais de découvert, achats impulsifs et abonnements oubliés.
        </p>

        {/* Repositionnement — le vrai problème n'est pas la discipline */}
        <p className="text-base sm:text-lg text-white/80 leading-relaxed">
          Ce n&apos;est pas un manque de discipline
          — c&apos;est une incompatibilité neurologique.
        </p>
      </div>
    </section>
  );
}
