'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MonthData {
  month: string;
  degree: number;
  rainfall: number;
  icon: string;
}

const months: MonthData[] = [
  { month: 'jan', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'feb', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'mar', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'apr', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'may', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'jun', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'jul', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'aug', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'sep', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'oct', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'nov', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
  { month: 'dec', degree: 0, rainfall: 0, icon: '/cloud-with-raining-mobile.svg' },
];

const seasonImages = [
  '/Group-1000004214-2-1.jpeg',
  '/season-2.jpg',
  '/season-3.jpeg',
  '/season-4.jpeg',
  '/season-5.jpeg',
  '/season-6.jpg',
  '/season-7.jpg',
  '/season-8.jpg',
  '/season-9.jpg',
  '/season-10.jpg',
  '/season-11.jpg',
  '/season-12.jpg',
];

const MonthCard = ({ month, isActive }: { month: MonthData; isActive: boolean }) => (
  <div
    className={`relative xmd:flex-none flex-1 backdrop-blur-sm bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)] pt-[0.5rem] pb-[0.44rem] md:pb-2 rounded-[0.7rem] flex flex-col items-center space-y-1 transition-400 cursor-pointer overflow-hidden thumb-item px-4 md:px-3.5 transition-400 border bg-elevation-30 thumb-item-mobile ${
      isActive ? 'border-[#ED1C24]' : ''
    }`}
  >
    <div
      className="absolute w-full h-full top-0 left-0 !mt-0 transition-400"
      style={{
        background: 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(230, 72, 39, 0.06) 100%)',
        opacity: isActive ? 1 : 0,
      }}
    ></div>
    <div className="text-center tablet:text-15 font-extrabold leading-1.2 tracking-0.0125 font-tripsans opacity-90 uppercase text-greyscale-80">
      {month.month}
    </div>
    <p className="tablet:text-1125 text-center font-tripsans leading-1.2 tracking-0.00375 opacity-70 font-normal text-greyscale-80">
      Degree
    </p>
    <strong className="font-tripsans tablet:text-15 font-extrabold leading-1.2 tracking-0.00375 opacity-80 text-greyscale-80">
      {month.degree}
    </strong>
    <Image
      alt="cloud with raining"
      loading="lazy"
      width={120}
      height={120}
      className="size-[0.875rem] tablet:size-[1.5rem]"
      src={month.icon}
    />
    <p className="font-tripsans tablet:text-125 font-extrabold leading-1.2 tracking-0.00375 opacity-80 text-greyscale-80">
      {month.rainfall} mm
    </p>
  </div>
);

export default function SeasonSlider() {
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative z-10 -translate-y-16 md:-translate-y-[13.5rem] -mb-12 md:-mb-[13.5rem]">
      <div className="kKao4-container">
        <div className="swiper swiper-initialized swiper-horizontal swiper-ios slide-season">
          <div className="swiper-wrapper">
            {seasonImages.map((img, index) => (
              <div
                key={index}
                className={`swiper-slide ${index === activeSlide ? 'swiper-slide-active' : index === activeSlide + 1 ? 'swiper-slide-next' : ''}`}
                data-swiper-slide-index={index}
                style={{ width: '1400px' }}
              >
                <Image
                  alt="hong hao travel"
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                  src={img}
                />
              </div>
            ))}
          </div>
          <button className="hidden md:block absolute left-[4rem] top-1/2 -translate-y-1/2 z-10 prev-slide-season-btn group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="group-hover:fill-orange-normal-hover transition-400"
            >
              <g clipPath="url(#clip0_8549_23525)">
                <circle
                  cx="20"
                  cy="20"
                  r="19.5"
                  transform="matrix(-1 0 0 1 40 0)"
                  className="stroke-white group-hover:stroke-orange-normal-hover transition-400"
                ></circle>
                <path d="M13.5 20H27" stroke="url(#paint0_linear_8549_23525)" strokeWidth="2"></path>
                <g filter="url(#filter0_i_8549_23525)">
                  <path d="M12 20L20 27L16.7816 20L20 13L12 20Z" fill="white"></path>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_i_8549_23525"
                  x="12"
                  y="13"
                  width="28"
                  height="18"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="20" dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="50"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8549_23525"></feBlend>
                </filter>
                <linearGradient id="paint0_linear_8549_23525" x1="26" y1="20" x2="15" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <clipPath id="clip0_8549_23525">
                  <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="hidden md:block absolute right-[4rem] top-1/2 -translate-y-1/2 z-10 next-slide-season-btn group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="group-hover:fill-orange-normal-hover transition-400"
            >
              <g clipPath="url(#clip0_8549_23524)">
                <circle cx="20" cy="20" r="19.5" className="stroke-white group-hover:stroke-orange-normal-hover transition-400"></circle>
                <path d="M26.5 20H13" stroke="url(#paint0_linear_8549_23524)" strokeWidth="2"></path>
                <g filter="url(#filter0_i_8549_23524)">
                  <path d="M28 20L20 27L23.2184 20L20 13L28 20Z" fill="white"></path>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_i_8549_23524"
                  x="20"
                  y="13"
                  width="28"
                  height="18"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="20" dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="50"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8549_23524"></feBlend>
                </filter>
                <linearGradient id="paint0_linear_8549_23524" x1="14" y1="20" x2="25" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <clipPath id="clip0_8549_23524">
                  <rect width="40" height="40" rx="20" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className="absolute top-3 left-3 md:top-9 md:left-9 md:w-[9.375rem] rounded-[0.44rem] md:rounded-[0.7rem] bg-[rgba(255,255,255,0.2)] px-[0.52rem] xmd:py-[0.45rem] md:pt-4 md:pb-2 flex md:flex-col md:space-y-3 z-10 items-center border-[0.5px] border-greyscale-0/40">
            <span className="font-extrabold text-center font-tripsans text-1.23 md:text-2 text-greyscale-0 xmd:ml-[0.46rem]">
              18°C
            </span>
            <Image
              alt="sun with cloud"
              loading="lazy"
              width={120}
              height={120}
              className="w-[2.3rem] h-[1.667rem] md:w-[3.73rem] md:h-[2.687rem] xmd:order-first"
              src="/cloudy.svg"
            />
            <p className="hidden md:block font-tripsans text-1.125 text-center text-greyscale-0">3/11</p>
          </div>
          <div className="absolute bottom-[1.63rem] left-0 px-[2.5rem] w-full z-10 xmd:hidden">
            <div className="relative w-full h-px mb-6 bg-greyscale-0/80">
              <div className="absolute top-0 -translate-x-1/2 flex flex-col items-center -translate-y-[98%] transition-400">
                <strong className="font-tripsans text-1 tablet:text-15 font-extrabold leading-1.2 tracking-0.0125 mb-[0.44rem] text-greyscale-0">
                  Now
                </strong>
                <Image
                  alt="arrow-up"
                  loading="lazy"
                  width={120}
                  height={120}
                  className="w-4 h-2"
                  src="/arrow-up.svg"
                />
              </div>
            </div>
            <div className="flex flex-row space-x-3.5">
              {months.map((month, index) => (
                <MonthCard key={month.month} month={month} isActive={index === activeMonth} />
              ))}
            </div>
          </div>
        </div>
        <div className="z-10 w-full flex flex-row px-3 mt-4 space-x-3 overflow-auto flex-nowrap md:hidden">
          {months.map((month, index) => (
            <MonthCard key={month.month} month={month} isActive={index === activeMonth} />
          ))}
        </div>
      </div>
    </section>
  );
}

