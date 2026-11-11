import type { Metadata } from "next";

import { LeasevoorstelPage } from "@/components/sites/eloxlease/leasevoorstel/leasevoorstel-page";
import { SiteShell } from "@/components/sites/eloxlease/site-shell";
import "@/components/sites/eloxlease/leasevoorstel/leasevoorstel.css";

export const metadata: Metadata = {
  title: "Leasevoorstel aanvragen: ontvang een offerte op maat",
  description:
    "Vraag direct een vrijblijvend leasevoorstel aan voor een bezorgfiets of scooter en ontvang snel een persoonlijk aanbod.",
};

export default function Page() {
  return (
    <SiteShell pageClass="elox-leasevoorstel" whatsappHref={null}>
      <LeasevoorstelPage />
    </SiteShell>
  );
}
