import { Cf7Form } from "../cf7-form";

export function LeasevoorstelPage() {
  return (
    <div className="wd-content container">
      <div className="wd-cf7">
        <Cf7Form formName="leasevoorstel">
          <div className="elox-form-wrap">
            <div className="elox-hero">
              <p>
                <span className="elox-kicker">Binnen 24 uur persoonlijk contact</span>
              </p>
              <h2>
                Vraag je voorstel op maat aan
              </h2>
              <p>
                Elektrisch bezorgen met de Silence S02 of de E-cargobike. Kies hieronder je aanbod — wij bellen je binnen 24 uur op werkdagen met een helder voorstel en vaste maandkosten.
              </p>
            </div>
            <div className="elox-cards">
              <div className="elox-card">
                <h3>
                  Silence S02
                </h3>
                <p className="elox-card-sub">
                  Tijdelijke Lente Deal — vanaf € 999/mnd
                </p>
                <p>
                  Bezorg een hele werkdag zonder stilstand. Tot 147 km actieradius, uitwisselbare trolley-accu, klaar om dag en nacht te draaien. Je bezorgers rijden stil, schoon en met een voertuig dat je imago versterkt bij elke klant aan de deur.
                </p>
                <p className="elox-card-label">
                  Afname-mogelijkheden
                </p>
                <ul>
                  <li>
                    <p>
                      Lease vanaf € 999/mnd (Lente Deal)
                    </p>
                  </li>
                  <li>
                    <p>
                      Koop € 2.981 + servicecontract € 59,95/mnd
                    </p>
                  </li>
                </ul>
              </div>
              <div className="elox-card">
                <h3>
                  E-cargobike
                </h3>
                <p className="elox-card-sub">
                  De stad door, geen file, geen parkeerzorg
                </p>
                <p>
                  Jouw bezorgers zijn overal eerder dan de rest. Door binnensteden waar scooters niet meer mogen komen, langs straten waar auto&apos;s vaststaan, naar klanten die op tijd hun bestelling willen. Meer stops per uur, lagere kosten per rit, en een bedrijfsvoertuig waar je trots mee over straat gaat.
                </p>
                <p className="elox-card-label">
                  Afname-mogelijkheden
                </p>
                <ul>
                  <li>
                    <p>
                      Lease 24, 36 of 48 maanden
                    </p>
                  </li>
                  <li>
                    <p>
                      Koop + servicecontract 12, 18 of 24 mnd (€ 59,95/mnd)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="elox-form-title">
              Vul je gegevens in
            </h3>
            <div className="elox-form-grid">
              <div className="elox-field-full">
                <p>
                  <label>
                    Welk aanbod wil je aanvragen?*
                  </label>
                  <br /> <span className="wpcf7-form-control-wrap" data-name="aanbod">
                  <select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="aanbod">
                    <option value="">
                      &#8212;Kies een optie&#8212;
                    </option>
                    <option value="Silence S02: Lease vanaf 999 per maand (Lente Deal)">
                      Silence S02: Lease vanaf 999 per maand (Lente Deal)
                    </option>
                    <option value="Silence S02: Koop 2.981 plus servicecontract (59,95 per maand)">
                      Silence S02: Koop 2.981 plus servicecontract (59,95 per maand)
                    </option>
                    <option value="E-cargobike: Lease 24 maanden">
                      E-cargobike: Lease 24 maanden
                    </option>
                    <option value="E-cargobike: Lease 36 maanden">
                      E-cargobike: Lease 36 maanden
                    </option>
                    <option value="E-cargobike: Lease 48 maanden">
                      E-cargobike: Lease 48 maanden
                    </option>
                    <option value="E-cargobike: Koop plus servicecontract 12 maanden (59,95 per maand)">
                      E-cargobike: Koop plus servicecontract 12 maanden (59,95 per maand)
                    </option>
                    <option value="E-cargobike: Koop plus servicecontract 18 maanden (59,95 per maand)">
                      E-cargobike: Koop plus servicecontract 18 maanden (59,95 per maand)
                    </option>
                    <option value="E-cargobike: Koop plus servicecontract 24 maanden (59,95 per maand)">
                      E-cargobike: Koop plus servicecontract 24 maanden (59,95 per maand)
                    </option>
                    <option value="Adviesgesprek - help mij kiezen">
                      Adviesgesprek - help mij kiezen
                    </option>
                  </select>
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <label>
                    Aantal voertuigen*
                  </label>
                  <br /> <span className="wpcf7-form-control-wrap" data-name="aantal-voertuigen">
                  <input className="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number" min="1" max="250" aria-required="true" aria-invalid="false" placeholder="Bijv. 1, 5, 10" type="number" name="aantal-voertuigen" />
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <label>
                    Bedrijfsnaam*
                  </label>
                  <br /> <span className="wpcf7-form-control-wrap" data-name="company-name">
                  <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Bedrijfsnaam" type="text" name="company-name" />
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <label>
                    Naam contactpersoon*
                  </label>
                  <br /> <span className="wpcf7-form-control-wrap" data-name="your-name">
                  <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" autoComplete="name" aria-required="true" aria-invalid="false" placeholder="Voor- en achternaam" type="text" name="your-name" />
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <label>
                    E-mail*
                  </label>
                  <br /> <span className="wpcf7-form-control-wrap" data-name="your-email">
                  <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" autoComplete="email" aria-required="true" aria-invalid="false" placeholder="naam@bedrijf.nl" type="email" name="your-email" />
                  </span>
                </p>
              </div>
              <div className="elox-field-full">
                <p>
                  <label>
                    Telefoon*
                  </label>
                  <br /> <span className="wpcf7-form-control-wrap" data-name="your-phone">
                  <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" placeholder="06 1234 5678" type="tel" name="your-phone" />
                  </span>
                </p>
              </div>
            </div>
            <div className="elox-privacy">
              <p>
                <span className="wpcf7-form-control-wrap" data-name="acceptance-privacy"><span className="wpcf7-form-control wpcf7-acceptance"><span className="wpcf7-list-item">
                <label>
                  <input type="checkbox" name="acceptance-privacy" value="1" aria-invalid="false" />
                  <span className="wpcf7-list-item-label">Ik ga akkoord met de <a href="https://eloxlease.nl/privacyverklaring/" target="_blank" rel="noopener">privacyverklaring</a>.</span>
                </label>
                </span></span></span>
              </p>
            </div>
            <div className="elox-submit-row">
              <p>
                <input className="wpcf7-form-control wpcf7-submit has-spinner elox-submit-btn" type="submit" value="Vraag je voorstel aan" />
              </p>
              <p className="elox-cta-note">
                Vrijblijvend — binnen 24 uur reactie op werkdagen
              </p>
            </div>
            <div className="elox-alt-contact">
              <p>
                Liever bellen? <a href="tel:+31857605170">085 760 5170</a> of <a href="https://wa.me/31857605170">WhatsApp Rick</a>
              </p>
            </div>
          </div>
        </Cf7Form>
      </div>
    </div>
  );
}
