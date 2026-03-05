export interface ServiceEntry {
  id: string;
  image: string;
  imageAltKey: string;
  cardTitleKey: string;
  cardDescKey: string;
  fullBleed: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
    bulletKeys: string[];
    imageAltKey: string;
  };
}

export const servicesData: ServiceEntry[] = [
  {
    id: 'welding',
    image: '/images/metal/welding-02.jpg',
    imageAltKey: 'services.fullbleed.welding.alt',
    cardTitleKey: 'services.cards.welding.title',
    cardDescKey: 'services.cards.welding.desc',
    fullBleed: {
      eyebrowKey: 'services.fullbleed.welding.eyebrow',
      titleKey: 'services.fullbleed.welding.title',
      descriptionKey: 'services.fullbleed.welding.description',
      bulletKeys: [
        'services.fullbleed.welding.bullet1',
        'services.fullbleed.welding.bullet2',
        'services.fullbleed.welding.bullet3',
      ],
      imageAltKey: 'services.fullbleed.welding.alt',
    },
  },
  {
    id: 'bending',
    image: '/images/metal/welding-03.jpg',
    imageAltKey: 'services.fullbleed.bending.alt',
    cardTitleKey: 'services.cards.bending.title',
    cardDescKey: 'services.cards.bending.desc',
    fullBleed: {
      eyebrowKey: 'services.fullbleed.bending.eyebrow',
      titleKey: 'services.fullbleed.bending.title',
      descriptionKey: 'services.fullbleed.bending.description',
      bulletKeys: [
        'services.fullbleed.bending.bullet1',
        'services.fullbleed.bending.bullet2',
        'services.fullbleed.bending.bullet3',
      ],
      imageAltKey: 'services.fullbleed.bending.alt',
    },
  },
  {
    id: 'construction',
    image: '/images/metal/welding-04.jpg',
    imageAltKey: 'services.fullbleed.construction.alt',
    cardTitleKey: 'services.cards.construction.title',
    cardDescKey: 'services.cards.construction.desc',
    fullBleed: {
      eyebrowKey: 'services.fullbleed.construction.eyebrow',
      titleKey: 'services.fullbleed.construction.title',
      descriptionKey: 'services.fullbleed.construction.description',
      bulletKeys: [
        'services.fullbleed.construction.bullet1',
        'services.fullbleed.construction.bullet2',
        'services.fullbleed.construction.bullet3',
      ],
      imageAltKey: 'services.fullbleed.construction.alt',
    },
  },
];
