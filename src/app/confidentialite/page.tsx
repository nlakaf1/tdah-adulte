// ============================================
// Page Politique de Confidentialité
// Informations légales sur la collecte et le traitement des données
// personnelles des utilisateurs de dopasysteme.com
// ============================================

import { Metadata } from "next";
import PageHeroBanner from "@/components/shared/PageHeroBanner";
import FooterSection from "@/components/sections/FooterSection";

// --- Métadonnées SEO pour la page ---
// Next.js utilise cet objet pour générer les balises <title> et <meta> dans le <head>
export const metadata: Metadata = {
  title: "Politique de Confidentialité | DOPA Système",
  description:
    "Découvrez comment DOPA Système collecte, utilise et protège vos données personnelles conformément au RGPD.",
  robots: {
    // On peut indexer cette page mais ne pas la suivre pour les liens
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Politique de Confidentialité | DOPA Système",
    description:
      "Informations sur le traitement de vos données personnelles par DOPA Système.",
    url: "https://dopasysteme.com/confidentialite",
    siteName: "DOPA Système",
    locale: "fr_FR",
    type: "website",
  },
};

// ============================================
// Composant principal de la page Confidentialité
// Rendu côté serveur (Server Component par défaut dans Next.js App Router)
// ============================================
export default function ConfidentialitePage() {
  // Log de rendu pour faciliter le débogage
  console.log("ConfidentialitePage rendu");

  // Date de dernière mise à jour de la politique
  const dateMAJ = "8 mars 2026";

  return (
    // Conteneur global de la page avec fond blanc
    <div className="min-h-screen bg-background flex flex-col">

      {/* ===== BANNIÈRE DE TITRE ===== */}
      {/* Composant réutilisable qui affiche le titre de la sous-page */}
      <PageHeroBanner
        title="Politique de Confidentialité"
        subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles"
      />

      {/* ===== CONTENU PRINCIPAL ===== */}
      {/* Section principale avec tout le texte légal */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">

        {/* --- Date de mise à jour --- */}
        <p className="text-sm text-foreground mb-10">
          Dernière mise à jour : {dateMAJ}
        </p>

        {/* ===== INTRODUCTION ===== */}
        {/* Présentation générale de la politique */}
        <section className="mb-10">
          <p className="text-base text-foreground leading-relaxed">
            La présente politique de confidentialité décrit la manière dont
            DOPA Système (accessible via dopasysteme.com)
            collecte, utilise et protège vos données personnelles lorsque vous
            utilisez notre site web. Nous respectons votre vie privée et nous
            engageons à traiter vos données conformément au
            Règlement Général sur la Protection des Données (RGPD)
            et à la législation française en vigueur.
          </p>
        </section>

        {/* ===== SECTION 1 : DONNÉES COLLECTÉES ===== */}
        <Section titre="1. Données personnelles collectées">
          <p className="mb-4">
            Nous collectons uniquement les données strictement nécessaires au
            fonctionnement du service proposé. Voici les données que nous
            pouvons recueillir :
          </p>

          {/* Liste des catégories de données collectées */}
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>
              Adresse e-mail — collectée via le formulaire
              d'inscription pour recevoir les ressources gratuites (kit de
              démarrage TDAH et calculateur de dépenses fixes).
            </li>
            <li>
              Message — contenu que vous saisissez dans le
              formulaire de contact.
            </li>
          </ul>

          {/* Précision sur ce qui n'est PAS collecté */}
          <div className="mt-6 p-4 bg-secondary rounded-lg border border-border">
            <p className="text-sm text-foreground">
              Ce que nous ne collectons pas : Nous
              n'utilisons pas de cookies de suivi, de pixels de tracking, ni
              d'outils d'analyse comportementale (Google Analytics, Facebook
              Pixel, etc.). Aucune donnée de navigation n'est enregistrée.
            </p>
          </div>
        </Section>

        {/* ===== SECTION 2 : FINALITÉ DU TRAITEMENT ===== */}
        <Section titre="2. Finalité du traitement">
          <p className="mb-4">
            Vos données personnelles sont utilisées exclusivement pour les
            finalités suivantes :
          </p>

          {/* Tableau des finalités pour une lecture claire */}
          <div className="space-y-4">
            {/* Finalité 1 : Envoi des ressources */}
            <div className="p-4 rounded-lg border border-border">
              <h3 className="text-foreground mb-1">
                Envoi des ressources gratuites
              </h3>
              <p className="text-sm text-foreground">
                Lorsque vous renseignez votre adresse e-mail dans le
                formulaire, nous vous envoyons par e-mail les deux ressources
                gratuites promises : le guide PDF de démarrage TDAH et le
                calculateur de dépenses fixes au format Excel.
              </p>
            </div>

            {/* Finalité 2 : Séquences e-mail */}
            <div className="p-4 rounded-lg border border-border">
              <h3 className="text-foreground mb-1">
                Séquences d'e-mails éducatifs
              </h3>
              <p className="text-sm text-foreground">
                Avec votre consentement, votre adresse e-mail peut être
                utilisée pour vous envoyer une série d'e-mails informatifs et
                éducatifs sur le TDAH adulte, ainsi que des informations sur
                nos produits et services.
              </p>
            </div>

            {/* Finalité 3 : Traitement du contact */}
            <div className="p-4 rounded-lg border border-border">
              <h3 className="text-foreground mb-1">
                Traitement des demandes de contact
              </h3>
              <p className="text-sm text-foreground">
                Les informations soumises via le formulaire de contact sont
                utilisées uniquement pour répondre à votre demande.
              </p>
            </div>
          </div>
        </Section>

        {/* ===== SECTION 3 : BASE LÉGALE ===== */}
        <Section titre="3. Base légale du traitement">
          <p className="mb-4">
            Conformément à l'article 6 du RGPD, le traitement de vos données
            personnelles repose sur la base légale suivante :
          </p>

          {/* Mise en avant de la base légale principale */}
          <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="text-foreground mb-2">
              ✅ Consentement (Article 6.1.a du RGPD)
            </h3>
            <p className="text-sm text-foreground">
              En renseignant votre adresse e-mail dans notre formulaire et en
              cliquant sur le bouton de soumission, vous consentez librement et
              explicitement à la collecte et au traitement de votre adresse
              e-mail aux fins décrites ci-dessus. Vous pouvez retirer votre
              consentement à tout moment (voir section « Vos droits »
              ci-dessous).
            </p>
          </div>
        </Section>

        {/* ===== SECTION 4 : DURÉE DE CONSERVATION ===== */}
        <Section titre="4. Durée de conservation des données">
          <p className="mb-4">
            Nous conservons vos données personnelles pour la durée strictement
            nécessaire aux finalités pour lesquelles elles ont été collectées :
          </p>

          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              Adresse e-mail (liste de diffusion) : conservée
              jusqu'à votre désabonnement ou votre demande de suppression.
              Chaque e-mail commercial contient un lien de désabonnement
              fonctionnel.
            </li>
            <li>
              Données du formulaire de contact : conservées
              pendant la durée nécessaire au traitement de votre demande, puis
              supprimées dans un délai raisonnable (maximum 12 mois).
            </li>
          </ul>

          <p className="mt-4 text-sm text-foreground">
            Au terme de ces durées, vos données sont supprimées de manière
            sécurisée ou anonymisées.
          </p>
        </Section>

        {/* ===== SECTION 5 : VOS DROITS ===== */}
        <Section titre="5. Vos droits sur vos données">
          <p className="mb-5">
            Conformément au RGPD, vous disposez des droits suivants concernant
            vos données personnelles. Pour exercer l'un de ces droits,
            contactez-nous à{" "}
            <a
              href="mailto:contact@dopasysteme.com"
              className="text-primary hover:underline font-medium"
            >
              contact@dopasysteme.com
            </a>
            .
          </p>

          {/* Grille des droits RGPD — responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Droit d'accès */}
            <DroitCard
              titre="Droit d'accès"
              description="Vous pouvez demander à obtenir une copie de toutes les données personnelles que nous détenons sur vous."
            />

            {/* Droit de rectification */}
            <DroitCard
              titre="Droit de rectification"
              description="Vous pouvez demander la correction de vos données si elles sont inexactes ou incomplètes."
            />

            {/* Droit à l'effacement */}
            <DroitCard
              titre="Droit à l'effacement"
              description={"Vous pouvez demander la suppression de vos données personnelles (\"droit à l'oubli\")."}
            />

            {/* Droit d'opposition */}
            <DroitCard
              titre="Droit d'opposition"
              description="Vous pouvez vous opposer à tout moment au traitement de vos données, notamment à des fins de prospection commerciale."
            />

            {/* Droit à la portabilité */}
            <DroitCard
              titre="Droit à la portabilité"
              description="Vous pouvez demander à recevoir vos données dans un format structuré et lisible par machine."
            />

            {/* Droit au retrait du consentement */}
            <DroitCard
              titre="Retrait du consentement"
              description="Vous pouvez retirer votre consentement à tout moment, sans que cela n'affecte la licéité des traitements effectués avant ce retrait."
            />
          </div>

          {/* Mention CNIL */}
          <p className="mt-6 text-sm text-foreground p-4 bg-secondary rounded-lg border border-border">
            Si vous estimez que vos droits ne sont pas respectés, vous avez
            également le droit d'introduire une réclamation auprès de la{" "}
            CNIL (Commission Nationale de l'Informatique et
            des Libertés) via{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.cnil.fr
            </a>
            .
          </p>
        </Section>

        {/* ===== SECTION 6 : SOUS-TRAITANTS ===== */}
        <Section titre="6. Sous-traitants et transferts de données">
          <p className="mb-5">
            Pour fournir notre service, nous faisons appel à des prestataires
            tiers (sous-traitants) qui traitent vos données en notre nom. Ces
            prestataires sont soumis à des obligations strictes de
            confidentialité et de sécurité :
          </p>

          {/* Liste des sous-traitants */}
          <div className="space-y-5">

            {/* Resend */}
            <SousTraitantCard
              nom="Resend"
              lien="https://resend.com"
              usage="Envoi d'e-mails transactionnels (ressources gratuites) et gestion des listes de contacts (Audiences)."
              localisation="États-Unis (infrastructure AWS). Encadrement via les Clauses Contractuelles Types de la Commission Européenne."
              politique="https://resend.com/legal/privacy-policy"
            />

            {/* Loops.so */}
            <SousTraitantCard
              nom="Loops.so"
              lien="https://loops.so"
              usage="Gestion des séquences d'e-mails automatisées (onboarding, suivi éducatif TDAH)."
              localisation="États-Unis. Encadrement via les Clauses Contractuelles Types de la Commission Européenne."
              politique="https://loops.so/privacy"
            />

            {/* Vercel */}
            <SousTraitantCard
              nom="Vercel"
              lien="https://vercel.com"
              usage="Hébergement du site web et traitement des requêtes serveur (API Routes Next.js)."
              localisation="États-Unis / Europe selon la région de déploiement. Encadrement via les Clauses Contractuelles Types."
              politique="https://vercel.com/legal/privacy-policy"
            />
          </div>

          {/* Précision sur l'absence de cookies / analytics */}
          <p className="mt-6 text-sm text-foreground">
            Aucun autre tiers (réseaux sociaux, régies publicitaires, outils
            d'analyse) n'a accès à vos données personnelles.
          </p>
        </Section>

        {/* ===== SECTION 7 : SÉCURITÉ ===== */}
        <Section titre="7. Sécurité des données">
          <p className="text-foreground leading-relaxed">
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données contre tout accès non
            autorisé, divulgation, altération ou destruction. Ces mesures
            comprennent notamment : le chiffrement des communications (HTTPS),
            la gestion sécurisée des clés d'API, et l'accès restreint aux
            données au personnel autorisé uniquement.
          </p>
        </Section>

        {/* ===== SECTION 8 : CONTACT DPO ===== */}
        <Section titre="8. Contact — Délégué à la Protection des Données">
          <p className="mb-4 text-foreground leading-relaxed">
            Pour toute question relative à la présente politique de
            confidentialité ou pour exercer vos droits, vous pouvez contacter
            le responsable du traitement des données :
          </p>

          {/* Coordonnées du DPO / responsable */}
          <div className="p-5 bg-secondary rounded-lg border border-border space-y-2">
            <p>
              <span className="text-foreground">Responsable :</span>{" "}
              <span className="text-foreground">Maxime Wells</span>
            </p>
            <p>
              <span className="text-foreground">Site :</span>{" "}
              <span className="text-foreground truncate">dopasysteme.com</span>
            </p>
            <p>
              <span className="text-foreground">E-mail :</span>{" "}
              <a
                href="mailto:contact@dopasysteme.com"
                className="text-primary hover:underline"
              >
                contact@dopasysteme.com
              </a>
            </p>
          </div>

          <p className="mt-4 text-sm text-foreground">
            Nous nous engageons à répondre à votre demande dans un délai
            maximum de 30 jours à compter de sa réception,
            conformément à l'article 12 du RGPD.
          </p>
        </Section>

        {/* ===== SECTION 9 : MODIFICATIONS ===== */}
        <Section titre="9. Modifications de la politique">
          <p className="text-foreground leading-relaxed">
            Nous nous réservons le droit de modifier la présente politique de
            confidentialité à tout moment. En cas de modification substantielle,
            nous vous en informerons par e-mail (si vous êtes abonné à notre
            liste) ou via une notice sur notre site. La date de dernière mise à
            jour figurant en haut de cette page indique la version actuelle.
          </p>
        </Section>

      </main>

      {/* ===== PIED DE PAGE ===== */}
      {/* Composant Footer réutilisable avec liens légaux et copyright */}
      <FooterSection />
    </div>
  );
}

// ============================================
// Composant interne : Section
// Encapsule chaque section de la politique avec un titre et du contenu
// Props :
//   - titre : string — titre de la section (affiché en h2)
//   - children : ReactNode — contenu de la section
// ============================================
function Section({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  console.log("Section rendu:", titre);

  return (
    // Section avec séparateur en bas et espacement généreux
    <section className="mb-10 pb-10 border-b border-border last:border-b-0 last:mb-0">
      {/* Titre de section avec accent coloré à gauche */}
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5 pl-4 border-l-4 border-primary">
        {titre}
      </h2>
      {/* Contenu de la section — texte légal */}
      <div className="text-foreground leading-relaxed">{children}</div>
    </section>
  );
}

// ============================================
// Composant interne : DroitCard
// Carte affichant un droit RGPD avec son titre et sa description
// Props :
//   - titre : string — nom du droit (ex : "Droit d'accès")
//   - description : string — explication courte du droit
// ============================================
function DroitCard({
  titre,
  description,
}: {
  titre: string;
  description: string;
}) {
  return (
    // Carte avec bordure, fond subtil et coins arrondis
    <div className="p-4 rounded-lg border border-border bg-secondary/50 transition-colors hover:bg-secondary">
      <h3 className="text-foreground mb-1 text-sm">{titre}</h3>
      <p className="text-sm text-foreground">{description}</p>
    </div>
  );
}

// ============================================
// Composant interne : SousTraitantCard
// Fiche descriptive d'un sous-traitant (Resend, Loops, Vercel)
// Props :
//   - nom : string — nom du sous-traitant
//   - lien : string — URL du site du sous-traitant
//   - usage : string — à quoi il sert dans notre contexte
//   - localisation : string — où les données sont hébergées
//   - politique : string — URL de la politique de confidentialité du sous-traitant
// ============================================
function SousTraitantCard({
  nom,
  lien,
  usage,
  localisation,
  politique,
}: {
  nom: string;
  lien: string;
  usage: string;
  localisation: string;
  politique: string;
}) {
  console.log("SousTraitantCard rendu:", nom);

  return (
    // Carte sous-traitant avec bordure et fond clair
    <div className="p-5 rounded-lg border border-border bg-secondary/30">
      {/* Nom du sous-traitant avec lien vers son site */}
      <a
        href={lien}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline text-base"
      >
        {nom}
      </a>

      {/* Détails du sous-traitant */}
      <div className="mt-3 space-y-2 text-sm text-foreground">
        <p>
          <span className="text-foreground">Usage :</span>{" "}
          {usage}
        </p>
        <p>
          <span className="text-foreground">
            Localisation des données :
          </span>{" "}
          {localisation}
        </p>
        <p>
          <span className="text-foreground">
            Politique de confidentialité :
          </span>{" "}
          <a
            href={politique}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline truncate"
          >
            {politique}
          </a>
        </p>
      </div>
    </div>
  );
}
