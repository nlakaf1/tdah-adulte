// ============================================
// Composant FaqPreviewSection
// Apercu de 3 questions FAQ sur la page d'accueil
// Avec un lien "Voir toutes les questions" vers /faq
// ============================================

"use client";

import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FaqPreviewSection() {
  console.log("FaqPreviewSection rendue");

  // On prend seulement les 3 premieres questions pour l'apercu
  const previewItems = FAQ_ITEMS.slice(0, 3);

  return (
    <SectionWrapper id="faq-preview">
      {/* Titre de la section */}
      <SectionHeading
        title="Questions frequentes"
        subtitle="Les reponses aux questions les plus posees."
      />

      {/* Accordion avec les 3 premieres questions */}
      <Accordion
        type="single"
        collapsible
        className="max-w-3xl mx-auto"
      >
        {previewItems.map((item, index) => (
          <AccordionItem
            key={`faq-preview-${index}`}
            value={`faq-preview-${index}`}
            className="border-b"
          >
            {/* Question cliquable */}
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">{item.question}</span>
            </AccordionTrigger>

            {/* Reponse */}
            <AccordionContent className="text-muted-foreground">
              <p className="pt-2">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Lien vers la page FAQ complete */}
      <div className="text-center mt-8">
        <Button variant="outline" asChild>
          <Link href="/faq" className="group">
            Voir toutes les questions
            <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
