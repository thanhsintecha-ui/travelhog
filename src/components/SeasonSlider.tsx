'use client';

import Image from 'next/image';
import React, { useState } from 'react';

// Types
interface SeasonImage {
  id: number;
  url: string;
  alt: string;
}

interface MonthData {
  name: string;
  degree: number;
  rainfall: number;
  icon: string;
}

// Data
const seasonImages: SeasonImage[] = [
  {
    id: 1,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/Group-1000004214-2-1.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 2,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/Group-1000004214-2-1.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 3,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/Group-1000004214-2-1.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 4,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/2024/05/bg.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 5,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/2024/05/65b3a47362dea5277474d77c_African-leopard-female-pose-in-beautiful-evening-light.-1070008700_4265x2843.webp-1-1.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 6,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-11.02.44_dce2724c.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 7,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/Group-1000004214-2-1.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 8,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-10-at-16.20.40_21829ed6.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 9,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-21-at-11.04.48_1ac3d7ff.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 10,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/Group-1000004214-2-1.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 11,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/z5615490925991_876fd190c949165fc3e745614a3fe8de.jpg',
    alt: 'hong hao travel',
  },
  {
    id: 12,
    url: 'https://cms.honghaotravel.com/wp-content/uploads/Group-1000004214-2-1.jpg',
    alt: 'hong hao travel',
  },
];

