// ============================================
// Template d'email React pour l'envoi des ressources DOPA4
// Utilise @react-email/components pour un rendu HTML compatible email
// Cet email est envoyé automatiquement quand un utilisateur soumet son email
// ============================================

import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Preview,
  Link,
} from "@react-email/components";

// --- Props du composant email ---
// downloadExcelUrl : lien vers le Calculateur (worksheet HTML)
// downloadKitUrl : lien vers le Kit de Démarrage (PDF interactif)
interface ResourceEmailProps {
  downloadExcelUrl: string;
  downloadKitUrl: string;
}

// --- Composant principal du template email ---
export default function ResourceEmail({
  downloadExcelUrl,
  downloadKitUrl,
}: ResourceEmailProps) {
  console.log("Template ResourceEmail généré");

  return (
    // Html : balise racine du document email
    <Html lang="fr">
      {/* Head : métadonnées de l'email (charset, viewport, etc.) */}
      <Head />

      {/* Preview : texte affiché dans l'aperçu de l'email (avant ouverture) */}
      <Preview>
        Ton Kit de Démarrage DOPA4 est prêt à télécharger
      </Preview>

      {/* Body : corps de l'email avec styles inline (obligation des emails) */}
      <Body style={bodyStyle}>
        {/* Container : conteneur centré avec largeur max */}
        <Container style={containerStyle}>
          {/* --- En-tête de l'email --- */}
          <Section style={headerStyle}>
            <Text style={headerTitleStyle}>DOPA4</Text>
            <Text style={headerSubtitleStyle}>Communauté TDAH Adulte</Text>
          </Section>

          {/* --- Contenu principal --- */}
          <Section style={contentStyle}>
            {/* Message de bienvenue - ton direct et chaleureux */}
            <Text style={greetingStyle}>Salut,</Text>

            <Text style={paragraphStyle}>
              Bienvenue dans la communauté DOPA4.
            </Text>

            <Text style={paragraphStyle}>
              Ton Kit de Démarrage est prêt — clique sur le bouton ci-dessous
              pour le télécharger.
            </Text>

            {/* --- Bouton principal de téléchargement : Kit DOPA4 --- */}
            <Section style={ctaBlockStyle}>
              <Button style={ctaButtonStyle} href={downloadKitUrl}>
                TÉLÉCHARGER MON KIT DOPA4
              </Button>
            </Section>

            {/* --- Ce que contient le kit --- */}
            <Text style={sectionTitleStyle}>
              Ce que tu trouveras à l&apos;intérieur :
            </Text>

            {/* Liste des ressources incluses dans le kit */}
            <Text style={listItemStyle}>
              → <strong>Le Calculateur de Répartition Automatique</strong> (les
              pourcentages exacts pour tes comptes — tu remplis les cases bleues,
              il fait les maths)
            </Text>
            <Text style={listItemStyle}>
              → <strong>La Checklist de Démarrage Rapide</strong> (les 5
              premières actions dans l&apos;ordre)
            </Text>
            <Text style={listItemStyle}>
              → <strong>Le Template &quot;Moment Argent&quot;</strong> (ta fiche
              imprimable pour la session hebdomadaire de 15 minutes)
            </Text>
            <Text style={listItemStyle}>
              → <strong>Le Protocole d&apos;Urgence anti-impulsivité</strong>
            </Text>

            {/* --- Bouton secondaire : Calculateur séparé --- */}
            <Section style={resourceBlockStyle}>
              <Text style={resourceTitleStyle}>
                Calculateur de Répartition Automatique
              </Text>
              <Text style={resourceDescStyle}>
                Version interactive — remplis les cases bleues, il fait les
                maths automatiquement.
              </Text>
              <Button style={secondaryButtonStyle} href={downloadExcelUrl}>
                Ouvrir le Calculateur
              </Button>
            </Section>

            {/* Séparateur */}
            <Hr style={hrStyle} />

            {/* --- Conseil pratique --- */}
            <Section style={tipBlockStyle}>
              <Text style={tipTitleStyle}>💡 Un seul conseil :</Text>
              <Text style={tipTextStyle}>
                Ne cherche pas à tout faire d&apos;un coup. Ouvre le
                Calculateur, remplis l&apos;onglet &quot;Charges Fixes&quot;
                (les cases bleues), et arrête-toi là pour aujourd&apos;hui.
                20 minutes maximum. Le reste se calcule automatiquement.
              </Text>
              <Text style={tipHighlightStyle}>
                Ton cerveau TDAH fonctionne mieux par petites victoires.
                Celle-ci est la première.
              </Text>
            </Section>

            {/* Séparateur */}
            <Hr style={hrStyle} />

            {/* --- Question / contact --- */}
            <Text style={paragraphStyle}>
              Une question ? Réponds à cet email, je lis tout.
            </Text>

            {/* --- Signature --- */}
            <Text style={signatureStyle}>
              À très vite,
              <br />
              Maxime
            </Text>

            {/* --- P.S. --- */}
            <Text style={psStyle}>
              P.S. Si tu n&apos;as pas encore le livre complet, il est
              disponible sur{" "}
              <Link href="https://www.amazon.fr" style={linkStyle}>
                Amazon
              </Link>
              .
            </Text>
          </Section>

          {/* --- Footer de l'email --- */}
          {/* Le footer contient les mentions legales obligatoires pour eviter les spams */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              Tu reçois cet email car tu as demandé le Kit de Démarrage DOPA4
              via dopasysteme.com.
            </Text>
            <Text style={footerTextStyle}>
              &copy; {new Date().getFullYear()} DOPA4 - DopaSystème. Tous
              droits réservés.
            </Text>
            <Text style={footerTextStyle}>
              DopaSystème - dopasysteme.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ============================================
// Styles inline pour l'email
// Les emails ne supportent pas les fichiers CSS externes
// Tout doit être en style inline
// ============================================

const bodyStyle = {
  backgroundColor: "#f4f7fb",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: "0" as const,
  padding: "0" as const,
};

const containerStyle = {
  maxWidth: "580px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden" as const,
};

// --- Header : fond bleu foncé avec titre DOPA4 ---
const headerStyle = {
  backgroundColor: "#1e3a5f",
  padding: "28px 32px 20px",
  textAlign: "center" as const,
};

const headerTitleStyle = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold" as const,
  margin: "0" as const,
  letterSpacing: "2px",
};

// Sous-titre du header
const headerSubtitleStyle = {
  color: "#a3bfdb",
  fontSize: "13px",
  margin: "4px 0 0" as const,
  letterSpacing: "1px",
};

const contentStyle = {
  padding: "32px",
};

// --- Salutation : ton direct et chaleureux ---
const greetingStyle = {
  fontSize: "18px",
  fontWeight: "600" as const,
  color: "#1a2332",
  marginBottom: "4px",
};

const paragraphStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#4a5568",
  marginBottom: "16px",
};

// --- Bloc CTA principal : bouton de téléchargement du Kit ---
const ctaBlockStyle = {
  textAlign: "center" as const,
  margin: "28px 0",
};

// Bouton CTA principal (gros, visible, teal accent)
const ctaButtonStyle = {
  backgroundColor: "#0d9488",
  color: "#ffffff",
  padding: "16px 32px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold" as const,
  textDecoration: "none" as const,
  display: "inline-block" as const,
  letterSpacing: "0.5px",
};

// --- Titre de section "Ce que tu trouveras" ---
const sectionTitleStyle = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#1e3a5f",
  marginBottom: "12px",
  marginTop: "24px",
};

