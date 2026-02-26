// ============================================
// Composant FooterSection
// Pied de page avec nom du site, liens de navigation et copyright
// Utilise Link de Next.js pour les routes internes
// ============================================

import Link from "next/link";
import { SITE_NAME, FOOTER_TEXT, FOOTER_LINKS } from "@/lib/constants";

export default function FooterSection() {
  console.log("FooterSection rendu");

  return (
    // Footer avec fond bleu fonce et texte blanc semi-transparent
    <footer className="bg-blue-dark text-white/80">
      {/* Conteneur centre avec largeur max et padding responsive */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Nom du site en gras */}
        <div className="font-semibold text-lg mb-4">{SITE_NAME}</div>

        {/* Liens du footer */}
        <div className="flex flex-wrap gap-4 mb-4">
          {FOOTER_LINKS.map((link, index) => {
            // Si le lien commence par "/" c'est une route interne → utiliser Link
            // Sinon c'est un lien externe ou placeholder → utiliser <a>
            const isInternal = link.href.startsWith("/");

            return isInternal ? (
              <Link
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Ligne de separation */}
        <div className="border-t border-white/10 my-4" />

        {/* Copyright */}
        <div className="text-sm text-white/60">{FOOTER_TEXT}</div>
      </div>
    </footer>
  );
}
