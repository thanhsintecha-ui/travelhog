// Tour Types
export interface TourBasicInfo {
  slug: string;
  title: string;
  href: string;
  price: string;
  duration: string;
  image: string;
  accommodation: string;
  motorbike: string;
  guide: string;
  transport: string;
}

export interface TourDetailInfo extends TourBasicInfo {
  description: string;
  excerpt: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  included: string[];
  excluded: string[];
}

// Tours Basic Data (for listing and cards)
export const toursBasicData: TourBasicInfo[] = [
  {
    slug: 'ha-giang-loop-tour-4n5d',
    title: 'Ha Giang Loop 4d3n tour (included 2 ways bus)',
    href: '/tours/ha-giang-loop-tour-4n5d',
    price: '$215',
    duration: '4 days 3 nights',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-11-at-18.13.32_81a2e43d.jpg',
    accommodation: 'Private Room',
    motorbike: 'Semi-Automatic',
    guide: 'Expert Local Guides speak Fluent English',
    transport: 'VIP Cabin Bus',
  },
  {
    slug: 'ha-giang-loop-tour-3n4d',
    title: 'Ha Giang Loop 3d2n tour (included 2 ways bus)',
    href: '/tours/ha-giang-loop-tour-3n4d',
    price: '$175',
    duration: '3 days 2 nights',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.57.03_c4cd5fed.jpg',
    accommodation: 'Private Room',
    motorbike: 'Semi-Automatic',
    guide: 'Expert Local Guides speak Fluent English',
    transport: 'VIP Cabin Bus',
  },
  {
    slug: 'ha-giang-loop-tour-2n3d',
    title: 'Ha Giang Loop 2d1n tour (included 2 ways bus)',
    href: '/tours/ha-giang-loop-tour-2n3d',
    price: '$140',
    duration: '2 days 1 night',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-11-at-18.13.33_bcb23d2f.jpg',
    accommodation: 'Private Room',
    motorbike: 'Semi-Automatic',
    guide: 'Expert Local Guides speak Fluent English',
    transport: 'VIP Cabin Bus',
  },
];

