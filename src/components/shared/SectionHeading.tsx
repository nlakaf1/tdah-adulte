import { cn } from '@/lib/utils';

// Interface TypeScript pour définir les propriétés du composant
// - title: titre principal de la section (obligatoire)
// - subtitle: sous-titre optionnel pour plus de contexte
// - className: classes CSS optionnelles pour personnaliser le conteneur
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

// Composant réutilisable pour les titres de section
// Affiche un titre h2 avec un sous-titre optionnel, le tout centré et stylisé
export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  // Log dans la console pour tracker les rendus du composant
  // Utile pour le débogage et comprendre quand le composant se met à jour
  console.log('SectionHeading rendu avec titre:', title);

  return (
    // Conteneur principal avec marge bottom pour espacer du contenu suivant
    <div
      // cn() permet de fusionner les classes par défaut avec celles personnalisées
      // mb-12: marge bottom de 3rem (48px) pour espacer du contenu de la section
      className={cn('mb-12', className)}
    >
      {/* Titre principal de niveau h2 */}
      <h2
        // Classes pour le titre:
        // - text-3xl: taille de texte 1.875rem (30px) sur mobile
        // - md:text-4xl: taille de texte 2.25rem (36px) sur écrans moyens et plus
        // - font-bold: graisse de police en gras
        // - text-center: alignement du texte au centre
        // - text-foreground: couleur du texte principale du thème (variable CSS)
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
      >
        {/* Affichage du titre passé en prop */}
        {title}
      </h2>

      {/* Rendu conditionnel du sous-titre uniquement s'il est fourni */}
      {subtitle && (
        <p
          // Classes pour le sous-titre:
          // - mt-4: marge top de 1rem (16px) pour espacer du titre
          // - text-lg: taille de texte 1.125rem (18px)
          // - text-muted-foreground: couleur de texte secondaire/atténuée du thème
          // - text-center: alignement du texte au centre
          // - max-w-2xl: largeur maximale de 42rem (672px)
          // - mx-auto: centrage horizontal automatique
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
        >
          {/* Affichage du sous-titre */}
          {subtitle}
        </p>
      )}
    </div>
  );
}
