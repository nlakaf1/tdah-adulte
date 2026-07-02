"use client";

// ============================================
// Section "Le Duo Gagnant" — présentation de la solution
// Placée entre le bandeau problème (SocialProofBanner) et la capture email
// Objectif : montrer LA solution (comprendre → agir) avant de demander l'email
// La bannière image porte le message détaillé ; le texte autour le complète
// (on évite de dupliquer mot pour mot le contenu déjà présent dans l'image)
// ============================================

import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function DuoGagnantSection() {
  console.log("DuoGagnantSection rendue");

  // Scroll fluide vers la section de capture email (même logique que le Hero)
  const handleScrollToCTA = () => {
    console.log("Défilement vers la section email-capture depuis Le Duo Gagnant");
    const emailSection = document.getElementById("email-capture");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Fond crème chaud pour rappeler la charte de la bannière et se différencier
    // des sections voisines (bandeau bordeaux avant, formulaire clair après)
    <SectionWrapper id="le-duo" className="bg-cream">
      {/* Titre h2 — angle complémentaire à l'image (pas une redite du visuel) */}
      <SectionHeading
        title="Une méthode en deux temps"
        subtitle="D'abord comprendre comment fonctionne votre cerveau, puis passer à l'action avec un plan concret sur 90 jours."
      />

      {/* Conteneur centré et limité en largeur pour garder l'image lisible */}
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* Bannière "Duo Gagnant" — livre + carnet DOPA4, dans une carte crème */}
        <figure className="w-full rounded-2xl bg-card border border-border shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <Image
            src="/images/hero-duo-gagnant.jpeg"
            alt="Le duo gagnant TDAH adulte : le livre Gérer Son Argent Sans Volonté Ni Discipline pour comprendre le fonctionnement du cerveau TDAH, et le carnet de bord DOPA4 90 jours pour reprendre le contrôle de ses finances, par Maxime Wells"
            width={970}
            height={600}
            className="w-full h-auto"
          />
        </figure>

        {/* CTA unique — invite à récupérer les ressources gratuites */}
        <Button
          size="lg"
          onClick={handleScrollToCTA}
          className="group text-base px-8 py-6"
        >
          Recevoir mes ressources gratuites
          {/* Flèche animée vers le bas au survol */}
          <ArrowDownIcon className="size-5 ml-2 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
