import Image from "next/image";

import { Cf7Form } from "../cf7-form";
import { JsonLd } from "../json-ld";
import { CompositionTabs } from "./composition-tabs";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cooktek Pizzabag Charger & ThermaCube Charger",
    "image": [
      "https://eloxlease.nl/wp-content/uploads/cooktek-pizzabag-charger-18-inch.png",
      "https://eloxlease.nl/wp-content/uploads/cooktek-thermacube-charger.png"
    ],
    "description": "Professionele inductie-warmhoudsystemen voor pizzabezorging en food delivery. Te leasen via Elox Lease in flexibele samenstellingen.",
    "brand": {
      "@type": "Brand",
      "name": "Cooktek"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welbilt / Middleby"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "102",
      "highPrice": "340",
      "offerCount": "10",
      "priceValidUntil": "2027-04-01",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Elox Lease B.V."
      },
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M",
        "billingIncrement": 1,
        "unitText": "MONTH"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wat is het verschil tussen de Cooktek Pizzabag Charger en de ThermaCube Charger?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De Pizzabag Charger is specifiek ontwikkeld voor pizza's met platte tassen en thermal discs die de pizza krokant houden. De ThermaCube Charger is een breder warmhoudsysteem met kubusvormige tassen en convectie-tray voor diverse gerechten zoals burgers, friet, snacks en maaltijden met saus."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe lang blijft het eten warm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beide systemen houden bestellingen tot circa 30 minuten op temperatuur na het opladen van de disc of tray."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is de levensduur van een Cooktek systeem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Afhankelijk van gebruik en omgevingsfactoren bedraagt de levensduur circa 5 tot 7 jaar."
        }
      },
      {
        "@type": "Question",
        "name": "Wat is inbegrepen bij de operational lease?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De Cooktec valt binnen de inboedelverzekering van de klant. Elox verzorgt het onderhoud gedurende de looptijd tegen €20 service fee per maand. Aan het einde van het 48-maands contract koopt Elbuco het product terug met een restwaarde van €0,01."
        }
      },
      {
        "@type": "Question",
        "name": "Welke samenstellingen zijn mogelijk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U kunt kiezen voor alleen de charger, of een complete set met 1, 2, 5 of 10 tassen inclusief warmhoudschijven of trays. Zo past de oplossing altijd bij uw bezorgvolume."
        }
      }
    ]
  }
];

export const CooktekWhatsappHref = "https://wa.me/31857605170?text=Hoi%20Elox%20Lease%2C%20ik%20heb%20een%20vraag%20over%20Cooktek%20leasen.";

