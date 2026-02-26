'use client';

import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeading from '@/components/shared/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_TITLE, FAQ_SUBTITLE, FAQ_ITEMS } from '@/lib/constants';

// Composant de section FAQ (Foire Aux Questions)
// Affiche une liste de questions/réponses dans un accordéon interactif
export default function FaqSection() {
  // Log dans la console pour tracker le rendu du composant
  console.log('FaqSection rendue');

  return (
    // Section wrapper sans fond alternatif (utilise le fond par défaut)
    <SectionWrapper id="faq">
      {/* En-tête de la section avec titre et sous-titre */}
      <SectionHeading title={FAQ_TITLE} subtitle={FAQ_SUBTITLE} />

      {/* Accordéon centré avec largeur maximale */}
      <Accordion
        type="single"
        collapsible
        className="max-w-3xl mx-auto"
      >
        {/* Boucle sur tous les items de FAQ pour générer les questions/réponses */}
        {FAQ_ITEMS.map((item, index) => (
          // Item d'accordéon avec clé unique basée sur l'index
          <AccordionItem
            key={`faq-${index}`}
            value={`faq-${index}`}
            className="border-b"
          >
            {/* Trigger (question cliquable) qui ouvre/ferme la réponse */}
            <AccordionTrigger className="text-left hover:no-underline">
              {/* Affiche la question */}
              <span className="font-semibold">{item.question}</span>
            </AccordionTrigger>

            {/* Contenu de l'accordéon (réponse) qui s'affiche quand on clique */}
            <AccordionContent className="text-muted-foreground">
              {/* Affiche la réponse avec un padding top pour espacer de la question */}
              <p className="pt-2">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
