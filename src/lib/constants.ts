// ============================================
// Constantes et contenu textuel de la landing page
// Tout le texte FR est centralisé ici pour faciliter les modifications
// ============================================

import { FaqItem } from "@/types";

// --- Nom du site et URLs ---
export const SITE_NAME = "TDAH Adulte";
export const SITE_DESCRIPTION =
  "Recevez gratuitement votre tableur de calcul des dépenses fixes et votre kit de démarrage pratique pour mieux gérer votre quotidien avec le TDAH.";

// URL du site (utilisée pour les liens dans les emails)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// --- URLs de téléchargement des ressources ---
export const DOWNLOAD_URLS = {
  excel: `${SITE_URL}/downloads/worksheet-depenses.html`,
  starterKit: `${SITE_URL}/downloads/kit-demarrage-tdah.pdf`,
};

// --- Section Hero ---
export const HERO_HEADLINE = "Vos outils pratiques TDAH, offerts.";
export const HERO_SUBHEADLINE =
  "Vous avez lu le livre, passez à l'action. Recevez gratuitement un tableur Excel pour calculer vos dépenses fixes et un kit de démarrage pratique pour organiser votre quotidien.";
export const HERO_CTA_TEXT = "Recevoir mes ressources gratuites";

// --- Section Email Capture ---
export const EMAIL_SECTION_TITLE = "Recevez vos ressources gratuites";
export const EMAIL_SECTION_SUBTITLE =
  "Entrez votre adresse email ci-dessous. Vous recevrez immédiatement un email contenant vos deux ressources à télécharger.";
export const EMAIL_PLACEHOLDER = "votre@email.com";
export const EMAIL_BUTTON_TEXT = "Recevoir mes ressources";
export const EMAIL_SUCCESS_MESSAGE =
  "Vos ressources ont été envoyées ! Vérifiez votre boîte email (et vos spams).";
export const EMAIL_ERROR_MESSAGE =
  "Une erreur est survenue. Veuillez réessayer.";

// --- Descriptions des ressources ---
export const RESOURCES = [
  {
    title: "Tableur Excel - Dépenses Fixes",
    description:
      "Un tableur prêt à l'emploi pour calculer et suivre toutes vos dépenses fixes mensuelles. Visualisez clairement où va votre argent et identifiez les économies possibles.",
    icon: "table" as const,
  },
  {
    title: "Kit de Démarrage Pratique",
    description:
      "Un guide pas-à-pas avec des exercices concrets, des check-lists et des modèles pour mettre en place des routines adaptées au TDAH dès aujourd'hui.",
    icon: "rocket" as const,
  },
];

// --- Section FAQ ---
export const FAQ_TITLE = "Questions fréquentes";
export const FAQ_SUBTITLE =
  "Tout ce que vous devez savoir sur les ressources gratuites.";

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Comment vais-je recevoir les ressources ?",
    answer:
      "Dès que vous entrez votre adresse email, vous recevez un email automatique contenant les liens de téléchargement pour le tableur Excel et le kit de démarrage. Pensez à vérifier votre dossier spam si vous ne le voyez pas dans votre boîte de réception.",
  },
  {
    question: "C'est vraiment gratuit ?",
    answer:
      "Oui, 100 % gratuit, sans engagement et sans carte bancaire. Ces ressources sont un complément offert aux lecteurs du e-book pour vous aider à passer à l'action concrètement.",
  },
  {
    question: "À quoi sert le tableur Excel ?",
    answer:
      "Le tableur vous permet de lister toutes vos dépenses fixes (loyer, abonnements, assurances...) et de calculer automatiquement le total mensuel. C'est un outil simple et visuel pour reprendre le contrôle de vos finances.",
  },
  {
    question: "Que contient le kit de démarrage ?",
    answer:
      "Le kit contient des fiches pratiques, des check-lists quotidiennes et des modèles de routines adaptés aux personnes avec un TDAH. Il est conçu pour être utilisé immédiatement, sans préparation.",
  },
  {
    question: "Comment mon adresse email est-elle utilisée ?",
    answer:
      "Votre email est uniquement utilisé pour vous envoyer les ressources. Nous ne partageons jamais vos données avec des tiers et vous ne recevrez aucun spam.",
  },
  {
    question: "Les ressources sont-elles compatibles avec tous les appareils ?",
    answer:
      "Le tableur Excel fonctionne avec Microsoft Excel, Google Sheets et LibreOffice. Le kit de démarrage est au format PDF, lisible sur tous les appareils (ordinateur, tablette, smartphone).",
  },
];

// --- Section À Propos ---
export const ABOUT_TITLE = "À propos";
export const ABOUT_SUBTITLE = "Pourquoi nous avons créé ces ressources.";
export const ABOUT_CONTENT = {
  mission:
    "Notre mission est de rendre la gestion du quotidien plus simple et plus accessible pour les adultes vivant avec un TDAH.",
  story:
    "En tant que personnes concernées par le TDAH, nous savons à quel point il peut être difficile de s'organiser, de gérer ses finances et de mettre en place des routines stables. C'est pourquoi nous avons créé ce e-book et ces outils complémentaires : pour offrir des solutions concrètes, simples et immédiatement utilisables.",
  values:
    "Nous croyons que chaque personne mérite des outils adaptés à son fonctionnement. Pas de théorie abstraite, uniquement de la pratique.",
};

// --- Section Contact ---
export const CONTACT_TITLE = "Contactez-nous";
export const CONTACT_SUBTITLE =
  "Une question ou un retour ? N'hésitez pas à nous écrire.";
export const CONTACT_SUCCESS_MESSAGE =
  "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.";
export const CONTACT_ERROR_MESSAGE =
  "Impossible d'envoyer votre message. Veuillez réessayer.";

// --- Navigation du header ---
export const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
export const NAV_CTA_TEXT = "Recevoir mes ressources";

// --- Footer ---
export const FOOTER_TEXT = `© ${new Date().getFullYear()} ${SITE_NAME}. Tous droits réservés.`;
export const FOOTER_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "Mentions légales", href: "#" },
];
