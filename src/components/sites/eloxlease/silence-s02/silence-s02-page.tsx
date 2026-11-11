import Image from "next/image";

import { Cf7Form } from "../cf7-form";
import { JsonLd } from "../json-ld";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Silence S02 — elektrische bezorgscooter",
    "image": "https://eloxlease.nl/wp-content/uploads/2026/01/Silence-S02-B2B-Elektrische-bezorgmotorscooter-2-scaled.jpg",
    "description": "Elektrische bezorgscooter voor intensief zakelijk gebruik met 147 km actieradius en uitneembare trolley-accu. Te leasen of te kopen via Elox Lease.",
    "brand": {
      "@type": "Brand",
      "name": "Silence"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "173",
      "highPrice": "2981",
      "offerCount": "2",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Elox Lease B.V."
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kan ik een elektrische bezorgscooter leasen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. De Silence S02 bezorgscooter lease je bij Elox Lease via het batterij-abonnement: €999 excl. BTW eenmalig en €5,71 per dag (€39,95 per week), inclusief service en batterij, met een looptijd van 36 maanden. Volledige aankoop kan ook, vanaf €2.981 excl. BTW."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is de actieradius van de Silence S02?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De Silence S02 heeft een actieradius tot 147 km (WMTC). In de praktijk is dit afhankelijk van rijstijl, belading en rijmodus (Eco/City)."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe werkt de uitneembare batterij?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De accu is een trolley-systeem van 41 kg dat je in één beweging losklikt. Hierdoor laad je binnen op of wissel je eenvoudig accu's tussen shifts, zonder dat de scooter stil hoeft te staan."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is de garantie op de Silence S02?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Je krijgt 5 jaar garantie op voertuig én batterij. Voor de batterij geldt 5 jaar of 500 laadcycli, wat als eerste bereikt wordt."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe laad je de Silence S02 op?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Opladen kan op drie manieren: in het voertuig, buiten het voertuig of via een laadpaal. De laadtijd is gemiddeld 7 tot 9 uur."
        }
      }
    ]
  }
];

export const SilenceS02WhatsappHref = "https://wa.me/31857605170?text=Hoi%20Elox%20Lease%2C%20ik%20heb%20een%20vraag%20over%20de%20Silence%20S02.";

