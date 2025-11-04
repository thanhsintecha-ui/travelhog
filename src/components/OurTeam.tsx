'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Types
interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  image: string;
  description: string;
}

// Data
const tourGuides: TeamMember[] = [
  {
    id: 1,
    name: 'Mr. Mountain',
    role: 'Tour Leader',
    experience: '3 years EXP',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/z5615490896822_421bd11d45526c9756c78715d8fd05cb.jpg',
    description: '"As a tour guide, my greatest joy is witnessing the wonder and awe on travelers\' faces as they discover the hidden gems and cultural treasures of our destination" "As a tour guide, my greatest joy is witnessing the wonder and awe on travelers\' faces as they discover the hidden gems and cultural treasures of our destination"',
  },
  {
    id: 2,
    name: 'Mr. River',
    role: 'Tour Leader',
    experience: '3 years EXP',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-22-at-10.56.45_3056e984.jpg',
    description: '"As a tour guide, my greatest joy is witnessing the wonder and awe on travelers\' faces as they discover the hidden gems and cultural treasures of our destination" "As a tour guide, my greatest joy is witnessing the wonder and awe on travelers\' faces as they discover the hidden gems and cultural treasures of our destination" "As a tour guide, my greatest joy is witnessing the wonder and awe on travelers\' faces as they discover the hidden gems and cultural treasures of our destination"',
  },
  {
    id: 3,
    name: 'Mr. Tính',
    role: 'Tour Leader',
    experience: '3 years EXP',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-07-13-at-14.52.51_5bbab173.jpg',
    description: '"As a tour guide, my greatest joy is witnessing the wonder and awe on travelers\' faces as they discover the hidden gems and cultural treasures of our destination"',
  },
  {
    id: 4,
    name: 'Mr. Cua',
    role: 'Tour Leader',
    experience: '3 years EXP',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2024-12-11-at-19.17.56_4f4b27ee.jpg',
    description: '"As a tour guide, my greatest joy is witnessing the wonder and awe on travelers\' faces as they discover the hidden gems and cultural treasures of our destination"',
  },
  {
    id: 5,
    name: 'Mr.Sun',
    role: 'Tour Leader',
    experience: '1 year EXP',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/WhatsApp-Image-2025-01-08-at-13.52.11_63eab7bc.jpg',
    description: '',
  },
  {
    id: 6,
    name: 'Mr.Happy',
    role: 'Tour Leader',
    experience: '3 year EXP',
    image: 'https://cms.honghaotravel.com/wp-content/uploads/z6399602024031_7b046346d4c0ec764a940f8fc1399697.jpg',
    description: '',
  },
];

const riderTeam: TeamMember[] = [];

// Spinning Logo Component
const SpinningLogo: React.FC = () => (
  <div className="absolute right-[1.1rem] top-[0.6rem] group-hover:opacity-100 opacity-0 duration-500">
    <div className="relative">
      <Image
        alt="ảnh"
        fetchPriority="high"
        width={300}
        height={400}
        decoding="async"
        data-nimg="1"
        className="h-[4.2rem] w-[4rem] circular-infinity"
        src="/imgs/common/hong-hao-travel.png"
      />
      <Image
        alt="ảnh"
        fetchPriority="high"
        width={300}
        height={400}
        decoding="async"
        data-nimg="1"
        className="size-[2rem] absolute top-1/2 w-full h-full -translate-y-1/2 left-1/2 -translate-x-1/2"
        src="/imgs/common/map-xoay.png"
      />
    </div>
  </div>
);

// Team Member Card Component
const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="relative bg-white cursor-pointer overflow-hidden flex w-[17.6875rem] xmd:h-[26rem] h-[28.5rem] flex-col items-center justify-between xmd:space-y-[0.75rem] space-y-[1rem] pb-[0.6875rem] rounded-3xl shadow-md group">
    {/* Image Container */}
    <div className="xmd:w-[17.7875rem] w-[17.6875rem] h-[24.125rem] xmd:h-[21.83156rem] group-hover:h-[20.3125rem] duration-500 ease-linear rounded-3xl overflow-hidden">
      <Image
        alt="ảnh"
        fetchPriority="high"
        width={300}
        height={400}
        decoding="async"
        data-nimg="1"
        className="object-cover xmd:translate-x-[0.01rem] md:scale-[1.2] md:group-hover:scale-[1.1] duration-500 ease-linear rounded-2xl h-full w-full shrink-0"
        src={member.image}
      />
    </div>

    {/* Spinning Logo */}
    <SpinningLogo />

    {/* Member Info */}
    <div className="ease-linear flex flex-col items-center justify-around space-y-[0.25rem] self-stretch">
      <div className="text-orange-normal text-center text-base not-italic font-bold leading-[120%] tracking-[0.0125rem]">
        {member.name}
      </div>
      <div className="flex items-center self-stretch justify-center gap-3">
        <div className="text-greyscale-80 text-center text-sm not-italic font-normal leading-[120%] tracking-[0.00875rem]">
          {member.role}
        </div>
        <div className="rounded-full size-[0.25rem] bg-greyscale-80" />
        <div className="text-greyscale-80 text-center text-sm not-italic font-normal leading-[120%] tracking-[0.00875rem]">
          {member.experience}
        </div>
      </div>
      {member.description && (
        <div className="w-[15.75rem] scrollbar-custom group-hover:translate-y-[0rem] translate-y-[2rem] group-hover:h-[4rem] overflow-y-auto h-0 duration-500 ease-linear text-greyscale-30 text-center text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem]">
          {member.description}
        </div>
      )}
    </div>
  </div>
);

