"use client";
import Image from "next/image";
import Link from "next/link";

export default function SectionTour() {
  return (
    <div className="pl-[6.75rem] tablet:pl-[4rem] tablet:pb-[5rem] xmd:px-[1rem] flex relative pb-[20.87rem] xmd:pb-0 pt-[5rem] xmd:pt-0">
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
          ].map((text, i) => (
            <li key={i} className="flex items-center">
              <Image
                src="/imgs/home/tick.svg"
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
        <div className="flex">
          <Link href="/about-us">
            <button className="xmd:py-[0.75rem] xmd:px-[1.5rem] xmd:h-[3rem] tablet:h-[5rem] h-[3.5rem] group whitespace-nowrap text-sm font-bold ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tablet:text-15 flex uppercase button text-white justify-center items-center gap-2 border border-orange-hover bg-orange-hover rounded-lg border-solid w-fit xmd:w-[10.21875rem] py-[1rem] px-[2rem] mr-[1rem]">
              About Us
              <div className="w-max">
                <svg
                  className="w-3 h-[0.65625rem] tablet:h-[1.5rem] tablet:w-[3rem] group-hover:translate-x-[0.4rem] duration-300 ease-linear group-hover:stroke-white group-hover:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    className="group-hover:stroke-white"
                    d="M10.125 6H0"
                    stroke="#FFF"
                    strokeWidth="2"
                  />
                  <path
                    className="group-hover:fill-white"
                    d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
            </button>
          </Link>

          <Link href="/tours">
            <button className="px-8 py-4 xmd:py-[0.75rem] xmd:px-[1.5rem] xmd:h-[3rem] tablet:h-[5rem] group whitespace-nowrap text-sm font-bold ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tablet:text-15 flex h-14 hover:border-orange-hover hover:opacity-100 opacity-60 hover:bg-orange-hover uppercase button text-white justify-center items-center gap-2 border border-white rounded-lg border-solid w-fit xmd:w-[10.21875rem]">
              All tour
              <div className="w-max">
                <svg
                  className="w-3 h-[0.65625rem] tablet:h-[1.5rem] tablet:w-[3rem] group-hover:translate-x-[0.4rem] duration-300 ease-linear group-hover:stroke-white group-hover:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    className="group-hover:stroke-white"
                    d="M10.125 6H0"
                    stroke="#FFF"
                    strokeWidth="2"
                  />
                  <path
                    className="group-hover:fill-white"
                    d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE BLOCK */}
      <div className="absolute right-[-50rem] top-0 left-0">
        <Image
          src="/imgs/home/animate.png"
          alt="animate"
          width={1000}
          height={1000}
          className="w-screen h-[44.375rem] object-contain xmd:hidden xlg:right-0 z-0"
        />

        <Image
          src="/imgs/home/cloud.png"
          alt="cloud"
          width={500}
          height={500}
          className="absolute top-[1rem] left-1/2 animate-cloud delay-300 opacity-30 tablet:hidden"
        />

        <Image
          src="/imgs/home/cloud2.png"
          alt="cloud2"
          width={500}
          height={500}
          className="absolute top-[2rem] left-1/2 animate-cloud2 tablet:hidden"
        />
      </div>

      {/* ANIMATION SVG */}
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
            src="/imgs/home/motobike.png"
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
    </div>
  );
}