export function CooktekPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <CompositionTabs />
      <section className="el-section">
        {/* COOKTEK LEASE PAGE */}
        {/* ========= TOPBAR USP STRIP ========= */}
        <div className="topbar">
          <div className="container">
            <div className="usp-list">
              <span>Bewezen techniek, al 15+ jaar marktleider</span> <span>48 maanden operational lease</span> <span>Onderhoud inbegrepen</span>
            </div>
            <div>
              <a href="tel:+31857605170">📞 085-7605170</a>
            </div>
          </div>
        </div>
        {/* ========= HERO ========= */}
        <section className="hero">
          <div className="container">
            <div>
              <span className="eyebrow">Cooktek warmhoudsystemen via Elox Lease</span>
              <h1>
                Cooktek Pizzabag Charger &amp; <strong>ThermaCube</strong> leasen
              </h1>
              <p className="lead">
                Warme pizza&apos;s, tevreden klanten en betere beoordelingen. Met de bewezen Cooktek warmhoudsystemen blijven bestellingen tot 30 minuten op temperatuur — al ruim 15 jaar dé standaard in professionele food delivery.
              </p>
              <div className="price-tag">
                <span className="label">Al vanaf</span> <span className="amount">€102</span> <span className="per">per maand · 48 mnd lease · excl. BTW</span>
              </div>
              <div className="cta-row">
                <a href="#offerte" className="btn btn-primary">Vraag direct offerte aan →</a> <a href="#samenstellingen" className="btn btn-secondary">Bekijk samenstellingen</a>
              </div>
              <div className="micro-trust">
                <span>Binnen 24 uur reactie</span> <span>Geen aanschafkosten vooraf</span> <span>Onderhoud inbegrepen</span>
              </div>
            </div>
            <div className="hero-image">
              <Image src="/sites/eloxlease/cooktek-pizzabag-charger.png" alt="Cooktek Pizzabag Charger 18 inch — professioneel warmhoudsysteem voor pizzabezorging" width={900} height={900} sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="badge">
                15+ jaar<strong>marktstandaard</strong>
              </div>
            </div>
          </div>
        </section>
        {/* ========= TRUST LOGO BAR ========= */}
        <div className="trust-bar">
          <div className="container">
            <div className="label">
              Vertrouwd door toonaangevende bezorgketens
            </div>
            <div className="trust-logos">
              {/* Vervang src met je geuploade logo's. Aanbevolen: transparant PNG, max-hoogte 80px */}
              <span className="logo-name">New York Pizza</span> <span className="logo-name">Pizza Hut</span> <span className="logo-name">Pizza Talia</span> <span className="logo-name">TacoMundo</span> <span className="logo-name">Kwalitaria</span> <span className="logo-name">Burger Business</span>
            </div>
          </div>
        </div>
        {/* ========= INTRO / PROBLEM-SOLUTION ========= */}
        <section className="intro">
          <div className="container">
            <div className="grid">
              <div>
                <Image src="/sites/eloxlease/cooktek-thermacube-tas.png" alt="Cooktek ThermaCube tas met VaporVent voor warmhoudbezorging" width={600} height={600} sizes="(max-width: 900px) 100vw, 50vw" className="rounded-shadow" />
              </div>
              <div>
                <span className="eyebrow">Essentieel voor 5-sterren reviews</span>
                <h2>
                  Een lauwe pizza kost je reviews. Een warme bestelling levert ze op.
                </h2>
                <p>
                  In een markt waar bezorging steeds sneller, drukker en concurrerender wordt, is temperatuurbehoud geen luxe meer maar een voorwaarde voor kwaliteit. Klantbeoordelingen op platforms als Thuisbezorgd zijn belangrijker dan ooit — en niets ondermijnt een review sneller dan een koud aankomende bestelling.
                </p>
                <p>
                  Met de <strong>Cooktek Pizzabag Charger</strong> en <strong>ThermaCube Charger</strong> beschikt jouw bezorgorganisatie over één van de meest bewezen warmhoudsystemen ter wereld. Slimme inductietechniek en krachtige warmhoudschijven — ook wel Flashdiscs genoemd — houden bestellingen tijdens transport op de juiste temperatuur.
                </p>
                <ul className="benefits">
                  <li>
                    Tot <strong>30 minuten</strong> op temperatuur per oplading
                  </li>
                  <li>
                    Snel opwarmen: pizza-discs <strong>2–3 minuten</strong>, herladen <strong>≈60 sec</strong>
                  </li>
                  <li>
                    VaporVent™ voorkomt zompig eten — pizza blijft krokant
                  </li>
                  <li>
                    Levensduur <strong>5–7 jaar</strong> bij normaal professioneel gebruik
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ========= PRODUCT COMPARISON ========= */}
        <section className="products" id="producten">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Twee systemen, één doel</span>
              <h2>
                Welke Cooktek past bij jouw vestiging?
              </h2>
              <p className="intro-text">
                Beide systemen werken op dezelfde slimme inductietechniek, maar zijn geoptimaliseerd voor verschillende soorten gerechten en bezorgvolumes.
              </p>
            </div>
            <div className="product-grid">
              {/* Pizza Charger */}
              <div className="product-card">
                <div className="img-wrap">
                  <Image src="/sites/eloxlease/cooktek-pizzabag-charger.png" alt="Cooktek 18 inch Pizzabag Charger PDS Flashpak warmhoudsysteem" width={900} height={900} sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="body">
                  <span className="tag orange">Specifiek voor pizza</span>
                  <h3>
                    Cooktek Pizzabag Charger 18&quot;
                  </h3>
                  <p className="target">
                    Voor pizzeria&apos;s &amp; pizzaformules
                  </p>
                  <ul className="features">
                    <li>
                      Inductie-thermal disc houdt pizza&apos;s krokant
                    </li>
                    <li>
                      Platte tassen — tot 3 pizza&apos;s per tas
                    </li>
                    <li>
                      Opwarmtijd ≈ 2–3 min, herladen ≈ 60 sec
                    </li>
                    <li>
                      Tot 30 min op temperatuur tijdens transport
                    </li>
                    <li>
                      Inzetbaar bij o.a. New York Pizza, Pizza Hut, Pizza Talia
                    </li>
                  </ul>
                  <div className="price-row">
                    <div className="from-price">
                      <small>Leasen vanaf</small> <strong>€102</strong> <small>per maand · 48 mnd · excl. BTW</small>
                    </div>
                    <a href="#offerte" className="btn btn-primary">Offerte aanvragen</a>
                  </div>
                </div>
              </div>
              {/* ThermaCube */}
              <div className="product-card">
                <div className="img-wrap">
                  <Image src="/sites/eloxlease/cooktek-thermacube-charger.png" alt="Cooktek ThermaCube Charger TCS warmhoudsysteem voor diverse gerechten" width={900} height={900} sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="body">
                  <span className="tag">Breed inzetbaar</span>
                  <h3>
                    Cooktek ThermaCube Charger
                  </h3>
                  <p className="target">
                    Voor bezorgrestaurants &amp; diverse menu&apos;s
                  </p>
                  <ul className="features">
                    <li>
                      Inductie-convectie tray verdeelt hete lucht rondom
                    </li>
                    <li>
                      Kubusvormige tas met indeelbare compartimenten
                    </li>
                    <li>
                      Opwarmtijd ≈ 3,5 min, herladen ≈ 90 sec
                    </li>
                    <li>
                      VaporVent™-deksel voorkomt condens en zompig eten
                    </li>
                    <li>
                      Inzetbaar bij o.a. TacoMundo, Kwalitaria, Burger Business
                    </li>
                  </ul>
                  <div className="price-row">
                    <div className="from-price">
                      <small>Leasen vanaf</small> <strong>€114</strong> <small>per maand · 48 mnd · excl. BTW</small>
                    </div>
                    <a href="#offerte" className="btn btn-primary">Offerte aanvragen</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========= SAMENSTELLINGEN ========= */}
        <section className="compositions" id="samenstellingen">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Flexibele samenstellingen</span>
              <h2>
                Kies de set die past bij jouw bezorgvolume
              </h2>
              <p className="intro-text">
                Van alleen de charger tot een volledige set met 10 tassen en discs of trays. Wij denken graag met je mee over de juiste configuratie voor jouw vestiging of formule.
              </p>
            </div>
            <div className="comp-tabs">
              <button className="comp-tab active" data-set="pizza">
                Pizzabag Charger 18&quot;
              </button>
              <button className="comp-tab" data-set="cube-hoog">
                ThermaCube – tas hoog
              </button>
              <button className="comp-tab" data-set="cube-laag">
                ThermaCube – tas laag
              </button>
            </div>
            {/* Pizza Set */}
            <div className="comp-set active" data-set="pizza">
              <div className="comp-table-wrap">
                <table className="comp-table">
                  <thead>
                    <tr>
                      <th>
                        Samenstelling
                      </th>
                      <th>
                        Vanaf-prijs
                      </th>
                      <th>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="config">
                        Alleen 1× 18&quot; charger<small>Charger 53300606400</small>
                      </td>
                      <td className="price">
                        vanaf €102 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 1× tas + disc<small>+ 1× tas 53300300849 + 1× disc 53300400017</small>
                      </td>
                      <td className="price">
                        vanaf €117 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 2× tas + disc<small>+ 2× tas 53300300849 + 2× disc 53300400017</small>
                      </td>
                      <td className="price">
                        vanaf €131 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 5× tas + disc<small>+ 5× tas 53300300849 + 5× disc 53300400017</small>
                      </td>
                      <td className="price">
                        vanaf €176 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 10× tas + disc<small>+ 10× tas 53300300849 + 10× disc 53300400017</small>
                      </td>
                      <td className="price">
                        vanaf €249 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* ThermaCube hoog */}
            <div className="comp-set" data-set="cube-hoog">
              <div className="comp-table-wrap">
                <table className="comp-table">
                  <thead>
                    <tr>
                      <th>
                        Samenstelling
                      </th>
                      <th>
                        Vanaf-prijs
                      </th>
                      <th>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="config">
                        Alleen 1× ThermaCube charger<small>Charger 53400609200</small>
                      </td>
                      <td className="price">
                        vanaf €114 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 1× tas hoog + tray<small>+ tas 53400301857 + tray 53400301630</small>
                      </td>
                      <td className="price">
                        vanaf €137 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 2× tas hoog + tray
                      </td>
                      <td className="price">
                        vanaf €159 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 5× tas hoog + tray
                      </td>
                      <td className="price">
                        vanaf €227 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 10× tas hoog + tray
                      </td>
                      <td className="price">
                        vanaf €340 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* ThermaCube laag */}
            <div className="comp-set" data-set="cube-laag">
              <div className="comp-table-wrap">
                <table className="comp-table">
                  <thead>
                    <tr>
                      <th>
                        Samenstelling
                      </th>
                      <th>
                        Vanaf-prijs
                      </th>
                      <th>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="config">
                        Alleen 1× ThermaCube charger
                      </td>
                      <td className="price">
                        vanaf €114 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 1× tas laag + tray<small>+ tas 53400301550 + tray 53400301630</small>
                      </td>
                      <td className="price">
                        vanaf €136 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 2× tas laag + tray
                      </td>
                      <td className="price">
                        vanaf €157 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 5× tas laag + tray
                      </td>
                      <td className="price">
                        vanaf €222 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="config">
                        1× charger + 10× tas laag + tray
                      </td>
                      <td className="price">
                        vanaf €329 p/mnd
                      </td>
                      <td>
                        <a href="#offerte" className="request-btn">Offerte aanvragen</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="comp-disclaimer">
              * Bedragen op basis van 48 maanden operational lease, exclusief BTW en exclusief €20 service fee per maand (onderhoud). Inboedelverzekering loopt via de klant. Restwaarde €0,01 einde contract. Prijslijst geldig per 1 april 2026.
            </p>
          </div>
        </section>
        {/* ========= STAPPEN HOE WERKT HET ========= */}
        <section className="steps">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow on-dark">Zo werkt het</span>
              <h2>
                Van offerte tot warm aan de deur in 4 stappen
              </h2>
              <p>
                Wij maken het leasen van Cooktek apparatuur eenvoudig en transparant. Geen verrassingen, geen losse leveranciers — één partner voor alles.
              </p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">
                  01.
                </div>
                <h3>
                  Offerte aanvragen
                </h3>
                <p>
                  Je vult het formulier in met je gewenste samenstelling. Wij maken binnen 24 uur een persoonlijke leaseofferte op maat.
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
                  Het voorstel bevat een vast maandbedrag inclusief onderhoud, met heldere voorwaarden en geen verborgen kosten.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">
                  03.
                </div>
                <h3>
                  Levering &amp; installatie
                </h3>
                <p>
                  Na akkoord leveren wij de chargers, tassen en discs gebruiksklaar af. Je kunt direct starten met warm bezorgen.
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
                  Elox verzorgt het onderhoud gedurende de looptijd. Stoffilter, besturing en bekabeling worden periodiek nagekeken.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========= VOORDELEN ========= */}
        <section className="benefits">
          <div className="container">
            <div className="centered-760">
              <span className="eyebrow">Waarom Elox Lease</span>
              <h2>
                Professionele warmhoudapparatuur zonder grote investering
              </h2>
              <p className="intro-text">
                Bij Elox Lease maken we bewezen Cooktek-techniek toegankelijk voor pizzeria&apos;s, bezorgrestaurants en franchiseformules. Je werkt met vaste maandkosten en houdt financiële ruimte over.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  €
                </div>
                <h3>
                  Geen aanschafkosten vooraf
                </h3>
                <p>
                  Houd je werkkapitaal vrij voor groei en bezorgcapaciteit in plaats van vast te leggen in apparatuur.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  🔧
                </div>
                <h3>
                  Onderhoud inbegrepen
                </h3>
                <p>
                  Voor €20 service fee per maand verzorgt Elox het volledige onderhoud van de Cooktek tijdens de looptijd.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  📅
                </div>
                <h3>
                  48 maanden vast tarief
                </h3>
                <p>
                  Voorspelbare maandkosten, transparant en zonder verrassingen. Restwaarde einde contract: €0,01.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  ⚡
                </div>
                <h3>
                  Bewezen marktstandaard
                </h3>
                <p>
                  Al ruim 15 jaar het toonaangevende warmhoudsysteem voor professionele pizza- en food delivery.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  📦
                </div>
                <h3>
                  Flexibele samenstellingen
                </h3>
                <p>
                  Van alleen een charger tot complete sets met 10 tassen — passend bij elk bezorgvolume.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  ⭐
                </div>
                <h3>
                  Betere klantreviews
                </h3>
                <p>
                  Warme bestellingen = tevreden klanten = hogere beoordelingen op Thuisbezorgd, Uber Eats en Google.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========= TESTIMONIALS ========= */}
        <section className="testimonials">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Wat klanten zeggen</span>
              <h2>
                De ervaring uit de bezorgpraktijk
              </h2>
            </div>
            <div className="testi-grid">
              <div className="testi-card">
                <div className="stars">
                  ★★★★★
                </div>
                <p>
                  &quot;Sinds we Cooktek-tassen gebruiken via Elox, krijgen we merkbaar minder klachten over koude pizza&apos;s. Onze Google-reviews zijn binnen drie maanden gestegen van 4.1 naar 4.6.&quot;
                </p>
                <div className="who">
                  Pizzeria-eigenaar<small>Bezorgvestiging Utrecht</small>
                </div>
              </div>
              <div className="testi-card">
                <div className="stars">
                  ★★★★★
                </div>
                <p>
                  &quot;De keuze om te leasen in plaats van kopen scheelt enorm in cashflow. Voor €176 per maand hebben we een complete set die elke avond non-stop draait.&quot;
                </p>
                <div className="who">
                  Franchisemanager<small>Pizza-formule, 8 vestigingen</small>
                </div>
              </div>
              <div className="testi-card">
                <div className="stars">
                  ★★★★★
                </div>
                <p>
                  &quot;De ThermaCube past perfect bij ons gemengde menu. Burgers, friet en saus blijven op temperatuur zonder dat het zompig wordt. Echt een verschil voor de klant.&quot;
                </p>
                <div className="who">
                  Operations Manager<small>Bezorgrestaurant Amsterdam</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========= FAQ ========= */}
        <section className="faq">
          <div className="container">
            <div className="header-row">
              <span className="eyebrow">Veelgestelde vragen</span>
              <h2>
                Antwoord op de meest gestelde vragen
              </h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is het verschil tussen de Pizzabag Charger en de ThermaCube Charger?
                </summary>
                <div className="faq-a">
                  <p>
                    De <strong>Pizzabag Charger</strong> is specifiek ontwikkeld voor pizza&apos;s, met platte tassen en thermal discs die de pizza krokant houden. Ideaal als je primair pizza levert.
                  </p>
                  <p>
                    De <strong>ThermaCube Charger</strong> is een breder warmhoudsysteem met kubusvormige tassen en convectie-tray, geschikt voor diverse gerechten — burgers, friet, snacks, maaltijden met saus. Beter voor restaurants met een gemengd menu.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Hoe lang blijft het eten warm?
                </summary>
                <div className="faq-a">
                  <p>
                    Beide systemen houden bestellingen tot circa <strong>30 minuten</strong> op temperatuur na het opladen van de disc of tray — meer dan voldoende voor de gemiddelde bezorgrit binnen de stad.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is de levensduur van een Cooktek-systeem?
                </summary>
                <div className="faq-a">
                  <p>
                    Afhankelijk van gebruik en omgevingsfactoren bedraagt de levensduur ongeveer <strong>5 tot 7 jaar</strong> bij normaal professioneel dagelijks gebruik. Met de 48-maands lease zit je daar ruim binnen.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Welk onderhoud is nodig?
                </summary>
                <div className="faq-a">
                  <p>
                    Het onderhoud is beperkt: vooral het <strong>stoffilter onderaan het apparaat</strong> moet regelmatig schoongemaakt worden. Daarnaast worden besturing en bekabeling periodiek nagekeken en doorgemeten. Dit is volledig inbegrepen in de €20 service fee per maand.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat is inbegrepen bij de operational lease via Elox?
                </summary>
                <div className="faq-a">
                  <p>
                    Je krijgt een vast maandbedrag voor het gebruik van de apparatuur. <strong>Het onderhoud</strong> verzorgt Elox tegen €20 service fee per maand. De Cooktec valt binnen <strong>jouw inboedelverzekering</strong>. Aan het einde van het 48-maands contract koopt Elbuco het product terug met een restwaarde van €0,01 — je hoeft niets te doen.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Hoe snel kan ik de apparatuur geleverd krijgen?
                </summary>
                <div className="faq-a">
                  <p>
                    Cooktek houdt standaard voorraad in Nederland via Levens Middleby. Na akkoord op de offerte en aanleveren van de leasestukken is levering doorgaans binnen <strong>1–2 weken</strong> mogelijk. Voor grotere bestellingen plannen we de levering samen in.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Kan ik later mijn set uitbreiden?
                </summary>
                <div className="faq-a">
                  <p>
                    Ja, je kunt op elk moment extra tassen, discs of trays bij-leasen. We maken dan een aanvullende offerte die naadloos aansluit op je bestaande contract.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Wat zijn &apos;Flashdiscs&apos;?
                </summary>
                <div className="faq-a">
                  <p>
                    Flashdiscs zijn de inductie-warmhoudschijven die in de pizzatas worden geplaatst onder de pizza. Ze worden in de charger opgewarmd (≈60 sec) en houden de pizza vervolgens tot 30 minuten warm en krokant tijdens de bezorging.
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
                Binnen 24 uur een persoonlijk leasevoorstel
              </h2>
              <p className="sub">
                Laat je gegevens achter en kies de samenstelling die past bij jouw bezorgvolume. Wij sturen je dezelfde of volgende werkdag een vrijblijvend voorstel op maat.
              </p>
              <ul className="quote-contact-list">
                <li>
                  <span className="icon">📞</span>Telefoon: <a href="tel:+31857605170">085-7605170</a>
                </li>
                <li>
                  <span className="icon">💬</span>WhatsApp: <a href="https://wa.me/31857605170?text=Hoi%20Elox%20Lease%2C%20ik%20heb%20een%20vraag%20over%20Cooktek%20leasen." target="_blank">Direct chat met Elox</a>
                </li>
                <li>
                  <span className="icon">✉️</span>E-mail: <a href="mailto:info@eloxlease.nl?subject=Offerteaanvraag%20Cooktek">info@eloxlease.nl</a>
                </li>
              </ul>
              <div className="guarantee-box">
                <strong>Vrijblijvend &amp; zonder verplichtingen</strong> Je ontvangt een transparant voorstel met vaste maandprijs. Geen kleine lettertjes, geen aanschafverplichting.
              </div>
            </div>
          </div>
          <div className="el-quote-col el-quote-form">
            <div className="el-widget">
              <h3 className="quote-form-title">
                Vraag jouw Cooktek-offerte aan
              </h3>
            </div>
            <Cf7Form formName="cooktek-leasen">
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
                  Gewenste samenstelling <span className="req">*</span><br /> <span className="wpcf7-form-control-wrap" data-name="samenstelling">
                  <select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="samenstelling">
                    <option value="">
                      &#8212;Kies een optie&#8212;
                    </option>
                    <option value="Pizza Charger – alleen charger (€102 p/mnd)">
                      Pizza Charger – alleen charger (€102 p/mnd)
                    </option>
                    <option value="Pizza Charger + 1 tas + disc (€117 p/mnd)">
                      Pizza Charger + 1 tas + disc (€117 p/mnd)
                    </option>
                    <option value="Pizza Charger + 2 tassen (€131 p/mnd)">
                      Pizza Charger + 2 tassen (€131 p/mnd)
                    </option>
                    <option value="Pizza Charger + 5 tassen (€176 p/mnd)">
                      Pizza Charger + 5 tassen (€176 p/mnd)
                    </option>
                    <option value="Pizza Charger + 10 tassen (€249 p/mnd)">
                      Pizza Charger + 10 tassen (€249 p/mnd)
                    </option>
                    <option value="ThermaCube – alleen charger (€114 p/mnd)">
                      ThermaCube – alleen charger (€114 p/mnd)
                    </option>
                    <option value="ThermaCube + 1 tas hoog (€137 p/mnd)">
                      ThermaCube + 1 tas hoog (€137 p/mnd)
                    </option>
                    <option value="ThermaCube + 2 tassen hoog (€159 p/mnd)">
                      ThermaCube + 2 tassen hoog (€159 p/mnd)
                    </option>
                    <option value="ThermaCube + 5 tassen hoog (€227 p/mnd)">
                      ThermaCube + 5 tassen hoog (€227 p/mnd)
                    </option>
                    <option value="ThermaCube + 10 tassen hoog (€340 p/mnd)">
                      ThermaCube + 10 tassen hoog (€340 p/mnd)
                    </option>
                    <option value="ThermaCube + 1 tas laag (€136 p/mnd)">
                      ThermaCube + 1 tas laag (€136 p/mnd)
                    </option>
                    <option value="ThermaCube + 2 tassen laag (€157 p/mnd)">
                      ThermaCube + 2 tassen laag (€157 p/mnd)
                    </option>
                    <option value="ThermaCube + 5 tassen laag (€222 p/mnd)">
                      ThermaCube + 5 tassen laag (€222 p/mnd)
                    </option>
                    <option value="ThermaCube + 10 tassen laag (€329 p/mnd)">
                      ThermaCube + 10 tassen laag (€329 p/mnd)
                    </option>
                    <option value="Anders / advies op maat">
                      Anders / advies op maat
                    </option>
                  </select>
                  </span>
                </label>
              </p>
              <p>
                <label>
                  Bericht of vraag (optioneel)<br /> <span className="wpcf7-form-control-wrap" data-name="bericht">
                  <textarea cols={40} rows={10} maxLength={2000} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Bv. aantal vestigingen, gewenste startdatum, vragen over levering..." name="bericht">
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
                <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Stuur mijn offerte-aanvraag" />
              </p>
            </Cf7Form>
          </div>
        </div>
      </section>
      <section className="el-section">
        {/* ========= CLOSING ========= */}
        <section className="closing">
          <div className="container">
            <span className="eyebrow">Investeer in kwaliteit aan de deur</span>
            <h2>
              De laatste meters bepalen de hele klantbeleving
            </h2>
            <p>
              Met de Cooktek Pizzabag Charger en ThermaCube Charger zorg je dat bestellingen niet alleen snel, maar vooral ook warm aankomen. Dat is precies het verschil tussen een gewone bezorging en een klant die opnieuw bestelt.
            </p>
            <a href="#offerte" className="btn btn-primary">Vraag direct offerte aan &rarr;</a>
          </div>
        </section>
        {/* ========= FLOATING WHATSAPP ========= */}
      </section>
    </>
  );
}
