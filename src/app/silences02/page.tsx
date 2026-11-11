import type { Metadata } from "next";

import { SilenceS02Page, SilenceS02WhatsappHref } from "@/components/sites/eloxlease/silence-s02/silence-s02-page";
import { SiteShell } from "@/components/sites/eloxlease/site-shell";
import "@/components/sites/eloxlease/silence-s02/silence-s02.css";

export const metadata: Metadata = {
  title: "Silence S02 leasen - Elektrische bezorgscooter | Elox Lease",
  description:
    "Lease de Silence S02 bezorgscooter met hoge actieradius en volledige service. Ideaal voor snelle en efficiënte bezorging. Bekijk hier meer!",
};

export default function Page() {
  return (
    <SiteShell pageClass="elox-silences02" whatsappHref={SilenceS02WhatsappHref}>
      <SilenceS02Page />
    </SiteShell>
  );
}
