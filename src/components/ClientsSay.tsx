'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Types
interface Testimonial {
  id: number;
  name: string;
  date: string;
  avatar: string;
  review: string;
  rating: number;
}

// Data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Athony Ng',
    date: '24/05/2024',
    avatar: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.56.31_9138baea.jpg',
    review: 'Had 3 amazing days (and nights) out in the mountains for the Loop. Best experience ever in Vietnam 🇻🇳, but more than anything our tour guide Le Sy was the key to make it special. He is smart, funny, organized and he has very good English, friendly from the beginning to the end and always ready to help. Very good. Recommended for sure, and Sy is a plus!',
    rating: 5,
  },
  {
    id: 2,
    name: 'David',
    date: '17/05/2024',
    avatar: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.56.36_ca9099eb.jpg',
    review: 'Chose the 3day/2night tour & drove the bike myself. Had an amazing experience and would recommend it to anyone. The tour guide Nguyen was brilliant and very helpful throughout, all the crew of easy riders were really friendly & we enjoyed many shots of \'happy water\' with them on both nights.\n\nThe tour was really well organised, the max we would drive before a stop was 45min, on average prob 30min. Lots of stunning viewpoints on the journey. Group size was 8ppl & it was perfect, got to know everyone really well. I felt that the 3 day option was best, was def tired by the end of it.\n\nDef a highlight of my trip in Vietnam.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Oliver Thorn',
    date: '10/05/2024',
    avatar: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.57.03_8ad782ce.jpg',
    review: 'This is a brilliant tour with very nice tour guides who are very helpful. We were fed often and given plenty of water throughout the day. The easy riders are brilliant and very trustworthy drivers. The views were the best I have ever seen! I would recommend this tour to everyone.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Esmee',
    date: '',
    avatar: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-17-at-10.47.29_8deb295e.jpg',
    review: 'Had such a great time! The views are out of this world beautiful! You also really get to get up close and personal with the unique village life. Drivers are a vibe and vey experienced. They catered to all our needs with ease and love. Highly recommended.',
    rating: 5,
  },
];

const swiperImages = [
  'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.56.31_9138baea.jpg',
  'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.57.03_8ad782ce.jpg',
  'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-11-at-18.13.33_bcb23d2f.jpg',
  'https://cms.honghaotravel.com/wp-content/uploads/z5615490931365_1c7072b7b3e0b5408ea99ec2bb66ba2f-1.jpg',
  'https://cms.honghaotravel.com/wp-content/uploads/z5615490891964_b97d1c08c06f3df649422dfd26a4d85d.jpg',
  'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.56.59_10adb8fd.jpg',
  'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.56.36_ca9099eb.jpg',
];

