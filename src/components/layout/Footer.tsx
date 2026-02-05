"use client";
import { Linkedin, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { profile } from "@/data/content";

const socialLinks = [
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
];

export function Footer() {
  const { t, locale} = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-tight py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-foreground">
              LP<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {profile.name}. {t("footer.rights")}
            </p>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t("footer.madeWith")}{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> & React
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={profile.linkedin[locale]}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
