import type { Metadata } from "next";

import { CooktekPage, CooktekWhatsappHref } from "@/components/sites/eloxlease/cooktek/cooktek-page";
import { SiteShell } from "@/components/sites/eloxlease/site-shell";
import "@/components/sites/eloxlease/cooktek/cooktek.css";

export const metadata: Metadata = {
  title: "Cooktek pizza bags | Voor professionele pizzabezorging",
  description:
    "Upgrade je bezorging met CookTek. Binnen 1 minuut opgeladen via inductie voor warme, krokante pizza's tot aan de voordeur. Lease nu!",
};

export default function Page() {
  return (
    <SiteShell pageClass="elox-cooktek" whatsappHref={CooktekWhatsappHref}>
      <CooktekPage />
    </SiteShell>
  );
}
