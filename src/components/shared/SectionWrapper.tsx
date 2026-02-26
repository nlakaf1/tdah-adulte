import { cn } from '@/lib/utils';

// Interface TypeScript pour définir les propriétés acceptées par le composant
// - id: identifiant optionnel pour les ancres de scroll
// - className: classes CSS optionnelles pour personnaliser le style
// - children: contenu enfant à rendre à l'intérieur de la section
interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Composant conteneur de section réutilisable
// Ce composant encapsule le contenu d'une section avec un padding et une largeur max cohérents
export default function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  // Log dans la console chaque fois que le composant est rendu
  // Cela aide au débogage pour voir quand le composant se met à jour
  console.log('SectionWrapper rendu avec id:', id);

  return (
    // Élément HTML section avec un id optionnel pour permettre le scroll vers cette section
    <section
      id={id}
      // cn() fusionne intelligemment les classes CSS
      // Classes par défaut:
      // - py-16: padding vertical de 4rem (64px) sur mobile
      // - md:py-24: padding vertical de 6rem (96px) sur écrans moyens et plus
      // className optionnel ajouté à la fin pour permettre des surcharges
      className={cn('py-16 md:py-24', className)}
    >
      {/* Conteneur interne avec largeur maximale et centrage */}
      <div
        // Classes pour le conteneur:
        // - max-w-6xl: largeur maximale de 72rem (1152px)
        // - mx-auto: centrage horizontal automatique
        // - px-4: padding horizontal de 1rem (16px) sur mobile
        // - sm:px-6: padding horizontal de 1.5rem (24px) sur petits écrans
        // - lg:px-8: padding horizontal de 2rem (32px) sur grands écrans
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Rendu de tout le contenu enfant passé au composant */}
        {children}
      </div>
    </section>
  );
}
