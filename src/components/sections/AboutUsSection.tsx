import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeading from '@/components/shared/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { HeartIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { ABOUT_TITLE, ABOUT_SUBTITLE, ABOUT_CONTENT } from '@/lib/constants';

// Composant Section À Propos - présentation de notre mission, histoire et valeurs
// Server Component sans interactivité, affichage statique uniquement
export default function AboutUsSection() {
  // Log dans la console pour tracker le rendu de la section
  console.log('AboutUsSection rendu');

  return (
    // Conteneur de section avec id pour ancre de scroll et fond secondaire
    <SectionWrapper id="about" className="bg-secondary">
      {/* Titre et sous-titre de la section importés depuis les constantes */}
      <SectionHeading title={ABOUT_TITLE} subtitle={ABOUT_SUBTITLE} />

      {/* Grille responsive de 3 cartes sur desktop, 1 colonne sur mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Carte 1: Notre Mission */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            {/* Icône cœur centrée avec couleur primaire */}
            <HeartIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            {/* Titre de la carte centré */}
            <h3 className="font-semibold text-xl mb-3 text-center">Notre Mission</h3>
            {/* Texte descriptif de la mission, couleur atténuée et centré */}
            <p className="text-muted-foreground text-center">{ABOUT_CONTENT.mission}</p>
          </CardContent>
        </Card>

        {/* Carte 2: Notre Histoire */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            {/* Icône ampoule centrée avec couleur primaire */}
            <LightBulbIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            {/* Titre de la carte centré */}
            <h3 className="font-semibold text-xl mb-3 text-center">Notre Histoire</h3>
            {/* Texte descriptif de l'histoire, couleur atténuée et centré */}
            <p className="text-muted-foreground text-center">{ABOUT_CONTENT.story}</p>
          </CardContent>
        </Card>

        {/* Carte 3: Nos Valeurs */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            {/* Icône groupe d'utilisateurs centrée avec couleur primaire */}
            <UserGroupIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            {/* Titre de la carte centré */}
            <h3 className="font-semibold text-xl mb-3 text-center">Nos Valeurs</h3>
            {/* Texte descriptif des valeurs, couleur atténuée et centré */}
            <p className="text-muted-foreground text-center">{ABOUT_CONTENT.values}</p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
