// ============================================
// Composant Client : UnsubscribeContent
// Gère la logique de désabonnement côté client
// Lit le paramètre ?email= (encodé en base64) de l'URL
// Appelle automatiquement l'API /api/unsubscribe au chargement
// Affiche un état de chargement, succès ou erreur
// ============================================

"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- États possibles de la page ---
// "loading" : appel API en cours
// "success" : désabonnement réussi
// "error" : une erreur est survenue
type UnsubscribeStatus = "loading" | "success" | "error";

export default function UnsubscribeContent() {
  // --- State pour suivre l'état du désabonnement ---
  const [status, setStatus] = useState<UnsubscribeStatus>("loading");

  // --- State pour stocker le message d'erreur si nécessaire ---
  const [errorMessage, setErrorMessage] = useState<string>("");

  // --- Ref pour éviter le double appel en React StrictMode (dev) ---
  const hasCalledApi = useRef(false);

  // --- Récupérer les paramètres de l'URL (?email=...) ---
  const searchParams = useSearchParams();

  console.log("UnsubscribeContent rendu, status actuel :", status);

  // --- Effet au montage : décoder l'email et appeler l'API ---
  useEffect(() => {
    // Éviter le double appel en StrictMode (React appelle useEffect 2 fois en dev)
    if (hasCalledApi.current) {
      console.log("Appel API déjà effectué, on skip");
      return;
    }
    hasCalledApi.current = true;

    // Fonction async pour gérer le désabonnement
    const handleUnsubscribe = async () => {
      console.log("Début du processus de désabonnement");

      // --- Étape 1 : Récupérer le paramètre email encodé en base64 ---
      const encodedEmail = searchParams.get("email");

      if (!encodedEmail) {
        // Pas de paramètre email dans l'URL — impossible de désabonner
        console.log("Aucun paramètre email trouvé dans l'URL");
        setStatus("error");
        setErrorMessage(
          "Aucune adresse email trouvée. Le lien semble invalide."
        );
        toast.error("Lien de désabonnement invalide.");
        return;
      }

      console.log("Email encodé trouvé :", encodedEmail);

      // --- Étape 2 : Décoder l'email depuis le base64 ---
      let decodedEmail: string;

      try {
        // atob() décode une chaîne base64 en texte clair
        decodedEmail = atob(encodedEmail);
        console.log("Email décodé avec succès :", decodedEmail);
      } catch {
        // Le base64 est invalide — l'email ne peut pas être décodé
        console.log("Erreur de décodage base64 :", encodedEmail);
        setStatus("error");
        setErrorMessage(
          "Le lien de désabonnement est corrompu. Veuillez réessayer."
        );
        toast.error("Lien de désabonnement invalide.");
        return;
      }

      // --- Étape 3 : Appeler l'API de désabonnement ---
      try {
        console.log("Appel API /api/unsubscribe avec email :", decodedEmail);

        // POST vers l'API avec l'email décodé
        const response = await axios.post("/api/unsubscribe", {
          email: decodedEmail,
        });

        console.log("Réponse API reçue :", response.data);

        // --- Étape 4 : Gérer la réponse ---
        if (response.data.success) {
          // Désabonnement réussi
          setStatus("success");
          toast.success("Vous avez été désabonné avec succès.");
          console.log("Désabonnement réussi pour :", decodedEmail);
        } else {
          // L'API a retourné success: false
          setStatus("error");
          setErrorMessage(
            response.data.message || "Une erreur est survenue."
          );
          toast.error(response.data.message || "Erreur de désabonnement.");
          console.log("Échec du désabonnement :", response.data.message);
        }
      } catch (error) {
        // --- Gestion des erreurs réseau ou API ---
        console.log("Erreur lors de l'appel API :", error);

        // Extraire le message d'erreur de la réponse Axios si disponible
        let message = "Une erreur est survenue lors du désabonnement.";

        if (axios.isAxiosError(error) && error.response?.data?.message) {
          message = error.response.data.message;
        }

        setStatus("error");
        setErrorMessage(message);
        toast.error(message);
      }
    };

    // Lancer le processus de désabonnement
    handleUnsubscribe();
  }, [searchParams]);

  return (
    // Section centrée avec padding responsive
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {/* --- État : Chargement --- */}
        {status === "loading" && (
          <Card>
            <CardContent className="pt-6 text-center">
              {/* Animation de chargement (spinner CSS) */}
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </div>

              {/* Texte de chargement */}
              <p className="text-lg font-medium text-foreground">
                Traitement en cours...
              </p>
              <p className="mt-2 text-muted-foreground">
                Nous traitons votre demande de désabonnement.
              </p>
            </CardContent>
          </Card>
        )}

        {/* --- État : Succès --- */}
        {status === "success" && (
          <Card>
            <CardContent className="pt-6 text-center">
              {/* Icône de succès (check vert) */}
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="h-16 w-16 text-green-500" />
              </div>

              {/* Message de succès */}
              <h2 className="text-xl font-bold text-foreground mb-2">
                Désabonnement confirmé
              </h2>
              <p className="text-muted-foreground mb-6">
                Vous ne recevrez plus d&apos;emails de notre part. Si c&apos;est
                une erreur, vous pouvez vous réinscrire à tout moment depuis
                notre site.
              </p>

              {/* Bouton pour retourner à l'accueil */}
              <Link href="/">
                <Button variant="default">
                  Retour à l&apos;accueil
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* --- État : Erreur --- */}
        {status === "error" && (
          <Card>
            <CardContent className="pt-6 text-center">
              {/* Icône d'erreur (X rouge) */}
              <div className="flex justify-center mb-4">
                <XCircleIcon className="h-16 w-16 text-red-500" />
              </div>

              {/* Message d'erreur */}
              <h2 className="text-xl font-bold text-foreground mb-2">
                Une erreur est survenue
              </h2>
              <p className="text-muted-foreground mb-6">
                {errorMessage ||
                  "Impossible de traiter votre désabonnement. Veuillez réessayer ou nous contacter directement."}
              </p>

              {/* Boutons : réessayer ou contacter */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {/* Bouton réessayer — recharge la page */}
                <Button
                  variant="default"
                  onClick={() => window.location.reload()}
                >
                  Réessayer
                </Button>

                {/* Bouton contacter — redirige vers la page contact */}
                <Link href="/contact">
                  <Button variant="outline">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
