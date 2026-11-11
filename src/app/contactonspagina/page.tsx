import type { Metadata } from "next";

import { OverOnsPage } from "@/components/sites/eloxlease/over-ons/over-ons-page";
import { SiteShell } from "@/components/sites/eloxlease/site-shell";
import "@/components/sites/eloxlease/over-ons/over-ons.css";

export const metadata: Metadata = {
  title: "Neem contact met ons op | Stel je vraag of vraag een offerte aan",
  description:
    "Heb je vragen over het leasen van een bezorgfiets of scooter? Neem contact op met Elox Lease voor advies op maat of een vrijblijvende offerte.",
};

export default function Page() {
  return (
    <SiteShell pageClass="elox-overons" whatsappHref={null}>
      <OverOnsPage />
    </SiteShell>
  );
}
