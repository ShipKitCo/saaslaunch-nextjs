// Server component — no "use client" needed

// CUSTOMIZE: Swap these generic icons for brand SVGs once you have them.
// lucide-react 1.x does not include Twitter/GitHub/LinkedIn brand icons.
// Recommended: add SVG files to /public/icons/ and use next/image, or install a brand icon package.
import { Share2, Code2, Briefcase, type LucideIcon } from "lucide-react";
import { footerLinks, socialLinks } from "@/content/footer";

const socialIconMap: Record<string, LucideIcon> = {
  Share2,
  Code2,
  Briefcase,
};

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section: logo + nav columns */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Logo + tagline + socials */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#hero" className="text-lg font-bold tracking-tight text-foreground">
              {/* CUSTOMIZE: Replace "Helios" with your product name */}
              Helios
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Customer journey analytics for SaaS teams who want to know what
              happens after the sale.
            </p>

            {/* Social icons */}
            {/* CUSTOMIZE: Replace social links with your actual URLs */}
            <div className="mt-6 flex items-center gap-4">
              {/* CUSTOMIZE: Replace placeholder icons with your actual brand SVGs */}
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav columns */}
          {(Object.entries(footerLinks) as [string, readonly string[]][]).map(
            ([category, links]) => (
              <div key={category}>
                <h3 className="mb-4 text-sm font-semibold text-foreground">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      {/* CUSTOMIZE: Replace "#" with your actual page URLs */}
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SaaSLaunch. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* CUSTOMIZE: Update these links to your actual legal page URLs */}
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
