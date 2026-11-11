import { Cf7Form } from "../cf7-form";
import { FaqAccordion, type AccordionItem } from "./faq-accordion";
import { ImageGallery, type GalleryImage } from "./image-gallery";
import { RevealDivider } from "./reveal-divider";

const galleryImages: GalleryImage[] = [
  {
    thumb: "/sites/eloxlease/gallery-zijkant-straat-1000x800.jpg",
    full: "/sites/eloxlease/gallery-zijkant-straat.jpg",
    fullWidth: 1920,
    fullHeight: 2560,
  },
  {
    thumb: "/sites/eloxlease/gallery-3-zijkant-straat-1000x800.jpg",
    full: "/sites/eloxlease/gallery-3-zijkant-straat.jpg",
    fullWidth: 1920,
    fullHeight: 2560,
  },
  {
    thumb: "/sites/eloxlease/gallery-2-zijkant-groep-1000x800.jpg",
    full: "/sites/eloxlease/gallery-2-zijkant-groep.jpg",
    fullWidth: 1920,
    fullHeight: 2560,
  },
];

const faqItems: AccordionItem[] = [
  {
    title: "1) Binnen welke tijd nemen jullie contact op?",
    content: (
      <p>
        We reageren doorgaans <strong>binnen 24 uur op werkdagen</strong>. Bij drukte kan het iets langer duren, maar
        je ontvangt altijd een reactie.
      </p>
    ),
  },
  {
    title: "2) Wat is de snelste manier om Elox Lease te bereiken?",
    content: (
      <p>
        Voor algemene vragen kun je het formulier gebruiken.
        <br />
        Heb je een dringende vraag? Bel ons dan direct via het telefoonnummer bovenin de website.
      </p>
    ),
  },
  {
    title: "3) Kan ik ook WhatsAppen?",
    content: <p>Ja. Je kunt ons ook via WhatsApp bereiken. We reageren zo snel mogelijk tijdens werktijden.</p>,
  },
  {
    title: "4) Met wie neem ik contact op na mijn bericht?",
    content: (
      <p>
        Je bericht komt direct bij een <strong>lease-specialist</strong> terecht. Daardoor krijg je geen standaard
        antwoord, maar iemand die jouw situatie begrijpt en gericht kan helpen.
      </p>
    ),
  },
  {
    title: "5) Welke informatie helpt om mijn vraag sneller te beantwoorden?",
    content: (
      <>
        <p>Graag ontvangen we (als het relevant is):</p>
        <ul>
          <li>
            <p>bedrijfsnaam en contactgegevens</p>
          </li>
          <li>
            <p>waar je vraag over gaat (bijv. voertuig, service, samenwerking)</p>
          </li>
          <li>
            <p>eventuele context (branche, aantal voertuigen, planning)</p>
          </li>
        </ul>
        <p>Hoe concreter je vraag, hoe sneller we kunnen schakelen.</p>
      </>
    ),
  },
  {
    title: "6) Kunnen jullie ook contact opnemen op een specifiek moment?",
    content: (
      <p>
        Ja. Zet in je bericht <strong>een voorkeurstijdstip</strong> (bijv. vandaag na 16:00) en we proberen daar
        rekening mee te houden.
      </p>
    ),
  },
  {
    title: "7) Werken jullie landelijk?",
    content: (
      <p>
        Ja. Elox Lease is gericht op zakelijke klanten en ondersteunt trajecten <strong>door heel Nederland</strong>.
      </p>
    ),
  },
];

// The source's Google Maps widget has no API key and no location configured, so it shows an error
// over a default view of London. The clone embeds a keyless map of the company address instead.
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Talmastraat%2011%2C%203864%20DE%20Nijkerkerveen&z=15&output=embed";

function Heading({ level, children }: { level: 1 | 2; children: React.ReactNode }) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <div className="el-heading">
      <Tag className="el-heading-title">{children}</Tag>
    </div>
  );
}

function TextEditor({ children }: { children: React.ReactNode }) {
  return <div className="el-text-editor">{children}</div>;
}