// --- Items de la liste des ressources ---
const listItemStyle = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#4a5568",
  marginBottom: "8px",
  paddingLeft: "4px",
};

// --- Bloc ressource secondaire (Calculateur) ---
const resourceBlockStyle = {
  backgroundColor: "#f0f5ff",
  borderRadius: "8px",
  padding: "20px",
  marginTop: "24px",
  marginBottom: "16px",
};

const resourceTitleStyle = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#1e3a5f",
  marginBottom: "4px",
};

const resourceDescStyle = {
  fontSize: "14px",
  color: "#4a5568",
  marginBottom: "12px",
};

// Bouton secondaire (outline style)
const secondaryButtonStyle = {
  backgroundColor: "#1e3a5f",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "600" as const,
  textDecoration: "none" as const,
  display: "inline-block" as const,
};

const hrStyle = {
  borderColor: "#e2e8f0",
  margin: "24px 0",
};

// --- Bloc conseil pratique ---
const tipBlockStyle = {
  backgroundColor: "#fffbeb",
  borderRadius: "8px",
  padding: "20px",
  borderLeft: "4px solid #f59e0b",
};

const tipTitleStyle = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#92400e",
  marginBottom: "8px",
  marginTop: "0" as const,
};

const tipTextStyle = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#78350f",
  marginBottom: "8px",
};

// Phrase motivante en gras
const tipHighlightStyle = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#78350f",
  fontWeight: "bold" as const,
  fontStyle: "italic" as const,
  marginBottom: "0" as const,
};

// --- Signature ---
const signatureStyle = {
  fontSize: "16px",
  color: "#1a2332",
  lineHeight: "1.6",
  marginTop: "8px",
};

// --- P.S. : lien Amazon ---
const psStyle = {
  fontSize: "14px",
  color: "#718096",
  lineHeight: "1.5",
  marginTop: "20px",
};

// Lien cliquable dans le P.S.
const linkStyle = {
  color: "#0d9488",
  textDecoration: "underline" as const,
};

// --- Footer ---
const footerStyle = {
  backgroundColor: "#f7fafc",
  padding: "16px 32px",
  textAlign: "center" as const,
};

const footerTextStyle = {
  fontSize: "12px",
  color: "#a0aec0",
  margin: "4px 0",
};
