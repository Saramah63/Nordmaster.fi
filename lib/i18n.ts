export type Locale = 'en' | 'fi';

export const locales: Locale[] = ['en', 'fi'];

export function getLocaleFromParams(params?: { locale?: string }): Locale {
  if (params?.locale === 'fi') return 'fi';
  return 'en';
}

const dictionary = {
  en: {
    meta: {
      homeTitle: 'Nordmaster Group | Metal Construction Services',
      homeDescription:
        'Welding, bending, and metal construction teams for industrial projects in Southwest Finland and Satakunta. Fast onboarding and clear reporting.',
      servicesTitle: 'Services | Nordmaster Group',
      servicesDescription:
        'Metal construction services including welding, bending, fabrication, and installation for industrial projects in Southwest Finland and Satakunta.',
      weldingTitle: 'Welding Services | Nordmaster Group',
      weldingDescription:
        'On-site welding teams for steel structures, repairs, and fabrication support. Fast onboarding, compliance, and clear reporting.',
      bendingTitle: 'Bending Services | Nordmaster Group',
      bendingDescription:
        'Sheet and metal bending teams for precise forming and schedule-critical deliveries. Clean handover and fast onboarding.',
      metalConstructionTitle: 'Metal Construction | Nordmaster Group',
      metalConstructionDescription:
        'Metal fabrication, fit-up, installation, and repairs for steel structures with clear coordination and reporting.',
      contactTitle: 'Contact | Nordmaster Group',
      contactDescription:
        'Request an offer for metal construction, welding, or bending. Reach Nordmaster Group directly by phone or email.',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      welding: 'Welding',
      bending: 'Bending',
      metalConstruction: 'Metal construction',
      contact: 'Contact',
      cta: 'Request an offer',
    },
    brand: {
      short: 'Nordmaster',
      group: 'Group',
      menu: 'Menu',
    },
    common: {
      exploreService: 'Explore service',
      imageFallback: 'Image unavailable',
    },
    alts: {
      homeHero: 'Nordmaster Group metal construction',
      servicesHero: 'Nordmaster Group services',
      weldingHero: 'On-site welding crew',
      bendingHero: 'Metal bending services',
      metalConstructionHero: 'Metal construction and installation',
      contactHero: 'Contact Nordmaster Group',
    },
    hero: {
      eyebrow: 'Metal construction services',
      title: 'Site-ready welding, bending, and metal construction teams.',
      valueProp:
        'Nordmaster Group delivers industrial metalwork crews for construction schedules across Southwest Finland and Satakunta.',
      ctaOffer: 'Request an offer',
      ctaCall: 'Call',
      imageCaption: 'Metal construction support that integrates fast and keeps deadlines intact.',
    },
    serviceIntro: {
      eyebrow: 'Service focus',
      title: 'Industrial metalwork, delivered on schedule',
      description: 'Dedicated teams for welding, bending, and metal construction with clear coordination and site-ready execution.',
    },
    services: {
      eyebrow: 'Services',
      title: 'Metal-focused construction support',
      description: 'Specialized crews for welding, bending, and metal construction — ready for your schedule.',
      cards: [
        {
          title: 'Welding',
          description: 'MIG/MAG/TIG welding crews for structural steel, repairs, and on-site fabrication support.',
          href: '/services/welding',
          label: 'Welding',
        },
        {
          title: 'Bending',
          description: 'Sheet and metal bending teams delivering precise forming for build schedules.',
          href: '/services/bending',
          label: 'Bending',
        },
        {
          title: 'Metal construction',
          description: 'Fabrication, fit-up, installation, and repairs for steel structures and on-site metalworks.',
          href: '/services/metal-construction',
          label: 'Metal construction',
        },
      ],
    },
    howWeWork: {
      eyebrow: 'How we work',
      title: 'Request → Offer → Start on-site',
      description: 'Straightforward process that keeps your site moving.',
      stepLabel: 'Step',
      steps: [
        { title: 'Request', body: 'Send scope, location, and schedule requirements.' },
        { title: 'Offer', body: 'We confirm availability, pricing, and start date.' },
        { title: 'Start on-site', body: 'Teams onboard fast and integrate with site supervisors.' },
      ],
    },
    coverage: {
      eyebrow: 'Coverage areas',
      title: 'Southwest Finland & Satakunta',
      description: 'Metal construction support across the region.',
      regions: [
        {
          region: 'Southwest Finland',
          cities: ['Turku', 'Raisio', 'Naantali', 'Kaarina', 'Salo', 'Lieto'],
        },
        {
          region: 'Satakunta',
          cities: ['Pori', 'Rauma', 'Ulvila', 'Harjavalta', 'Eurajoki', 'Kankaanpää'],
        },
      ],
    },
    contacts: {
      eyebrow: 'Direct contacts',
      title: 'Talk to the decision makers',
      description: 'Fast answers, clear scheduling, and direct coordination.',
      responseEyebrow: 'Response promise',
      responseTitle: 'Fast offers and clear start dates',
      responseBody: 'We confirm availability quickly, align on scope, and keep your metalwork schedule on track.',
      company: 'Nordmaster Group',
      aigars: 'Aigars Cerpinskis',
      martins: 'Martins Cerpinskis',
      call: 'Call',
      email: 'support@nordmastergroup.com',
    },
    ctaBand: {
      eyebrow: 'Ready to start?',
      title: 'Secure metalwork crews for the next phase.',
      body: 'Share your schedule and scope. We will respond with a clear plan and pricing.',
      ctaOffer: 'Request an offer',
      ctaCall: 'Call Aigars',
      ctaCallMartins: 'Call Martins',
      ctaEmail: 'Email',
    },
    servicesIndex: {
      eyebrow: 'Services',
      title: 'Metal construction support, built for schedules.',
      description: 'Welding, bending, and metal fabrication teams with fast onboarding and clean site reporting.',
      deliveryEyebrow: 'Delivery model',
      deliveryTitle: 'Aligned with your site schedule',
      deliveryDescription: 'From quick-start support to long-term staffing, we keep metalwork predictable.',
      deliveryList: [
        'Clear scope confirmation and staffing plan.',
        'Safety onboarding aligned with site policies.',
        'Regular reporting and transparent hours.',
        'Flexible scale-up for deadlines.',
      ],
      deliveryBodyTitle: 'Metal construction crews for industrial sites',
      deliveryBody:
        'We support industrial builds, renovations, and infrastructure projects across Southwest Finland and Satakunta. Our teams arrive ready, stay compliant, and keep your schedule on track.',
      deliveryCities: ['Turku', 'Raisio', 'Naantali', 'Kaarina', 'Pori', 'Rauma'],
    },
    welding: {
      eyebrow: 'Welding',
      title: 'On-site welding crews for demanding projects.',
      description:
        'Certified welders for structural steel, repairs, and fabrication support. Fast onboarding, safety-first execution, and clear reporting.',
      progressLabel: 'Progress',
      debugLabel: 'Active step',
      stepsEyebrow: 'Service flow',
      stepsTitle: 'Scrollytelling delivery model',
      stepsDescription: 'Scroll to see each step highlighted and the media panel update in real time.',
      steps: [
        {
          id: 'step-1',
          label: 'ON-SITE WELDING',
          title: 'Welding teams for steel structures and repairs',
          body: 'Site-ready welding workforce for structural steel, installations, and repair work—aligned with industrial timelines.',
          bullets: [
            'MIG / MAG / TIG for structural steel',
            'Repairs, fit-up, and on-site fabrication support',
            'Fast onboarding and clear scope',
          ],
          image: '/images/metal/welding-01.jpg',
          alt: 'Welding workforce on site',
          overlayLabel: 'Welding workforce',
          caption: 'Integrates fast into your site workflow.',
        },
        {
          id: 'step-2',
          label: 'SAFETY-FIRST',
          title: 'Compliance-driven work, clean reporting',
          body: 'Safety procedures and transparent updates keep delivery predictable and supervisors informed.',
          bullets: ['PPE-ready, aligned with site rules', 'Work permits and safety routines followed', 'Clear progress updates'],
          image: '/images/metal/welding-02.jpg',
          alt: 'Safety-first welding operation',
          overlayLabel: 'Safety & compliance',
          caption: 'Zero surprises on-site.',
        },
        {
          id: 'step-3',
          label: 'FLEXIBLE STAFFING',
          title: 'Scale up or down based on workload',
          body: 'Short-term support for deadlines or stable long-term staffing for continuous throughput.',
          bullets: ['Workforce rental for peaks', 'Long-term staffing options', 'Clear scheduling and handover'],
          image: '/images/metal/welding-03.jpg',
          alt: 'Flexible welding staffing',
          overlayLabel: 'Flexible delivery',
          caption: 'Right people, right duration.',
        },
        {
          id: 'step-4',
          label: 'FAST START',
          title: 'Request → offer → start on-site',
          body: 'Send scope and location, we confirm availability and next steps quickly.',
          bullets: ['Fast availability check', 'Clear offer and start date', 'Direct contacts, low friction'],
          image: '/images/metal/welding-04.jpg',
          alt: 'Fast response for welding projects',
          overlayLabel: 'Get an offer',
          caption: 'From request to action—fast.',
        },
      ],
      ctaEyebrow: 'Ready to deploy',
      ctaTitle: 'Confirm availability and start date today.',
      ctaBody: 'Send your scope and timeline. We respond quickly with staffing options and pricing.',
      ctaOffer: 'Request an offer',
      ctaCall: 'Call Martins',
    },
    bending: {
      eyebrow: 'Bending',
      title: 'Precision metal bending for construction.',
      description:
        'Sheet and metal bending teams delivering accurate forming, aligned schedules, and clean handover for site supervisors.',
      includedEyebrow: "What's included",
      includedTitle: 'Controlled forming with clean handover',
      includedDescription: 'We keep tolerances tight and schedules predictable.',
      items: [
        {
          title: 'Sheet and plate forming',
          body: 'Accurate bends for structural components and custom assemblies.',
        },
        {
          title: 'On-site adjustments',
          body: 'Fine-tuning and fit corrections for smooth installation.',
        },
        {
          title: 'Integration-ready handover',
          body: 'Clear labeling, packaging, and coordination with fabrication teams.',
        },
      ],
      ctaEyebrow: 'Plan your bends',
      ctaTitle: 'Lock in bending capacity for the next phase.',
      ctaBody: 'Share drawings and timelines. We will respond with capacity and pricing.',
      ctaOffer: 'Request an offer',
      ctaCall: 'Call Aigars',
    },
    metalConstruction: {
      eyebrow: 'Metal construction',
      title: 'Metal fabrication and installation support.',
      description:
        'Fit-up, assembly, and on-site installation teams for steel structures with clear scheduling and supervisor-ready reporting.',
      includedEyebrow: "What's included",
      includedTitle: 'Reliable metal construction delivery',
      includedDescription: 'We coordinate with site supervisors for clean handover and predictable schedules.',
      items: [
        {
          title: 'Fabrication and fit-up',
          body: 'Accurate pre-assembly and alignment for steel structures.',
        },
        {
          title: 'On-site installation',
          body: 'Installation teams aligned with site permits and safety routines.',
        },
        {
          title: 'Repairs and modifications',
          body: 'On-site repairs and adjustments to keep schedules intact.',
        },
      ],
      ctaEyebrow: 'Plan installation',
      ctaTitle: 'Reserve metal construction crews early.',
      ctaBody: 'Share drawings, scope, and location. We will respond with availability and a clear offer.',
      ctaOffer: 'Request an offer',
      ctaCall: 'Call Martins',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Request an offer or call directly.',
      description: 'Share your scope, location, and schedule. We respond quickly with availability and pricing.',
      directEyebrow: 'Direct contacts',
      directTitle: 'Reach the Nordmaster team',
      directDescription: 'Fast answers, clear scheduling, and a single point of contact for each project.',
      form: {
        name: 'Full name',
        email: 'Email',
        phone: 'Phone (optional)',
        message: 'Project details',
        placeholderName: 'Your name',
        placeholderEmail: 'name@company.com',
        placeholderPhone: '+358 40 123 4567',
        placeholderMessage: 'Scope, timeline, location, and metalwork needs',
        submit: 'Submit request',
        success: 'Thanks! We will respond quickly.',
        errorMissing: 'Please complete name, email, and message.',
        errorServer: 'Email service is not configured. Please call or email directly.',
        errorGeneric: 'Unable to send. Please try again.',
      },
    },
    footer: {
      title: 'Metal construction & fabrication support',
      body: 'Welding, bending, and metal fabrication teams for industrial construction sites across Southwest Finland and Satakunta.',
      regionLabel: 'Southwest Finland & Satakunta',
      copyright: '© 2026 Nordmaster Group. All rights reserved.',
    },
  },
  fi: {
    meta: {
      homeTitle: 'Nordmaster Group | Metallirakentaminen ja palvelut',
      homeDescription:
        'Hitsausta, taivutusta ja metallirakentamisen tiimejä Varsinais-Suomeen ja Satakuntaan. Nopea aloitus ja selkeä raportointi.',
      servicesTitle: 'Palvelut | Nordmaster Group',
      servicesDescription:
        'Metallirakentamisen palvelut: hitsaus, taivutus, valmistus ja asennus teollisiin projekteihin Varsinais-Suomessa ja Satakunnassa.',
      weldingTitle: 'Hitsaustyöt | Nordmaster Group',
      weldingDescription:
        'Työmaahitsauksen tiimit teräsrakenteisiin, korjauksiin ja valmistustukeen. Nopea aloitus ja selkeä raportointi.',
      bendingTitle: 'Taivutuspalvelut | Nordmaster Group',
      bendingDescription:
        'Levy- ja metallitaivutuksen tiimit tarkkaan muotoiluun ja aikataulukriittisiin toimituksiin.',
      metalConstructionTitle: 'Metallirakentaminen | Nordmaster Group',
      metalConstructionDescription:
        'Metallivalmistus, sovitus, asennus ja korjaukset teräsrakenteille selkeällä koordinoinnilla.',
      contactTitle: 'Yhteystiedot | Nordmaster Group',
      contactDescription:
        'Pyydä tarjous metallirakentamisesta, hitsauksesta tai taivutuksesta. Ota yhteys suoraan puhelimitse tai sähköpostilla.',
    },
    nav: {
      home: 'Etusivu',
      services: 'Palvelut',
      welding: 'Hitsaus',
      bending: 'Taivutus',
      metalConstruction: 'Metallirakentaminen',
      contact: 'Yhteystiedot',
      cta: 'Pyydä tarjous',
    },
    brand: {
      short: 'Nordmaster',
      group: 'Group',
      menu: 'Valikko',
    },
    common: {
      exploreService: 'Tutustu palveluun',
      imageFallback: 'Kuva ei saatavilla',
    },
    alts: {
      homeHero: 'Nordmaster Group metallirakentaminen',
      servicesHero: 'Nordmaster Group palvelut',
      weldingHero: 'Työmaahitsauksen tiimi',
      bendingHero: 'Metallitaivutuspalvelut',
      metalConstructionHero: 'Metallirakentaminen ja asennus',
      contactHero: 'Nordmaster Group yhteystiedot',
    },
    hero: {
      eyebrow: 'Metallirakentamisen palvelut',
      title: 'Työmaavalmiit hitsaus-, taivutus- ja metallirakennetiimit.',
      valueProp:
        'Nordmaster Group toimittaa teollisen metallityön tiimejä rakennushankkeisiin Varsinais-Suomessa ja Satakunnassa.',
      ctaOffer: 'Pyydä tarjous',
      ctaCall: 'Soita',
      imageCaption: 'Metallirakentamisen tuki, joka integroituu nopeasti ja pitää aikataulut kunnossa.',
    },
    serviceIntro: {
      eyebrow: 'Palvelun ydin',
      title: 'Teollinen metallityö sovitulla aikataululla',
      description: 'Erikoistiimit hitsaukseen, taivutukseen ja metallirakentamiseen selkeällä koordinoinnilla ja työmaavalmiudella.',
    },
    services: {
      eyebrow: 'Palvelut',
      title: 'Metallirakentamisen erikoistiimit',
      description: 'Hitsaus, taivutus ja metallirakentaminen — valmiina aikatauluusi.',
      cards: [
        {
          title: 'Hitsaus',
          description: 'MIG/MAG/TIG-hitsaus tiimeiltä teräsrakenteisiin, korjauksiin ja työmaatukeen.',
          href: '/services/welding',
          label: 'Hitsaus',
        },
        {
          title: 'Taivutus',
          description: 'Levy- ja metallitaivutus tiimeiltä tarkkaan muotoiluun ja toimituksiin.',
          href: '/services/bending',
          label: 'Taivutus',
        },
        {
          title: 'Metallirakentaminen',
          description: 'Valmistus, sovitus, asennus ja korjaukset teräsrakenteille ja työmaametallitöihin.',
          href: '/services/metal-construction',
          label: 'Metallirakentaminen',
        },
      ],
    },
    howWeWork: {
      eyebrow: 'Toimintamalli',
      title: 'Pyyntö → Tarjous → Aloitus työmaalla',
      description: 'Selkeä prosessi, joka pitää työmaan liikkeessä.',
      stepLabel: 'Vaihe',
      steps: [
        { title: 'Pyyntö', body: 'Lähetä laajuus, sijainti ja aikataulu.' },
        { title: 'Tarjous', body: 'Vahvistamme saatavuuden, hinnan ja aloituksen.' },
        { title: 'Aloitus työmaalla', body: 'Tiimit perehdytetään ja aloittavat nopeasti.' },
      ],
    },
    coverage: {
      eyebrow: 'Toiminta-alueet',
      title: 'Varsinais-Suomi & Satakunta',
      description: 'Metallirakentamisen tuki koko alueelle.',
      regions: [
        {
          region: 'Varsinais-Suomi',
          cities: ['Turku', 'Raisio', 'Naantali', 'Kaarina', 'Salo', 'Lieto'],
        },
        {
          region: 'Satakunta',
          cities: ['Pori', 'Rauma', 'Ulvila', 'Harjavalta', 'Eurajoki', 'Kankaanpää'],
        },
      ],
    },
    contacts: {
      eyebrow: 'Suorat yhteydet',
      title: 'Keskustele päättäjien kanssa',
      description: 'Nopeat vastaukset, selkeä aikataulu ja suora koordinointi.',
      responseEyebrow: 'Vastauslupaus',
      responseTitle: 'Nopea tarjous ja selkeä aloitus',
      responseBody: 'Vahvistamme saatavuuden nopeasti ja pidämme aikataulun hallinnassa.',
      company: 'Nordmaster Group',
      aigars: 'Aigars Cerpinskis',
      martins: 'Martins Cerpinskis',
      call: 'Soita',
      email: 'support@nordmastergroup.com',
    },
    ctaBand: {
      eyebrow: 'Valmiina aloittamaan?',
      title: 'Varaa metallityötiimit seuraavaan vaiheeseen.',
      body: 'Jaa aikataulu ja laajuus. Vastaamme selkeällä suunnitelmalla ja hinnalla.',
      ctaOffer: 'Pyydä tarjous',
      ctaCall: 'Soita Aigarsille',
      ctaCallMartins: 'Soita Martinsille',
      ctaEmail: 'Sähköposti',
    },
    servicesIndex: {
      eyebrow: 'Palvelut',
      title: 'Metallirakentamisen tuki aikataulun ehdoilla.',
      description: 'Hitsaus, taivutus ja metallityöt nopeasti käyttöön selkeällä raportoinnilla.',
      deliveryEyebrow: 'Toimitusmalli',
      deliveryTitle: 'Työmaan aikatauluun linjattu',
      deliveryDescription: 'Nopea aloitus tai pitkäkestoinen tuki — pidämme työn ennustettavana.',
      deliveryList: [
        'Selkeä laajuus ja miehityssuunnitelma.',
        'Turvallisuusperehdytys työmaan käytäntöihin.',
        'Säännöllinen raportointi ja läpinäkyvät tunnit.',
        'Joustava skaalaus deadlineihin.',
      ],
      deliveryBodyTitle: 'Metallirakentamisen tiimit teollisuuskohteisiin',
      deliveryBody:
        'Tuemme teollisia uudis- ja korjauskohteita Varsinais-Suomessa ja Satakunnassa. Tiimit ovat työmaavalmiita, noudattavat vaatimuksia ja pitävät aikataulun kunnossa.',
      deliveryCities: ['Turku', 'Raisio', 'Naantali', 'Kaarina', 'Pori', 'Rauma'],
    },
    welding: {
      eyebrow: 'Hitsaus',
      title: 'Työmaahitsauksen tiimit vaativiin kohteisiin.',
      description:
        'Pätevät hitsaajat teräsrakenteisiin, korjauksiin ja valmistustukeen. Nopea aloitus, turvallinen toteutus ja selkeä raportointi.',
      progressLabel: 'Etenemä',
      debugLabel: 'Aktiivinen vaihe',
      stepsEyebrow: 'Palvelupolku',
      stepsTitle: 'Rullaava toimitusmalli',
      stepsDescription: 'Vieritä nähdäksesi vaiheiden korostuksen ja median päivittymisen.',
      steps: [
        {
          id: 'step-1',
          label: 'HITSAUS TYÖMAALLA',
          title: 'Hitsaustiimit teräsrakenteisiin ja korjauksiin',
          body: 'Työmaavalmiit hitsaajat teräsrakenteisiin, asennuksiin ja korjaustöihin – teollisen aikataulun mukaisesti.',
          bullets: [
            'MIG / MAG / TIG teräsrakenteille',
            'Korjaukset, sovitus (fit-up) ja työmaafabrikointi',
            'Nopea aloitus ja selkeä työn rajaus',
          ],
          image: '/images/metal/welding-01.jpg',
          alt: 'Työmaahitsaus',
          overlayLabel: 'Hitsaustiimi',
          caption: 'Mukautuu nopeasti työmaan toimintatapaan.',
        },
        {
          id: 'step-2',
          label: 'TURVALLISUUS ENNEN KAIKKEA',
          title: 'Vaatimustenmukainen työ ja selkeä raportointi',
          body: 'Turvallisuuskäytännöt ja läpinäkyvät päivitykset pitävät työn ennakoitavana ja johdon ajan tasalla.',
          bullets: [
            'PPE-valmius ja työmaan ohjeiden noudattaminen',
            'Luvat ja turvallisuusrutiinit kunnossa',
            'Selkeät etenemispäivitykset',
          ],
          image: '/images/metal/welding-02.jpg',
          alt: 'Turvallinen hitsaustyö',
          overlayLabel: 'Turvallisuus',
          caption: 'Ei yllätyksiä työmaalla.',
        },
        {
          id: 'step-3',
          label: 'JOUSTAVA RESURSSOINTI',
          title: 'Skaalaa tarpeen mukaan',
          body: 'Lyhytaikainen tuki kiirepiikkeihin tai pitkäaikainen resursointi tasaisen tuotannon varmistamiseen.',
          bullets: ['Vuokraresurssi deadlineihin', 'Pitkäkestoiset henkilöstöratkaisut', 'Selkeä aikataulutus ja luovutus'],
          image: '/images/metal/welding-03.jpg',
          alt: 'Joustava hitsaus',
          overlayLabel: 'Joustavuus',
          caption: 'Oikeat tekijät, oikeaksi ajaksi.',
        },
        {
          id: 'step-4',
          label: 'NOPEA KÄYNNISTYS',
          title: 'Pyyntö → tarjous → aloitus',
          body: 'Lähetä työn kuvaus ja sijainti – varmistamme saatavuuden ja seuraavat askeleet nopeasti.',
          bullets: ['Nopea saatavuustarkistus', 'Selkeä tarjous ja aloituspäivä', 'Suorat yhteydet, vähän kitkaa'],
          image: '/images/metal/welding-04.jpg',
          alt: 'Nopea aloitus',
          overlayLabel: 'Pyydä tarjous',
          caption: 'Pyynnöstä toteutukseen – nopeasti.',
        },
      ],
      ctaEyebrow: 'Valmis aloitukseen',
      ctaTitle: 'Vahvista saatavuus ja aloitus tänään.',
      ctaBody: 'Lähetä laajuus ja aikataulu. Vastaamme nopeasti miehitysvaihtoehdoilla ja hinnoilla.',
      ctaOffer: 'Pyydä tarjous',
      ctaCall: 'Soita Martinsille',
    },
    bending: {
      eyebrow: 'Taivutus',
      title: 'Tarkka metallitaivutus rakentamiseen.',
      description:
        'Levy- ja metallitaivutuksen tiimit tarkkaan muotoiluun, aikataulujen mukaan ja selkeällä luovutuksella.',
      includedEyebrow: 'Mitä sisältää',
      includedTitle: 'Hallittu muotoilu ja siisti luovutus',
      includedDescription: 'Pidämme toleranssit tiukkoina ja aikataulut ennustettavina.',
      items: [
        {
          title: 'Levy- ja levytaivutus',
          body: 'Tarkat taivutukset rakenneosille ja erikoiskokoonpanoille.',
        },
        {
          title: 'Työmaasäätö',
          body: 'Hienosäätö ja sovitus korjaavat asennuksen sujuvaksi.',
        },
        {
          title: 'Valmis integraatioon',
          body: 'Selkeä merkintä, pakkaus ja koordinointi valmistuksen kanssa.',
        },
      ],
      ctaEyebrow: 'Suunnittele taivutus',
      ctaTitle: 'Varaa taivutuskapasiteetti seuraavaan vaiheeseen.',
      ctaBody: 'Jaa piirustukset ja aikataulut. Vastaamme kapasiteetilla ja hinnoilla.',
      ctaOffer: 'Pyydä tarjous',
      ctaCall: 'Soita Aigarsille',
    },
    metalConstruction: {
      eyebrow: 'Metallirakentaminen',
      title: 'Metallivalmistuksen ja asennuksen tuki.',
      description:
        'Sovitus, kokoonpano ja asennus teräsrakenteille selkeällä aikataulutuksella ja raportoinnilla.',
      includedEyebrow: 'Mitä sisältää',
      includedTitle: 'Luotettava metallirakentamisen toimitus',
      includedDescription: 'Koordinoimme työmaan kanssa ja varmistamme siistin luovutuksen.',
      items: [
        {
          title: 'Valmistus ja sovitus',
          body: 'Tarkka esikokoonpano ja kohdistus teräsrakenteille.',
        },
        {
          title: 'Asennus työmaalla',
          body: 'Asennustiimit työmaan lupien ja turvallisuuskäytäntöjen mukaan.',
        },
        {
          title: 'Korjaukset ja muutokset',
          body: 'Työmaakorjaukset ja muutokset aikataulun turvaamiseksi.',
        },
      ],
      ctaEyebrow: 'Suunnittele asennus',
      ctaTitle: 'Varaa metallirakentamisen tiimit ajoissa.',
      ctaBody: 'Jaa piirustukset, laajuus ja sijainti. Vastaamme saatavuudella ja tarjouksella.',
      ctaOffer: 'Pyydä tarjous',
      ctaCall: 'Soita Martinsille',
    },
    contact: {
      eyebrow: 'Yhteystiedot',
      title: 'Pyydä tarjous tai soita suoraan.',
      description: 'Kerro laajuus, sijainti ja aikataulu. Vastaamme nopeasti saatavuudella ja hinnoilla.',
      directEyebrow: 'Suorat yhteydet',
      directTitle: 'Ota yhteys Nordmasteriin',
      directDescription: 'Nopea vaste, selkeä aikataulu ja yksi yhteyshenkilö projektiin.',
      form: {
        name: 'Nimi',
        email: 'Sähköposti',
        phone: 'Puhelin (valinnainen)',
        message: 'Projektin tiedot',
        placeholderName: 'Nimesi',
        placeholderEmail: 'nimi@yritys.fi',
        placeholderPhone: '+358 40 123 4567',
        placeholderMessage: 'Laajuus, aikataulu, sijainti ja metallityön tarve',
        submit: 'Lähetä pyyntö',
        success: 'Kiitos! Palaamme nopeasti.',
        errorMissing: 'Täytä nimi, sähköposti ja viesti.',
        errorServer: 'Sähköpostipalvelua ei ole määritetty. Soita tai lähetä sähköposti suoraan.',
        errorGeneric: 'Lähetys epäonnistui. Yritä uudelleen.',
      },
    },
    footer: {
      title: 'Metallirakentamisen ja valmistuksen tuki',
      body: 'Hitsaus-, taivutus- ja metallityötiimit teollisiin työmaihin Varsinais-Suomessa ja Satakunnassa.',
      regionLabel: 'Varsinais-Suomi & Satakunta',
      copyright: '© 2026 Nordmaster Group. Kaikki oikeudet pidätetään.',
    },
  },
};

export type Dictionary = typeof dictionary.en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale];
}

export function createT(locale: Locale) {
  const dict = getDictionary(locale);
  return function t(path: string) {
    const value = path.split('.').reduce((acc, key) => (acc as any)?.[key], dict as unknown);
    return typeof value === 'string' ? value : String(value ?? '');
  };
}

export function getI18n(params: { locale: string }) {
  const locale = getLocaleFromParams(params);
  const dict = getDictionary(locale);
  const t = createT(locale);
  return { locale, dict, t };
}