// Tours Detail Data (for detail pages)
export const toursDetailData: Record<string, TourDetailInfo> = {
  'ha-giang-loop-tour-4n5d': {
    ...toursBasicData[0],
    description: 'Experience the breathtaking Ha Giang Loop, one of Vietnam\'s most spectacular motorcycle routes. This 4-day adventure takes you through stunning mountain landscapes, traditional ethnic minority villages, and unforgettable scenic viewpoints.',
    excerpt: 'Experience the complete Ha Giang Loop adventure with comfortable accommodation and expert guidance.',
    highlights: [
      'Explore the legendary Ma Pi Leng Pass',
      'Visit authentic ethnic minority villages',
      'Ride through stunning rice terraces',
      'Experience local culture and cuisine',
      'Comfortable accommodation and expert guides',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hanoi to Ha Giang',
        activities: [
          'Depart from Hanoi by VIP cabin bus',
          'Arrive in Ha Giang city',
          'Bike fitting and safety briefing',
          'Overnight in Ha Giang',
        ],
      },
      {
        day: 2,
        title: 'Ha Giang to Dong Van',
        activities: [
          'Ride through Quan Ba Heaven Gate',
          'Visit Lung Tam weaving village',
          'Stop at Vuong family mansion',
          'Overnight in Dong Van',
        ],
      },
      {
        day: 3,
        title: 'Dong Van to Meo Vac',
        activities: [
          'Explore Dong Van old town and market',
          'Conquer Ma Pi Leng Pass',
          'Visit Nho Que River viewpoint',
          'Overnight in Meo Vac',
        ],
      },
      {
        day: 4,
        title: 'Meo Vac to Ha Giang - Return to Hanoi',
        activities: [
          'Ride back through scenic routes',
          'Return motorbikes in Ha Giang',
          'Board VIP bus back to Hanoi',
          'Arrive in Hanoi evening',
        ],
      },
    ],
    included: [
      'VIP cabin bus tickets (2 ways)',
      'Motorbike rental (Semi-automatic)',
      '3 nights accommodation (private room)',
      'Expert English-speaking guide',
      'Breakfast daily',
      'Entrance fees to attractions',
    ],
    excluded: [
      'Lunch and dinner',
      'Personal expenses',
      'Travel insurance',
      'Tips for guide and driver',
    ],
  },
  'ha-giang-loop-tour-3n4d': {
    ...toursBasicData[1],
    description: 'A perfect 3-day adventure through the stunning Ha Giang Loop. Experience the highlights of this incredible region with comfortable accommodation and expert guidance.',
    excerpt: 'Perfect 3-day adventure through stunning Ha Giang scenery with all the highlights.',
    highlights: [
      'Ride the famous Ma Pi Leng Pass',
      'Visit ethnic minority villages',
      'Stunning mountain scenery',
      'Expert English-speaking guides',
      'Comfortable private rooms',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hanoi to Ha Giang to Dong Van',
        activities: [
          'Night bus from Hanoi to Ha Giang',
          'Pick up motorbikes and start riding',
          'Ride through Quan Ba and Yen Minh',
          'Overnight in Dong Van',
        ],
      },
      {
        day: 2,
        title: 'Dong Van to Meo Vac',
        activities: [
          'Explore Dong Van market',
          'Ride Ma Pi Leng Pass',
          'Visit Nho Que River viewpoint',
          'Overnight in Meo Vac or Du Gia',
        ],
      },
      {
        day: 3,
        title: 'Meo Vac to Ha Giang - Return to Hanoi',
        activities: [
          'Ride back to Ha Giang',
          'Return motorbikes',
          'Evening bus back to Hanoi',
        ],
      },
    ],
    included: [
      'VIP cabin bus tickets (2 ways)',
      'Motorbike rental',
      '2 nights accommodation',
      'English-speaking guide',
      'Breakfast daily',
      'Entrance fees',
    ],
    excluded: [
      'Lunch and dinner',
      'Personal expenses',
      'Travel insurance',
      'Tips',
    ],
  },
  'ha-giang-loop-tour-2n3d': {
    ...toursBasicData[2],
    description: 'A quick but unforgettable 2-day motorcycle adventure through Ha Giang\'s most scenic routes. Perfect for travelers with limited time.',
    excerpt: 'Quick but unforgettable 2-day motorcycle adventure through Ha Giang\'s scenic routes.',
    highlights: [
      'Experience Ma Pi Leng Pass',
      'Visit Dong Van town',
      'Scenic mountain riding',
      'Expert local guides',
      'Comfortable accommodation',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hanoi to Ha Giang to Dong Van',
        activities: [
          'Night bus from Hanoi',
          'Start riding from Ha Giang',
          'Ride through Quan Ba Heaven Gate',
          'Overnight in Dong Van',
        ],
      },
      {
        day: 2,
        title: 'Dong Van Loop - Return to Hanoi',
        activities: [
          'Ride Ma Pi Leng Pass',
          'Visit Nho Que River',
          'Return to Ha Giang',
          'Evening bus to Hanoi',
        ],
      },
    ],
    included: [
      'VIP cabin bus tickets (2 ways)',
      'Motorbike rental',
      '1 night accommodation',
      'English-speaking guide',
      'Breakfast',
      'Entrance fees',
    ],
    excluded: [
      'Lunch and dinner',
      'Personal expenses',
      'Travel insurance',
      'Tips',
    ],
  },
};

// Helper function to get tour by slug
export function getTourBySlug(slug: string): TourDetailInfo | undefined {
  return toursDetailData[slug];
}

// Helper function to get all tours
export function getAllTours(): TourBasicInfo[] {
  return toursBasicData;
}

// Helper function to get all tour slugs (for static generation)
export function getAllTourSlugs(): string[] {
  return toursBasicData.map(tour => tour.slug);
}

