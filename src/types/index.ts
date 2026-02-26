// ============================================
// Types TypeScript pour la landing page TDAH Adulte
// Interfaces partagées entre les composants et les API routes
// ============================================

// Données envoyées par le formulaire d'email (section capture)
export interface EmailFormData {
  email: string;
}

// Données envoyées par le formulaire de contact
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Réponse standard retournée par les API routes
export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Item FAQ pour la section accordion
export interface FaqItem {
  question: string;
  answer: string;
}

// Propriétés des sections avec id pour le scroll
export interface SectionProps {
  id?: string;
  className?: string;
}
