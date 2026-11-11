export const SOURCE_ORIGIN = "https://eloxlease.nl";
export const PHONE_HREF = "tel:+31857605170";
export const LEASEVOORSTEL_HREF = "/leasevoorstel/";
export const WHATSAPP_HREF =
  "https://wa.me/31857605170?text=Hoi%20Elox%20Lease%2C%20ik%20heb%20een%20vraag.";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Silence S02", href: "/silences02/" },
  { label: "E-Cargobike", href: "/elektrischebezorgfiets/" },
  { label: "CookTek", href: "/cooktek-leasen/" },
  { label: "Over ons", href: "/contactonspagina/" },
  { label: "Service", href: "https://eloxservice.nl/serviceaanvragen/" },
];

export interface Product {
  tag: string;
  name: string;
  target: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  href: string;
  image: { src: string; width: number; height: number; alt: string };
}

export const products: Product[] = [
  {
    tag: "Bezorgscooter",
    name: "Silence S02",
    target: "Voor stedelijke bezorging",
    description:
      "De krachtige B2B-bezorgscooter met uitneembare trolley-accu — flexibel laden, snel wisselen tussen shifts.",
    features: [
      "147 km actieradius (WMTC)",
      "Uitneembare 5,6 kWh trolley-accu",
      "45 km/u · 4 kW hub-motor",
      "5 jaar garantie op voertuig én accu",
    ],
    price: "€5,71",
    priceNote: "per dag · 36 mnd",
    href: "/silences02/",
    image: {
      src: "/sites/eloxlease/silence-s02.jpg",
      width: 2560,
      height: 2218,
      alt: "Silence S02 elektrische bezorgscooter leasen",
    },
  },
  {
    tag: "Bezorgfiets",
    name: "E-Cargobike",
    target: "Voor last-mile delivery",
    description:
      "De wendbare elektrische bezorgfiets voor stedelijke bezorging — gebouwd op 20 jaar bezorgervaring.",
    features: [
      "Actieradius 120-140 km",
      "Geïntegreerde achterwielmotor",
      "Onderhoudsarme gietijzeren wielen",
      "Track & Trace + brandingplaten",
    ],
    price: "€129",
    priceNote: "per maand · 48 mnd",
    href: "/elektrischebezorgfiets/",
    image: {
      src: "/sites/eloxlease/ecargobike-product.png",
      width: 2560,
      height: 1706,
      alt: "E-Cargobike elektrische bezorgfiets leasen of kopen",
    },
  },
  {
    tag: "Warmhoudsysteem",
    name: "Cooktek",
    target: "Voor warme bezorging",
    description:
      "De bewezen warmhoudsystemen voor pizza- en maaltijdbezorging — al 15+ jaar marktstandaard.",
    features: [
      "Pizzabag Charger & ThermaCube",
      "30 min op temperatuur tijdens transport",
      "Onderhoud inbegrepen",
      "Betere reviews door warme bezorging",
    ],
    price: "€102",
    priceNote: "per maand",
    href: "/cooktek-leasen/",
    image: {
      src: "/sites/eloxlease/cooktek-pizzabag-charger.png",
      width: 900,
      height: 900,
      alt: "Cooktek Pizzabag Charger en ThermaCube warmhoudsystemen",
    },
  },
];

export const valuePoints = [
  {
    title: "Geen aanschafkosten vooraf",
    text: "Houd je werkkapitaal vrij voor groei in plaats van vastleggen in apparatuur.",
  },
  {
    title: "Alles in één maandbedrag",
    text: "Verzekering, onderhoud, Track & Trace, branding-platen en service inbegrepen.",
  },
  {
    title: "Onderhoud op locatie",
    text: "Wij komen naar je toe om stilstand te voorkomen en problemen snel op te lossen.",
  },
  {
    title: "Korte lijnen, persoonlijk contact",
    text: "Geen call-centers — je belt rechtstreeks met iemand die je kent.",
  },
];

export const benefits = [
  { icon: "⚡", title: "Voertuig & accu", text: "Volledig uitgerust voertuig, accu + lader, direct inzetbaar." },
  {
    icon: "🛡️",
    title: "Verzekering",
    text: "Volledige verzekering inclusief diefstalopsporing met Tracefy Track & Trace.",
  },
  {
    icon: "🔧",
    title: "Onderhoud",
    text: "Preventief onderhoud en reparatie op locatie. Wij komen naar je toe.",
  },
  {
    icon: "📞",
    title: "24/7 service",
    text: "Toegang tot onze servicekanalen, ook buiten kantoortijden.",
  },
  {
    icon: "🎨",
    title: "Branding-platen",
    text: "Brandingplaten op de zijkanten — een professionele uitstraling van jouw bezorging.",
  },
  {
    icon: "📅",
    title: "Vast maandbedrag",
    text: "Voorspelbare kosten gedurende de hele looptijd. Geen verborgen kosten of verrassingen.",
  },
];

