'use client';

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeading from '@/components/shared/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  EMAIL_SECTION_TITLE,
  EMAIL_SECTION_SUBTITLE,
  EMAIL_PLACEHOLDER,
  EMAIL_BUTTON_TEXT,
  EMAIL_SUCCESS_MESSAGE,
  EMAIL_ERROR_MESSAGE,
} from '@/lib/constants';

// Composant de section pour la capture d'email
// C'est la section clé de conversion où l'utilisateur saisit son email pour recevoir les ressources gratuites
export default function EmailCaptureSection() {
  // État local pour stocker la valeur de l'input email
  const [email, setEmail] = useState('');

  // État local pour indiquer si la soumission du formulaire est en cours
  const [isLoading, setIsLoading] = useState(false);

  // État local pour indiquer si l'email a été soumis avec succès
  const [isSuccess, setIsSuccess] = useState(false);

  // Log dans la console pour tracker le rendu du composant
  console.log('EmailCaptureSection rendue', { email, isLoading, isSuccess });

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    // Empêche le rechargement de la page lors de la soumission du formulaire
    e.preventDefault();

    // Log de la tentative de soumission
    console.log('Tentative de soumission du formulaire email', { email });

    // Validation basique de l'email (ne pas soumettre si vide)
    if (!email || !email.includes('@')) {
      toast.error('Veuillez entrer une adresse email valide.');
      return;
    }

    // Active l'état de chargement pour afficher le spinner
    setIsLoading(true);

    // Mise à jour optimiste: affiche l'état de succès immédiatement
    // Cela rend l'interface plus réactive pour l'utilisateur
    setIsSuccess(true);

    try {
      // Appel API POST pour envoyer l'email au backend
      // Le backend se chargera d'envoyer l'email avec les ressources
      const response = await axios.post('/api/send-resources', { email });

      // Log de la réponse réussie
      console.log('Email soumis avec succès', { email, response: response.data });

      // Affiche une notification de succès à l'utilisateur
      toast.success(EMAIL_SUCCESS_MESSAGE);
    } catch (error) {
      // Log de l'erreur dans la console pour le débogage
      console.error('Erreur lors de la soumission de l\'email', { email, error });

      // Revient à l'état initial en cas d'erreur (annule la mise à jour optimiste)
      setIsSuccess(false);

      // Affiche une notification d'erreur à l'utilisateur
      toast.error(EMAIL_ERROR_MESSAGE);
    } finally {
      // Désactive l'état de chargement une fois la requête terminée (succès ou échec)
      setIsLoading(false);
    }
  };

  return (
    // Section wrapper avec fond secondaire (alternance de couleur de fond entre les sections)
    <SectionWrapper id="email-capture" className="bg-secondary">
      {/* En-tête de la section avec titre et sous-titre */}
      <SectionHeading title={EMAIL_SECTION_TITLE} subtitle={EMAIL_SECTION_SUBTITLE} />

      {/* Carte centrée contenant le formulaire ou le message de succès */}
      <Card className="max-w-lg mx-auto shadow-lg border-0">
        <CardContent className="pt-6">
          {/* Rendu conditionnel: si succès, affiche le message de succès, sinon affiche le formulaire */}
          {isSuccess ? (
            // État de succès: affiche une icône de succès et un message
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              {/* Icône de validation (cercle avec coche) */}
              <CheckCircleIcon className="w-16 h-16 text-green-500" />

              {/* Message de succès affiché à l'utilisateur */}
              <p className="text-center text-lg font-semibold text-foreground">
                {EMAIL_SUCCESS_MESSAGE}
              </p>
            </div>
          ) : (
            // État initial: affiche le formulaire de saisie d'email
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Conteneur pour aligner l'input et le bouton côte à côte sur desktop */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Champ de saisie de l'email */}
                <div className="flex-1 relative">
                  {/* Icône d'enveloppe à gauche de l'input */}
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                  {/* Input email avec padding left pour laisser de la place à l'icône */}
                  <Input
                    type="email"
                    placeholder={EMAIL_PLACEHOLDER}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="pl-10"
                  />
                </div>

                {/* Bouton de soumission du formulaire */}
                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="sm:w-auto w-full"
                >
                  {/* Texte du bouton change pendant le chargement */}
                  {isLoading ? 'Envoi en cours...' : EMAIL_BUTTON_TEXT}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Message de sécurité et de confidentialité sous la carte */}
      {!isSuccess && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {/* Icône de cadenas pour illustrer la sécurité */}
          <svg
            className="w-4 h-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>

          {/* Texte rassurant sur la sécurité des données */}
          <p className="text-sm text-muted-foreground">
            Vos données sont en sécurité. Aucun spam.
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}
