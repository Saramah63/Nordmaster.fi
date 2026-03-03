import { createContext, useContext, useState, ReactNode } from 'react';

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
    'nav.projects': 'Referenssit',
    'nav.about': 'Yritys',
    'nav.call': 'Soita meille',
    'company.tagline': 'Metallisten rakenteiden valmistus',
    
    // Hero
    'hero.badge': 'Ammattitaitoista metallityötä',
    'hero.title1': 'Metallisten',
    'hero.title2': 'rakenteiden',
    'hero.title3': 'valmistus',
    'hero.description': 'Nordmaster Group Oy on erikoistunut metallisten rakenteiden suunnitteluun ja valmistukseen. Toteutamme teräsrakenteet, portaat, kaiteet ja räätälöidyt metallityöt ammattitaidolla.',
    'hero.cta.quote': 'Pyydä tarjous',
    'hero.cta.projects': 'Katso referenssit',
    'hero.stat1': 'Vuotta kokemusta',
    'hero.stat2': 'Toteutettua projektia',
    'hero.stat3': 'Ammattityö',
    
    // Services
    'services.label': 'Palvelumme',
    'services.title': 'Kattavat metallityöpalvelut',
    'services.description': 'Tarjoamme ammattitaitoisia metallityöpalveluita teollisuudelle ja yksityisasiakkaille. Suunnittelusta valmistukseen ja asennukseen - kaikki saman katon alla.',
    
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
    
    // Projects
    'projects.label': 'Referenssit',
    'projects.title': 'Toteutettuja projekteja',
    'projects.description': 'Olemme toteuttaneet lukuisia metallityöprojekteja teollisuudelle ja yksityisasiakkaille. Katso esimerkkejä töistämme.',
    
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
    'contact.label': 'Ota yhteyttä',
    'contact.title': 'Aloitetaan projektisi',
    'contact.description': 'Pyydä ilmainen tarjous tai kysy lisätietoja palveluistamme. Vastaamme yhteydenottoon nopeasti.',
    'contact.phone.title': 'Soita meille',
    'contact.phone.hours': 'Ma-Pe 8:00-16:00',
    'contact.email.title': 'Lähetä sähköpostia',
    'contact.email.response': 'Vastaamme 24h sisällä',
    'contact.location.title': 'Toimialue',
    'contact.location.area': 'Koko Suomi',
    'contact.location.desc': 'Palvelemme ympäri Suomen',
    'contact.hours.title': 'Aukioloajat',
    'contact.hours.days': 'Maanantai - Perjantai',
    'contact.hours.time': '8:00 - 16:00',
    'contact.company.title': 'Yritystiedot',
    'contact.company.name': 'Yritys:',
    'contact.company.id': 'Y-tunnus:',
    'contact.company.type': 'Yritysmuoto:',
    'contact.company.type.value': 'Osakeyhtiö',
    'contact.company.industry': 'Toimiala:',
    'contact.company.industry.value': 'Metallityöt',
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
    'contact.form.service.structures': 'Teräsrakenteet',
    'contact.form.service.stairs': 'Portaat ja kaiteet',
    'contact.form.service.welding': 'Hitsaustyöt',
    'contact.form.service.custom': 'Erikoisvalmistus',
    'contact.form.service.other': 'Muu',
    'contact.form.message': 'Viesti',
    'contact.form.message.placeholder': 'Kerro lisää projektistasi...',
    'contact.form.submit': 'Lähetä tarjouspyyntö',
    'contact.form.note': 'Vastaamme kaikkiin yhteydenottopyyntöihin 24 tunnin sisällä.',
    
    // Footer
    'footer.description': 'Ammattitaitoista metallityötä ja teräsrakenteita. Luotettava kumppani projektillesi.',
    'footer.services': 'Palvelut',
    'footer.company': 'Yritys',
    'footer.contact': 'Yhteystiedot',
    'footer.about': 'Meistä',
    'footer.references': 'Referenssit',
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
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.call': 'Call Us',
    'company.tagline': 'Metal Structure Fabrication',
    
    // Hero
    'hero.badge': 'Professional metal work',
    'hero.title1': 'Metal',
    'hero.title2': 'structure',
    'hero.title3': 'fabrication',
    'hero.description': 'Nordmaster Group Oy specializes in the design and fabrication of metal structures. We deliver steel structures, stairs, railings, and custom metal works with expertise.',
    'hero.cta.quote': 'Request a Quote',
    'hero.cta.projects': 'View Projects',
    'hero.stat1': 'Years Experience',
    'hero.stat2': 'Completed Projects',
    'hero.stat3': 'Professional Work',
    
    // Services
    'services.label': 'Our Services',
    'services.title': 'Comprehensive Metal Work Services',
    'services.description': 'We offer professional metal work services for industry and private clients. From design to fabrication and installation - all under one roof.',
    
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
    
    // Projects
    'projects.label': 'Projects',
    'projects.title': 'Completed Projects',
    'projects.description': 'We have completed numerous metal work projects for industry and private clients. See examples of our work.',
    
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
    'contact.title': "Let's Start Your Project",
    'contact.description': 'Request a free quote or ask about our services. We respond to inquiries quickly.',
    'contact.phone.title': 'Call Us',
    'contact.phone.hours': 'Mon-Fri 8:00-16:00',
    'contact.email.title': 'Send Email',
    'contact.email.response': 'We respond within 24h',
    'contact.location.title': 'Service Area',
    'contact.location.area': 'All Finland',
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
    'contact.company.industry.value': 'Metal Works',
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
    'contact.form.service.structures': 'Steel Structures',
    'contact.form.service.stairs': 'Stairs & Railings',
    'contact.form.service.welding': 'Welding Works',
    'contact.form.service.custom': 'Custom Fabrication',
    'contact.form.service.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us more about your project...',
    'contact.form.submit': 'Send Quote Request',
    'contact.form.note': 'We respond to all inquiries within 24 hours.',
    
    // Footer
    'footer.description': 'Professional metal work and steel structures. Reliable partner for your project.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.about': 'About Us',
    'footer.references': 'Projects',
    'footer.getquote': 'Request Quote',
    'footer.copyright': '© 2026 Nordmaster Group Oy. All rights reserved.',
    'footer.legal': 'Limited Liability Company • Metal Works',
    
    // Common
    'common.years': 'years',
    'common.quality': 'Quality',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
