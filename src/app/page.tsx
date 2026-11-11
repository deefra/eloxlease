import { HomeContent } from "@/components/sites/eloxlease/home/home-content";
import { SiteShell } from "@/components/sites/eloxlease/site-shell";
import "@/components/sites/eloxlease/home/home.css";

export default function Home() {
  return (
    <SiteShell pageClass="elox-home">
      <HomeContent />
    </SiteShell>
  );
}
