import { cn } from "@/lib/utils";

import { FloatingButtons } from "./floating-buttons";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

interface SiteShellProps {
  /** Page scope class, e.g. "elox-home"; page stylesheets are scoped to it. */
  pageClass: string;
  /** The page's floating WhatsApp link; null for pages whose source has none (Over ons, Leasevoorstel). */
  whatsappHref?: string | null;
  children: React.ReactNode;
}

export function SiteShell({ pageClass, whatsappHref, children }: SiteShellProps) {
  return (
    <div className={cn("elox", pageClass)}>
      <SiteHeader />
      <main id="main-content">
        {children}
      </main>
      <SiteFooter />
      <FloatingButtons whatsappHref={whatsappHref} />
    </div>
  );
}
