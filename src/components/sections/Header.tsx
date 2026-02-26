"use client";

// ============================================
// Composant Header - Navigation sticky avec effet de verre
// Gère la navigation principale du site, responsive avec menu mobile
// ============================================

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAV_ITEMS, NAV_CTA_TEXT, SITE_NAME } from "@/lib/constants";

export default function Header() {
  console.log("Header rendu");

  // État pour suivre si l'utilisateur a scrollé (affiche la bordure en bas)
  const [scrolled, setScrolled] = useState(false);

  // État pour contrôler l'ouverture/fermeture du menu mobile
  const [open, setOpen] = useState(false);

  // Hook pour obtenir la route actuelle (pour surligner le lien actif)
  const pathname = usePathname();

  // Effet pour détecter le scroll et ajouter la bordure au header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        console.log("État scroll changé:", isScrolled);
      }
    };

    // Écouter l'événement de scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur quand le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Fonction pour scroller vers la section email capture
  const scrollToEmail = () => {
    console.log("Scroll vers section email");
    const element = document.getElementById("email-capture");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Déterminer le comportement du bouton CTA selon la page actuelle
  const isHomePage = pathname === "/";
  const ctaAction = isHomePage ? scrollToEmail : undefined;
  const ctaHref = isHomePage ? undefined : "/#email-capture";

  // Fonction pour fermer le menu mobile et scroller vers l'email si sur homepage
  const handleMobileCta = () => {
    console.log("CTA mobile cliqué");
    setOpen(false);
    if (isHomePage) {
      setTimeout(() => scrollToEmail(), 300); // Délai pour laisser le sheet se fermer
    }
  };

  // Composant du bouton CTA (réutilisable pour desktop et mobile)
  const CTAButton = ({ isMobile = false }: { isMobile?: boolean }) => {
    const buttonContent = (
      <Button
        className={isMobile ? "w-full" : "hidden md:inline-flex"}
        size="sm"
        onClick={isMobile ? handleMobileCta : ctaAction}
      >
        {NAV_CTA_TEXT}
      </Button>
    );

    // Si on n'est pas sur la homepage, wrapper dans un Link
    if (!isHomePage && !isMobile) {
      return <Link href="/#email-capture">{buttonContent}</Link>;
    }

    return buttonContent;
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Nom du site - Cliquable pour retourner à l'accueil */}
        <Link href="/" className="text-xl font-bold text-primary">
          {SITE_NAME}
        </Link>

        {/* Navigation desktop - cachée sur mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            // Vérifier si le lien est actif (correspond à la route actuelle)
            const isActive = pathname === item.href;
            console.log(`Nav item ${item.label}: actif = ${isActive}`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Partie droite: Bouton CTA (desktop) + Menu hamburger (mobile) */}
        <div className="flex items-center gap-4">
          {/* Bouton CTA - affiché uniquement sur desktop */}
          <CTAButton />

          {/* Menu hamburger mobile utilisant Sheet (drawer) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Bars3Icon className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            {/* Contenu du menu mobile qui glisse depuis la droite */}
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>{SITE_NAME}</SheetTitle>
              </SheetHeader>

              {/* Navigation mobile */}
              <nav className="flex flex-col gap-4 mt-8">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        console.log(`Fermeture menu mobile: ${item.label} cliqué`);
                        setOpen(false);
                      }}
                      className={`text-lg transition-colors ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Bouton CTA dans le menu mobile */}
                <div className="mt-4">
                  {isHomePage ? (
                    <CTAButton isMobile />
                  ) : (
                    <Link href="/#email-capture" onClick={() => setOpen(false)}>
                      <Button className="w-full" size="sm">
                        {NAV_CTA_TEXT}
                      </Button>
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
