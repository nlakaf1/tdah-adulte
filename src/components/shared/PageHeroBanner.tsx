// ============================================
// Composant PageHeroBanner
// Banniere de titre reutilisable pour les sous-pages (FAQ, Contact)
// Affiche un titre centre avec sous-titre optionnel sur fond colore
// ============================================

// --- Props du composant ---
// title : titre principal de la page (h1)
// subtitle : texte descriptif optionnel sous le titre
interface PageHeroBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageHeroBanner({ title, subtitle }: PageHeroBannerProps) {
  console.log("PageHeroBanner rendu avec titre:", title);

  return (
    // Section avec fond secondaire et padding genereux
    // pt-24 pour compenser le header sticky (h-16 = 64px + marge)
    <section className="bg-secondary pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Conteneur centre avec largeur max identique au SectionWrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Titre principal de la sous-page */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          {title}
        </h1>

        {/* Sous-titre optionnel */}
        {subtitle && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