export function OverOnsPage() {
  return (
    <div className="wd-content container">
      <div className="intro-block">
        <div className="el-row">
          <Heading level={1}>Over elox lease</Heading>
          <TextEditor>
            <p>
              <strong>Premium leaseoplossingen voor bedrijven die afhankelijk zijn van betrouwbare bezorging.</strong>
            </p>
            <p>
              Elox Lease is ontstaan vanuit één simpele overtuiging:
              <br />
              <strong>bezorging mag nooit stilvallen door materieel of service.</strong>
              <br />
              Daarom leveren wij geen standaard oplossingen, maar elektrische bezorgvoertuigen en leaseconcepten die
              zijn gebouwd rondom continuïteit.
            </p>
          </TextEditor>
        </div>
        <div className="el-row">
          <RevealDivider />
          <TextEditor>
            <p>Gebouwd op praktijk, niet op theorie</p>
            <p>
              Elox Lease is voortgekomen uit meer dan <strong>20 jaar ervaring in de bezorgsector</strong>.
              <br />
              Die ervaring zit niet alleen in voertuigen, maar vooral in <strong>service, onderhoud en operatie</strong>.
            </p>
            <p>
              In die jaren zijn <strong>35.000+ serviceverzoeken</strong> afgehandeld. Elk daarvan leverde inzichten
              op:
              <br />
              waar voertuigen falen, waar service tekortschiet en wat bezorgbedrijven écht nodig hebben om door te
              kunnen werken.
            </p>
            <p>Die kennis vormt de basis van alles wat wij vandaag doen.</p>
          </TextEditor>
          <Heading level={2}>Waar we vandaan komen</Heading>
        </div>
        <div className="el-row">
          <RevealDivider />
          <Heading level={2}>Waarom Elox Lease bestaat</Heading>
          <TextEditor>
            <p>Omdat uptime belangrijker is dan de laagste prijs</p>
            <p>
              Veel aanbieders leveren een bezorgfiets.
              <br />
              Wij leveren <strong>rust in de operatie</strong>.
            </p>
            <p>Elox Lease bestaat voor bedrijven die begrijpen dat:</p>
            <ul>
              <li>
                <p>stilstand direct omzet kost</p>
              </li>
              <li>
                <p>onduidelijke service onrust veroorzaakt</p>
              </li>
              <li>
                <p>goedkoop vaak duurkoop is</p>
              </li>
            </ul>
            <p>
              Onze klanten kiezen bewust voor een oplossing die is ingericht op{" "}
              <strong>lange termijn betrouwbaarheid</strong>, niet op snelle verkoop.
            </p>
          </TextEditor>
        </div>
      </div>

      <div className="gallery-block">
        <div className="wd-title wd-title-bordered text-center">
          <div className="liner-continer">
            <h4 className="wd-title-text" />
          </div>
        </div>
        <ImageGallery images={galleryImages} />
        <div className="el-row">
          <RevealDivider />
          <Heading level={2}>Wat ons onderscheidt</Heading>
          <TextEditor>
            <p>Wat Elox Lease anders maakt</p>
            <p>
              <strong>1. Ontwikkeld vanuit service-data</strong>
              <br />
              Onze oplossingen zijn gebaseerd op echte praktijkdata, niet op aannames.
            </p>
            <p>
              <strong>2. Volledig operationele lease</strong>
              <br />
              Geen losse contracten, geen restwaarderisico’s, geen verrassingen.
            </p>
            <p>
              <strong>3. Service als kern, niet als bijzaak</strong>
              <br />
              Onderhoud, reparatie en ondersteuning zijn geïntegreerd in onze lease.
            </p>
            <p>
              <strong>4. Eén aanspreekpunt</strong>
              <br />
              Voertuig, service en beheer onder één dak — helder en overzichtelijk.
            </p>
          </TextEditor>
        </div>
        <div className="el-row">
          <RevealDivider />
          <Heading level={2}>Voor wie wij werken</Heading>
          <TextEditor>
            <p>Voor bedrijven die afhankelijk zijn van hun bezorging</p>
            <p>Elox Lease werkt voor organisaties die dagelijks moeten kunnen vertrouwen op hun materieel, waaronder:</p>
            <ul>
              <li>
                <p>Horeca &amp; maaltijdbezorging</p>
              </li>
              <li>
                <p>Retail &amp; lokale bezorging</p>
              </li>
              <li>
                <p>Apotheken &amp; zorg</p>
              </li>
              <li>
                <p>Franchiseformules</p>
              </li>
              <li>
                <p>Bedrijven met intensieve stedelijke routes</p>
              </li>
            </ul>
            <p>Of het nu gaat om één voertuig of een complete vloot: betrouwbaarheid is altijd de basis.</p>
          </TextEditor>
        </div>
        <div className="el-row">
          <RevealDivider />
          <TextEditor>
            <p>Duurzame bezorging vraagt om duurzame keuzes</p>
            <p>Wij geloven dat elektrische bezorging pas echt duurzaam is als deze:</p>
            <ul>
              <li>
                <p>betrouwbaar is</p>
              </li>
              <li>
                <p>onderhoudsarm blijft</p>
              </li>
              <li>
                <p>en langdurig inzetbaar is</p>
              </li>
            </ul>
            <p>Daarom investeren wij continu in:</p>
            <ul>
              <li>
                <p>betere voertuigconfiguraties</p>
              </li>
              <li>
                <p>slimmere serviceprocessen</p>
              </li>
              <li>
                <p>voorspelbare leaseoplossingen</p>
              </li>
            </ul>
            <p>Niet voor vandaag, maar voor de komende jaren.</p>
          </TextEditor>
          <Heading level={2}>Onze visie</Heading>
        </div>
        <div className="el-row">
          <RevealDivider />
          <TextEditor>
            <p>Duidelijke afspraken, zonder kleine lettertjes</p>
            <p>
              Bij Elox Lease zijn we helder over wat wél en niet inbegrepen is.
              <br />
              Geen verborgen voorwaarden, geen onduidelijke constructies.
            </p>
            <p>Wij nemen verantwoordelijkheid voor:</p>
            <ul>
              <li>
                <p>het voertuig</p>
              </li>
              <li>
                <p>de service</p>
              </li>
              <li>
                <p>de ondersteuning</p>
              </li>
            </ul>
            <p>
              En verwachten van onze klanten zorgvuldig gebruik.
              <br />
              Zo houden we samen de kwaliteit hoog.
            </p>
          </TextEditor>
          <Heading level={2}>Transparantie &amp; verantwoordelijkheid</Heading>
        </div>
      </div>

      <div className="buttons-block">
        <a
          className="btn btn-color-primary"
          href="https://eloxservice.nl/index.php/serviceaanvragen/"
        >
          Lease voorstel aanvragen
        </a>
        <a
          className="btn btn-style-bordered btn-color-alt"
          href="https://eloxservice.nl/index.php/servicemodellen/"
        >
          VRAAG TESTWEEK AAN
        </a>
      </div>

      <section className="map-block">
        <div className="wd-title wd-title-bordered text-center map-title">
          <div className="liner-continer">
            <h3 className="wd-title-text">VIND ONS OP GOOGLE MAPS</h3>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src={MAP_EMBED_SRC}
            title="Elox Lease, Talmastraat 11, Nijkerkerveen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <div className="contact-block">
        <div className="contact-col contact-faq">
          <div className="wd-title">
            <div className="liner-continer">
              <h3 className="wd-title-text">FAQ (Contact / over ons)</h3>
            </div>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
        <div className="contact-col contact-form">
          <div className="wd-title">
            <div className="liner-continer">
              <h3 className="wd-title-text">Heb je een vraag? We helpen je graag verder</h3>
            </div>
            <div className="title-after_title">
              <p>
                Heb je een algemene vraag over Elox Lease, onze elektrische bezorgfietsen of onze werkwijze?
                <br />
                Vul het formulier in en we nemen <strong>binnen 24 uur persoonlijk contact</strong> met je op.
              </p>
              <p>Hoe concreter je vraag, hoe sneller en beter we je kunnen helpen.</p>
            </div>
          </div>
          <div className="wd-cf7">
            <Cf7Form formName="contactonspagina">
              <p>
                <label>
                  Naam *<br />
                  <span className="wpcf7-form-control-wrap" data-name="your-name">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" type="text" name="your-name" />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  E-mailadres *<br />
                  <span className="wpcf7-form-control-wrap" data-name="your-email">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required" aria-required="true" type="email" name="your-email" />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  Telefoonnummer *<br />
                  <span className="wpcf7-form-control-wrap" data-name="your-phone">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required" aria-required="true" type="tel" name="your-phone" />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  Bedrijfsnaam *<br />
                  <span className="wpcf7-form-control-wrap" data-name="your-company">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" type="text" name="your-company" />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  Onderwerp *<br />
                  <span className="wpcf7-form-control-wrap" data-name="your-subject">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" placeholder="Waar wil je informatie over?" type="text" name="your-subject" />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  Bericht (optioneel)<br />
                  <span className="wpcf7-form-control-wrap" data-name="your-message">
                    <textarea cols={40} rows={10} maxLength={2000} className="wpcf7-form-control wpcf7-textarea" placeholder="Omschrijf kort je vraag. Hoe concreter, hoe sneller we je kunnen helpen." name="your-message" />
                  </span>
                </label>
              </p>
              <p>
                <input className="wpcf7-form-control wpcf7-submit has-spinner btn-primary" type="submit" value="Vraag informatie aan" />
              </p>
              <p>
                <span className="wpcf7-form-control-wrap" data-name="privacy">
                  <span className="wpcf7-form-control wpcf7-acceptance">
                    <span className="wpcf7-list-item">
                      <label>
                        <input type="checkbox" name="privacy" value="1" />
                        <span className="wpcf7-list-item-label">
                          Ik ga akkoord met de verwerking van mijn gegevens volgens de privacyverklaring.
                        </span>
                      </label>
                    </span>
                  </span>
                </span>
              </p>
            </Cf7Form>
          </div>
        </div>
      </div>
    </div>
  );
}
