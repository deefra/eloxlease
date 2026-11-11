import Image from "next/image";
import Link from "next/link";

import { LEASEVOORSTEL_HREF, PHONE_HREF } from "./site-data";

export function SiteFooter() {
  return (
    <footer>
      <div className="site-footer">
        <div className="footer-inner">
          <div className="footer-col footer-logo">
            <Link href="/">
              <Image
                src="/sites/eloxlease/logo-footer.png"
                alt="elox lease logo bezorgscooter elektrische bezorgfiets cargofiets cargobike ebike bezorging leasen huren"
                width={300}
                height={300}
              />
            </Link>
          </div>
          <div className="footer-col footer-address">
            <p>
              Talmastraat 11
              <br />
              3864 DE
              <br />
              Nijkerkerveen
              <br />
              📧 <a href="mailto:info@eloxlease.nl">info@eloxlease.nl</a>
              <br />
              📞 <a href={PHONE_HREF}>085-7605170</a>
            </p>
          </div>
          <div className="footer-col footer-pages">
            <p>
              <strong>
                Populaire pagina&apos;s:
                <br />
              </strong>
              <Link href="/silences02/">Silence S02 elektrische bezorgscooter</Link>
              <br />
              <Link href="/elektrischebezorgfiets/">E-cargobike</Link>
              <br />
              <Link href={LEASEVOORSTEL_HREF}>Leasevoorstel aanvragen</Link>
              <br />
              <Link href="/contactonspagina/">Over ons</Link>
            </p>
          </div>
          <div className="footer-col footer-cta">
            <span className="footer-cta-title">Direct een leasevoorstel ontvangen?</span>
            <p>Binnen 24 uur een persoonlijk voorstel. Vrijblijvend.</p>
            <Link href={LEASEVOORSTEL_HREF} className="btn btn-color-alt">
              <span>Vraag leasevoorstel aan</span>
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-inner">
          <p>
            © 2026 Elox Service. Alle rechten voorbehouden.
            {"                                           "}
            KVK 97214779 – NL867954097B01
          </p>
        </div>
      </div>
    </footer>
  );
}
