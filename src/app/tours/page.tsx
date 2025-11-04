import Image from 'next/image';
import Link from 'next/link';
import { getAllTours, toursDetailData, type TourBasicInfo } from '@/data/tours';

// Get all tours with excerpt from detail data
const allTours = getAllTours().map(tour => ({
  ...tour,
  excerpt: toursDetailData[tour.slug]?.excerpt || '',
}));

// Icon Components
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// Tour Card Component
const TourCard: React.FC<{ tour: TourBasicInfo & { excerpt: string } }> = ({ tour }) => (
  <Link
    href={`/tours/${tour.slug}`}
    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
  >
    {/* Image */}
    <div className="relative h-64 overflow-hidden">
      <Image
        src={tour.image}
        alt={tour.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Duration Badge */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
        <ClockIcon />
        <span className="text-sm font-semibold text-gray-800">{tour.duration}</span>
      </div>

      {/* Price Badge */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-orange-500 text-white px-6 py-2 rounded-full">
          <span className="text-2xl font-bold">{tour.price}</span>
          <span className="text-sm ml-2">per person</span>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
        {tour.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">
        {tour.excerpt}
      </p>

      {/* Tour Details */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{tour.accommodation}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span>{tour.guide}</span>
        </div>
      </div>

      {/* View Details Link */}
      <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-4 transition-all">
        <span>View Details</span>
        <ArrowRightIcon />
      </div>
    </div>
  </Link>
);

// Main Tours Page Component
export default function ToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Our Tours
            </h1>
            <p className="text-xl md:text-2xl text-orange-100">
              Discover the breathtaking beauty of Ha Giang with our expertly curated motorcycle tours
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Tours</span>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Tours</h2>
          <p className="text-gray-600">Choose the perfect adventure for your Ha Giang experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't decide which tour to choose?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Contact us and we'll help you find the perfect adventure
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

