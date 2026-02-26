// ============================================
// Fonctions de validation pour les formulaires
// Utilisées côté serveur (API routes) et côté client (hooks)
// ============================================

// Regex standard pour valider un format d'email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Valide une adresse email
// Retourne un objet { valid, error } pour afficher le message d'erreur si nécessaire
export function validateEmail(email: string): {
  valid: boolean;
  error?: string;
} {
  // Vérifie que l'email n'est pas vide
  if (!email || email.trim() === "") {
    return { valid: false, error: "L'adresse email est requise." };
  }

  // Vérifie le format de l'email avec la regex
  if (!EMAIL_REGEX.test(email.trim())) {
    return { valid: false, error: "L'adresse email n'est pas valide." };
  }

  console.log("Email validé avec succès:", email);
  return { valid: true };
}

// Valide les données du formulaire de contact
// Vérifie que tous les champs requis sont remplis et au bon format
export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): { valid: boolean; errors?: Record<string, string> } {
  const errors: Record<string, string> = {};

  // Validation du nom
  if (!data.name || data.name.trim() === "") {
    errors.name = "Le nom est requis.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caractères.";
  }

  // Validation de l'email
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.valid) {
    errors.email = emailValidation.error || "Email invalide.";
  }

  // Validation du message
  if (!data.message || data.message.trim() === "") {
    errors.message = "Le message est requis.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Le message doit contenir au moins 10 caractères.";
  }

  // Si pas d'erreurs, le formulaire est valide
  const isValid = Object.keys(errors).length === 0;

  if (isValid) {
    console.log("Formulaire de contact validé avec succès");
  } else {
    console.log("Erreurs de validation du formulaire:", errors);
  }

  return { valid: isValid, errors: isValid ? undefined : errors };
}