export function SilenceS02Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <section className="el-section">
        {/* Silence S02 - Bezorgscooter leasen */}
        <div className="topbar">
          <div className="container">
            <div className="usp-list">
              <span>5 jaar garantie op voertuig én accu</span> <span>147 km actieradius</span> <span>Service &amp; Track &amp; Trace inbegrepen</span>
            </div>
            <div>
              <a href="tel:+31857605170">📞 085-7605170</a>
            </div>
          </div>
        </div>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div>
              <span className="eyebrow">Elektrische bezorgscooter · Silence S02</span>
              <h1>
                Bezorgscooter <strong>leasen</strong>
              </h1>
              <p className="lead">
                In bezorging draait alles om uptime. De Silence S02 B2B is ontwikkeld voor intensief zakelijk gebruik — met een uitneembare trolley-accu, 147 km actieradius en 5 jaar garantie op voertuig én batterij. Maximale continuïteit, minimale zorgen.
              </p>
              <div className="price-tag">
                <span className="label">Leasen vanaf</span> <span className="amount">€5,71</span> <span className="per">p/dag</span> <span className="divider"></span> <span className="label">Kopen vanaf</span> <span className="amount">€2.981</span> <span className="per">excl. BTW</span>
              </div>
              <div className="cta-row">
                <a href="#offerte" className="btn btn-primary">Vraag leasevoorstel aan →</a> <a href="#afname" className="btn btn-secondary">Leasen of kopen?</a>
              </div>
              <div className="micro-trust">
                <span>Binnen 24 uur reactie</span> <span>45 km/u · 4 kW motor</span> <span>Service inbegrepen</span>
              </div>
            </div>
            <div className="hero-image">
              <Image src="/sites/eloxlease/silence-s02.jpg" alt="Silence S02 elektrische bezorgscooter leasen bij Elox Lease" width={2560} height={2218} sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="badge">
                Actieradius<strong>147 km WMTC</strong>
              </div>
            </div>
          </div>
        </section>
        {/* TRUST */}
        <div className="trust-bar">
          <div className="container">
            <div className="label">
              Gebouwd voor intensief B2B-gebruik
            </div>
            <div className="trust-stats">
              <div className="trust-stat">
                <div className="num">
                  147 km
                </div>
                <div className="lbl">
                  Actieradius (WMTC)
                </div>
              </div>
              <div className="trust-stat">
                <div className="num">
                  45 km/u
                </div>
                <div className="lbl">
                  Topsnelheid
                </div>
              </div>
              <div className="trust-stat">
                <div className="num">
                  4 kW
                </div>
                <div className="lbl">
                  Brushless hub-motor
                </div>
              </div>
              <div className="trust-stat">
                <div className="num">
                  5 jaar
                </div>
                <div className="lbl">
                  Garantie voertuig &amp; accu
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* INTRO */}
        <section className="intro">
          <div className="container">
            <div className="grid">
              <div>
                <Image src="/sites/eloxlease/silence-s02-rijden.png" alt="Silence S02 elektrische bezorgscooter in gebruik" width={2048} height={1152} sizes="(max-width: 900px) 100vw, 50vw" className="rounded-shadow" />
              </div>
              <div>
                <span className="eyebrow">Gebouwd voor continuïteit</span>
                <h2>
                  De bezorgscooter die blijft rijden — shift na shift
                </h2>
                <p>
                  In bezorging draait het niet om een mooi product, maar om continuïteit. De Silence S02 B2B is gebouwd voor bedrijven die ritten móéten kunnen blijven rijden: tijdens piekuren, in druk stadsverkeer en met verschillende bezorgers op één voertuig.
                </p>
                <p>
                  Dankzij de uitneembare 5,6 kWh trolley-accu laad je flexibel op — binnen, buiten het voertuig of via een laadpaal. Met tot 147 km actieradius houd je jouw operatie schaalbaar zonder laadstress.
                </p>
                <ul className="benefits">
                  <li>
                    <strong>Uitneembare trolley-accu</strong> — wissel snel tussen shifts, laad flexibel binnen
                  </li>
                  <li>
                    <strong>147 km actieradius (WMTC)</strong> — meerdere routes per dag
                  </li>
                  <li>
                    <strong>5 jaar garantie</strong> op voertuig én batterij (500 laadcycli)
                  </li>
                  <li>
                    <strong>Tracefy Tracker</strong> — live locatie, ritgeschiedenis en diefstalalarm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* FEATURES */}
        <section className="features">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Techniek die telt</span>
              <h2>
                Ontwikkeld voor de eisen van professionele bezorging
              </h2>
              <p className="intro-text">
                Elke component van de Silence S02 is gekozen voor uptime, veiligheid en intensief stadsgebruik.
              </p>
            </div>
            <div className="feat-grid">
              <div className="feat-card">
                <div className="ic">
                  ⚡
                </div>
                <h3>
                  4 kW brushless hub-motor
                </h3>
                <p>
                  Krachtige, onderhoudsarme aandrijving. Soepel optrekken en betrouwbaar rijgedrag tot 45 km/u, ook met volle bezorgbox.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  🔋
                </div>
                <h3>
                  Uitneembare trolley-accu
                </h3>
                <p>
                  5,6 kWh accu van 41 kg die je in één beweging losklikt. Laad binnen op of wissel accu&apos;s tussen shifts.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  🛣️
                </div>
                <h3>
                  147 km actieradius
                </h3>
                <p>
                  Actieradius tot 147 km (WMTC). Rijd meerdere routes per dag zonder laadstress, in Eco- of City-modus.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  🛑
                </div>
                <h3>
                  Hydraulische remmen
                </h3>
                <p>
                  Voor- en achterrem voor maximale controle en stabiel remgedrag, ook met volle bezorgbox in druk stadsverkeer.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  📍
                </div>
                <h3>
                  Tracefy Track &amp; Trace
                </h3>
                <p>
                  Live locatie via app, ritgeschiedenis en diefstalalarm. Bij diefstal direct te lokaliseren, onderhoud automatisch ingepland.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  🛡️
                </div>
                <h3>
                  5 jaar garantie
                </h3>
                <p>
                  5 jaar fabrieksgarantie op voertuig én batterij. Voor de accu geldt 5 jaar of 500 laadcycli — wat eerst komt.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SPECS */}
        <section className="specs">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Specificaties</span>
              <h2>
                Silence S02 in cijfers
              </h2>
            </div>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>
                      Motor
                    </td>
                    <td>
                      4 kW brushless hub-motor
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Topsnelheid
                    </td>
                    <td>
                      45 km/u
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Actieradius
                    </td>
                    <td>
                      Tot 147 km (WMTC)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Accu
                    </td>
                    <td>
                      5,6 kWh uitneembare trolley-accu (41 kg)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Opladen
                    </td>
                    <td>
                      In voertuig, buiten voertuig of via laadpaal — 7 tot 9 uur
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Remmen
                    </td>
                    <td>
                      Hydraulische voor- en achterrem
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Tracking
                    </td>
                    <td>
                      Tracefy Tracker met live locatie en diefstalalarm
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Garantie
                    </td>
                    <td>
                      5 jaar op voertuig én batterij (batterij: 5 jaar / 500 cycli)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* ========= VIDEO ========= */}
        <section className="video-section">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Zie het zelf</span>
              <h2>
                De Silence S02 in actie
              </h2>
              <p className="intro-text">
                Bekijk de elektrische bezorgscooter in gebruik — van trolley-accu tot rijgedrag in de stad.
              </p>
            </div>
            <div className="video-wrap">
              <iframe src="https://www.youtube.com/embed/JLqJ2nnlijQ" title="De Silence S02 in actie" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>
        {/* AFNAMEVORMEN */}
        <section className="leasekoop" id="afname">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Afnamevormen</span>
              <h2>
                Bezorgscooter leasen of kopen
              </h2>
              <p className="intro-text">
                Kies het batterij-abonnement voor maximale uptime, of koop de Silence S02 voor direct eigenaarschap en fiscaal voordeel.
              </p>
            </div>
            <div className="lk-grid">
              <div className="lk-card featured">
                <span className="lk-badge">Meest gekozen</span>
                <h3>
                  Batterij-abonnement
                </h3>
                <p className="lk-sub">
                  Maximale uptime
                </p>
                <div className="lk-price">
                  €5,71<small> p/dag</small>
                </div>
                <p className="lk-note">
                  + €999 excl. BTW eenmalig · 36 maanden looptijd
                </p>
                <ul>
                  <li>
                    Inclusief service én batterij
                  </li>
                  <li>
                    Directe vervanging bij defecte accu
                  </li>
                  <li>
                    5 jaar garantie op voertuig en batterij
                  </li>
                  <li>
                    Track &amp; Trace + 24/7 diefstalservice
                  </li>
                  <li>
                    Onderhoud volledig geregeld
                  </li>
                  <li>
                    Geen hoge investering vooraf
                  </li>
                </ul>
                <a href="#offerte" className="btn btn-primary">Vraag leasevoorstel aan</a>
              </div>
              <div className="lk-card">
                <h3>
                  Volledige aankoop
                </h3>
                <p className="lk-sub">
                  Direct eigenaar
                </p>
                <div className="lk-price">
                  €2.981<small> excl. BTW</small>
                </div>
                <p className="lk-note">
                  Inclusief batterij · eenmalige aanschaf
                </p>
                <ul>
                  <li>
                    Direct eigenaarschap van de scooter
                  </li>
                  <li>
                    Fiscaal handig i.c.m. MIA/VAMIL of KIA
                  </li>
                  <li>
                    5 jaar fabrieksgarantie
                  </li>
                  <li>
                    5 jaar / 500 cycli batterijgarantie
                  </li>
                  <li>
                    Geen looptijdverplichting
                  </li>
                  <li>
                    Service-contract apart af te sluiten
                  </li>
                </ul>
                <a href="#offerte" className="btn btn-secondary">Vraag koopofferte aan</a>
              </div>
            </div>
          </div>
        </section>
        {/* INDUSTRIES */}
        <section className="industries">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Voor wie</span>
              <h2>
                Voor welke sectoren is de Silence S02 ideaal?
              </h2>
              <p className="intro-text">
                Gebouwd voor bedrijven die ritten móéten kunnen blijven rijden — tijdens piekuren en met meerdere bezorgers.
              </p>
            </div>
            <div className="ind-grid">
              <div className="ind-tile">
                <span className="ind-ic">🍕</span>
                <h3>
                  Food delivery &amp; franchise
                </h3>
                <p>
                  Voor shifts, piekmomenten en intensief gebruik
                </p>
              </div>
              <div className="ind-tile">
                <span className="ind-ic">💊</span>
                <h3>
                  Apotheken &amp; zorglogistiek
                </h3>
                <p>
                  Betrouwbaarheid en punctualiteit
                </p>
              </div>
              <div className="ind-tile">
                <span className="ind-ic">📦</span>
                <h3>
                  Post &amp; pakketbezorging
                </h3>
                <p>
                  Robuuste stadsroutes met hoge frequentie
                </p>
              </div>
              <div className="ind-tile">
                <span className="ind-ic">🔧</span>
                <h3>
                  Service- &amp; stadslogistiek
                </h3>
                <p>
                  Wendbaar, krachtig en onderhoudsarm
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* STAPPEN */}
        <section className="steps">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow on-dark">Zo werkt het</span>
              <h2>
                Van offerte tot bezorging in 4 stappen
              </h2>
              <p>
                Wij houden bezorgvoertuigen 7 dagen per week rijdend — met snelle diagnose en service op locatie door heel Nederland.
              </p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">
                  01.
                </div>
                <h3>
                  Aanvraag
                </h3>
                <p>
                  Vraag een leasevoorstel aan of plan een vrijblijvend adviesgesprek over jouw bezorgoperatie.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">
                  02.
                </div>
                <h3>
                  Voorstel op maat
                </h3>
                <p>
                  Wij stellen een voorstel op afgestemd op jouw vloot, inzet en looptijd. Transparant, zonder verrassingen.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">
                  03.
                </div>
                <h3>
                  Levering
                </h3>
                <p>
                  Na akkoord leveren wij de Silence S02 gebruiksklaar af, inclusief Track &amp; Trace-installatie.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">
                  04.
                </div>
                <h3>
                  Service tijdens lease
                </h3>
                <p>
                  Onderhoud, accuvervanging en 24/7 diefstalservice geregeld. Jij focust op bezorgen.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="faq">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Veelgestelde vragen</span>
              <h2>
                Bezorgscooter leasen — jouw vragen beantwoord
              </h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-q">
                  Kan ik een elektrische bezorgscooter leasen?
                </summary>
                <div className="faq-a">
                  <p>
                    Ja. De Silence S02 lease je via het <strong>batterij-abonnement</strong>: €999 excl. BTW eenmalig en €5,71 per dag (€39,95 per week), inclusief service en batterij, met een looptijd van 36 maanden. Bij een defecte batterij wordt direct een werkende geleverd. Volledige <strong>aankoop</strong> kan ook, vanaf €2.981 excl. BTW.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat kost een elektrische bezorgscooter zakelijk (lease of koop)?
                </summary>
                <div className="faq-a">
                  <p>
                    Bij het batterij-abonnement betaal je €5,71 per dag — €39,95 per week (incl. service + batterij) — met €999 instapkosten. Bij volledige aankoop ben je vanaf €2.981 excl. BTW direct eigenaar, inclusief batterij. Welke vorm voordeliger is, hangt af van je vlootgrootte en fiscale situatie.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is de actieradius van de Silence S02?
                </summary>
                <div className="faq-a">
                  <p>
                    De Silence S02 heeft een actieradius tot 147 km (WMTC). In de praktijk hangt dit af van rijstijl, belading en rijmodus (Eco/City).
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Hoe werkt de uitneembare batterij?
                </summary>
                <div className="faq-a">
                  <p>
                    De accu is een trolley-systeem van 41 kg dat je in één beweging losklikt. Hierdoor laad je binnen op of wissel je eenvoudig accu&apos;s tussen shifts — handig als je met meerdere bezorgers werkt.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Hoe laad je de Silence S02 op?
                </summary>
                <div className="faq-a">
                  <p>
                    Opladen kan op drie manieren: in het voertuig, buiten het voertuig of via een laadpaal. De laadtijd is gemiddeld 7 tot 9 uur.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is de garantie op voertuig en batterij?
                </summary>
                <div className="faq-a">
                  <p>
                    Je krijgt 5 jaar garantie op voertuig én batterij. Voor de batterij geldt 5 jaar of 500 laadcycli, wat als eerste bereikt wordt.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Is een bezorgscooter met uitneembare accu handig?
                </summary>
                <div className="faq-a">
                  <p>
                    Ja — voor bezorgdiensten is een uitneembare accu vaak de meest praktische keuze. Je bent niet afhankelijk van een vaste laadplek en kunt met meerdere bezorgers of shifts werken door accu&apos;s te wisselen, zonder dat de scooter stil hoeft te staan.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Heeft de Silence S02 tracking?
                </summary>
                <div className="faq-a">
                  <p>
                    Ja: een Tracefy Tracker met live locatie via app, ritgeschiedenis en diefstalalarm. Zo is de scooter altijd te vinden bij diefstal en kan onderhoud automatisch worden ingepland.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </section>
      <section className="el-quote" id="offerte">
        <div className="el-quote-inner">
          <div className="el-quote-col el-quote-info">
            <div className="quote-intro">
              <span className="eyebrow on-dark">Offerte aanvragen</span>
              <h2>
                Binnen 24 uur een persoonlijk voorstel
              </h2>
              <p className="sub">
                Vraag een vrijblijvend voorstel aan voor jouw vloot, inzet en looptijd. Wij nemen dezelfde of volgende werkdag persoonlijk contact met je op.
              </p>
              <ul className="quote-contact-list">
                <li>
                  <span className="icon">&#128222;</span>Telefoon: <a href="tel:+31857605170">085-7605170</a>
                </li>
                <li>
                  <span className="icon">&#128172;</span>WhatsApp: <a href="https://wa.me/31857605170?text=Hoi%20Elox%20Lease%2C%20ik%20heb%20een%20vraag%20over%20de%20Silence%20S02." target="_blank">Direct chatten met Elox</a>
                </li>
                <li>
                  <span className="icon">&#9993;</span>E-mail: <a href="mailto:info@eloxlease.nl">info@eloxlease.nl</a>
                </li>
              </ul>
              <div className="guarantee-box">
                <strong>Voorstel op maat</strong> Meer scooters betekent een scherper voorstel. Wij stemmen de prijs af op jouw vlootgrootte en inzet.
              </div>
            </div>
          </div>
          <div className="el-quote-col el-quote-form">
            <div className="el-widget">
              <h3 className="quote-form-title">
                Vraag jouw voorstel aan
              </h3>
            </div>
            <Cf7Form formName="silences02">
              <div className="cf7-row">
                <p>
                  <label>
                    Bedrijfsnaam <span className="req">*</span><br /> <span className="wpcf7-form-control-wrap" data-name="bedrijfsnaam">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Bv. Pizzeria De Hoek" type="text" name="bedrijfsnaam" />
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    Naam contactpersoon <span className="req">*</span><br /> <span className="wpcf7-form-control-wrap" data-name="naam">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Voor- en achternaam" type="text" name="naam" />
                    </span>
                  </label>
                </p>
              </div>
              <div className="cf7-row">
                <p>
                  <label>
                    E-mailadres <span className="req">*</span><br /> <span className="wpcf7-form-control-wrap" data-name="email">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="naam@bedrijf.nl" type="email" name="email" />
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    Telefoonnummer <span className="req">*</span><br /> <span className="wpcf7-form-control-wrap" data-name="telefoon">
                    <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" placeholder="06 12345678" type="tel" name="telefoon" />
                    </span>
                  </label>
                </p>
              </div>
              <p>
                <label>
                  Waar heb je interesse in? <span className="req">*</span><br /> <span className="wpcf7-form-control-wrap" data-name="interesse">
                  <select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="interesse">
                    <option value="">
                      &#8212;Kies een optie&#8212;
                    </option>
                    <option value="Batterij-abonnement (lease)">
                      Batterij-abonnement (lease)
                    </option>
                    <option value="Volledige aankoop">
                      Volledige aankoop
                    </option>
                    <option value="Adviesgesprek">
                      Adviesgesprek
                    </option>
                  </select>
                  </span>
                </label>
              </p>
              <p>
                <label>
                  Aantal Silence S02 scooters<br /> <span className="wpcf7-form-control-wrap" data-name="aantal">
                  <input className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number" min="1" aria-invalid="false" placeholder="Bv. 5" type="number" name="aantal" />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  Bericht of vraag (optioneel)<br /> <span className="wpcf7-form-control-wrap" data-name="bericht">
                  <textarea cols={40} rows={10} maxLength={2000} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Bv. gewenste startdatum, vragen over levering..." name="bericht">
                  </textarea>
                  </span>
                </label>
              </p>
              <p>
                <span className="wpcf7-form-control-wrap" data-name="privacy"><span className="wpcf7-form-control wpcf7-acceptance"><span className="wpcf7-list-item">
                <label>
                  <input type="checkbox" name="privacy" value="1" aria-invalid="false" />
                  <span className="wpcf7-list-item-label">Ik ga akkoord met de <a href="https://eloxlease.nl/privacyverklaring/">privacyverklaring</a></span>
                </label>
                </span></span></span>
              </p>
              <p>
                <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Stuur mijn aanvraag" />
              </p>
            </Cf7Form>
          </div>
        </div>
      </section>
      <section className="el-section" />
    </>
  );
}
