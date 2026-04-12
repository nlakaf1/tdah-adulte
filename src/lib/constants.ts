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

// --- Section Hero (Option A — bénéfice émotionnel) ---
export const HERO_EYEBROW = "COMPLÉMENT OFFERT DU LIVRE";
export const HERO_HEADLINE =
  "Reprenez le contrôle de vos finances — sans volonté, sans discipline, sans culpabilité.";
export const HERO_SUBHEADLINE =
  "Les outils gratuits qui complètent la Méthode DOPA4, conçus pour le cerveau TDAH adulte.";
export const HERO_CTA_TEXT = "Recevoir mes outils gratuits";
// Micro-réassurance affichée sous le bouton CTA
export const HERO_REASSURANCE = [
  "Réception immédiate par email",
  "100% gratuit",
  "Aucun spam",
];

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

// --- Descriptions des ressources (optimisées : bénéfice clair + temps d'utilisation) ---
export const RESOURCES = [
  {
    title: "Tableur DOPA4 — Vos dépenses fixes en 10 minutes",
    description:
      "Le tableur que vous remplissez une seule fois. Il calcule automatiquement vos dépenses fixes, votre marge réelle, et vous donne les pourcentages exacts à appliquer pour la Méthode DOPA4. Compatible Excel et Google Sheets.",
    icon: "table" as const,
  },
  {
    title: "Kit de Démarrage Pratique",
    description:
      "Un guide PDF de 17 pages avec cases à cocher interactives. Auto-évaluation, checklist de configuration, template « Moment Argent » mensuel et protocole d'urgence anti-impulsivité. Conçu pour être utilisé en 30 minutes, pas plus.",
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
      "Immédiatement après votre inscription, vous recevrez un email contenant les liens de téléchargement directs pour le Tableur Excel et le Kit de Démarrage PDF. Aucune attente. Si vous ne le voyez pas dans votre boîte de réception, vérifiez vos spams ou la catégorie « Promotions ».",
  },
  {
    question: "C'est vraiment gratuit ?",
    answer:
      "Oui, 100% gratuit. Ces ressources sont le complément offert du livre « Gérer son argent sans volonté ni discipline » et de la Méthode DOPA4. Aucune carte bancaire demandée, jamais.",
  },
  {
    question: "À quoi sert le tableur Excel ?",
    answer:
      "Il calcule automatiquement vos dépenses fixes mensuelles et vous donne la répartition exacte à appliquer entre vos comptes selon la Méthode DOPA4. C'est le point de départ pour configurer votre système financier en pilote automatique.",
  },
  {
    question: "Mes données sont-elles en sécurité ?",
    answer:
      "Oui. Votre adresse email est uniquement utilisée pour vous envoyer les ressources et les emails de suivi liés à la Méthode DOPA4. Nous ne vendons, ne louons et ne partageons jamais vos données. Vous pouvez vous désinscrire en un clic à tout moment.",
  },
  {
    question: "Faut-il avoir un diagnostic TDAH pour utiliser ces outils ?",
    answer:
      "Non. Ces outils sont conçus pour les adultes qui se reconnaissent dans le fonctionnement TDAH (diagnostiqués ou non). Ils fonctionnent particulièrement bien si vous avez déjà essayé plusieurs méthodes classiques sans succès.",
  },
  {
    question: "Y a-t-il un livre complet ?",
    answer:
      "Oui. Ces ressources sont le complément offert d'un livre qui détaille la Méthode DOPA4 complète : Distribuer, Oublier, Protéger, Alimenter. Le livre est disponible sur Amazon (lien dans l'email de bienvenue).",
  },
];

// --- Section À Propos (version "vous" — centrée sur le visiteur) ---
export const ABOUT_TITLE = "Pourquoi ces outils existent";
export const ABOUT_SUBTITLE = "";
// Paragraphes narratifs qui parlent directement au visiteur
export const ABOUT_PARAGRAPHS = [
  "Si vous êtes ici, vous avez probablement déjà essayé. Les apps de budget. Les tableurs Excel téléchargés un dimanche soir. Les bonnes résolutions du 1er janvier.",
  "Et rien n'a tenu plus de 3 semaines.",
  "Ce n'est pas votre faute. Ces outils sont conçus pour des cerveaux neurotypiques — pas pour le vôtre.",
  "La Méthode DOPA4 part du principe inverse : votre cerveau TDAH ne manque pas de volonté, il manque de systèmes qui fonctionnent SANS volonté.",
  "Les ressources que vous allez télécharger sont les premiers blocs de ce système. Configurez-les ce weekend. Oubliez-les ensuite.",
];
// Signature de l'auteur affichée en bas de la section
export const ABOUT_SIGNATURE = "— Maxime Wells, auteur de la Méthode DOPA4";

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
// Copyright au nom de l'auteur (distinct de SITE_NAME utilisé dans le header)
export const FOOTER_TEXT = `© ${new Date().getFullYear()} Maxime Wells. Tous droits réservés.`;
export const FOOTER_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
];
