import type { Metadata } from "next";

import { ECargobikePage, ECargobikeWhatsappHref } from "@/components/sites/eloxlease/e-cargobike/e-cargobike-page";
import { SiteShell } from "@/components/sites/eloxlease/site-shell";
import "@/components/sites/eloxlease/e-cargobike/e-cargobike.css";

export const metadata: Metadata = {
  title: "De E-Cargobike: gemaakt voor intensieve bezorging - Elox Lease",
  description:
    "Verbeter je bezorgservice met de elektrische bezorgfiets van Elox Lease. De voordeligste all-in leaseoplossing voor de horeca.",
};

export default function Page() {
  return (
    <SiteShell pageClass="elox-ecargobike" whatsappHref={ECargobikeWhatsappHref}>
      <ECargobikePage />
    </SiteShell>
  );
}
