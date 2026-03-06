// @refresh reset
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fi: {
    // Header
    'nav.home': 'Etusivu',
    'nav.services': 'Palvelut',
    'nav.process': 'Prosessi',
    'nav.contact': 'Yhteystiedot',
    'nav.offer': 'Pyydä tarjous',
    'company.tagline': 'Metallisten rakenteiden valmistus',
    
    // Hero
    'hero.title': 'Nordmaster Group',
    'hero.headline': 'Metallirakentamisen ammattilaiset työmaallesi.',
    'hero.subline': 'Tarjoamme hitsaus-, särmäys- ja metallirakennusosaajia teollisuus- ja rakennusprojekteihin Varsinais-Suomen ja Satakunnan alueella.',
    'hero.cta.offer': 'Pyydä tarjous',
    'hero.cta.call': 'Soita',

    'intro.title': 'Nopeat aloitukset, selkeä toimitus',
    'intro.body': 'Toimitamme hitsaus-, taivutus- ja teräsrakennuspalvelut työmaavalmiina.',
    'intro.cta': 'Ota yhteyttä',
    'hero.stat1': 'Vuotta kokemusta',
    'hero.stat2': 'Toteutettua projektia',
    'hero.stat3': 'Ammattityö',
    
    // Services
    'services.label': 'Palvelumme',
    'services.title': 'Palvelut',
    'services.description': 'Kolme ydinaluetta työmaillesi.',

    'services.cards.welding.title': 'Hitsaus',
    'services.cards.welding.desc': 'Ammattitaitoinen MIG-, MAG- ja TIG-hitsaus teräsrakenteisiin, korjauksiin ja työmaavalmistukseen.',
    'services.cards.bending.title': 'Särmäys',
    'services.cards.bending.desc': 'Tarkka metallin ja levyn särmäys teollisuus- ja rakennusprojekteihin.',
    'services.cards.construction.title': 'Metallirakentaminen',
    'services.cards.construction.desc': 'Teräsrakenteiden valmistus, asennus ja metallirakentaminen rakennus- ja teollisuuskohteisiin.',
    'services.cards.support.title': 'Työmaapalvelut',
    'services.cards.support.desc': 'Aikataulutettu työvoima ja tuki työmaan kriittisiin vaiheisiin.',

    'services.fullbleed.cta': 'Pyydä tarjous',
    'services.fullbleed.welding.eyebrow': 'HITSAUS',
    'services.fullbleed.welding.title': 'Hitsaus',
    'services.fullbleed.welding.description': 'Ammattitaitoinen MIG-, MAG- ja TIG-hitsaus teräsrakenteisiin, korjauksiin ja työmaavalmistukseen.',
    'services.fullbleed.welding.bullet1': 'MIG / MAG / TIG',
    'services.fullbleed.welding.bullet2': 'Työmaavalmistus ja korjaukset',
    'services.fullbleed.welding.bullet3': 'Nopea aloitus, selkeä koordinointi',
    'services.fullbleed.welding.alt': 'Hitsaustiimi työmaalla',

    'services.fullbleed.bending.eyebrow': 'SÄRMÄYS',
    'services.fullbleed.bending.title': 'Särmäys',
    'services.fullbleed.bending.description': 'Tarkka metallin ja levyn särmäys teollisuus- ja rakennusprojekteihin.',
    'services.fullbleed.bending.bullet1': 'Tarkka muotoilu',
    'services.fullbleed.bending.bullet2': 'Aikatauluun sopiva toimitus',
    'services.fullbleed.bending.bullet3': 'Tarvittaessa työmaakorjaukset',
    'services.fullbleed.bending.alt': 'Metallin taivutus',

    'services.fullbleed.construction.eyebrow': 'METALLIRAKENTAMINEN',
    'services.fullbleed.construction.title': 'Metallirakentaminen',
    'services.fullbleed.construction.description': 'Teräsrakenteiden valmistus, asennus ja metallirakentaminen rakennus- ja teollisuuskohteisiin.',
    'services.fullbleed.construction.bullet1': 'Valmistus ja sovitus',
    'services.fullbleed.construction.bullet2': 'Asennus ja korjaukset',
    'services.fullbleed.construction.bullet3': 'Työmaavalmiit tiimit',
    'services.fullbleed.construction.alt': 'Teräsrakentamisen työmaa',

    'map.label': 'KARTTA',
    'map.title': 'Toiminta-alue',

    'services.fullbleed.support.eyebrow': 'TYÖMAATUKI',
    'services.fullbleed.support.title': 'Aikataulussa pysyvä työmaatoimitus',
    'services.fullbleed.support.description': 'Resurssit nopeasti työmaalle.',
    'services.fullbleed.support.bullet1': 'Nopea saatavuus',
    'services.fullbleed.support.bullet2': 'Selkeä työn rajaus',
    'services.fullbleed.support.bullet3': 'Kokeneet tekijät paikan päälle',
    'services.fullbleed.support.alt': 'Työmaatuki ja resursointi',
    
    // Metal Services
    'service.fabrication.title': 'Metallien valmistus',
    'service.fabrication.desc': 'Ammattitaitoinen metallien työstö ja valmistus. Teräs, ruostumaton teräs ja alumiini.',
    'service.welding.title': 'Hitsaustyöt',
    'service.welding.desc': 'Sertifioidut hitsaajat. MIG, TIG ja kaarihitsaus. Laadukkaat hitsaussaumat kaikenlaisiin projekteihin.',
    'service.structures.title': 'Teräsrakenteet',
    'service.structures.desc': 'Teräsrakenteiden suunnittelu ja toteutus. Hallit, sillat ja kantavat rakenteet.',
    'service.stairs.title': 'Portaat ja kaiteet',
    'service.stairs.desc': 'Metallisten portaiden ja kaiteiden valmistus. Turvalliset ja kestävät ratkaisut.',
    'service.custom.title': 'Erikoisvalmistus',
    'service.custom.desc': 'Räätälöidyt metallirakenteet asiakkaan tarpeiden mukaan. Yksilölliset ratkaisut vaativiin kohteisiin.',
    'service.installation.title': 'Asennus',
    'service.installation.desc': 'Ammattimainen asennus ja käyttöönotto. Huolehdimme koko prosessista alusta loppuun.',
    'service.design.title': 'Suunnittelu',
    'service.design.desc': 'Metallisten rakenteiden 3D-suunnittelu ja tekniset piirustukset. Yhteistyö arkkitehtien kanssa.',
    'service.maintenance.title': 'Huolto ja korjaus',
    'service.maintenance.desc': 'Metallisten rakenteiden huolto, kunnostus ja korjaus. Pidämme rakenteesi kunnossa.',
    'service.consulting.title': 'Konsultointi',
    'service.consulting.desc': 'Asiantuntija-apu materiaalivalintoihin ja rakenneratkaisuihin. Ammattitaitoinen neuvonta.',
    
    'service.planning.title': 'Projektisuunnittelu',
    'service.planning.desc': 'Laaditaan yksityiskohtainen suunnitelma projektillesi. Ammattitaitoinen konsultointi ja projektin hallinta.',
    'service.execution.title': 'Toteutus',
    'service.execution.desc': 'Laadukas toteutus moderneilla laitteilla ja kokeneen tiimin toimesta. Aikataulussa ja budjetissa.',
    
    // Story
    'how.label': 'MITEN TOIMIMME',
    'how.heading': 'Miten toimimme',
    'how.subtitle': 'Pyyntö → Tarjous → Aloitus työmaalla',
    'how.step1.title': 'Pyyntö',
    'how.step1.desc': 'Lähetä projektin tiedot ja aikataulu.',
    'how.step2.title': 'Tarjous',
    'how.step2.desc': 'Vahvistamme saatavuuden ja lähetämme selkeän tarjouksen.',
    'how.step3.title': 'Aloitus työmaalla',
    'how.step3.desc': 'Tiimimme aloittaa nopeasti ja toimii osana projektia.',

    
    'project.1.title': 'Teollisuushallin teräsrakenne',
    'project.1.category': 'Teräsrakenteet',
    'project.1.desc': 'Laajan tuotantohallin teräsrakenteiden valmistus ja asennus',
    'project.2.title': 'Modernit teräsportaat',
    'project.2.category': 'Portaat ja kaiteet',
    'project.2.desc': 'Sisäportaat ja kaiteet toimistorakennukseen',
    'project.3.title': 'Laituri ja portaat',
    'project.3.category': 'Erikoisvalmistus',
    'project.3.desc': 'Ruostumattomasta teräksestä valmistettu laituri ja portaat',
    'project.4.title': 'Kauppakeskuksen kaiteet',
    'project.4.category': 'Portaat ja kaiteet',
    'project.4.desc': 'Räätälöidyt lasikaiteet ja teräsrakenteet',
    'project.5.title': 'Sillan teräsrakenne',
    'project.5.category': 'Teräsrakenteet',
    'project.5.desc': 'Jalankulkusillan kantava teräsrakenne',
    'project.6.title': 'Teollisuuslaitteet',
    'project.6.category': 'Erikoisvalmistus',
    'project.6.desc': 'Räätälöidyt metalliosat ja rakenteet teollisuuslaitteisiin',
    
    'projects.cta.question': 'Haluatko toteuttaa oman projektisi?',
    'projects.cta.button': 'Ota yhteyttä',

    'contacts.direct': 'Suorat yhteydet',
    'contacts.call.aigars': 'Soita Aigarsille',
    'contacts.call.martins': 'Soita Martinsille',
    'contacts.email': 'Sähköposti',

    'welding.steps.1.label': 'HITSAUS TYÖMAALLA',
    'welding.steps.1.title': 'Hitsaustiimit teräsrakenteisiin ja korjauksiin',
    'welding.steps.1.body': 'Työmaavalmiit hitsaajat teräsrakenteisiin, asennuksiin ja korjaustöihin – teollisen aikataulun mukaisesti.',
    'welding.steps.1.bullet1': 'MIG / MAG / TIG teräsrakenteille',
    'welding.steps.1.bullet2': 'Korjaukset, sovitus (fit-up) ja työmaafabrikointi',
    'welding.steps.1.bullet3': 'Nopea aloitus ja selkeä työn rajaus',
    'welding.steps.1.media.alt': 'Hitsaustiimi työmaalla',
    'welding.steps.1.media.overlay': 'Hitsaustiimi',
    'welding.steps.1.media.caption': 'Mukautuu nopeasti työmaan toimintatapaan.',

    'welding.steps.2.label': 'TURVALLISUUS ENNEN KAIKKEA',
    'welding.steps.2.title': 'Vaatimustenmukainen työ ja selkeä raportointi',
    'welding.steps.2.body': 'Turvallisuuskäytännöt ja läpinäkyvät päivitykset pitävät työn ennakoitavana ja johdon ajan tasalla.',
    'welding.steps.2.bullet1': 'PPE-valmius ja työmaan ohjeiden noudattaminen',
    'welding.steps.2.bullet2': 'Luvat ja turvallisuusrutiinit kunnossa',
    'welding.steps.2.bullet3': 'Selkeät etenemispäivitykset',
    'welding.steps.2.media.alt': 'Turvallisuus työmaalla',
    'welding.steps.2.media.overlay': 'Turvallisuus',
    'welding.steps.2.media.caption': 'Ei yllätyksiä työmaalla.',

    'welding.steps.3.label': 'JOUSTAVA RESURSSOINTI',
    'welding.steps.3.title': 'Skaalaa tarpeen mukaan',
    'welding.steps.3.body': 'Lyhytaikainen tuki kiirepiikkeihin tai pitkäaikainen resursointi tasaisen tuotannon varmistamiseen.',
    'welding.steps.3.bullet1': 'Vuokraresurssi deadlineihin',
    'welding.steps.3.bullet2': 'Pitkäkestoiset henkilöstöratkaisut',
    'welding.steps.3.bullet3': 'Selkeä aikataulutus ja luovutus',
    'welding.steps.3.media.alt': 'Joustava toimitus',
    'welding.steps.3.media.overlay': 'Joustavuus',
    'welding.steps.3.media.caption': 'Oikeat tekijät, oikeaksi ajaksi.',

    'welding.steps.4.label': 'NOPEA KÄYNNISTYS',
    'welding.steps.4.title': 'Pyyntö → tarjous → aloitus',
    'welding.steps.4.body': 'Lähetä työn kuvaus ja sijainti – varmistamme saatavuuden ja seuraavat askeleet nopeasti.',
    'welding.steps.4.bullet1': 'Nopea saatavuustarkistus',
    'welding.steps.4.bullet2': 'Selkeä tarjous ja aloituspäivä',
    'welding.steps.4.bullet3': 'Suorat yhteydet, vähän kitkaa',
    'welding.steps.4.media.alt': 'Nopea käynnistys',
    'welding.steps.4.media.overlay': 'Pyydä tarjous',
    'welding.steps.4.media.caption': 'Pyynnöstä toteutukseen – nopeasti.',
    
    // About
    'about.label': 'Meistä',
    'about.title': 'Metallityön ammattilaiset vuodesta 2014',
    'about.p1': 'on suomalainen yritys, joka on erikoistunut metallisten rakenteiden valmistukseen. Toimimme Osakeyhtiömuodossa ja palvelemme sekä teollisuutta että yksityisasiakkaita ympäri Suomen.',
    'about.p2': 'Meille tärkeintä on laadukas lopputulos ja asiakastyytyväisyys. Käytämme modernia teknologiaa ja sertifioituja työmenetelmiä. Kokeneella tiimillämme varmistamme projektin onnistumisen alusta loppuun.',
    'about.feature1.title': 'Ammattitaito',
    'about.feature1.desc': 'Yli 10 vuoden kokemus metallitöistä. Sertifioidut hitsaajat ja ammattitaitoiset asentajat.',
    'about.feature2.title': 'Laatu',
    'about.feature2.desc': 'Kaikki työt tehdään korkealla ammattitaidolla. Takuut ja vastuuvakuutukset kunnossa.',
    'about.feature3.title': 'Luotettavuus',
    'about.feature3.desc': 'Aikataulussa ja budjetissa. Asiakkaamme suosittelevat meitä edelleen.',
    'about.stat1': 'Vuotta alalla',
    'about.stat2': 'Toteutettua projektia',
    'about.stat3': 'Asiakastyytyväisyys',
    'about.stat4': 'Neuvontapalvelu',
    
    // Testimonials
    'testimonials.label': 'Asiakkaiden kokemuksia',
    'testimonials.title': 'Mitä asiakkaamme sanovat',
    'testimonials.description': 'Asiakastyytyväisyys on meille tärkeintä. Lue mitä asiakkaamme kertovat projekteistamme.',
    'testimonial1.name': 'Teemu Virtanen',
    'testimonial1.role': 'Teollisuusyritys Oy',
    'testimonial1.text': 'Halliproiekti onnistui täydellisesti. Teräsrakenteet on valmistettu ja asennettu ammattitaidolla. Aikataulu piti ja laatu on huippuluokkaa.',
    'testimonial2.name': 'Laura Korhonen',
    'testimonial2.role': 'Kiinteistöyhtiö',
    'testimonial2.text': 'Portaat ja kaiteet valmistuivat juuri suunnitelman mukaisesti. Kaunis ja kestävä lopputulos. Erittäin tyytyväisiä työnjälkeen!',
    'testimonial3.name': 'Juha Mäkinen',
    'testimonial3.role': 'Yksityisasiakas',
    'testimonial3.text': 'Nordmaster Group toteutti laiturirakenteemme erinomaisesti. Ruostumaton teräs ja laadukas työ. Suosittelen lämpimästi!',
    
    // Contact
    'contact.label': 'Yhteystiedot',
    'contact.title': 'Yhteystiedot',
    'contact.description': 'Ota suoraan yhteyttä.',
    'contact.email.helper': 'Jos sähköpostiohjelma ei aukea, kopioi osoite.',
    'contact.email.copy': 'Kopioi email',
    'contact.email.copied': 'Kopioitu',
    'contact.form.title': 'Lähetä viesti',
    'contact.form.name': 'Nimi',
    'contact.form.name.placeholder': 'Etunimi Sukunimi',
    'contact.form.email': 'Sähköposti',
    'contact.form.email.placeholder': 'nimi@email.fi',
    'contact.form.phone': 'Puhelin (valinnainen)',
    'contact.form.phone.placeholder': '+358 XX XXX XXXX',
    'contact.form.message': 'Viesti',
    'contact.form.message.placeholder': 'Kuvaa lyhyesti tarpeesi...',
    'contact.form.submit': 'Lähetä',
    'contact.form.sending': 'Lähetetään...',
    'contact.form.success': 'Kiitos! Viesti on lähetetty.',
    'contact.form.fallback': 'Lähetin viestin sähköpostiohjelmaan varmistuksena.',
    'contact.form.error': 'Lähetys epäonnistui. Tarkista tiedot ja yritä uudelleen.',
    'contact.person1': 'Aigars Cerpinskis',
    'contact.person2': 'Martins Cerpinskis',
    'contact.call': 'Soita',
    
    // Footer
    'footer.description': 'Metallirakentamisen tiimit työmaallesi.',
    'footer.contact': 'Yhteystiedot',
    'footer.getquote': 'Pyydä tarjous',
    'footer.copyright': '© 2026 Nordmaster Group Oy. Kaikki oikeudet pidätetään.',
    'footer.legal': 'Osakeyhtiö • Metallityöt',
    
    // Common
    'common.years': 'vuotta',
    'common.quality': 'Laadukas',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.offer': 'Request an offer',
    'company.tagline': 'Metal Structure Fabrication',
    
    // Hero
    'hero.title': 'Nordmaster Group',
    'hero.headline': 'Metal construction crews ready for your site.',
    'hero.subline': 'Site-ready welding, bending, and metal construction teams supporting industrial projects in Southwest Finland and Satakunta.',
    'hero.cta.offer': 'Request an offer',
    'hero.cta.call': 'Call',

    'intro.title': 'Fast start, clear delivery',
    'intro.body': 'We deliver welding, bending, and steel construction services ready on-site.',
    'intro.cta': 'Contact us',
    'hero.stat1': 'Years Experience',
    'hero.stat2': 'Completed Projects',
    'hero.stat3': 'Professional Work',
    
    // Services
    'services.label': 'Our Services',
    'services.title': 'Services',
    'services.description': 'Three core service areas.',

    'services.cards.welding.title': 'Welding',
    'services.cards.welding.desc': 'Professional MIG, MAG, and TIG welding for structural steel, fabrication, and repairs on construction sites.',
    'services.cards.bending.title': 'Bending',
    'services.cards.bending.desc': 'Accurate sheet and metal bending services supporting industrial construction and fabrication projects.',
    'services.cards.construction.title': 'Metal construction',
    'services.cards.construction.desc': 'Steel fabrication, installation, and structural metalwork for construction sites and industrial projects.',
    'services.cards.support.title': 'Site Support',
    'services.cards.support.desc': 'Scheduled workforce support for critical site phases.',

    'services.fullbleed.cta': 'Request an offer',
    'services.fullbleed.welding.eyebrow': 'WELDING',
    'services.fullbleed.welding.title': 'Welding',
    'services.fullbleed.welding.description': 'Professional MIG, MAG, and TIG welding for structural steel, fabrication, and repairs on construction sites.',
    'services.fullbleed.welding.bullet1': 'MIG / MAG / TIG',
    'services.fullbleed.welding.bullet2': 'On-site fabrication & repairs',
    'services.fullbleed.welding.bullet3': 'Fast start, clear coordination',
    'services.fullbleed.welding.alt': 'Welding team on site',

    'services.fullbleed.bending.eyebrow': 'BENDING',
    'services.fullbleed.bending.title': 'Bending',
    'services.fullbleed.bending.description': 'Accurate sheet and metal bending services supporting industrial construction and fabrication projects.',
    'services.fullbleed.bending.bullet1': 'Precise forming',
    'services.fullbleed.bending.bullet2': 'Schedule-aligned delivery',
    'services.fullbleed.bending.bullet3': 'On-site adjustments when needed',
    'services.fullbleed.bending.alt': 'Metal bending work',

    'services.fullbleed.construction.eyebrow': 'METAL CONSTRUCTION',
    'services.fullbleed.construction.title': 'Metal construction',
    'services.fullbleed.construction.description': 'Steel fabrication, installation, and structural metalwork for construction sites and industrial projects.',
    'services.fullbleed.construction.bullet1': 'Fabrication & fit-up',
    'services.fullbleed.construction.bullet2': 'Installation & repairs',
    'services.fullbleed.construction.bullet3': 'Site-ready teams',
    'services.fullbleed.construction.alt': 'Steel construction site',

    'map.label': 'MAP',
    'map.title': 'Service area',

    'services.fullbleed.support.eyebrow': 'SITE SUPPORT',
    'services.fullbleed.support.title': 'Keep site delivery on schedule',
    'services.fullbleed.support.description': 'Fast staffing when timelines tighten.',
    'services.fullbleed.support.bullet1': 'Rapid availability',
    'services.fullbleed.support.bullet2': 'Clear work scope',
    'services.fullbleed.support.bullet3': 'Experienced crews on-site',
    'services.fullbleed.support.alt': 'On-site support',
    
    // Metal Services
    'service.fabrication.title': 'Metal Fabrication',
    'service.fabrication.desc': 'Professional metal processing and fabrication. Steel, stainless steel, and aluminum.',
    'service.welding.title': 'Welding Works',
    'service.welding.desc': 'Certified welders. MIG, TIG, and arc welding. Quality weld seams for all types of projects.',
    'service.structures.title': 'Steel Structures',
    'service.structures.desc': 'Design and construction of steel structures. Halls, bridges, and load-bearing structures.',
    'service.stairs.title': 'Stairs & Railings',
    'service.stairs.desc': 'Fabrication of metal stairs and railings. Safe and durable solutions.',
    'service.custom.title': 'Custom Fabrication',
    'service.custom.desc': 'Customized metal structures according to client needs. Individual solutions for demanding projects.',
    'service.installation.title': 'Installation',
    'service.installation.desc': 'Professional installation and commissioning. We handle the entire process from start to finish.',
    'service.design.title': 'Design',
    'service.design.desc': '3D design of metal structures and technical drawings. Collaboration with architects.',
    'service.maintenance.title': 'Maintenance & Repair',
    'service.maintenance.desc': 'Maintenance, renovation, and repair of metal structures. We keep your structures in top condition.',
    'service.consulting.title': 'Consulting',
    'service.consulting.desc': 'Expert help with material selection and structural solutions. Professional advice.',
    
    'service.planning.title': 'Project Planning',
    'service.planning.desc': 'Create a detailed plan for your project. Professional consulting and project management.',
    'service.execution.title': 'Execution',
    'service.execution.desc': 'Quality execution with modern equipment and experienced team. On schedule and on budget.',
    
    // Story
    'how.label': 'HOW WE WORK',
    'how.heading': 'How we work',
    'how.subtitle': 'Request → Offer → Start on-site',
    'how.step1.title': 'Request',
    'how.step1.desc': 'Send your project scope and schedule.',
    'how.step2.title': 'Offer',
    'how.step2.desc': 'We confirm availability and provide a clear offer.',
    'how.step3.title': 'Start on-site',
    'how.step3.desc': 'Our team integrates quickly with your project.',

    
    'project.1.title': 'Industrial Hall Steel Structure',
    'project.1.category': 'Steel Structures',
    'project.1.desc': 'Fabrication and installation of large production hall steel structures',
    'project.2.title': 'Modern Steel Stairs',
    'project.2.category': 'Stairs & Railings',
    'project.2.desc': 'Interior stairs and railings for office building',
    'project.3.title': 'Dock and Stairs',
    'project.3.category': 'Custom Fabrication',
    'project.3.desc': 'Stainless steel dock and stairs fabrication',
    'project.4.title': 'Shopping Center Railings',
    'project.4.category': 'Stairs & Railings',
    'project.4.desc': 'Custom glass railings and steel structures',
    'project.5.title': 'Bridge Steel Structure',
    'project.5.category': 'Steel Structures',
    'project.5.desc': 'Load-bearing steel structure for pedestrian bridge',
    'project.6.title': 'Industrial Equipment',
    'project.6.category': 'Custom Fabrication',
    'project.6.desc': 'Custom metal parts and structures for industrial equipment',
    
    'projects.cta.question': 'Want to realize your own project?',
    'projects.cta.button': 'Contact Us',

    'contacts.direct': 'Direct contacts',
    'contacts.call.aigars': 'Call Aigars',
    'contacts.call.martins': 'Call Martins',
    'contacts.email': 'Email',

    'welding.steps.1.label': 'ON-SITE WELDING',
    'welding.steps.1.title': 'Welding teams for steel structures and repairs',
    'welding.steps.1.body': 'Site-ready welding workforce for structural steel, installations, and repair work—aligned with industrial timelines.',
    'welding.steps.1.bullet1': 'MIG / MAG / TIG for structural steel',
    'welding.steps.1.bullet2': 'Repairs, fit-up, and on-site fabrication support',
    'welding.steps.1.bullet3': 'Fast onboarding and clear scope',
    'welding.steps.1.media.alt': 'Welding workforce on site',
    'welding.steps.1.media.overlay': 'Welding workforce',
    'welding.steps.1.media.caption': 'Integrates fast into your workflow.',

    'welding.steps.2.label': 'SAFETY-FIRST',
    'welding.steps.2.title': 'Compliance-driven work, clean reporting',
    'welding.steps.2.body': 'Safety procedures and transparent updates keep delivery predictable and supervisors informed.',
    'welding.steps.2.bullet1': 'PPE-ready, aligned with site rules',
    'welding.steps.2.bullet2': 'Work permits & routines followed',
    'welding.steps.2.bullet3': 'Clear progress updates',
    'welding.steps.2.media.alt': 'Safety and compliance',
    'welding.steps.2.media.overlay': 'Safety & compliance',
    'welding.steps.2.media.caption': 'Zero surprises on-site.',

    'welding.steps.3.label': 'FLEXIBLE STAFFING',
    'welding.steps.3.title': 'Scale up or down based on workload',
    'welding.steps.3.body': 'Short-term support for deadlines or stable long-term staffing for continuous throughput.',
    'welding.steps.3.bullet1': 'Workforce rental for peaks',
    'welding.steps.3.bullet2': 'Long-term staffing options',
    'welding.steps.3.bullet3': 'Clear scheduling and handover',
    'welding.steps.3.media.alt': 'Flexible delivery',
    'welding.steps.3.media.overlay': 'Flexible delivery',
    'welding.steps.3.media.caption': 'Right people, right duration.',

    'welding.steps.4.label': 'FAST START',
    'welding.steps.4.title': 'Request → offer → start on-site',
    'welding.steps.4.body': 'Send scope and location, we confirm availability and next steps quickly.',
    'welding.steps.4.bullet1': 'Fast availability check',
    'welding.steps.4.bullet2': 'Clear start date',
    'welding.steps.4.bullet3': 'Direct contacts',
    'welding.steps.4.media.alt': 'Fast start',
    'welding.steps.4.media.overlay': 'Get an offer',
    'welding.steps.4.media.caption': 'From request to action—fast.',
    
    // About
    'about.label': 'About Us',
    'about.title': 'Metal work professionals since 2014',
    'about.p1': 'is a Finnish company specializing in metal structure fabrication. We operate as a Limited Liability Company and serve both industry and private clients throughout Finland.',
    'about.p2': 'Quality results and customer satisfaction are our priorities. We use modern technology and certified work methods. Our experienced team ensures project success from start to finish.',
    'about.feature1.title': 'Expertise',
    'about.feature1.desc': 'Over 10 years of experience in metal works. Certified welders and professional installers.',
    'about.feature2.title': 'Quality',
    'about.feature2.desc': 'All work done with high professionalism. Guarantees and liability insurance in order.',
    'about.feature3.title': 'Reliability',
    'about.feature3.desc': 'On schedule and on budget. Our customers continue to recommend us.',
    'about.stat1': 'Years in Business',
    'about.stat2': 'Completed Projects',
    'about.stat3': 'Customer Satisfaction',
    'about.stat4': 'Consultation Service',
    
    // Testimonials
    'testimonials.label': 'Client Experiences',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'Customer satisfaction is our priority. Read what our clients say about our projects.',
    'testimonial1.name': 'Teemu Virtanen',
    'testimonial1.role': 'Industrial Company Ltd',
    'testimonial1.text': 'The hall project was a complete success. Steel structures were fabricated and installed professionally. Schedule held and quality is top-notch.',
    'testimonial2.name': 'Laura Korhonen',
    'testimonial2.role': 'Property Company',
    'testimonial2.text': 'Stairs and railings were completed exactly as planned. Beautiful and durable result. Very satisfied with the workmanship!',
    'testimonial3.name': 'Juha Mäkinen',
    'testimonial3.role': 'Private Client',
    'testimonial3.text': 'Nordmaster Group built our dock structure excellently. Stainless steel and quality work. Highly recommend!',
    
    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Contact',
    'contact.description': 'Talk directly with the team.',
    'contact.email.helper': 'If your mail app does not open, copy the address.',
    'contact.email.copy': 'Copy email',
    'contact.email.copied': 'Copied',
    'contact.form.title': 'Send a message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'name@email.com',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.phone.placeholder': '+358 XX XXX XXXX',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Briefly describe your request...',
    'contact.form.submit': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thanks! Your message was sent.',
    'contact.form.fallback': 'Opened your mail app as a fallback.',
    'contact.form.error': 'Send failed. Please check and try again.',
    'contact.person1': 'Aigars Cerpinskis',
    'contact.person2': 'Martins Cerpinskis',
    'contact.call': 'Call',
    
    // Footer
    'footer.description': 'Metal construction crews ready on-site.',
    'footer.contact': 'Contact',
    'footer.getquote': 'Request an offer',
    'footer.copyright': '© 2026 Nordmaster Group Oy. All rights reserved.',
    'footer.legal': 'Limited Liability Company • Metal Works',
    
    // Common
    'common.years': 'years',
    'common.quality': 'Quality',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname;
    if (path.startsWith('/fi')) {
      setLanguageState('fi');
      return;
    }
    if (path.startsWith('/en')) {
      setLanguageState('en');
      return;
    }
    window.history.replaceState(null, '', '/en');
    setLanguageState('en');
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window === 'undefined') return;
    const { pathname, search, hash } = window.location;
    const parts = pathname.split('/');
    if (parts[1] === 'en' || parts[1] === 'fi') {
      parts[1] = lang;
    } else {
      parts.splice(1, 0, lang);
    }
    const nextPath = parts.join('/') || `/${lang}`;
    window.history.replaceState(null, '', `${nextPath}${search}${hash}`);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fi] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
