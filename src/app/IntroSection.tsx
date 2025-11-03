'use client';

import Image from 'next/image';

const highlights = [
  '13 years experience...',
  'Personalization...',
  'Tour guide with good English...',
  '15.000 customers...',
  'Unique Experiences...',
  'Unique Experiences...', // lặp lại như HTML gốc
];

export default function IntroSection() {
  return (
    <div className="relative z-[100] w-[65.5rem] xmd:w-full pt-[10rem] xmd:pt-[3rem] mx-auto flex flex-col items-center">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="hong hao travel"
        width={100}
        height={100}
        className="
          w-[7rem] h-[8.3125rem]
          xmd:w-[4.5rem] xmd:h-[5.35rem]
          tablet:w-[14rem] tablet:h-[16rem]
          mb-[4rem] object-contain
        "
      />

      {/* Description */}
      <div className="md:w-[53.75rem] md:px-0 px-[1.5rem] text-[3.5rem] xmd:text-[1.5rem] font-black font-londrina text-greyscale-0/80 mb-[4rem] xmd:mb-[1.56rem] text-center leading-[100%]">
        <p>
          Hong Hao Travel is a travel company in Ha Giang, we specialize in
          organizing unforgettable tours to explore Ha Giang loop but still
          focus on the pristine nature of nature…
        </p>
      </div>

      {/* Highlight circles */}
      <div className="flex space-x-[0.75rem] xmd:space-[0.5rem] tablet:space-[1.5rem] mb-[6.3rem] xmd:mb-[2.8rem] xmd:flex-wrap items-center justify-center">
        {highlights.map((text, index) => (
          <div
            key={index}
            className="
              group hover:bg-orange-normal overflow-hidden transition-all duration-500
              rounded-full relative size-[11.75rem] tablet:size-[16rem] xmd:size-[6rem]
              flex items-center justify-center
              xmd:text-[0.5rem] tablet:text-[1.5rem]
              xmd:leading-[1.2] font-bold uppercase text-greyscale-0
              p-[1.5rem] xmd:py-[1rem] xmd:px-[0.54rem]
              text-center xlg:mb-[1rem]
            "
          >
            {/* vòng tròn xoay */}
            <div className="animate-spin flex size-full rounded-full border border-dashed border-greyscale-0 absolute top-0 left-0" />

            {/* text hover effect */}
            <div className="relative overflow-hidden w-full h-[4.6rem]">
              <div className="text-center group-hover:translate-y-[-7rem] xlg:!-translate-y-1/2 -translate-y-1/2 transition-all duration-500 absolute top-1/2 left-0 w-full">
                {text.split('<br>').map((line, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
              <div className="xlg:hidden translate-y-[7rem] group-hover:-translate-y-1/2 xlg:!-translate-y-1/2 transition-all duration-500 absolute top-1/2 left-0 w-full">
                {text.split('<br>').map((line, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore CTA */}
      <div className="flex flex-col items-center xmd:hidden">
        <span className="mb-[1.81rem] text-[0.875rem] tablet:text-[1.75rem] text-greyscale-0/90 font-bold tracking-[0.00875rem] uppercase">
          EXPLORE YOUR JOURNEY WITH US
        </span>
        <Image
          src="/explore.svg"
          alt="hong hao travel"
          width={50}
          height={50}
          className="size-[3.0625rem]"
        />
      </div>
    </div>
  );
}
