import Image from "next/image";
import Link from "next/link";

import {
  benefits,
  faqs,
  industries,
  LEASEVOORSTEL_HREF,
  PHONE_HREF,
  products,
  steps,
  testimonials,
  valuePoints,
} from "../site-data";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elox Lease B.V.",
  url: "https://eloxlease.nl",
  logo: "https://eloxlease.nl/wp-content/uploads/2025/12/elox-lease-logo-black-2000.png",
  description:
    "Operationeel leasen van elektrische bezorgvoertuigen en warmhoudsystemen voor professionele bezorgbedrijven.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Talmastraat 11",
    addressLocality: "Nijkerkerveen",
    postalCode: "3864 DE",
    addressCountry: "NL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+31-85-7605170",
    email: "info@eloxlease.nl",
    contactType: "customer service",
    availableLanguage: "Dutch",
  },
  sameAs: [],
  vatID: "NL867954097B01",
  taxID: "97214779",
};

export function HomeContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* USP TOPBAR */}
      <div className="topbar">
        <div className="container">
          <div className="usp-list">
            <span>20+ jaar ervaring in de bezorgbranche</span>
            <span>Vast maandbedrag, alles inbegrepen</span>
            <span>Onderhoud op locatie</span>
          </div>
          <div>
            <a href={PHONE_HREF}>📞 085-7605170</a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">Operational lease voor bezorgbedrijven</span>
            <h1>
              Bezorg <strong>zorgeloos</strong>. Lease alles bij Elox.
            </h1>
            <p className="lead">
              Van elektrische bezorgscooter en e-cargobike tot Cooktek warmhoudsystemen — Elox
              Lease levert de complete bezorguitrusting met vast maandbedrag, inclusief verzekering,
              onderhoud en service. Eén partner. Eén factuur. Geen zorgen.
            </p>
            <div className="cta-row">
              <a href="#offerte" className="btn btn-primary">
                Ontvang leasevoorstel →
              </a>
              <a href="#producten" className="btn btn-secondary">
                Bekijk producten
              </a>
            </div>
            <div className="micro-trust">
              <span>Binnen 24 uur reactie</span>
              <span>Geen aanschafkosten</span>
              <span>Service op locatie</span>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">20+</div>
                <div className="lbl">Jaar ervaring</div>
              </div>
              <div className="hero-stat">
                <div className="num">3</div>
                <div className="lbl">Productlijnen</div>
              </div>
              <div className="hero-stat">
                <div className="num">24u</div>
                <div className="lbl">Reactietijd</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/sites/eloxlease/hero-ecargo-group.jpg"
              alt="Elox Lease bezorgvoertuigen — elektrische scooter, e-cargobike en warmhoudsystemen voor professionele bezorging"
              width={1920}
              height={2560}
              sizes="(max-width: 960px) 100vw, 510px"
              preload
            />
            <div className="float-card top-right">
              <div className="ic">⚡</div>
              <div className="txt">
                <strong>100% elektrisch</strong>Geen brandstof, geen uitlaat
              </div>
            </div>
            <div className="float-card bottom-left">
              <div className="ic">🛠️</div>
              <div className="txt">
                <strong>Service op locatie</strong>Wij komen naar je toe
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust">
        <div className="container">
          <div className="label">Vertrouwd door toonaangevende bezorgbedrijven</div>
          <div className="trust-logos">
            <span className="logo-name">New York Pizza</span>
            <span className="logo-name">Pizza Hut</span>
            <span className="logo-name">Kwalitaria</span>
            <span className="logo-name">TacoMundo</span>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="products" id="producten">
        <div className="container">
          <div className="header-row">
            <span className="eyebrow">Onze leaseoplossingen</span>
            <h2>Drie productlijnen, één bezorgpartner</h2>
            <p className="intro">
              Van elektrische voertuigen tot warmhoudsystemen — alles wat jouw bezorgoperatie nodig
              heeft, in operational lease met vast maandbedrag.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <div className="img-wrap">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    width={product.image.width}
                    height={product.image.height}
                    sizes="320px"
                  />
                </div>
                <div className="body">
                  <span className="tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <p className="target">{product.target}</p>
                  <p className="desc">{product.description}</p>
                  <ul className="features">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="price-row">
                    <div className="from-price">
                      <small>Leasen vanaf</small>
                      <strong>{product.price}</strong>
                      <small>{product.priceNote}</small>
                    </div>
                    <Link href={product.href} className="arrow-link">
                      Meer info →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE / PROPOSITIE */}
      <section className="value">
        <div className="container">
          <div className="grid">
            <div className="value-img">
              <Image
                src="/sites/eloxlease/ecargobike-bezorger-straat.jpg"
                alt="Elox Lease ontzorgt bezorgbedrijven met operational lease"
                width={1600}
                height={900}
                sizes="(max-width: 960px) 100vw, 500px"
              />
            </div>
            <div>
              <span className="eyebrow">Waarom Elox Lease</span>
              <h2>Eén partner. Vast maandbedrag. Geen omkijken.</h2>
              <p>
                Elox Lease is gebouwd op ruim 20 jaar praktijkervaring in de bezorgindustrie. Wij
                weten wat bezorgvoertuigen dagelijks te verduren krijgen, en hebben onze
                leaseoplossing daarop afgestemd. Door preventief onderhoud, reparatieservice op
                locatie en 24/7 toegang tot onze servicekanalen zorgen we dat jouw bezorging blijft
                doorlopen — ook tijdens piekuren.
              </p>
              <ul className="points">
                {valuePoints.map((point) => (
                  <li key={point.title}>
                    <strong>{point.title}</strong>
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VOORDELEN GRID */}
      <section className="benefits">
        <div className="container">
          <div className="header-row">
            <span className="eyebrow">Wat zit erbij inbegrepen</span>
            <h2>Volledig ontzorgd voor één vast maandbedrag</h2>
            <p className="intro">
              Geen losse modules of verrassingen. Elke leaseoplossing van Elox bevat standaard alles
              wat je nodig hebt om dagelijks zorgeloos te bezorgen.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div className="benefit" key={benefit.title}>
                <div className="icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOE WERKT HET */}
      <section className="steps">
        <div className="container">
          <div className="header-row">
            <span className="eyebrow on-dark">Zo werkt het</span>
            <h2>Van offerte tot bezorging in 4 stappen</h2>
            <p>
              Wij maken het leasen van bezorgvoertuigen en warmhoudapparatuur eenvoudig, snel en
              transparant.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries">
        <div className="container">
          <div className="header-row">
            <span className="eyebrow">Voor wie</span>
            <h2>Geschikt voor elke bezorgoperatie</h2>
            <p className="intro">
              Of je nu maaltijden, pakketten, medicijnen of bloemen bezorgt — Elox Lease past zich
              aan jouw operatie aan.
            </p>
          </div>
          <div className="ind-grid">
            {industries.map((industry) => (
              <div className="ind-tile" key={industry.title}>
                <span className="ind-ic">{industry.icon}</span>
                <h3>{industry.title}</h3>
                <p>{industry.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <div className="header-row">
            <span className="eyebrow">Wat klanten zeggen</span>
            <h2>De ervaring uit de bezorgpraktijk</h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((testimonial) => (
              <div className="testi-card" key={testimonial.name}>
                <div className="stars">★★★★★</div>
                <p>{testimonial.quote}</p>
                <div className="who">
                  {testimonial.name}
                  <small>{testimonial.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="header-row">
            <span className="eyebrow">Veelgestelde vragen</span>
            <h2>Antwoord op de meest gestelde vragen</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary className="faq-q">{faq.q}</summary>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final" id="offerte">
        <div className="container">
          <span className="eyebrow on-dark">Start binnen 24 uur</span>
          <h2>Klaar om zorgeloos te bezorgen?</h2>
          <p>
            Vraag een vrijblijvend leasevoorstel aan. Wij nemen binnen 24 uur persoonlijk contact met
            je op om je bezorgoperatie door te spreken en een voorstel op maat te maken.
          </p>
          <div className="cta-row">
            <Link href={LEASEVOORSTEL_HREF} className="btn btn-primary">
              Ontvang leasevoorstel →
            </Link>
            <a href={PHONE_HREF} className="btn btn-white">
              📞 Bel direct 085-7605170
            </a>
          </div>
          <div className="micro">
            ✓ Binnen 24 uur reactie · ✓ Vrijblijvend &amp; zonder verplichtingen · ✓ Persoonlijk
            advies
          </div>
        </div>
      </section>
    </>
  );
}