// Star Rating Component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex flex-row space-x-1">
    {[...Array(5)].map((_, index) => (
      <Image
        key={index}
        alt="star"
        loading="lazy"
        width={120}
        height={120}
        decoding="async"
        data-nimg="1"
        className="size-4 tablet:size-[2rem]"
        src="/imgs/home/star.svg"
      />
    ))}
  </div>
);

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: Testimonial; className?: string }> = ({ testimonial, className = '' }) => (
  <div className={`relative flex flex-col gap-4 rounded-[1.5rem] overflow-hidden w-[19.4375rem] md:w-[22rem] xmd:bg-white/10 bg-[rgba(255,255,255,0.10)] md:backdrop-blur-[1rem] px-4 py-6 flex-none ${className}`}>
    <div className="hidden md:block absolute top-0 left-0 size-full bg-black/10 backdrop-blur-[16px] -z-10" />
    
    {/* Header */}
    <div className="flex flex-row items-center">
      <div className="flex items-center justify-center flex-none overflow-hidden rounded-full size-12">
        <Image
          alt="client"
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          data-nimg="1"
          className="object-cover size-full"
          src={testimonial.avatar}
        />
      </div>
      <div className="flex flex-col space-y-[0.38rem] flex-none ml-5">
        <strong className="text-greyscale-5 font-tripsans text-1.25 tablet:text-175 font-bold leading-1.2 line-clamp-1">
          {testimonial.name}
        </strong>
        <p className="text-greyscale-5 text-0.875 tablet:text-15 leading-1.2 tracking-0.00875 line-clamp-1">
          {testimonial.date}
        </p>
      </div>
      <div className="size-10 flex justify-center items-center bg-[#33E0A0] rounded-full ml-auto flex-none">
        <Image
          alt="tripadvisor"
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          data-nimg="1"
          className="w-[1.685rem] h-[1.085rem]"
          src="/imgs/home/tripadvisor.svg"
        />
      </div>
    </div>

    {/* Star Rating */}
    <StarRating rating={testimonial.rating} />

    {/* Review Content */}
    <div className="h-[6rem] tablet:h-[10rem] pr-[0.62rem] md:pr-4 overflow-y-auto content-container">
      <div className="content-container text-greyscale-5 text-0.875 tablet:text-15 leading-1.2 tracking-0.00875 opacity-90">
        {testimonial.review.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);

// Social Media Links Component
const SocialMediaLinks: React.FC = () => (
  <div>
    <p className="text-greyscale-0 font-tripsans text-0.875 tablet:text-15 text-center font-bold leading-1.2 tracking-0.00875 mb-2">
      View us on:
    </p>
    <div className="flex flex-row justify-center space-x-3">
      <Link
        className="size-9 rounded-full flex justify-center items-center bg-[#33E0A0]"
        href="https://www.tripadvisor.com.vn/Hotel_Review-g1544599-d23325277-Reviews-Hong_Hao_Hostel_and_Motorbikes-Ha_Giang_Ha_Giang_Province.html"
      >
        <Image
          alt="tripadvisor"
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          data-nimg="1"
          className="w-[1.685rem] h-[1.085rem]"
          src="/imgs/home/tripadvisor.svg"
        />
      </Link>
      <Link
        className="flex items-center justify-center rounded-full size-9"
        href="https://www.instagram.com/honghao_hostel_motorbikes?igsh=OGQ5ZDc2ODk2ZA=="
        style={{ background: 'linear-gradient(45deg, rgb(255, 214, 0) 8.39%, rgb(255, 1, 0) 50%, rgb(216, 0, 185) 91.61%)' }}
      >
        <Image
          alt="instagram"
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          data-nimg="1"
          className="size-[1.125rem]"
          src="/imgs/home/instagram.svg"
        />
      </Link>
      <Link
        className="flex items-center justify-center rounded-full size-9 bg-[#1C7EF2]"
        href="https://www.facebook.com/honghaohg"
      >
        <Image
          alt="facebook"
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          data-nimg="1"
          className="w-[0.65625rem] h-[1.125rem]"
          src="/imgs/home/facebook.svg"
        />
      </Link>
      <Link
        className="flex items-center justify-center rounded-full size-9 bg-elevation-30"
        href="https://www.tiktok.com/@honghaotravel?_t=8oIsaJo5hBQ&_r=1"
      >
        <Image
          alt="tiktok"
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          data-nimg="1"
          className="w-[1.05rem] h-5"
          src="/imgs/home/tiktok.svg"
        />
      </Link>
    </div>
  </div>
);

// Review Popover Component
const ReviewPopover: React.FC<{ testimonial: Testimonial; position: 'left' | 'right'; lineImage: string }> = ({ 
  testimonial, 
  position, 
  lineImage 
}) => (
  <div 
    className={`absolute transition-400 min-w-[7.8rem] min-h-[1.56rem] top-0 ${
      position === 'left' 
        ? 'left-0 -translate-x-[95%] -translate-y-[82%] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto' 
        : 'right-0 translate-x-[95%] -translate-y-full'
    }`}
  >
    <Image
      alt="line"
      loading="lazy"
      width={120}
      height={120}
      decoding="async"
      data-nimg="1"
      className="z-10 object-contain size-full"
      src={lineImage}
    />
    <TestimonialCard 
      testimonial={testimonial}
      className={`absolute top-0 ${position === 'left' ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'} -translate-y-1/2`}
    />
  </div>
);

// Interactive Map Dot Component
const InteractiveMapDot: React.FC<{ 
  testimonial: Testimonial; 
  position: string; 
  lineImage: string;
  popoverPosition: 'left' | 'right';
  hoverAreaClasses?: string;
  isAlwaysVisible?: boolean;
}> = ({ testimonial, position, lineImage, popoverPosition, hoverAreaClasses, isAlwaysVisible = false }) => (
  <div className={`absolute group ${position}`}>
    <button className="size-[1.66rem]">
      <Image
        alt="circle dot icon"
        loading="lazy"
        width={120}
        height={120}
        decoding="async"
        data-nimg="1"
        className="object-cover size-full"
        src="/imgs/home/circle-dot.svg"
      />
    </button>
    <div className={hoverAreaClasses} />
    <ReviewPopover 
      testimonial={testimonial} 
      position={popoverPosition} 
      lineImage={lineImage}
    />
  </div>
);

// Desktop Version Component
const DesktopClientsSection: React.FC = () => (
  <div className="hidden md:block">
    {/* Background Image */}
    <Image
      alt="background image"
      loading="lazy"
      width={1920}
      height={1080}
      decoding="async"
      data-nimg="1"
      className="absolute top-0 left-0 object-cover object-bottom h-full -z-10"
      src="/1-nguoi-dung-giua-nui-trong-co-ve-ngau.jpeg"
    />

    {/* Gradient Overlay */}
    <div 
      className="absolute top-0 left-0 w-full h-full"
      style={{ background: 'linear-gradient(rgb(18, 39, 24) 7.6%, rgba(18, 39, 24, 0.71) 43.62%, rgb(18, 39, 24) 79.64%)' }}
    />

    {/* Title */}
    <h2 className="absolute top-[8rem] left-1/2 -translate-x-1/2 text-greyscale-0">
      CLIENTS SAY...
    </h2>

    {/* Main Image Container */}
    <div className="w-[30.04188rem] h-[29.875rem] absolute top-[16rem] -translate-x-1/2 left-1/2">
      {/* Swiper Images */}
      <div className="swiper swiper-client-say swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
        <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transitionDelay: '0ms' }}>
          {swiperImages.map((image, index) => (
            <div 
              key={index}
              className="swiper-slide" 
              data-swiper-slide-index={index}
              style={{ width: '481px', opacity: 1, transform: `translate3d(${-481 * index}px, 0px, 0px)`, transitionDuration: '0ms' }}
            >
              <Image
                alt="hong hao travel"
                loading="lazy"
                width={1920}
                height={1080}
                decoding="async"
                data-nimg="1"
                className="absolute top-0 left-0 object-cover size-full cut-img"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Frame Image */}
      <Image
        alt="client say"
        loading="lazy"
        width={1920}
        height={1080}
        decoding="async"
        data-nimg="1"
        className="absolute -translate-x-1/2 -top-2.5 left-1/2 w-[31.375rem] h-[31.1875rem] object-contain"
        src="/1-buc-anh-co-hinh-giong-england-deco-1.png"
      />

      {/* Vietnam Dot */}
      <Image
        alt="vietnam"
        loading="lazy"
        width={120}
        height={120}
        decoding="async"
        data-nimg="1"
        className="size-[1.66rem] absolute top-8 right-[5.5rem]"
        src="/circle-dot-vietnam.svg"
      />

      {/* Interactive Map Dots */}
      <InteractiveMapDot
        testimonial={testimonials[0]}
        position="top-[7rem] left-[12.5rem]"
        lineImage="/line-1.svg"
        popoverPosition="left"
        hoverAreaClasses="absolute top-0 left-0 h-[15rem] w-[29.8rem] bg-transparent -translate-x-full -translate-y-1/2"
      />

      <InteractiveMapDot
        testimonial={testimonials[1]}
        position="top-[15rem] right-[10rem]"
        lineImage="/line-2.svg"
        popoverPosition="right"
        hoverAreaClasses="absolute top-0 right-0 h-[15rem] w-[32rem] bg-transparent translate-x-full -translate-y-2/3 transition-400"
        isAlwaysVisible
      />

      <InteractiveMapDot
        testimonial={testimonials[2]}
        position="bottom-[3.5rem] left-[7rem]"
        lineImage="/line-1.svg"
        popoverPosition="left"
        hoverAreaClasses="absolute top-0 left-0 h-[15rem] w-[29.8rem] bg-transparent -translate-x-full -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
      />
    </div>

    {/* Social Media Links */}
    <div className="absolute -translate-x-1/2 bottom-20 left-1/2">
      <SocialMediaLinks />
    </div>
  </div>
);

// Mobile Version Component
const MobileClientsSection: React.FC = () => (
  <div className="relative block pt-16 xmd:pt-[4.54rem] pb-4 kKao4-container md:hidden">
    {/* Header */}
    <h5 className="mb-3 h5 text-greyscale-0 opacity-40">READ WHAT OUR RECENT</h5>
    <h2 className="h2 xmd:text-[2rem] text-greyscale-0">CLIENTS SAY</h2>

    {/* Background Gradient */}
    <div 
      className="absolute top-0 left-0 w-full h-[15.4rem] -z-10"
      style={{ background: 'linear-gradient(rgb(18, 39, 24) 7.6%, rgba(18, 39, 24, 0.85) 43.62%, rgb(18, 39, 24) 79.64%)' }}
    />

    {/* Testimonials Slider */}
    <div className="flex flex-row items-center px-3 mt-8 -mx-3 space-x-3 overflow-x-auto">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>

    {/* Background Image */}
    <div className="absolute top-[15rem] left-0 w-full h-[15.4rem] overflow-hidden -z-10">
      <Image
        alt="client say"
        loading="lazy"
        width={1920}
        height={1080}
        decoding="async"
        data-nimg="1"
        className="scale-[1.2]"
        src="/bg-img-client-say-mobile.png"
      />
    </div>

    {/* Social Media Links */}
    <div className="mt-8">
      <SocialMediaLinks />
    </div>

    {/* Bottom Background */}
    <div className="absolute top-[30rem] h-[6rem] bg-[#122718] left-0 w-full -z-10" />
  </div>
);

// Main Clients Say Component
export default function ClientsSay() {
  return (
    <section className="relative md:h-[60rem] tablet:mt-[4rem]">
      <DesktopClientsSection />
      <MobileClientsSection />
    </section>
  );
}
