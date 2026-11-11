import Image from "next/image";

import { Cf7Form } from "../cf7-form";
import { JsonLd } from "../json-ld";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "E-Cargobike — elektrische bezorgfiets",
    "image": "https://eloxlease.nl/wp-content/uploads/2025/12/ecargo1voorkant-scaled.jpg",
    "description": "Elektrische bezorgfiets ontwikkeld voor intensief professioneel gebruik. Te leasen of te kopen via Elox Lease.",
    "brand": {
      "@type": "Brand",
      "name": "Elox Lease"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "129",
      "highPrice": "163",
      "offerCount": "3",
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
        "name": "Kan ik een elektrische bezorgfiets leasen of kopen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beide kan bij Elox Lease. Leasen kan via operational lease vanaf €129 per maand (48 maanden), inclusief verzekering, onderhoud en Track & Trace. Kopen kan ook — vraag een vrijblijvende koopofferte aan."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is het verschil tussen een bezorgfiets leasen en kopen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij leasen betaal je een vast maandbedrag inclusief verzekering, onderhoud en service — geen aanschafkosten vooraf. Bij kopen ben je direct eigenaar en kun je fiscaal voordeel halen via MIA/VAMIL of KIA, maar regel je onderhoud en verzekering zelf."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is de actieradius van de E-Cargobike?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De accu is afgestemd op intensieve inzet en levert in de praktijk een actieradius van 120-140 km, zodat je meerdere routes per dag rijdt zonder laadstress."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zit er inbegrepen bij de lease van een bezorgfiets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De E-Cargobike met accu en lader, verzekering tegen diefstal en schade, Track & Trace met diefstalopsporing, preventief onderhoud en reparatie op locatie, 24/7 service en brandingplaten op de zijkanten."
        }
      },
      {
        "@type": "Question",
        "name": "Voor welke bedrijven is de elektrische bezorgfiets geschikt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor horeca en maaltijdbezorging, retail en lokale bezorging, apotheken en zorglogistiek, franchiseformules en bedrijven met intensieve stedelijke routes."
        }
      }
    ]
  }
];

export const ECargobikeWhatsappHref = "https://wa.me/31857605170?text=Hoi%20Elox%20Lease%2C%20ik%20heb%20een%20vraag%20over%20de%20E-Cargobike.";

