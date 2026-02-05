"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, type Locale } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.projects", path: "/projects" },
  { key: "nav.blog", path: "/blog" },
];

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile quando a rota mudar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLocale = () => {
    const newLocale: Locale = locale === "pt-BR" ? "en-US" : "pt-BR";
    setLocale(newLocale);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-background/80 backdrop-blur-nav border-b border-border/50"
          : "bg-transparent",
      )}
    >
      <nav className="container-tight w-full max-w-full">
        <div className="flex items-center justify-between h-16 md:h-20 min-w-0 w-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors flex-shrink-0 min-w-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LP<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center mx-4 min-w-0">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              className="gap-2 text-muted-foreground"
            >
              <Globe className="w-4 h-4" />
              {locale === "pt-BR" ? "PT" : "EN"}
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a
                href={`https://wa.me/5511985545299?text=${encodeURIComponent(t("contact.watsapp"))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.contact")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              {locale === "pt-BR" ? "PT" : "EN"}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foregroundflex-shrink-0 ml-2"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-background/95 backdrop-blur-nav border-b border-border md:hidden overflow-hidden w-full"
          >
            <div className="container-tight py-4 space-y-2 w-full max-w-full">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.key}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                    )}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 pt-4 border-t border-border mt-4">
                <Button variant="hero" size="sm" asChild className="flex-1">
                  <a
                    href={`https://wa.me/5511985545299?text=${encodeURIComponent(t("contact.watsapp"))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("nav.contact")}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