const monthsData: MonthData[] = [
  { name: 'jan', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'feb', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'mar', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'apr', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'may', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'jun', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'jul', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'aug', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'sep', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'oct', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'nov', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
  { name: 'dec', degree: 0, rainfall: 0, icon: '/imgs/home/cloud-with-raining.svg' },
];

// Weather Widget Component
const WeatherWidget: React.FC = () => (
  <div className="absolute top-3 left-3 md:top-9 md:left-9 md:w-[9.375rem] rounded-[0.44rem] md:rounded-[0.7rem] bg-[rgba(255,255,255,0.2)] px-[0.52rem] xmd:py-[0.45rem] md:pt-4 md:pb-2 flex md:flex-col md:space-y-3 z-10 items-center border-[0.5px] border-greyscale-0/40">
    <span className="font-extrabold text-center font-tripsans text-1.23 md:text-2 text-greyscale-0 xmd:ml-[0.46rem]">
      21°C
    </span>
    <Image
      alt="sun with cloud"
      loading="lazy"
      width={120}
      height={120}
      decoding="async"
      data-nimg="1"
      className="w-[2.3rem] h-[1.667rem] md:w-[3.73rem] md:h-[2.687rem] xmd:order-first"
      src="/imgs/home/cloudy.svg"
    />
    <p className="hidden md:block font-tripsans text-1.125 text-center text-greyscale-0">4/11</p>
  </div>
);

// Navigation Button Component
const NavigationButton: React.FC<{ 
  direction: 'prev' | 'next'; 
  onClick?: () => void;
  className?: string;
}> = ({ direction, onClick, className = '' }) => {
  const isPrev = direction === 'prev';
  
  return (
    <button
      onClick={onClick}
      className={`hidden md:block absolute ${isPrev ? 'left-[4rem]' : 'right-[4rem]'} top-1/2 -translate-y-1/2 z-10 ${isPrev ? 'prev-slide-season-btn' : 'next-slide-season-btn'} group ${className}`}
    >
      {isPrev ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="group-hover:fill-orange-normal-hover transition-400">
          <g clipPath="url(#clip0_8549_23525)">
            <circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0)" className="stroke-white group-hover:stroke-orange-normal-hover transition-400" />
            <path d="M13.5 20H27" stroke="url(#paint0_linear_8549_23525)" strokeWidth="2" />
            <g filter="url(#filter0_i_8549_23525)">
              <path d="M12 20L20 27L16.7816 20L20 13L12 20Z" fill="white" />
            </g>
          </g>
          <defs>
            <filter id="filter0_i_8549_23525" x="12" y="13" width="28" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="20" dy="4" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8549_23525" />
            </filter>
            <linearGradient id="paint0_linear_8549_23525" x1="26" y1="20" x2="15" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_8549_23525">
              <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="group-hover:fill-orange-normal-hover transition-400">
          <g clipPath="url(#clip0_8549_23524)">
            <circle cx="20" cy="20" r="19.5" className="stroke-white group-hover:stroke-orange-normal-hover transition-400" />
            <path d="M26.5 20H13" stroke="url(#paint0_linear_8549_23524)" strokeWidth="2" />
            <g filter="url(#filter0_i_8549_23524)">
              <path d="M28 20L20 27L23.2184 20L20 13L28 20Z" fill="white" />
            </g>
          </g>
          <defs>
            <filter id="filter0_i_8549_23524" x="20" y="13" width="28" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="20" dy="4" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8549_23524" />
            </filter>
            <linearGradient id="paint0_linear_8549_23524" x1="14" y1="20" x2="25" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_8549_23524">
              <rect width="40" height="40" rx="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
};

// Month Card Component
const MonthCard: React.FC<{ 
  month: MonthData; 
  isActive?: boolean;
  onClick?: () => void;
}> = ({ month, isActive = false, onClick }) => (
  <div
    onClick={onClick}
    className="relative xmd:flex-none flex-1 backdrop-blur-sm bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)] pt-[0.5rem] pb-[0.44rem] md:pb-2 rounded-[0.7rem] flex flex-col items-center space-y-1 transition-400 cursor-pointer overflow-hidden thumb-item px-4 md:px-3.5 transition-400 border border-greyscale-0/20"
  >
    {/* Active State Background */}
    <div className={`absolute w-full h-full top-0 left-0 !mt-0 transition-600 bg-[linear-gradient(180deg,rgba(255,255,255,0.50)_0%,rgba(255,255,255,0.05)_100%)] ${isActive ? '' : 'opacity-0'}`} />
    
    {/* Inactive State Background */}
    <div className={`absolute w-full h-full top-0 left-0 !mt-0 transition-600 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.01)_100%)] ${isActive ? 'opacity-0' : ''}`} />
    
    <div className="text-center tablet:text-15 font-extrabold leading-1.2 tracking-0.0125 font-tripsans opacity-90 uppercase text-greyscale-0">
      {month.name}
    </div>
    <p className="tablet:text-1125 text-center font-tripsans leading-1.2 tracking-0.00375 opacity-70 font-normal text-greyscale-0">
      Degree
    </p>
    <strong className="font-tripsans tablet:text-15 font-extrabold leading-1.2 tracking-0.00375 opacity-80 text-greyscale-0">
      {month.degree}
    </strong>
    <Image
      alt="cloud with raining"
      loading="lazy"
      width={120}
      height={120}
      decoding="async"
      data-nimg="1"
      className="size-[0.875rem] tablet:size-[1.5rem]"
      src={month.icon}
    />
    <p className="font-tripsans tablet:text-125 font-extrabold leading-1.2 tracking-0.00375 opacity-80 text-greyscale-0">
      {month.rainfall} mm
    </p>
  </div>
);

// Timeline Indicator Component
const TimelineIndicator: React.FC<{ position: number }> = ({ position }) => (
  <div className="absolute bottom-[1.63rem] left-0 px-[2.5rem] w-full z-10 xmd:hidden">
    <div className="relative w-full h-px mb-6 bg-greyscale-0/80">
      <div
        className="absolute top-0 -translate-x-1/2 flex flex-col items-center -translate-y-[98%] transition-400"
        style={{ left: `calc(${position}px)` }}
      >
        <strong className="font-tripsans text-1 tablet:text-15 font-extrabold leading-1.2 tracking-0.0125 mb-[0.44rem] text-greyscale-0">
          Now
        </strong>
        <Image
          alt="arrow-up"
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          data-nimg="1"
          className="w-4 h-2"
          src="/imgs/home/arrow-up.svg"
        />
      </div>
    </div>
  </div>
);

// Carousel Slide Component
const CarouselSlide: React.FC<{ 
  image: SeasonImage; 
  isActive: boolean;
  index: number;
}> = ({ image, isActive, index }) => (
  <div
    className={`swiper-slide ${isActive ? 'swiper-slide-active' : ''}`}
    data-swiper-slide-index={index}
    style={{ width: '1400px' }}
  >
    <Image
      alt={image.alt}
      loading="lazy"
      width={1920}
      height={1080}
      decoding="async"
      data-nimg="1"
      className="object-cover w-full h-full"
      src={image.url}
    />
  </div>
);

// Main Season Slider Component
export default function SeasonSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMonth, setActiveMonth] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? seasonImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === seasonImages.length - 1 ? 0 : prev + 1));
  };

  const handleMonthClick = (index: number) => {
    setActiveMonth(index);
    setActiveSlide(index);
  };

  return (
    <section className="relative z-10 -translate-y-16 md:-translate-y-[13.5rem] -mb-12 md:-mb-[13.5rem]">
      <div className="kKao4-container">
        {/* Main Carousel */}
        <div className="swiper swiper-initialized swiper-horizontal slide-season">
          <div className="swiper-wrapper">
            {seasonImages.map((image, index) => (
              <CarouselSlide
                key={image.id}
                image={image}
                isActive={index === activeSlide}
                index={index}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <NavigationButton direction="prev" onClick={handlePrevSlide} />
          <NavigationButton direction="next" onClick={handleNextSlide} />

          {/* Weather Widget */}
          <WeatherWidget />

          {/* Timeline Indicator */}
          <TimelineIndicator position={47.5} />

          {/* Desktop Month Cards */}
          <div className="absolute bottom-[1.63rem] left-0 px-[2.5rem] w-full z-10 xmd:hidden">
            <div className="flex flex-row space-x-3.5">
              {monthsData.map((month, index) => (
                <MonthCard
                  key={month.name}
                  month={month}
                  isActive={index === activeMonth}
                  onClick={() => handleMonthClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Mobile Month Cards */}
          <div className="z-10 w-full flex flex-row px-3 mt-4 space-x-3 overflow-auto flex-nowrap md:hidden">
            {monthsData.map((month, index) => (
              <MonthCard
                key={`mobile-${month.name}`}
                month={month}
                isActive={index === activeMonth}
                onClick={() => handleMonthClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
