"use client";

// ============================================
// Section Hero — Option A (bénéfice émotionnel)
// Un seul CTA dominant, headline émotionnel, micro-réassurance
// Image du livre à droite sur desktop, en dessous sur mobile
// ============================================

import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import {
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_CTA_TEXT,
  HERO_REASSURANCE,
} from "@/lib/constants";

export default function HeroSection() {
  console.log("HeroSection rendue");

  // Scroll fluide vers la section de capture email
  const handleScrollToCTA = () => {
    console.log("Défilement vers la section email-capture");
    const emailSection = document.getElementById("email-capture");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Section plein écran avec dégradé bleu pâle
    <SectionWrapper className="min-h-screen flex items-center bg-gradient-to-b from-blue-pale to-background pt-16">
      {/* Grid responsive : 1 col mobile, 2 cols desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* ===== COLONNE GAUCHE — CONTENU TEXTUEL ===== */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

          {/* Eyebrow — petit badge au-dessus du titre */}
          <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-medium">
            {HERO_EYEBROW}
          </div>

          {/* Headline principal — gros, émotionnel, impactant */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
            {HERO_HEADLINE}
          </h1>

          {/* Sous-titre — explication courte de l'offre */}
          <p className="text-lg md:text-xl text-muted-foreground">
            {HERO_SUBHEADLINE}
          </p>

          {/* CTA unique dominant — un seul bouton, pas de distraction */}
          <Button
            size="lg"
            onClick={handleScrollToCTA}
            className="mt-4 w-full sm:w-auto group text-base px-8 py-6"
          >
            {HERO_CTA_TEXT}
            {/* Flèche animée au hover */}
            <ArrowDownIcon className="size-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>

          {/* Micro-réassurance — 3 points de confiance sous le bouton */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2">
            {HERO_REASSURANCE.map((item, index) => (
              <span key={index} className="inline-flex items-center gap-1.5">
                {/* Icône check verte pour chaque point */}
                <CheckIcon className="size-4 text-green-600 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ===== COLONNE DROITE — IMAGE DU LIVRE ===== */}
        <div className="relative flex items-center justify-center">
          {/* Cercle décoratif flou derrière le livre */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-medium to-blue-deep rounded-full blur-3xl opacity-15" />

          {/* Image du livre avec ombre portée */}
          <Image
            src="/images/hero-book.png"
            alt="Livre TDAH Gérer Son Argent Sans Volonté Ni Discipline par Maxime Wells - Méthode DOPA4 pour adultes"
            width={2300}
            height={2300}
            className="relative z-10 drop-shadow-2xl scale-125 -translate-y-8"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
