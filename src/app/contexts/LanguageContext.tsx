import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const fi = {
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
  'service.newbuild.title': 'Metallien valmistus',
  'service.newbuild.desc': 'Ammattitaitoinen metallien työstö ja valmistus. Teräs, ruostumaton teräs ja alumiini.',
  'service.renovation.title': 'Hitsaustyöt',
  'service.renovation.desc': 'Sertifioidut hitsaajat. MIG, TIG ja kaarihitsaus. Laadukkaat hitsaussaumat kaikenlaisiin projekteihin.',
  'service.maintenance.title': 'Teräsrakenteet',
  'service.maintenance.desc': 'Teräsrakenteiden suunnittelu ja toteutus. Hallit, sillat ja kantavat rakenteet.',
  'service.painting.title': 'Portaat ja kaiteet',
  'service.painting.desc': 'Metallisten portaiden ja kaiteiden valmistus. Turvalliset ja kestävät ratkaisut.',
  'service.carpentry.title': 'Erikoisvalmistus',
  'service.carpentry.desc': 'Räätälöidyt metallirakenteet asiakkaan tarpeiden mukaan. Yksilölliset ratkaisut vaativiin kohteisiin.',
  'service.management.title': 'Asennus',
  'service.management.desc': 'Ammattimainen asennus ja käyttöönotto. Huolehdimme koko prosessista alusta loppuun.',
  'service.planning.title': 'Suunnittelu',
  'service.planning.desc': 'Metallisten rakenteiden 3D-suunnittelu ja tekniset piirustukset. Yhteistyö arkkitehtien kanssa.',
  'service.execution.title': 'Huolto ja korjaus',
  'service.execution.desc': 'Metallisten rakenteiden huolto, kunnostus ja korjaus. Pidämme rakenteesi kunnossa.',
  'service.consulting.title': 'Konsultointi',
  'service.consulting.desc': 'Asiantuntija-apu materiaalivalintoihin ja rakenneratkaisuihin. Ammattitaitoinen neuvonta.',
  'service.project.title': 'Projektisuunnittelu',
  'service.project.desc': 'Laaditaan yksityiskohtainen suunnitelma projektillesi. Ammattitaitoinen konsultointi ja projektin hallinta.',
  'service.delivery.title': 'Toteutus',
  'service.delivery.desc': 'Laadukas toteutus moderneilla laitteilla ja kokeneen tiimin toimesta. Aikataulussa ja budjetissa.',

  // Projects
  'projects.label': 'Referenssit',
  'projects.title': 'Toteutettuja projekteja',
  'projects.description': 'Olemme toteuttaneet lukuisia metallityöprojekteja teollisuudelle ja yksityisasiakkaille. Katso esimerkkejä töistämme.',
  'project.house.title': 'Teollisuushallin teräsrakenne',
  'project.house.category': 'Teräsrakenteet',
  'project.house.desc': 'Laajan tuotantohallin teräsrakenteiden valmistus ja asennus',
  'project.apartment.title': 'Modernit teräsportaat',
  'project.apartment.category': 'Portaat ja kaiteet',
  'project.apartment.desc': 'Sisäportaat ja kaiteet toimistorakennukseen',
  'project.kitchen.title': 'Laituri ja portaat',
  'project.kitchen.category': 'Erikoisvalmistus',
  'project.kitchen.desc': 'Ruostumattomasta teräksestä valmistettu laituri ja portaat',
  'project.bathroom.title': 'Kauppakeskuksen kaiteet',
  'project.bathroom.category': 'Portaat ja kaiteet',
  'project.bathroom.desc': 'Räätälöidyt lasikaiteet ja teräsrakenteet',
  'project.living.title': 'Sillan teräsrakenne',
  'project.living.category': 'Teräsrakenteet',
  'project.living.desc': 'Jalankulkusillan kantava teräsrakenne',
  'project.office.title': 'Teollisuuslaitteet',
  'project.office.category': 'Erikoisvalmistus',
  'project.office.desc': 'Räätälöidyt metalliosat ja rakenteet teollisuuslaitteisiin',
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
  'testimonial1.name': 'Laura Korhonen',
  'testimonial1.role': 'Kiinteistöyhtiö',
  'testimonial1.text': 'Halliproiekti onnistui täydellisesti. Teräsrakenteet on valmistettu ja asennettu ammattitaidolla. Aikataulu piti ja laatu on huippuluokkaa.',
  'testimonial2.name': 'Teemu Virtanen',
  'testimonial2.role': 'Teollisuusyritys Oy',
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
  'contact.form.service.select': 'Palvelu',
  'contact.form.service.newbuild': 'Metallien valmistus',
  'contact.form.service.renovation': 'Hitsaustyöt',
  'contact.form.service.maintenance': 'Huolto ja korjaus',
  'contact.form.service.carpentry': 'Erikoisvalmistus',
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
  'common.years': 'Vuotta',
  'common.quality': 'Laadukas',
};

const translations = {
  fi,
  en: fi,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof fi] || key;
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