export const steps = [
  {
    num: "01.",
    title: "Aanvraag",
    text: "Vraag een leasevoorstel aan of plan een vrijblijvende test met onze voertuigen.",
  },
  {
    num: "02.",
    title: "Voorstel op maat",
    text: "Wij stellen een operationeel leasevoorstel op afgestemd op jouw bezorgvolume — transparant en zonder verrassingen.",
  },
  {
    num: "03.",
    title: "Levering & installatie",
    text: "Na akkoord leveren wij gebruiksklaar af. Branding, Track & Trace en volledige controle vooraf inbegrepen.",
  },
  {
    num: "04.",
    title: "Service tijdens lease",
    text: "Preventief onderhoud, reparaties op locatie en 24/7 toegang tot onze servicekanalen.",
  },
];

export const industries = [
  { icon: "🍕", title: "Horeca & maaltijdbezorging", text: "Pizzeria's, restaurants, franchiseformules" },
  { icon: "📦", title: "Pakket & last-mile", text: "Koeriers, pakketbezorging, lokale distributie" },
  { icon: "💊", title: "Apotheek & zorg", text: "Medicijnbezorging, zorgleveranciers" },
  { icon: "🌷", title: "Retail & bloemenwinkels", text: "Lokale leveringen, supermarkten, bloemisten" },
];

export const testimonials = [
  {
    quote:
      "\"Met Elox Lease hebben wij volledige rust in onze bezorgoperatie. De E-Cargobikes zijn altijd inzetbaar en we hebben geen omkijken naar onderhoud, verzekering of onverwachte kosten.\"",
    name: "Greg",
    role: "Operations Manager",
  },
  {
    quote:
      "\"Sinds we zijn overgestapt op Elox Lease merken we direct verschil. De voertuigen zijn betrouwbaar, service is snel geregeld en stilstand is geen issue meer.\"",
    name: "Joost",
    role: "Bedrijfsleider",
  },
  {
    quote:
      "\"Als er iets is met mijn voertuig, komt Elox meestal dezelfde dag langs. Ze fixen alles supersnel en leggen ook uit wat het probleem was. Veel minder gedoe tijdens het werk.\"",
    name: "Luca",
    role: "Bezorger",
  },
];

export const faqs = [
  {
    q: "Wat is operational lease precies?",
    a: "Bij operational lease huur je het voertuig of de apparatuur voor een vaste periode tegen een vast maandbedrag. Verzekering, onderhoud en service zitten in dat bedrag. Aan het einde van de looptijd lever je het in — geen restwaardezorgen en geen aanschafkosten vooraf.",
  },
  {
    q: "Welke documenten heb ik nodig voor een leaseaanvraag?",
    a: "Doorgaans: KvK-nummer, kopie legitimatie van de tekenbevoegde en bedrijfsgegevens (naam, adres, contactpersoon). In sommige gevallen vragen we aanvullende informatie. We begeleiden je stap voor stap.",
  },
  {
    q: "Hoe lang duurt een test met een voertuig?",
    a: "Een test duurt gemiddeld 7 tot 14 werkdagen. Tijdens de test ervaar je niet alleen het voertuig maar ook het gebruik, comfort, actieradius en onze service.",
  },
  {
    q: "Kan ik meerdere voertuigen tegelijk leasen?",
    a: "Ja, we stellen leasevoorstellen op maat samen voor meerdere voertuigen, inclusief afstemming op jouw bezorgvolume en groeiambities.",
  },
  {
    q: "Wat gebeurt er bij pech of een storing?",
    a: "Bij een storing neem je direct contact op via onze servicekanalen. Wij plannen zo snel mogelijk onderhoud of reparatie op locatie in — meestal nog dezelfde dag.",
  },
  {
    q: "Zijn de leasekosten vast gedurende de looptijd?",
    a: "Ja. Tijdens de leaseperiode betaal je een vast maandbedrag, zodat je altijd weet waar je aan toe bent en geen onverwachte kosten hebt.",
  },
  {
    q: "Voor welke bedrijven is Elox Lease geschikt?",
    a: "Elox Lease is geschikt voor horeca & maaltijdbezorging, retail & lokale bezorging, apotheken & zorg, franchiseformules en bedrijven met dagelijkse stedelijke ritten. Twijfel je of het past? Dan denken we graag mee.",
  },
];