// Navigation Arrow Component
const NavigationArrow: React.FC<{ direction: 'left' | 'right'; onClick?: () => void }> = ({ direction, onClick }) => {
  const isLeft = direction === 'left';
  
  return (
    <button
      onClick={onClick}
      className={`
        ${isLeft ? 'absolute left-[0rem] top-[-1rem]' : 'size-[2.5rem] rotate-[180deg] absolute right-[0rem] top-0'}
        pointer-events-auto group rounded-full duration-300 ease-linear border border-orange-normal size-[2.5rem]
      `}
    >
      <svg className="" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <g className="group-hover:fill-[#E64827] fill-transparent duration-300 ease-linear" clipPath="url(#clip0_7452_38196)">
          <circle className="stroke-white" cx="20" cy="20" r="19.5" stroke="#E64827" />
          <path className="stroke-white duration-300 ease-linear" d="M14.5 20L28 20" stroke="url(#paint0_linear_7452_38196)" strokeWidth="2" />
          <g filter="url(#filter0_i_7452_38196)">
            <path className="fill-white group-hover:fill-white group-hover:translate-x-[0.09rem] duration-300 ease-linear" d="M12 20L20 27L16.7816 20L20 13L12 20Z" fill="#E64827" />
          </g>
        </g>
        <defs>
          <filter id="filter0_i_7452_38196" x="12" y="13" width="28" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="20" dy="4" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7452_38196" />
          </filter>
          <linearGradient id="paint0_linear_7452_38196" x1="27" y1="20" x2="16" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2531C" />
            <stop offset="1" stopColor="#F2531C" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_7452_38196">
            <rect width="40" height="40" rx="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

// Action Button Component
const ActionButton: React.FC<{ href: string; children: React.ReactNode; variant: 'primary' | 'secondary' }> = ({ 
  href, 
  children, 
  variant 
}) => {
  const isPrimary = variant === 'primary';
  
  return (
    <button
      className={`
        px-8 py-4 xmd:py-[0.75rem] xmd:px-[1.5rem] xmd:h-[3rem] tablet:h-[5rem] h-[3.5rem] group whitespace-nowrap text-sm font-bold 
        ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 
        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 
        dark:focus-visible:ring-slate-300 tablet:text-15 flex uppercase button text-white justify-center items-center gap-2 
        border rounded-lg border-solid !flex-1 tablet:!w-1/2 !w-max shrink-0
        ${isPrimary ? 'border-orange-hover bg-orange-hover' : 'border-white hover:border-orange-hover hover:opacity-100 opacity-60 hover:bg-orange-hover'}
      `}
    >
      <Link href={href}>{children}</Link>
      <div className="w-max">
        <ArrowIcon />
      </div>
    </button>
  );
};

// Arrow Icon Component
const ArrowIcon: React.FC = () => (
  <svg
    className="w-3 h-[0.65625rem] tablet:h-[1.5rem] tablet:w-[3rem] group-hover:translate-x-[0.4rem] duration-300 ease-linear group-hover:stroke-white group-hover:fill-white"
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path className="group-hover:stroke-white" d="M10.125 6H0" stroke="#FFF" strokeWidth="2" />
    <g filter="url(#filter0_i_10201_23415)">
      <path className="group-hover:fill-white" d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill="#FFF" />
    </g>
    <defs>
      <filter id="filter0_i_10201_23415" x="6" y="0.75" width="26" height="14.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="20" dy="4" />
        <feGaussianBlur stdDeviation="50" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10201_23415" />
      </filter>
      <linearGradient id="paint0_linear_10201_23415" x1="4.53912" y1="6" x2="4.53912" y2="6.892" gradientUnits="userSpaceOnUse">
        <stop offset="0.31" stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// Tab Button Component
const TabButton: React.FC<{ 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className="justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background uppercase flex flex-col items-start font-bold text-greyscale-10 data-[state=active]:text-orange-normal !bg-transparent"
    data-state={active ? 'active' : 'inactive'}
  >
    {children}
    {active && (
      <div className="h-[0.1rem] bg-orange-normal w-full mt-[0.4rem] rounded-full" />
    )}
  </button>
);

// Desktop Carousel Component
const DesktopCarousel: React.FC<{ members: TeamMember[] }> = ({ members }) => (
  <>
    <div className="xmd:hidden w-[58rem] absolute top-[12rem]">
      <div className="relative z-50">
        <NavigationArrow direction="left" />
        <NavigationArrow direction="right" />
      </div>
    </div>
    <div className="swiper swiper-initialized swiper-horizontal xmd:w-[60.0625rem] w-[62.0625rem] xmd:!pl-[1rem] md:!pl-[1rem] xmd:!hidden">
      <div className="swiper-wrapper">
        {members.map((member, index) => (
          <div
            key={member.id}
            className="swiper-slide !pb-[4rem]"
            data-swiper-slide-index={index}
            style={{ width: '305.312px' }}
          >
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  </>
);

// Mobile Carousel Component
const MobileCarousel: React.FC<{ members: TeamMember[] }> = ({ members }) => (
  <div className="xmd:flex hidden overflow-x-auto w-screen">
    <div className="flex w-max">
      {members.map((member) => (
        <div key={member.id} className="mr-[1rem]">
          <TeamMemberCard member={member} />
        </div>
      ))}
    </div>
  </div>
);

// Main Our Team Component
export default function OurTeam() {
  const [activeTab, setActiveTab] = useState<'tour-guide' | 'rider-team'>('tour-guide');
  
  const currentMembers = activeTab === 'tour-guide' ? tourGuides : riderTeam;

  return (
    <div className="flex relative pb-[14.5rem] xmd:pb-[6rem] bg-[linear-gradient(180deg,#122718_7.6%,rgba(18,39,24,0.71)_43.62%,#122718_79.64%)] w-full h-fit">
      {/* Background Image */}
      <Image
        alt="hong hao travel"
        loading="lazy"
        width={1920}
        height={1080}
        decoding="async"
        data-nimg="1"
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        src="/imgs/home/bannerBg2.jpg"
      />

      <section className="flex items-center justify-between w-full">
        <div className="team subContainer flex pl-0 ml-auto xmd:pl-0 xmd:mt-[3rem] mt-[3.75rem] bg-transparent xmd:flex-col justify-between xmd:space-y-[3rem] items-start overflow-hidden">
          
          {/* Left Section - Info & Buttons */}
          <div className="md:flex md:flex-col md:w-[25.0625rem] xmd:mx-[1rem] space-y-[2.12rem] tablet:space-y-[4rem] tablet:pl-[4rem] tablet:w-max">
            <div className="font-bold uppercase tablet:text-175 text-greyscale-0 opacity-40">
              HONG HAO TRAVEL
            </div>
            <h2 className="uppercase !mt-[0.75rem] xmd:!text-[2.5rem] xmd:pb-[3rem] text-greyscale-0">
              OUR TEAM
            </h2>
            <span className="relative *:text-[0.875rem] xmd:text-[0.875rem] z-50 tracking-[0.005rem] tablet:text-15 text-greyscale-5/50">
              <p>
                We pride ourselves on having a team of dedicated and passionate individuals who are committed to 
                providing exceptional service and unforgettable experiences to our guests. Our team is comprised of 
                knowledgeable professionals with diverse backgrounds and expertise in various aspects of the tourism industry.
              </p>
            </span>

            {/* Action Buttons */}
            <div className="flex flex-start space-x-[1rem]">
              <ActionButton href="/about-us" variant="primary">
                About Us
              </ActionButton>
              <ActionButton href="/tours" variant="secondary">
                <span className="text-white">All tour</span>
              </ActionButton>
            </div>
          </div>

          {/* Right Section - Team Carousel */}
          <div className="flex flex-col items-end justify-end w-fit">
            {/* Tabs */}
            <div className="inline-flex h-10 items-center justify-center rounded-md p-1 w-fit xmd:hidden md:!mr-[4rem] md:!mb-[1rem]">
              <TabButton 
                active={activeTab === 'tour-guide'} 
                onClick={() => setActiveTab('tour-guide')}
              >
                TOUR GUIDE
              </TabButton>
              <TabButton 
                active={activeTab === 'rider-team'} 
                onClick={() => setActiveTab('rider-team')}
              >
                RIDER TEAM
              </TabButton>
            </div>

            {/* Carousel Content */}
            <div className="relative flex items-center justify-center w-full">
              <DesktopCarousel members={currentMembers} />
              <MobileCarousel members={currentMembers} />
              
              {/* Gradient Fade */}
              <div className="w-32 h-[28.5rem] z-10 absolute top-0 right-0 bg-[linear-gradient(90deg,rgba(19,40,25,0.00)_1.95%,#132819_94.2%)]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
