"use client";

// Importation des dépendances nécessaires pour le composant Hero
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  SparklesIcon,
  TableCellsIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import {
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_CTA_TEXT,
  RESOURCES,
} from "@/lib/constants";

// Composant Hero - Section principale visible en premier sur la landing page
// Cette section occupe toute la hauteur de l'écran et présente l'offre principale
export default function HeroSection() {
  // Log dans la console à chaque rendu du composant pour faciliter le débogage
  console.log("HeroSection rendue");

  // Fonction pour faire défiler la page vers la section de capture d'email
  // Utilise scrollIntoView avec un comportement "smooth" pour une animation fluide
  const handleScrollToCTA = () => {
    console.log("Défilement vers la section email-capture");
    const emailSection = document.getElementById("email-capture");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Section principale avec hauteur minimale plein écran et fond dégradé bleu pâle
    <SectionWrapper
      className="min-h-screen flex items-center bg-gradient-to-b from-blue-pale to-background pt-16"
    >
      {/* Conteneur grid pour layout responsive: 1 colonne sur mobile, 2 colonnes sur desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* ============================================
            COLONNE GAUCHE - CONTENU TEXTUEL ET CTA
            ============================================ */}
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Badge décoratif en haut pour attirer l'attention */}
          <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-medium">
            {/* Icône étoile scintillante pour symboliser le cadeau */}
            <SparklesIcon className="size-5" />
            Complément offert du e-book
          </div>

          {/* Titre principal H1 - Message principal de la page */}
          {/* Responsive: taille augmente progressivement selon la taille d'écran */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
            {HERO_HEADLINE}
          </h1>

          {/* Sous-titre / description - Explique la proposition de valeur */}
          <p className="text-lg md:text-xl text-muted-foreground mt-6">
            {HERO_SUBHEADLINE}
          </p>

          {/* Cartes de présentation des ressources offertes */}
          {/* Map sur le tableau RESOURCES pour générer dynamiquement les cartes */}
          <div className="space-y-4 mt-8">
            {RESOURCES.map((resource, index) => {
              console.log(`Rendu de la ressource ${index + 1}: ${resource.title}`);

              // Sélection de l'icône appropriée selon le type de ressource
              const Icon =
                resource.icon === "table" ? TableCellsIcon : RocketLaunchIcon;

              return (
                // Carte individuelle pour chaque ressource
                // bg-white/80 = fond blanc avec 80% d'opacité pour effet de transparence
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Conteneur flex pour aligner l'icône et le texte horizontalement */}
                  <div className="flex items-start gap-4">
                    {/* Icône de la ressource dans un cercle coloré */}
                    <div className="bg-accent text-primary p-3 rounded-lg shrink-0">
                      <Icon className="size-6" />
                    </div>

                    {/* Texte de la ressource */}
                    <div>
                      {/* Titre de la ressource en gras */}
                      <h3 className="font-semibold text-lg text-foreground">
                        {resource.title}
                      </h3>
                      {/* Description détaillée de la ressource */}
                      <p className="text-sm text-muted-foreground mt-1">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bouton Call-to-Action principal */}
          {/* Taille "lg" pour le rendre bien visible et cliquable */}
          <Button
            size="lg"
            onClick={handleScrollToCTA}
            className="mt-8 w-full sm:w-auto group"
          >
            {/* Texte du bouton importé des constantes */}
            {HERO_CTA_TEXT}
            {/* Icône flèche vers le bas qui rebondit au survol grâce au group-hover */}
            <ArrowDownIcon className="size-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* ============================================
            COLONNE DROITE - ÉLÉMENT VISUEL DÉCORATIF
            ============================================ */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Premier cercle décoratif avec dégradé bleu et effet de flou */}
          {/* absolute pour superposer plusieurs cercles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-medium to-blue-deep rounded-full blur-3xl opacity-20 animate-pulse"></div>

          {/* Deuxieme cercle decoratif plus petit pour creer de la profondeur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-light to-blue-medium rounded-full blur-2xl opacity-30"></div>

          {/* Troisieme cercle decoratif encore plus petit au centre */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-accent-cta to-blue-medium rounded-full blur-xl opacity-40"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