export function ECargobikePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <section className="el-section el-section--flush">
        {/* E-Cargobike - Bezorgfiets leasen of kopen */}
        <div className="topbar">
          <div className="container">
            <div className="usp-list">
              <span>20 jaar bezorgervaring</span> <span>35.000+ serviceverzoeken</span> <span>Onderhoud op locatie</span>
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
              <span className="eyebrow">Elektrische bezorgfiets · E-Cargobike</span>
              <h1>
                Bezorgfiets <strong>leasen of kopen</strong>
              </h1>
              <p className="lead">
                De E-Cargobike is ontwikkeld op basis van 20 jaar bezorgervaring en 35.000+ serviceverzoeken — gebouwd voor dagelijks intensief gebruik. Lease volledig operationeel of koop de fiets. Jij bezorgt door, wij regelen de rest.
              </p>
              <div className="price-tag">
                <span className="label">Leasen vanaf</span> <span className="amount">€129</span> <span className="per">p/mnd</span> <span className="divider"></span> <span className="label">of</span> <span className="amount fs-22">Kopen</span> <span className="per">prijs op aanvraag</span>
              </div>
              <div className="cta-row">
                <a href="#offerte" className="btn btn-primary">Vraag leasevoorstel aan →</a> <a href="#leasekoop" className="btn btn-secondary">Leasen of kopen?</a>
              </div>
              <div className="micro-trust">
                <span>Binnen 24 uur reactie</span> <span>Gratis testweek mogelijk</span> <span>Inclusief verzekering &amp; service</span>
              </div>
            </div>
            <div className="hero-image">
              <Image src="/sites/eloxlease/ecargobike-voorkant.jpg" alt="E-Cargobike elektrische bezorgfiets leasen of kopen bij Elox Lease" width={1920} height={2560} sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="badge">
                Actieradius<strong>120-140 km</strong>
              </div>
            </div>
          </div>
        </section>
        {/* TRUST */}
        <div className="trust-bar">
          <div className="container">
            <div className="label">
              Gebouwd op bewezen bezorgervaring
            </div>
            <div className="trust-stats">
              <div className="trust-stat">
                <div className="num">
                  20 jaar
                </div>
                <div className="lbl">
                  Bezorgervaring
                </div>
              </div>
              <div className="trust-stat">
                <div className="num">
                  35.000+
                </div>
                <div className="lbl">
                  Serviceverzoeken verwerkt
                </div>
              </div>
              <div className="trust-stat">
                <div className="num">
                  120-140 km
                </div>
                <div className="lbl">
                  Actieradius in de praktijk
                </div>
              </div>
              <div className="trust-stat">
                <div className="num">
                  24/7
                </div>
                <div className="lbl">
                  Toegang tot service
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
                <Image src="/sites/eloxlease/ecargobike-bezorger-5.jpg" alt="Bezorger met elektrische E-Cargobike bezorgfiets in de stad" width={1200} height={1600} sizes="(max-width: 900px) 100vw, 50vw" className="rounded-shadow" />
              </div>
              <div>
                <span className="eyebrow">Gebouwd rond uptime</span>
                <h2>
                  Geen standaard e-bike met box. Een echte bezorgfiets.
                </h2>
                <p>
                  De E-Cargobike van Elox Lease is ontwikkeld voor professioneel gebruik, waarbij betrouwbaarheid, stabiliteit en onderhoudsgemak centraal staan. Niet ontworpen door engineers achter een bureau, maar samen met bezorgers en monteurs die weten waar het misgaat.
                </p>
                <p>
                  Elke keuze in het ontwerp is gemaakt met één doel: zorgen dat jouw bezorging blijft draaien, ook tijdens piekmomenten.
                </p>
                <ul className="benefits">
                  <li>
                    <strong>Actieradius 120-140 km</strong> — meerdere routes per dag zonder laadstress
                  </li>
                  <li>
                    <strong>Stabiel onder volle belading</strong> — frame en aandrijving afgestemd op zware lading
                  </li>
                  <li>
                    <strong>Onderhoudsarm ontworpen</strong> — robuuste onderdelen, snel te servicen op locatie
                  </li>
                  <li>
                    <strong>Eén partner</strong> — Track &amp; Trace, verzekering, onderhoud en service geïntegreerd
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
                Ontworpen voor dagelijkse intensieve bezorging
              </h2>
              <p className="intro-text">
                Elke component is gekozen om stilstand te minimaliseren en onderhoud voorspelbaar te houden.
              </p>
            </div>
            <div className="feat-grid">
              <div className="feat-card">
                <div className="ic">
                  ⚙️
                </div>
                <h3>
                  Geïntegreerde achterwielmotor
                </h3>
                <p>
                  Krachtige aandrijving met maximale stabiliteit. Stabiele, directe ondersteuning en betrouwbaar rijgedrag bij volle belading.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  🔋
                </div>
                <h3>
                  Betrouwbare actieradius
                </h3>
                <p>
                  Accu afgestemd op intensieve inzet, met een actieradius 120-140 km. Meerdere routes per dag zonder laadstress.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  🛞
                </div>
                <h3>
                  Gietijzeren wielen
                </h3>
                <p>
                  Onderhoudsarm en bestand tegen dagelijks gebruik. Voorkomt spaakbreuk en kromtrekken bij drempels en stoepranden.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  🎨
                </div>
                <h3>
                  Brandingplaten
                </h3>
                <p>
                  Professionele uitstraling. De zijkanten zijn voorzien van brandingplaten zodat jouw bezorgfiets direct herkenbaar is.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  🛠️
                </div>
                <h3>
                  Gashendel tot 6 km/u
                </h3>
                <p>
                  Legale gashendel die helpt bij gecontroleerd wegrijden met belading en manoeuvreren op krappe plekken.
                </p>
              </div>
              <div className="feat-card">
                <div className="ic">
                  📍
                </div>
                <h3>
                  Track &amp; Trace
                </h3>
                <p>
                  Diefstalopsporing en vlootinzicht. Bij diefstal direct te lokaliseren, en onderhoud wordt automatisch ingepland.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========= VIDEO ========= */}
        <section className="video-section">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Zie het zelf</span>
              <h2>
                De E-Cargobike in actie
              </h2>
              <p className="intro-text">
                Bekijk hoe de elektrische bezorgfiets presteert in de dagelijkse bezorgpraktijk.
              </p>
            </div>
            <div className="video-wrap">
              <iframe src="https://www.youtube.com/embed/zD7U3XZh4ls" title="De E-Cargobike in actie" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>
        {/* LEASEN OF KOPEN */}
        <section className="leasekoop" id="leasekoop">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Twee manieren om te starten</span>
              <h2>
                Bezorgfiets leasen of kopen — wat past bij jou?
              </h2>
              <p className="intro-text">
                Beide kan bij Elox Lease. Operational lease geeft je maximale ontzorging tegen vast maandbedrag. Kopen geeft direct eigenaarschap en fiscaal voordeel.
              </p>
            </div>
            <div className="lk-grid">
              <div className="lk-card featured">
                <span className="lk-badge">Meest gekozen</span>
                <h3>
                  Operational lease
                </h3>
                <p className="lk-sub">
                  Volledig ontzorgd
                </p>
                <div className="lk-price">
                  €129<small> p/mnd</small>
                </div>
                <p className="lk-note">
                  Vanaf-prijs bij 48 maanden · excl. BTW
                </p>
                <ul>
                  <li>
                    Geen aanschafkosten vooraf
                  </li>
                  <li>
                    Verzekering tegen diefstal en schade
                  </li>
                  <li>
                    Track &amp; Trace + diefstalopsporing
                  </li>
                  <li>
                    Preventief onderhoud op locatie
                  </li>
                  <li>
                    Reparatieservice op locatie
                  </li>
                  <li>
                    24/7 toegang tot servicekanalen
                  </li>
                  <li>
                    Vervangend voertuig bij langdurige reparatie
                  </li>
                  <li>
                    Vast maandbedrag, geen verrassingen
                  </li>
                </ul>
                <a href="#offerte" className="btn btn-primary">Vraag leasevoorstel aan</a>
              </div>
              <div className="lk-card">
                <h3>
                  Kopen
                </h3>
                <p className="lk-sub">
                  Direct eigenaar
                </p>
                <div className="lk-price fs-30">
                  Prijs op aanvraag
                </div>
                <p className="lk-note">
                  Vraag een vrijblijvende koopofferte aan
                </p>
                <ul>
                  <li>
                    Direct eigenaarschap van de bezorgfiets
                  </li>
                  <li>
                    Fiscaal voordeel mogelijk via MIA/VAMIL of KIA
                  </li>
                  <li>
                    Geen looptijdverplichting
                  </li>
                  <li>
                    Service-contract apart af te sluiten
                  </li>
                  <li>
                    Ideaal voor bedrijven met eigen werkplaats
                  </li>
                </ul>
                <a href="#offerte" className="btn btn-secondary">Vraag koopofferte aan</a>
              </div>
            </div>
          </div>
        </section>
        {/* LOOPTIJDEN */}
        <section className="terms" id="looptijden">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Leaseperiodes</span>
              <h2>
                Kies de looptijd die past bij jouw bezorgoperatie
              </h2>
              <p className="intro-text">
                Ongeacht de looptijd zijn alle essentiële services standaard inbegrepen. Het verschil zit in maandlast en zekerheid.
              </p>
            </div>
            <div className="term-grid">
              <div className="term-card">
                <div className="term-len">
                  24 maanden
                </div>
                <div className="term-price">
                  €163<small> p/mnd</small>
                </div>
                <p className="term-desc">
                  Flexibel instappen. Ideaal voor het testen van bezorgen op de korte termijn. Maximale flexibiliteit.
                </p>
                <a href="#offerte" className="btn btn-secondary">Offerte aanvragen</a>
              </div>
              <div className="term-card popular">
                <span className="pop-badge">Meest gekozen</span>
                <div className="term-len">
                  36 maanden
                </div>
                <div className="term-price">
                  €140<small> p/mnd</small>
                </div>
                <p className="term-desc">
                  Beste balans tussen maandlast en zekerheid. Geschikt voor stabiele bezorgvolumes.
                </p>
                <a href="#offerte" className="btn btn-primary">Offerte aanvragen</a>
              </div>
              <div className="term-card">
                <div className="term-len">
                  48 maanden
                </div>
                <div className="term-price">
                  €129<small> p/mnd</small>
                </div>
                <p className="term-desc">
                  Maximale voorspelbaarheid en de laagste maandlast. Ideaal voor vaste routes en contracten.
                </p>
                <a href="#offerte" className="btn btn-secondary">Offerte aanvragen</a>
              </div>
            </div>
            <p className="disclaimer">
              Bedragen op basis van operational lease via Elbuco, exclusief BTW. Onderhoud, Track &amp; Trace en diefstalservice zijn volledig inbegrepen in de maandprijs. Prijslijst geldig per 1 januari 2026.
            </p>
          </div>
        </section>
        {/* INBEGREPEN */}
        <section className="included">
          <div className="container">
            <div className="grid">
              <div>
                <span className="eyebrow">Volledig operationeel</span>
                <h2>
                  Alles wat je nodig hebt om zorgeloos te bezorgen — inbegrepen
                </h2>
                <p>
                  Bij Elox Lease lease je de E-Cargobike volledig operationeel. Geen losse contracten, geen onverwachte kosten en één partner die verantwoordelijk is voor mobiliteit, service en continuïteit.
                </p>
                <ul className="incl-list">
                  <li>
                    E-Cargobike + accu &amp; lader
                  </li>
                  <li>
                    Verzekering diefstal &amp; schade
                  </li>
                  <li>
                    Track &amp; Trace + diefstalopsporing
                  </li>
                  <li>
                    Preventief onderhoud op locatie
                  </li>
                  <li>
                    Reparatieservice op locatie
                  </li>
                  <li>
                    24/7 toegang servicekanalen
                  </li>
                  <li>
                    Vervangend voertuig bij reparatie
                  </li>
                  <li>
                    Brandingplaten op de zijkanten
                  </li>
                </ul>
              </div>
              <div className="incl-img">
                <Image src="/sites/eloxlease/ecargobike-zijkant-straat.jpg" alt="E-Cargobike elektrische bezorgfiets in het straatbeeld" width={1920} height={2560} sizes="(max-width: 900px) 100vw, 50vw" />
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
                Van test tot bezorging in 4 stappen
              </h2>
              <p>
                Wij houden bezorgvoertuigen 7 dagen per week rijdend — met snelle diagnose, mobiele monteurs en service op locatie door heel Nederland.
              </p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">
                  01.
                </div>
                <h3>
                  Test of offerte
                </h3>
                <p>
                  Start met een gratis testaanvraag (7–14 werkdagen) of een leasevoorstel op maat.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">
                  02.
                </div>
                <h3>
                  Testperiode &amp; evaluatie
                </h3>
                <p>
                  Gebruik de E-Cargobike in je dagelijkse operatie. Daarna stemmen we het voorstel af op jouw volumes en routes.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">
                  03.
                </div>
                <h3>
                  Leasevoorstel &amp; contract
                </h3>
                <p>
                  Na akkoord stellen we het operationele leasecontract op. Alles vooraf helder, geen kleine lettertjes.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">
                  04.
                </div>
                <h3>
                  Levering &amp; beheer
                </h3>
                <p>
                  De E-Cargobike wordt geleverd en opgenomen in ons service- en beheersysteem. Jij focust op bezorgen.
                </p>
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
                Voor bedrijven die geen stilstand kunnen permitteren
              </h2>
              <p className="intro-text">
                De E-Cargobike wordt ingezet door bedrijven die dagelijks afhankelijk zijn van hun bezorging.
              </p>
            </div>
            <div className="ind-grid">
              <div className="ind-tile">
                <span className="ind-ic">🍕</span>
                <h3>
                  Horeca &amp; maaltijdbezorging
                </h3>
                <p>
                  Piekmomenten, veel stops per uur
                </p>
              </div>
              <div className="ind-tile">
                <span className="ind-ic">💊</span>
                <h3>
                  Apotheek &amp; zorglogistiek
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
                  Hoge stopfrequentie, last-mile
                </p>
              </div>
              <div className="ind-tile">
                <span className="ind-ic">🏬</span>
                <h3>
                  Retail &amp; stadslogistiek
                </h3>
                <p>
                  Lokale bezorging, franchiseformules
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
                Bezorgfiets leasen of kopen — jouw vragen beantwoord
              </h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-q">
                  Kan ik een elektrische bezorgfiets leasen of kopen?
                </summary>
                <div className="faq-a">
                  <p>
                    Beide kan bij Elox Lease. <strong>Leasen</strong> kan via operational lease vanaf €129 per maand (48 maanden), inclusief verzekering, onderhoud en Track &amp; Trace. <strong>Kopen</strong> kan ook — dan ben je direct eigenaar van de E-Cargobike. Vraag een vrijblijvende koopofferte aan voor de actuele prijs.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is het verschil tussen een bezorgfiets leasen en kopen?
                </summary>
                <div className="faq-a">
                  <p>
                    Bij <strong>leasen</strong> betaal je een vast maandbedrag inclusief verzekering, onderhoud en service — geen aanschafkosten vooraf, en je bezorging blijft draaien als er iets misgaat. Bij <strong>kopen</strong> ben je direct eigenaar en kun je fiscaal voordeel halen via MIA/VAMIL of KIA, maar regel je onderhoud en verzekering zelf.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is een elektrische bezorgfiets (E-Cargobike)?
                </summary>
                <div className="faq-a">
                  <p>
                    Een elektrische bezorgfiets, ook wel e-cargobike genoemd, is een bedrijfsfiets met extra laadvermogen waarmee je efficiënt bezorgt in stedelijke gebieden. Je vermijdt parkeerproblemen, rijdt soepel door druk verkeer en maakt meer stops per uur — ideaal voor last-mile delivery.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is de actieradius van de E-Cargobike?
                </summary>
                <div className="faq-a">
                  <p>
                    De accu is afgestemd op intensieve inzet en levert in de praktijk een actieradius van 120-140 km. Zo rijd je meerdere routes per dag zonder laadstress.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is het voordeel van een bezorgfiets t.o.v. een bezorgscooter?
                </summary>
                <div className="faq-a">
                  <p>
                    Een elektrische bezorgfiets is vaak goedkoper in gebruik, eenvoudiger te parkeren en ideaal voor korte afstanden met veel stops. In drukke binnensteden is een bezorgfiets vaak sneller van deur tot deur. Een bezorgscooter is geschikter bij langere afstanden buiten het centrum. Veel bedrijven kiezen voor een mix.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat zit er inbegrepen bij de lease?
                </summary>
                <div className="faq-a">
                  <p>
                    De E-Cargobike met accu en lader, verzekering tegen diefstal en schade, Track &amp; Trace met diefstalopsporing, preventief onderhoud en reparatie op locatie, 24/7 service, vervangend voertuig bij langdurige reparatie en brandingplaten op de zijkanten.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Kan ik de bezorgfiets bestickeren in mijn eigen huisstijl?
                </summary>
                <div className="faq-a">
                  <p>
                    Ja. De E-Cargobike wordt geleverd met brandingplaten op de zijkanten. Dit werkt sterk voor herkenbaarheid, professionaliteit en merkvertrouwen bij klanten.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Hoe lang duurt een testweek?
                </summary>
                <div className="faq-a">
                  <p>
                    Een test duurt 7 tot 14 werkdagen. De test is gratis, inclusief verzekering en volledig operationeel inzetbaar. Zo ervaar je eerst hoe de E-Cargobike presteert binnen jouw bezorging.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </section>
      <section className="el-quote el-quote--styled" id="offerte">
        <div className="el-quote-inner">
          <div className="el-quote-col el-quote-info">
            <div className="quote-intro">
              <span className="eyebrow on-dark">Offerte aanvragen</span>
              <h2>
                Binnen 24 uur een persoonlijk voorstel
              </h2>
              <p className="sub">
                Vraag een vrijblijvend leasevoorstel of koopofferte aan. Wij nemen dezelfde of volgende werkdag persoonlijk contact met je op.
              </p>
              <ul className="quote-contact-list">
                <li>
                  <span className="icon">&#128222;</span>Telefoon: <a href="tel:+31857605170">085-7605170</a>
                </li>
                <li>
                  <span className="icon">&#128172;</span>WhatsApp: <a href="https://wa.me/31857605170?text=Hoi%20Elox%20Lease%2C%20ik%20heb%20een%20vraag%20over%20de%20E-Cargobike." target="_blank">Direct chatten met Elox</a>
                </li>
                <li>
                  <span className="icon">&#9993;</span>E-mail: <a href="mailto:info@eloxlease.nl">info@eloxlease.nl</a>
                </li>
              </ul>
              <div className="guarantee-box">
                <strong>Gratis testweek mogelijk</strong> Ervaar de E-Cargobike 7 tot 14 werkdagen in je eigen bezorgoperatie voordat je beslist. Inclusief verzekering.
              </div>
            </div>
          </div>
          <div className="el-quote-col el-quote-form">
            <div className="el-widget">
              <h3 className="quote-form-title">
                Vraag jouw voorstel aan
              </h3>
            </div>
            <Cf7Form formName="elektrischebezorgfiets">
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
                  Wat wil je aanvragen? <span className="req">*</span><br /> <span className="wpcf7-form-control-wrap" data-name="aanvraag">
                  <select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="aanvraag">
                    <option value="">
                      &#8212;Kies een optie&#8212;
                    </option>
                    <option value="Leasevoorstel">
                      Leasevoorstel
                    </option>
                    <option value="Koopofferte">
                      Koopofferte
                    </option>
                    <option value="Gratis testweek">
                      Gratis testweek
                    </option>
                    <option value="Advies op maat">
                      Advies op maat
                    </option>
                  </select>
                  </span>
                </label>
              </p>
              <div className="cf7-row">
                <p>
                  <label>
                    Gewenste leaseperiode<br /> <span className="wpcf7-form-control-wrap" data-name="leaseperiode">
                    <select className="wpcf7-form-control wpcf7-select" aria-invalid="false" name="leaseperiode">
                      <option value="">
                        &#8212;Kies een optie&#8212;
                      </option>
                      <option value="24 maanden">
                        24 maanden
                      </option>
                      <option value="36 maanden">
                        36 maanden
                      </option>
                      <option value="48 maanden">
                        48 maanden
                      </option>
                      <option value="Weet ik nog niet">
                        Weet ik nog niet
                      </option>
                    </select>
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    Aantal E-Cargobikes<br /> <span className="wpcf7-form-control-wrap" data-name="aantal">
                    <input className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number" min="1" aria-invalid="false" placeholder="Bv. 3" type="number" name="aantal" />
                    </span>
                  </label>
                </p>
              </div>
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
      <section className="el-section el-section--flush" />
    </>
  );
}
