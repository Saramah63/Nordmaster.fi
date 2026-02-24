import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fi: {
    // Header
    'nav.home': 'Etusivu',
    'nav.services': 'Palvelut',
    'nav.projects': 'Referenssit',
    'nav.about': 'Yritys',
    'nav.call': 'Soita meille',
    'company.tagline': 'Rakennuspalvelut',
    
    // Hero
    'hero.badge': 'Luotettava kumppani rakennusprojekteissasi',
    'hero.title1': 'Laadukasta',
    'hero.title2': 'rakentamista',
    'hero.title3': 'Suomessa',
    'hero.description': 'Nordmaster Group Oy tarjoaa ammattitaitoisia rakennuspalveluita uudisrakentamisesta remontteihin. Toteutamme projektisi ajallaan ja laadukkaasti.',
    'hero.cta.quote': 'Pyydä tarjous',
    'hero.cta.projects': 'Katso referenssit',
    'hero.stat1': 'Vuotta kokemusta',
    'hero.stat2': 'Tyytyväiset asiakkaat',
    'hero.stat3': 'Ammattityö',
    
    // Services
    'services.label': 'Palvelumme',
    'services.title': 'Kattavat rakennuspalvelut',
    'services.description': 'Tarjoamme monipuolisia rakennusalan palveluita yksityisille ja yrityksille. Ammattitaitomme takaa laadukkaan lopputuloksen jokaisessa projektissa.',
    'service.newbuild.title': 'Uudisrakentaminen',
    'service.newbuild.desc': 'Asuin- ja liikerakennusten rakentaminen perustuksista pintaan. Kokonaisvaltainen projektinhallinta.',
    'service.renovation.title': 'Saneeraus ja remontti',
    'service.renovation.desc': 'Täydelliset saneerauspalvelut keittiöistä kylpyhuoneisiin. Muutamme tilasi modernimmaksi.',
    'service.maintenance.title': 'Kunnossapito',
    'service.maintenance.desc': 'Säännöllinen huolto ja korjaustyöt. Pidämme kiinteistösi erinomaisessa kunnossa.',
    'service.painting.title': 'Pintakäsittelyt',
    'service.painting.desc': 'Ammattitaitoinen maalaus ja pintakäsittelytyöt sisä- ja ulkotiloihin.',
    'service.carpentry.title': 'Puusepäntyöt',
    'service.carpentry.desc': 'Laadukkaat kiintokalusteet, ovet, ikkunat ja rakenteiset puutyöt.',
    'service.management.title': 'Projektinhallinta',
    'service.management.desc': 'Ammattitainen projektin ohjaus suunnittelusta toteutukseen. Aikataulussa ja budjetissa.',
    'service.planning.title': 'Suunnittelu',
    'service.planning.desc': 'Autamme projektin suunnittelussa ja luvissa. Yhteistyö ammattitaisten arkkitehtien kanssa.',
    'service.execution.title': 'Toteutus',
    'service.execution.desc': 'Laadukas ja aikataulun mukainen toteutus. Ammattitaitoiset työntekijät ja modernit menetelmät.',
    
    // Projects
    'projects.label': 'Referenssit',
    'projects.title': 'Toteutettuja projekteja',
    'projects.description': 'Katso esimerkkejä toteutetuista projekteistamme. Jokaisessa työssä sama sitoutuminen laatuun ja asiakastyytyväisyyteen.',
    'project.house.title': 'Moderni omakotitalo',
    'project.house.category': 'Uudisrakentaminen',
    'project.house.desc': 'Energiatehokas omakotitalo nykyaikaisella designilla',
    'project.apartment.title': 'Kerrostaloperuskorjaus',
    'project.apartment.category': 'Saneeraus',
    'project.apartment.desc': '1960-luvun kerrostalon täydellinen peruskorjaus',
    'project.kitchen.title': 'Keittiöremontti',
    'project.kitchen.category': 'Sisustusremontti',
    'project.kitchen.desc': 'Täysremontoitu keittiö modernein materiaalein',
    'project.bathroom.title': 'Kylpyhuonesaneeraus',
    'project.bathroom.category': 'Märkätilat',
    'project.bathroom.desc': 'Laadukas kylpyhuoneremontti kestävin materiaalein',
    'project.living.title': 'Olohuonerenovointi',
    'project.living.category': 'Sisustusremontti',
    'project.living.desc': 'Tilava ja moderni olohuone avoimen tilan konseptilla',
    'project.office.title': 'Toimistorakennus',
    'project.office.category': 'Liikerakentaminen',
    'project.office.desc': 'Moderni toimistorakennus keskusta-alueella',
    'projects.cta.question': 'Haluatko nähdä lisää toteutuksiamme?',
    'projects.cta.button': 'Ota yhteyttä',
    
    // About
    'about.label': 'Meistä',
    'about.title': 'Luotettava rakennuskumppani jo vuodesta 2014',
    'about.p1': 'on suomalainen rakennusalan yritys, joka on erikoistunut monipuolisiin rakennuspalveluihin. Toimimme Osakeyhtiömuodossa ja tarjoamme ammattitaitoista palvelua niin yksityisille asiakkaille kuin yrityksillekin.',
    'about.p2': 'Meille tärkeintä on asiakastyytyväisyys ja laadukas lopputulos. Jokaisessa projektissa noudatamme suomalaisia rakennusmääräyksiä ja käytämme kestäviä materiaaleja. Kokeneella ammattilaistiimillämme varmistamme, että projektisi valmistuu ajallaan ja budjetissa.',
    'about.feature1.title': 'Ammattitaito ja kokemus',
    'about.feature1.desc': 'Yli 10 vuoden kokemus rakennusalalta. Kokeneet ammattilaiset jokaisessa työvaiheessa.',
    'about.feature2.title': 'Luotettava ja vakuutukset',
    'about.feature2.desc': 'Täysi vastuuvakuutus ja rakennusluvat kunnossa. Turvallinen kumppani projektillesi.',
    'about.feature3.title': 'Laadukas lopputulos',
    'about.feature3.desc': 'Takuut töillemme ja sitoutuminen korkeaan laatuun. Asiakkaamme ovat tyytyväisiä.',
    'about.stat1': 'Vuotta alalla',
    'about.stat2': 'Projektia toteutettu',
    'about.stat3': 'Asiakastyytyväisyys',
    'about.stat4': 'Asiakaspalvelu',
    
    // Testimonials
    'testimonials.label': 'Asiakkaiden kokemuksia',
    'testimonials.title': 'Mitä asiakkaamme sanovat',
    'testimonials.description': 'Asiakastyytyväisyys on meille tärkeintä. Lue mitä asiakkaamme kertovat yhteistyöstämme.',
    'testimonial1.name': 'Matti Virtanen',
    'testimonial1.role': 'Kiinteistönomistaja',
    'testimonial1.text': 'Nordmaster Group hoiti kerrostalonamme peruskorjauksen erinomaisesti. Aikataulu piti ja laatu oli huippuluokkaa. Suosittelen lämpimästi!',
    'testimonial2.name': 'Laura Nieminen',
    'testimonial2.role': 'Yksityisasiakas',
    'testimonial2.text': 'Keittiöremonttimme sujui mutkattomasti ja lopputulos ylitti odotukset. Ammattitaitoinen ja ystävällinen työryhmä.',
    'testimonial3.name': 'Jukka Korhonen',
    'testimonial3.role': 'Yritysasiakas',
    'testimonial3.text': 'Toimistotilojen remontti valmistui ajallaan ja budjetin puitteissa. Hyvä yhteistyö ja selkeä kommunikaatio koko projektin ajan.',
    
    // Contact
    'contact.label': 'Ota yhteyttä',
    'contact.title': 'Aloitetaan projektisi',
    'contact.description': 'Pyydä ilmainen tarjous tai kysy lisätietoja palveluistamme. Vastaamme yhteydenottoon nopeasti.',
    'contact.phone.title': 'Soita meille',
    'contact.phone.hours': 'Ma-Pe 8:00-16:00',
    'contact.email.title': 'Lähetä sähköpostia',
    'contact.email.response': 'Vastaamme 24h sisällä',
    'contact.location.title': 'Toimialue',
    'contact.location.area': 'Suomi',
    'contact.location.desc': 'Palvelemme koko maassa',
    'contact.hours.title': 'Aukioloajat',
    'contact.hours.days': 'Maanantai - Perjantai',
    'contact.hours.time': '8:00 - 16:00',
    'contact.company.title': 'Yritystiedot',
    'contact.company.name': 'Yritys:',
    'contact.company.id': 'Y-tunnus:',
    'contact.company.type': 'Yritysmuoto:',
    'contact.company.type.value': 'Osakeyhtiö',
    'contact.company.industry': 'Toimiala:',
    'contact.company.industry.value': 'Rakentaminen',
    'contact.form.title': 'Pyydä tarjous',
    'contact.form.subtitle': 'Täytä lomake niin otamme sinuun yhteyttä pikaisesti.',
    'contact.form.name': 'Nimi',
    'contact.form.name.placeholder': 'Etunimi Sukunimi',
    'contact.form.phone': 'Puhelin',
    'contact.form.phone.placeholder': '+358 XX XXX XXXX',
    'contact.form.email': 'Sähköposti',
    'contact.form.email.placeholder': 'nimi@email.fi',
    'contact.form.service': 'Palvelu',
    'contact.form.service.select': 'Valitse palvelu',
    'contact.form.service.newbuild': 'Uudisrakentaminen',
    'contact.form.service.renovation': 'Saneeraus ja remontti',
    'contact.form.service.maintenance': 'Kunnossapito',
    'contact.form.service.carpentry': 'Puusepäntyöt',
    'contact.form.service.other': 'Muu',
    'contact.form.message': 'Viesti',
    'contact.form.message.placeholder': 'Kerro lisää projektistasi...',
    'contact.form.submit': 'Lähetä tarjouspyyntö',
    'contact.form.note': 'Vastaamme kaikkiin yhteydenottopyyntöihin 24 tunnin sisällä.',
    
    // Footer
    'footer.description': 'Ammattitaitoista rakentamista ja saneerausta Suomessa. Luotettava kumppani projektillesi.',
    'footer.services': 'Palvelut',
    'footer.company': 'Yritys',
    'footer.contact': 'Yhteystiedot',
    'footer.about': 'Meistä',
    'footer.references': 'Referenssit',
    'footer.getquote': 'Pyydä tarjous',
    'footer.copyright': '© 2026 Nordmaster Group Oy. Kaikki oikeudet pidätetään.',
    'footer.legal': 'Osakeyhtiö • Suomalainen rakennusliike',
    
    // Common
    'common.years': 'vuotta',
    'common.quality': 'Laadukas',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.call': 'Call Us',
    'company.tagline': 'Construction Services',
    
    // Hero
    'hero.badge': 'Reliable partner for your construction projects',
    'hero.title1': 'Quality',
    'hero.title2': 'construction',
    'hero.title3': 'in Finland',
    'hero.description': 'Nordmaster Group Oy provides professional construction services from new builds to renovations. We deliver your project on time and with quality.',
    'hero.cta.quote': 'Request a Quote',
    'hero.cta.projects': 'View Projects',
    'hero.stat1': 'Years Experience',
    'hero.stat2': 'Satisfied Clients',
    'hero.stat3': 'Professional Work',
    
    // Services
    'services.label': 'Our Services',
    'services.title': 'Comprehensive Construction Services',
    'services.description': 'We offer diverse construction services for private clients and businesses. Our expertise ensures quality results in every project.',
    'service.newbuild.title': 'New Construction',
    'service.newbuild.desc': 'Building residential and commercial properties from foundation to finish. Complete project management.',
    'service.renovation.title': 'Renovation & Remodeling',
    'service.renovation.desc': 'Complete renovation services from kitchens to bathrooms. We modernize your space.',
    'service.maintenance.title': 'Maintenance',
    'service.maintenance.desc': 'Regular maintenance and repair work. We keep your property in excellent condition.',
    'service.painting.title': 'Surface Treatments',
    'service.painting.desc': 'Professional painting and surface treatment for interior and exterior spaces.',
    'service.carpentry.title': 'Carpentry',
    'service.carpentry.desc': 'Quality fixtures, doors, windows, and structural woodwork.',
    'service.management.title': 'Project Management',
    'service.management.desc': 'Professional project management from planning to execution. On schedule and on budget.',
    'service.planning.title': 'Planning',
    'service.planning.desc': 'We assist with project planning and permits. Collaboration with professional architects.',
    'service.execution.title': 'Execution',
    'service.execution.desc': 'Quality execution on schedule. Skilled workers and modern methods.',
    
    // Projects
    'projects.label': 'Projects',
    'projects.title': 'Completed Projects',
    'projects.description': 'View examples of our completed projects. The same commitment to quality and customer satisfaction in every job.',
    'project.house.title': 'Modern Detached House',
    'project.house.category': 'New Construction',
    'project.house.desc': 'Energy-efficient house with contemporary design',
    'project.apartment.title': 'Apartment Building Renovation',
    'project.apartment.category': 'Renovation',
    'project.apartment.desc': 'Complete renovation of 1960s apartment building',
    'project.kitchen.title': 'Kitchen Renovation',
    'project.kitchen.category': 'Interior Renovation',
    'project.kitchen.desc': 'Fully renovated kitchen with modern materials',
    'project.bathroom.title': 'Bathroom Renovation',
    'project.bathroom.category': 'Wet Rooms',
    'project.bathroom.desc': 'Quality bathroom renovation with durable materials',
    'project.living.title': 'Living Room Renovation',
    'project.living.category': 'Interior Renovation',
    'project.living.desc': 'Spacious and modern living room with open concept',
    'project.office.title': 'Office Building',
    'project.office.category': 'Commercial Construction',
    'project.office.desc': 'Modern office building in downtown area',
    'projects.cta.question': 'Want to see more of our work?',
    'projects.cta.button': 'Contact Us',
    
    // About
    'about.label': 'About Us',
    'about.title': 'Reliable construction partner since 2014',
    'about.p1': 'is a Finnish construction company specializing in comprehensive building services. We operate as a Limited Liability Company and provide professional service to both private clients and businesses.',
    'about.p2': 'Customer satisfaction and quality results are our top priorities. In every project, we follow Finnish building regulations and use sustainable materials. Our experienced team ensures that your project is completed on time and within budget.',
    'about.feature1.title': 'Expertise and Experience',
    'about.feature1.desc': 'Over 10 years of experience in construction. Experienced professionals at every stage.',
    'about.feature2.title': 'Reliable and Insured',
    'about.feature2.desc': 'Full liability insurance and permits in order. A safe partner for your project.',
    'about.feature3.title': 'Quality Results',
    'about.feature3.desc': 'Guarantees on our work and commitment to high quality. Our customers are satisfied.',
    'about.stat1': 'Years in Business',
    'about.stat2': 'Projects Completed',
    'about.stat3': 'Customer Satisfaction',
    'about.stat4': 'Customer Service',
    
    // Testimonials
    'testimonials.label': 'Client Experiences',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'Customer satisfaction is our priority. Read what our clients say about working with us.',
    'testimonial1.name': 'Matti Virtanen',
    'testimonial1.role': 'Property Owner',
    'testimonial1.text': 'Nordmaster Group handled our apartment building renovation excellently. The schedule held and the quality was top-notch. Highly recommend!',
    'testimonial2.name': 'Laura Nieminen',
    'testimonial2.role': 'Private Client',
    'testimonial2.text': 'Our kitchen renovation went smoothly and the result exceeded expectations. Professional and friendly team.',
    'testimonial3.name': 'Jukka Korhonen',
    'testimonial3.role': 'Business Client',
    'testimonial3.text': 'The office renovation was completed on time and within budget. Good cooperation and clear communication throughout the project.',
    
    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's Start Your Project",
    'contact.description': 'Request a free quote or ask about our services. We respond to inquiries quickly.',
    'contact.phone.title': 'Call Us',
    'contact.phone.hours': 'Mon-Fri 8:00-16:00',
    'contact.email.title': 'Send Email',
    'contact.email.response': 'We respond within 24h',
    'contact.location.title': 'Service Area',
    'contact.location.area': 'Finland',
    'contact.location.desc': 'We serve nationwide',
    'contact.hours.title': 'Business Hours',
    'contact.hours.days': 'Monday - Friday',
    'contact.hours.time': '8:00 - 16:00',
    'contact.company.title': 'Company Information',
    'contact.company.name': 'Company:',
    'contact.company.id': 'Business ID:',
    'contact.company.type': 'Company Type:',
    'contact.company.type.value': 'Limited Liability Company',
    'contact.company.industry': 'Industry:',
    'contact.company.industry.value': 'Construction',
    'contact.form.title': 'Request a Quote',
    'contact.form.subtitle': 'Fill out the form and we will contact you shortly.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'First Name Last Name',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+358 XX XXX XXXX',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'name@email.com',
    'contact.form.service': 'Service',
    'contact.form.service.select': 'Select service',
    'contact.form.service.newbuild': 'New Construction',
    'contact.form.service.renovation': 'Renovation & Remodeling',
    'contact.form.service.maintenance': 'Maintenance',
    'contact.form.service.carpentry': 'Carpentry',
    'contact.form.service.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us more about your project...',
    'contact.form.submit': 'Send Quote Request',
    'contact.form.note': 'We respond to all inquiries within 24 hours.',
    
    // Footer
    'footer.description': 'Professional construction and renovation in Finland. A reliable partner for your project.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.about': 'About Us',
    'footer.references': 'Projects',
    'footer.getquote': 'Request Quote',
    'footer.copyright': '© 2026 Nordmaster Group Oy. All rights reserved.',
    'footer.legal': 'Limited Liability Company • Finnish Construction Company',
    
    // Common
    'common.years': 'years',
    'common.quality': 'Quality',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fi] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
