// ============================================
// Template d'email React pour l'envoi des ressources
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
} from "@react-email/components";

// --- Props du composant email ---
// downloadExcelUrl : lien vers le tableur Excel
// downloadKitUrl : lien vers le kit de démarrage PDF
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
        Vos ressources TDAH gratuites sont prêtes à télécharger
      </Preview>

      {/* Body : corps de l'email avec styles inline (obligation des emails) */}
      <Body style={bodyStyle}>
        {/* Container : conteneur centré avec largeur max */}
        <Container style={containerStyle}>
          {/* --- En-tête de l'email --- */}
          <Section style={headerStyle}>
            <Text style={headerTitleStyle}>TDAH Adulte</Text>
          </Section>

          {/* --- Contenu principal --- */}
          <Section style={contentStyle}>
            {/* Message de bienvenue */}
            <Text style={greetingStyle}>Bonjour,</Text>

            <Text style={paragraphStyle}>
              Merci pour votre intérêt ! Voici vos deux ressources gratuites,
              complémentaires au e-book TDAH Adulte. Cliquez sur les boutons
              ci-dessous pour les télécharger.
            </Text>

            {/* --- Bouton de téléchargement : Tableur Excel --- */}
            <Section style={resourceBlockStyle}>
              <Text style={resourceTitleStyle}>
                Tableur Excel - Dépenses Fixes
              </Text>
              <Text style={resourceDescStyle}>
                Calculez et suivez toutes vos dépenses fixes mensuelles en un
                coup d&apos;oeil.
              </Text>
              <Button style={buttonStyle} href={downloadExcelUrl}>
                Télécharger le tableur Excel
              </Button>
            </Section>

            {/* --- Bouton de téléchargement : Kit de démarrage --- */}
            <Section style={resourceBlockStyle}>
              <Text style={resourceTitleStyle}>Kit de Démarrage Pratique</Text>
              <Text style={resourceDescStyle}>
                Fiches pratiques, check-lists et modèles de routines adaptés au
                TDAH.
              </Text>
              <Button style={buttonStyle} href={downloadKitUrl}>
                Télécharger le kit de démarrage
              </Button>
            </Section>

            {/* Séparateur */}
            <Hr style={hrStyle} />

            {/* --- Note d'information --- */}
            <Text style={noteStyle}>
              Ces liens restent actifs et vous pouvez les utiliser à tout moment.
              Si vous avez des questions, n&apos;hésitez pas à nous contacter via
              notre page de contact.
            </Text>
          </Section>

          {/* --- Footer de l'email --- */}
          {/* Le footer contient les mentions legales obligatoires pour eviter les spams */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              Vous recevez cet email car vous avez demandé les ressources
              gratuites TDAH Adulte via notre site dopasysteme.com.
            </Text>
            <Text style={footerTextStyle}>
              &copy; {new Date().getFullYear()} TDAH Adulte - DopaSystème.
              Tous droits réservés.
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

const headerStyle = {
  backgroundColor: "#1e3a5f",
  padding: "24px 32px",
  textAlign: "center" as const,
};

const headerTitleStyle = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold" as const,
  margin: "0" as const,
};

const contentStyle = {
  padding: "32px",
};

const greetingStyle = {
  fontSize: "18px",
  fontWeight: "600" as const,
  color: "#1a2332",
  marginBottom: "8px",
};

const paragraphStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#4a5568",
  marginBottom: "24px",
};

const resourceBlockStyle = {
  backgroundColor: "#f0f5ff",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "16px",
};

const resourceTitleStyle = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#1e3a5f",
  marginBottom: "4px",
};

const resourceDescStyle = {
  fontSize: "14px",
  color: "#4a5568",
  marginBottom: "12px",
};

const buttonStyle = {
  backgroundColor: "#1e3a5f",
  color: "#ffffff",
  padding: "12px 24px",
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

const noteStyle = {
  fontSize: "14px",
  color: "#718096",
  lineHeight: "1.5",
};

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
