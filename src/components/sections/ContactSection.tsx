'use client';

import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeading from '@/components/shared/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  CONTACT_TITLE,
  CONTACT_SUBTITLE,
  CONTACT_SUCCESS_MESSAGE,
  CONTACT_ERROR_MESSAGE,
} from '@/lib/constants';

// Composant Section Contact - formulaire pour envoyer des messages
// Client Component car gère l'état du formulaire et les interactions utilisateur
export default function ContactSection() {
  // État pour stocker les valeurs des champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // État pour gérer l'affichage du chargement pendant l'envoi
  const [loading, setLoading] = useState(false);

  // Log dans la console pour tracker le rendu de la section
  console.log('ContactSection rendu');

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    // Empêche le rechargement de la page par défaut
    e.preventDefault();

    // Log de l'événement de soumission
    console.log('Soumission du formulaire de contact avec:', { name, email, message });

    // Active l'état de chargement pour désactiver le bouton et afficher le loader
    setLoading(true);

    try {
      // Envoi de la requête POST vers l'API de contact avec les données du formulaire
      const response = await axios.post('/api/contact', {
        name,
        email,
        message,
      });

      // Log de la réponse réussie de l'API
      console.log('Réponse de l\'API contact:', response.data);

      // Affichage d'un toast de succès
      toast.success(CONTACT_SUCCESS_MESSAGE);

      // Réinitialisation des champs du formulaire après envoi réussi
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      // Log de l'erreur dans la console pour débogage
      console.log('Erreur lors de l\'envoi du message de contact:', error);

      // Affichage d'un toast d'erreur
      toast.error(CONTACT_ERROR_MESSAGE);
    } finally {
      // Désactive l'état de chargement dans tous les cas (succès ou erreur)
      setLoading(false);
    }
  };

  return (
    // Conteneur de section avec id pour ancre de scroll
    <SectionWrapper id="contact">
      {/* Titre et sous-titre de la section importés depuis les constantes */}
      <SectionHeading title={CONTACT_TITLE} subtitle={CONTACT_SUBTITLE} />

      {/* Carte centrée avec largeur maximale et ombre portée */}
      <Card className="max-w-xl mx-auto shadow-lg">
        <CardContent className="pt-6">
          {/* Formulaire de contact avec gestion de la soumission */}
          <form onSubmit={handleSubmit}>
            {/* Conteneur des champs avec espacement vertical */}
            <div className="space-y-4">
              {/* Champ Nom */}
              <div className="space-y-2">
                {/* Label pour le champ nom */}
                <Label htmlFor="name">Nom</Label>
                {/* Input texte pour le nom de l'utilisateur */}
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              {/* Champ Email */}
              <div className="space-y-2">
                {/* Label pour le champ email */}
                <Label htmlFor="email">Email</Label>
                {/* Input email avec validation HTML5 */}
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              {/* Champ Message */}
              <div className="space-y-2">
                {/* Label pour le champ message */}
                <Label htmlFor="message">Message</Label>
                {/* Textarea pour le message avec 5 lignes visibles */}
                <Textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              {/* Bouton de soumission pleine largeur */}
              <Button type="submit" className="w-full" disabled={loading}>
                {/* Icône avion en papier pour l'envoi */}
                <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                {/* Texte du bouton change selon l'état de chargement */}
                {loading ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
