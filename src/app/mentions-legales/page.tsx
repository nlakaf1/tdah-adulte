// ============================================
// Page Mentions Légales
// Informations légales obligatoires pour le site dopasysteme.com
// Conforme à la loi française sur la confiance dans l'économie numérique (LCEN)
// ============================================

import { Metadata } from "next";
import PageHeroBanner from "@/components/shared/PageHeroBanner";
import FooterSection from "@/components/sections/FooterSection";

// --- Métadonnées SEO de la page ---
// Next.js utilisera ces infos pour le <head> de la page
export const metadata: Metadata = {
  title: "Mentions Légales | DopaSystème",
  description:
    "Mentions légales du site dopasysteme.com — éditeur, hébergeur, propriété intellectuelle, responsabilité et droit applicable.",
  // Empêche Google d'indexer cette page (peu de valeur SEO pour une page légale)
  robots: { index: false, follow: false },
};

// --- Composant principal de la page ---
export default function MentionsLegalesPage() {
  console.log("Page MentionsLegales rendue");

  return (
    // Conteneur global de la page
    <main>
      {/* ---- Bannière de titre en haut de page ---- */}
      <PageHeroBanner
        title="Mentions Légales"
        subtitle="Informations légales relatives au site dopasysteme.com"
      />

      {/* ---- Corps de la page avec toutes les sections légales ---- */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        {/* ============================================
            SECTION 1 : Éditeur du site
            ============================================ */}
        <section className="mb-12">
          {/* Titre de section avec ligne de séparation bleue */}
          <h2 className="text-2xl font-bold text-foreground mb-1">
            1. Éditeur du site
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mb-6" />

          {/* Informations sur la personne physique éditrice du site */}
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">Nom :</span>{" "}
              Maxime Wells
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Qualité :
              </span>{" "}
              Auteur et éditeur indépendant
            </p>
            <p>
              <span className="font-semibold text-foreground">Site web :</span>{" "}
              <a
                href="https://dopasysteme.com"
                className="text-blue-600 hover:underline transition-colors"
              >
                dopasysteme.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Adresse e-mail :
              </span>{" "}
              <a
                href="mailto:contact@dopasysteme.com"
                className="text-blue-600 hover:underline transition-colors"
              >
                contact@dopasysteme.com
              </a>
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 2 : Hébergeur du site
            ============================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-1">
            2. Hébergeur du site
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mb-6" />

          {/* Informations sur Vercel, la plateforme d'hébergement */}
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">
                Société :
              </span>{" "}
              Vercel Inc.
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Siège social :
              </span>{" "}
              340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis
            </p>
            <p>
              <span className="font-semibold text-foreground">Site web :</span>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline transition-colors"
              >
                vercel.com
              </a>
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 3 : Propriété intellectuelle
            ============================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-1">
            3. Propriété intellectuelle
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mb-6" />

          {/* Explique les droits sur le contenu du site et du livre */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              L'ensemble des contenus présents sur ce site (textes, images,
              graphismes, logo, icônes, sons, logiciels, etc.) est la propriété
              exclusive de Maxime Wells, sauf mention contraire explicite.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication,
              adaptation ou exploitation de tout ou partie des éléments du site,
              quel que soit le moyen ou le procédé utilisé, est interdite sans
              l'autorisation écrite préalable de Maxime Wells.
            </p>
            <p>
              Le livre <em>TDAH Adulte</em>, vendu sur Amazon, est une œuvre
              protégée par le droit d'auteur. Toute reproduction non autorisée
              constitue une contrefaçon sanctionnée par le Code de la propriété
              intellectuelle.
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 4 : Limitation de responsabilité
            ============================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-1">
            4. Limitation de responsabilité
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mb-6" />

          {/* Précise les limites de responsabilité de l'éditeur */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Les informations contenues sur ce site sont fournies à titre
              informatif et général. Elles ne constituent en aucun cas un
              conseil médical, psychologique ou thérapeutique. En cas de doute
              sur un diagnostic ou un traitement lié au TDAH, consultez un
              professionnel de santé qualifié.
            </p>
            <p>
              Maxime Wells s'efforce de maintenir les informations publiées à
              jour et exactes, mais ne peut garantir l'exhaustivité,
              l'exactitude ou l'actualité des contenus. L'éditeur ne saurait
              être tenu responsable des erreurs, omissions ou résultats obtenus
              par l'utilisation de ces informations.
            </p>
            <p>
              Maxime Wells ne pourra être tenu responsable des dommages directs
              ou indirects causés au matériel de l'utilisateur lors de l'accès
              au site, résultant notamment de l'utilisation d'un matériel ne
              répondant pas aux spécifications requises.
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 5 : Liens hypertextes
            ============================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-1">
            5. Liens hypertextes
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mb-6" />

          {/* Politique concernant les liens internes et externes */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Le site dopasysteme.com peut contenir des liens hypertextes vers
              d'autres sites internet. Ces liens sont fournis à titre
              informatif. Maxime Wells n'exerce aucun contrôle sur ces sites
              tiers et décline toute responsabilité quant à leur contenu,
              produits, services ou politique de confidentialité.
            </p>
            <p>
              Tout lien hypertexte pointant vers le site dopasysteme.com doit
              faire l'objet d'une autorisation préalable de l'éditeur. Pour
              toute demande, contactez :{" "}
              <a
                href="mailto:contact@dopasysteme.com"
                className="text-blue-600 hover:underline transition-colors"
              >
                contact@dopasysteme.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 6 : Cookies
            ============================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-1">
            6. Cookies
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mb-6" />

          {/* Politique d'utilisation des cookies sur le site */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Le site dopasysteme.com utilise des cookies techniques
              nécessaires à son fonctionnement. Ces cookies ne collectent
              aucune donnée personnelle à des fins publicitaires ou de suivi.
            </p>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies.
              Cela n'affectera pas votre capacité à télécharger les ressources
              gratuites proposées sur le site.
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 7 : Droit applicable et juridiction
            ============================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-1">
            7. Droit applicable et juridiction compétente
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mb-6" />

          {/* Précise la loi applicable en cas de litige */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige relatif à l'interprétation ou à l'exécution des
              présentes, et à défaut de résolution amiable, les tribunaux
              français seront seuls compétents.
            </p>
            <p>
              Ce site est conforme à la législation française, notamment à la
              loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
              numérique (LCEN).
            </p>
          </div>
        </section>

        {/* ---- Date de dernière mise à jour ---- */}
        {/* Bonne pratique légale : indiquer quand les mentions ont été actualisées */}
        <p className="text-sm text-muted-foreground border-t pt-6 mt-4">
          Dernière mise à jour : mars 2026
        </p>
      </div>

      {/* ---- Pied de page commun à toutes les pages ---- */}
      <FooterSection />
    </main>
  );
}
