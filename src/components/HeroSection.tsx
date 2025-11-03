"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImages from "./HeroImages";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function HeroSection() {
  const slides = [
    "/0622.mov",
    "/0623.mov",
    "/0624.mov",
  ];
  return (
   <>
    <section className="pl-[6.75rem] tablet:pl-[4rem] tablet:pb-[5rem] xmd:px-[1rem] flex relative pb-[20.87rem] xmd:pb-0 pt-[5rem] xmd:pt-0">
      {/* LEFT CONTENT */}
      <div className="w-[38.8125rem] xmd:w-full relative z-10">
        <div className="xmd:flex hidden text-0875 text-greyscale-0/40 font-bold tracking-[0.00875rem] mb-[0.8rem]">
          START WITH
        </div>

        <h2 className="text-greyscale-0 mb-[3.5rem] xmd:mb-[2rem] xmd:text-25 xmd:w-3/4">
          HONG HAO MOTORBIKE TOUR...
        </h2>

        <p className="text-greyscale-10 text-1 tablet:text-175 tablet:mb-[2rem] tablet:leading-normal tablet:tracking-0 xmd:text-0875 tracking-[0.005rem] mb-[1rem] xmd:mb-[1.5rem] xmd:tracking-[0.00219rem] xmd:leading-normal">
          Experience the raw beauty of Hà Giang with our immersive travel
          adventures. From rugged mountain landscapes to vibrant ethnic
          cultures, Hà Giang offers a truly unique and authentic experience.
          Explore remote villages…
        </p>

        <ul className="mb-[2rem] space-y-[0.75rem]">
          {[
            "Tours accommodate a maximum of 10 guests...",
            "Flexible cancellation policy...",
            "Book now, pay later...",
            "Fluent English-speaking guides...",
            "Creating job opportunities for the Vietnamese community...",
          ].map((text, index) => (
            <li key={index} className="flex items-center">
              <Image
                src="/tick.svg"
                alt="tick"
                width={20}
                height={20}
                className="size-[1rem] object-contain"
              />
              <span className="text-1 tablet:text-15 tablet:tracking-0 xmd:text-0875 tablet:leading-normal text-greyscale-5 font-bold ml-[0.5rem]">
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">
          <Link href="/about-us">
            <button className="xmd:py-[0.75rem] xmd:px-[1.5rem] xmd:h-[3rem] tablet:h-[5rem] h-[3.5rem] group whitespace-nowrap text-sm font-bold uppercase text-white border border-orange-hover bg-orange-hover rounded-lg flex items-center justify-center gap-2 px-[2rem] py-[1rem] transition duration-300 ease-linear hover:bg-orange-hover/90">
              About Us
              <svg
                className="w-3 h-[0.65625rem] tablet:h-[1.5rem] tablet:w-[3rem] group-hover:translate-x-[0.4rem] duration-300 ease-linear"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M10.125 6H0" stroke="#FFF" strokeWidth="2" />
                <path d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill="#FFF" />
              </svg>
            </button>
          </Link>

          <Link href="/tours">
            <button className="px-8 py-4 xmd:py-[0.75rem] xmd:px-[1.5rem] xmd:h-[3rem] tablet:h-[5rem] group whitespace-nowrap text-sm font-bold uppercase text-white border border-white rounded-lg flex items-center justify-center gap-2 opacity-60 hover:opacity-100 hover:bg-orange-hover transition duration-300 ease-linear">
              All tour
              <svg
                className="w-3 h-[0.65625rem] tablet:h-[1.5rem] tablet:w-[3rem] group-hover:translate-x-[0.4rem] duration-300 ease-linear"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M10.125 6H0" stroke="#FFF" strokeWidth="2" />
                <path d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill="#FFF" />
              </svg>
            </button>
          </Link>
        </div>
      </div>



      {/* BIKE ANIMATION */}
      <div
        className="max-h-full absolute top-[-4rem] left-1/2 z-10 xlg:hidden"
        id="animate"
        style={{ opacity: 0 }}
      >
        <div
          id="moto"
          className="opacity-0"
          style={{
            transformOrigin: "-50% -50%",
            transform: "translate(15.3479px, 712.787px)",
            opacity: 1,
          }}
        >
          <Image
            src="/motobike.png"
            alt="motobike"
            width={50}
            height={50}
            className="size-[5rem] -translate-x-[50%] rotate-[30deg]"
          />
        </div>

        <svg
          width="68"
          height="714"
          viewBox="0 0 68 714"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1582 1.89551C9.56033 24.1217 1.63281 54.4379 1.63281 76.8445C1.63281 94.6201 5.52653 113.236 2.49001 130.848C-1.15298 151.977 12.7991 186.622 24.8723 203.614C41.5076 227.027 56.6881 254.78 62.9698 283.047C67.5053 303.457 66.8678 323.635 63.7318 344.194C62.2826 353.694 63.8138 363.39 62.3031 372.957C60.6279 383.567 58.2166 394.057 56.1123 404.578C52.6306 421.987 46.8569 437.015 36.7778 451.915C29.2215 463.085 23.0426 472.206 22.1102 485.726C20.9194 502.992 12.5121 520.164 9.34756 537.253C6.60436 552.066 10.2048 566.045 10.2048 580.684C10.2048 603.727 8.36815 626.026 14.9669 648.022C21.4484 669.626 13.2051 691.359 15.3479 712.787"
            stroke="#E64827"
            strokeWidth="2"
            strokeLinecap="round"
            id="line_path"
          />
        </svg>
      </div>
      <HeroImages />
    
    </section>
      <section className="min-w-screen min-h-screen xlg:min-w-full xlg:min-h-0 flex flex-col items-center mt-0 xmd:mt-[2.63rem] tablet:mt-[10rem] relative">
      {/* TEXT */}
      <div
        id="box-text"
        className="w-fit flex flex-col items-center absolute top-0 left-1/2 -translate-x-1/2 z-10 xlg:relative xlg:top-0 xlg:left-0 xlg:translate-x-0"
      >
        <div
          id="welcome_subText"
          className="text-1125 xmd:text-0875 tablet:text-[2rem] font-bold leading-[1] text-greyscale-0/40 mb-[0.5rem]"
        >
          Welcome to...
        </div>
        <h2
          id="welcome_mainText"
          className="text-green-light font-black xmd:text-[1.45rem] tablet:text-[5rem]"
        >
          HA GIANG NATURALLY...
        </h2>
        <Image
          alt="hong hao travel"
          src="/beautiful.png"
          width={500}
          height={500}
          className="w-[23.875rem] h-[18.75rem] object-contain mt-[-1rem] xmd:w-[9rem] xmd:h-[7rem] tablet:w-[30rem] tablet:h-[20rem]"
        />
      </div>

      {/* VIDEO SWIPER */}
      <div
        id="box-img"
        className="h-[29.8125rem] w-[53rem] !translate-y-[-0rem] xxl:translate-y-[110rem] xlg:translate-y-[0] xlg:w-full xmd:h-[13.183rem] xlg:h-[60rem] object-cover overflow-hidden"
      >
        <div className="w-full h-full relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            loop
            autoplay={{ delay: 4000 }}
            speed={1000}
            navigation={{
              nextEl: "#btn-right",
              prevEl: "#btn-left",
            }}
            className="w-full h-full"
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative !z-[1000]">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="item-video !z-[1000] w-full min-w-full min-h-full rounded-[1rem] overflow-hidden"
                  />
                  <div className="absolute bottom-[15.75rem] right-[18.25rem] xlg:bottom-[6.75rem] xlg:right-[6.25rem] xxl:bottom-[12.75rem] xxl:right-[8.25rem] z-[99] cursor-pointer xmd:right-[1.27rem] xmd:bottom-[1.23rem]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[2.5rem] tablet:size-[5rem]"
                    >
                      <g clipPath="url(#clip0_7718_9578)">
                        <path
                          d="M15.7701 24.0242H10.8438C9.76681 24.0242 8.89062 23.148 8.89062 22.071V17.9278C8.89062 16.8508 9.76681 15.9746 10.8438 15.9746H15.7701C16.1297 15.9746 16.4212 16.2661 16.4212 16.6257V23.3731C16.4212 23.7327 16.1297 24.0242 15.7701 24.0242Z"
                          fill="white"
                        />
                        <path
                          d="M21.738 11.4861C21.6274 11.4329 21.5041 11.4122 21.3822 11.4261C21.2604 11.44 21.1449 11.4881 21.0492 11.5647L15.543 15.9741V24.0241L21.0492 28.4335C21.1449 28.5102 21.2604 28.5582 21.3822 28.5722C21.5041 28.5861 21.6274 28.5653 21.738 28.5122C21.8486 28.4591 21.9419 28.3758 22.0072 28.272C22.0725 28.1681 22.1072 28.048 22.1072 27.9253V12.0729C22.1072 11.9502 22.0725 11.8301 22.0072 11.7263C21.9419 11.6224 21.8486 11.5392 21.738 11.4861Z"
                          fill="white"
                        />
                        <path
                          d="M28.7756 27.1088C28.6677 27.1088 28.5582 27.082 28.4575 27.0254C28.1439 26.8494 28.0325 26.4525 28.2085 26.139C29.2579 24.2696 29.8126 22.1448 29.8126 19.9946C29.8126 17.8445 29.258 15.72 28.2088 13.8507C28.0328 13.5371 28.1443 13.1403 28.4578 12.9643C28.7713 12.7883 29.1682 12.8999 29.3442 13.2134C30.5024 15.2769 31.1147 17.6218 31.1147 19.9946C31.1147 22.3677 30.5024 24.7128 29.3439 26.7765C29.2244 26.9891 29.0033 27.1088 28.7756 27.1088Z"
                          fill="white"
                        />
                        <path
                          d="M26.4206 25.2557C26.3223 25.2557 26.2226 25.2334 26.1287 25.1862C25.8074 25.0247 25.6779 24.6333 25.8394 24.3121C26.5173 22.9636 26.861 21.5113 26.861 19.9957C26.861 18.4803 26.5173 17.0283 25.8397 15.6799C25.6782 15.3586 25.8077 14.9673 26.1291 14.8058C26.4502 14.6443 26.8417 14.7739 27.0031 15.0952C27.7728 16.6267 28.1631 18.2754 28.1631 19.9958C28.1631 21.7163 27.7727 23.3653 27.0028 24.8969C26.8884 25.1244 26.6589 25.2557 26.4206 25.2557ZM24.0377 23.3775C23.9548 23.3775 23.8727 23.3616 23.7958 23.3306C23.4621 23.1969 23.2999 22.8179 23.4336 22.4841C23.7507 21.6926 23.9115 20.8554 23.9115 19.9957C23.9115 19.1362 23.7507 18.2992 23.4338 17.5078C23.3002 17.1741 23.4624 16.7951 23.7962 16.6614C24.13 16.5277 24.5089 16.69 24.6426 17.0238C25.0215 17.9698 25.2136 18.9697 25.2136 19.9958C25.2136 21.0221 25.0214 22.0222 24.6423 22.9684C24.5404 23.2228 24.296 23.3775 24.0377 23.3775Z"
                          fill="white"
                        />
                      </g>
                      <line
                        x1="6.70711"
                        y1="6.29289"
                        x2="34.7071"
                        y2="34.2929"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="38"
                        height="38"
                        rx="19"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <defs>
                        <clipPath id="clip0_7718_9578">
                          <rect
                            width="22.2222"
                            height="22.2222"
                            fill="white"
                            transform="translate(8.89062 8.88867)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  id="overlay"
                  className="absolute top-0 left-0 z-10 w-full h-0 opacity-50 bg-gradient-banner max-lg:h-full lg:rounded-[1rem] pointer-events-none"
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Nút điều hướng */}
        <button
          id="btn-left"
          className="p-[1.5rem] absolute left-[4.85rem] xmd:left-[1rem] top-1/2 -translate-y-1/2 brightness-0 invert z-50"
        >
          <Image
            alt="btn-slide"
            src="/btn-left.svg"
            width={36}
            height={18}
            className="object-contain tablet:size-[5rem] size-[2.5rem]"
          />
        </button>
        <button
          id="btn-right"
          className="p-[1.5rem] absolute right-[4.85rem] xmd:right-[1rem] top-1/2 -translate-y-1/2 z-50 brightness-0 invert"
        >
          <Image
            alt="btn-slide"
            src="/btn-left.svg"
            width={36}
            height={18}
            className="object-contain tablet:size-[5rem] size-[2.5rem] rotate-180"
          />
        </button>
      </div>
    </section>
   </>
  );
}
