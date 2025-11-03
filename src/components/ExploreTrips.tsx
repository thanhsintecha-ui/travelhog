"use client";

import Image from "next/image";
import Link from "next/link";

interface TourCard {
  id: number;
  title: string;
  image: string;
  href: string;
  price: string;
  duration: string;
  details: {
    accommodation: string;
    motorbike: string;
    tourGuide: string;
    transport: string;
  };
}

const tours: TourCard[] = [
  {
    id: 1,
    title: "Ha Giang Loop 4d3n tour (included 2 ways bus)",
    image: "/WhatsApp-Image-2024-07-11-at-18.jpeg",
    href: "/tours/ha-giang-loop-tour-4n5d",
    price: "$215",
    duration: "4 days 3 nights",
    details: {
      accommodation: "Private Room",
      motorbike: "Semi-Automatic",
      tourGuide: "Expert Local Guides speak Fluent English",
      transport: "VIP Cabin Bus",
    },
  },
  {
    id: 2,
    title: "Ha Giang Loop 3d2n tour (included 2 ways bus)",
    image: "/WhatsApp-Image-2024-07-11-at-18.jpeg",
    href: "/tours/ha-giang-loop-tour-3n4d",
    price: "$175",
    duration: "3 days 2 nights",
    details: {
      accommodation: "Private Room",
      motorbike: "Semi-Automatic",
      tourGuide: "Expert Local Guides speak Fluent English",
      transport: "VIP Cabin Bus",
    },
  },
  {
    id: 3,
    title: "Ha Giang Loop 2d1n tour (included 2 ways bus)",
    image: "/WhatsApp-Image-2024-07-11-at-18.jpeg",
    href: "/tours/ha-giang-loop-tour-2n3d",
    price: "$140",
    duration: "2 days 1 night",
    details: {
      accommodation: "Private Room",
      motorbike: "Semi-Automatic",
      tourGuide: "Expert Local Guides speak Fluent English",
      transport: "VIP Cabin Bus",
    },
  },
];

const sliderImages = [
  "/imgs/home/demo-2_.jpg",
  "/imgs/home/demo-3_.png",
];

export default function ExploreTrips() {
  return (
    <>
      {/* Explore Best Trips Section */}
      <section className="relative w-full bg-white lg:h-screen">
        <div className="lg:container subContainer xmd:!px-0 pt-[5.63rem] xmd:pt-[3rem] flex justify-between xmd:flex-col tablet:flex-col xmd:mb-[1.5rem] lg:space-x-[0.75rem]">
          {/* Left Section - Header & Map */}
          <div className="xmd:mb-[2rem] xmd:pl-[0.75rem] tablet:pl-[4rem]">
            <h3 className="font-extrabold text-1125 xmd:text-0875 xmd:text-greyscale-60 text-greyscale-80 opacity-40">
              EXPLORE
            </h3>
            <h2 className="mt-[0.75rem] font-londrina xmd:leading-[1.2] text-35 xmd:text-25 font-black text-greyscale-80 tablet:mb-[2rem]">
              BEST TRIPS <br className="md:hidden" /> FOR YOU
            </h2>
            <Image
              alt="map"
              src="/dugia-hagiang-3n-1.png"
              width={500}
              height={500}
              className="xmd:hidden tablet:hidden w-[29.3rem] h-[28.1rem] object-contain mt-[2.44rem]"
            />
          </div>

          {/* Right Section - Tour Cards */}
          <div className="hidden_scrollbar lg:w-[47.3125rem] tablet:h-[50rem] w-full lg:h-auto h-[23.33956rem] tablet:relative xmd:relative tablet:overflow-x-auto xmd:overflow-x-auto">
            <div
              id="list_tour_home"
              className="xmd:translate-none flex lg:flex-col lg:w-full w-fit h-fit lg:static absolute tablet:overflow-x-auto xmd:overflow-x-auto top-0 left-0 lg:pl-0 pl-[0.75rem] xmd:pr-[0.75rem] lg:space-y-[2rem] tablet:space-x-[2rem] lg:space-x-0 space-x-[0.75rem]"
              style={{ transform: "translateY(-66.6667%)" }}
            >
              {tours.map((tour) => (
                <Link
                  key={tour.id}
                  href={tour.href}
                  className="rounded-[0.75rem] group h-[23.33956rem] w-[16.8755rem] tablet:h-[43.33956rem] tablet:w-[36rem] lg:h-[34.375rem] lg:w-[47.3125rem] relative flex xmd:flex-col-reverse tablet:flex-col-reverse lg:items-end lg:justify-between justify-start items-start lg:p-[1.5rem] tablet:p-[2.5rem] p-[1rem] overflow-hidden item_tour_home"
                >
                  {/* Gradient Overlay */}
                  <div className="z-10 size-full absolute top-0 left-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]"></div>

                  {/* Background Image */}
                  <Image
                    alt="item card"
                    src="/WhatsApp-Image-2024-07-11-at-18.13.32_81a2e43d.jpg"
                    width={757}
                    height={550}
                    className="absolute top-0 left-0 size-full object-cover rounded-[0.75rem]"
                  />

                  {/* Content */}
                  <div className="z-10 flex flex-col space-y-[0.66rem] lg:w-[33.9375rem] w-full">
                    <span className="font-black text-white lg:text-15 text-1 tablet:text-3 group-hover:underline">
                      {tour.title}
                    </span>

                    {/* Details - Desktop Only */}
                    <div className="hidden lg:block space-y-[0.66rem]">
                      {/* Accommodation */}
                      <div className="flex space-x-[0.5rem] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none"><path opacity="0.4" d="M19.7372 8.07333L16.8857 5.67011V2.25861C16.8858 2.17482 16.8694 2.09184 16.8374 2.0144C16.8054 1.93697 16.7584 1.86659 16.6992 1.80731C16.64 1.74803 16.5697 1.701 16.4923 1.66891C16.4149 1.63682 16.332 1.62031 16.2482 1.62031H14.2274C14.1436 1.6202 14.0605 1.63663 13.983 1.66867C13.9056 1.70071 13.8351 1.74772 13.7759 1.80702C13.7166 1.86631 13.6695 1.93672 13.6375 2.01421C13.6055 2.0917 13.589 2.17475 13.5891 2.25861V2.89108L10.556 0.334533C10.4044 0.191796 10.2041 0.112305 9.99598 0.112305C9.78782 0.112305 9.58752 0.191796 9.43601 0.334533L0.263108 8.07333C0.141743 8.18632 0.057202 8.33323 0.0204918 8.49493C-0.0162184 8.65663 -0.00339782 8.82564 0.0572846 8.97996C0.118376 9.13332 0.224117 9.2648 0.360807 9.35736C0.497496 9.44992 0.658834 9.4993 0.823915 9.4991H2.15052V19.067C2.15052 19.5195 2.52133 19.8911 2.97548 19.8911H17.0248C17.2435 19.8907 17.453 19.8036 17.6077 19.649C17.7623 19.4944 17.8493 19.2848 17.8498 19.0661V9.49993H19.1764C19.3426 9.50017 19.5049 9.44984 19.6419 9.35563C19.7788 9.26142 19.8838 9.12778 19.943 8.97246C20.0031 8.81941 20.0156 8.65178 19.9789 8.4915C19.9422 8.33123 19.8579 8.18494 19.7372 8.07333ZM10.6226 16.8946C10.5395 17.0077 10.4309 17.0998 10.3056 17.1632C10.1803 17.2266 10.0418 17.2596 9.9014 17.2596C9.76097 17.2596 9.62252 17.2266 9.49723 17.1632C9.37194 17.0998 9.26333 17.0077 9.18019 16.8946C8.04274 15.3288 5.9495 12.2465 5.9495 10.6649C5.95127 9.61701 6.36883 8.61267 7.11049 7.87242C7.85215 7.13216 8.85728 6.71651 9.90515 6.71673C10.953 6.71651 11.9581 7.13216 12.6998 7.87242C13.4415 8.61267 13.859 9.61701 13.8608 10.6649C13.8608 12.2465 11.7676 15.3288 10.6226 16.8946Z" fill="white"></path><path d="M10 12.8906C11.3807 12.8906 12.5 11.7713 12.5 10.3906C12.5 9.00991 11.3807 7.89062 10 7.89062C8.61929 7.89062 7.5 9.00991 7.5 10.3906C7.5 11.7713 8.61929 12.8906 10 12.8906Z" fill="white"></path></svg>
                        <span className="text-1 font-extrabold text-white translate-y-[2px]">
                          Accomodation:
                        </span>
                        <span className="text-1 font-normal text-greyscale-5 translate-y-[2px]">
                          {tour.details.accommodation}
                        </span>
                      </div>

                      {/* Motorbike */}
                      <div className="flex space-x-[0.5rem] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none"><path d="M19.7812 9C17.4609 9 15.5625 10.8984 15.5625 13.2188C15.5625 15.5391 17.4609 17.4375 19.7812 17.4375C22.1016 17.4375 24 15.5391 24 13.2188C24 10.8984 22.1016 9 19.7812 9ZM19.7812 16.0312C18.2344 16.0312 16.9688 14.7656 16.9688 13.2188C16.9688 11.6719 18.2344 10.4062 19.7812 10.4062C21.3281 10.4062 22.5938 11.6719 22.5938 13.2188C22.5938 14.7656 21.3281 16.0312 19.7812 16.0312Z" fill="white"></path><path d="M4.21875 9C1.89839 9 0 10.8984 0 13.2188C0 15.5391 1.89839 17.4375 4.21875 17.4375C6.53911 17.4375 8.4375 15.5391 8.4375 13.2188C8.4375 10.8984 6.53911 9 4.21875 9ZM4.21875 16.0312C2.67192 16.0312 1.40625 14.7656 1.40625 13.2188C1.40625 11.6719 2.67192 10.4062 4.21875 10.4062C5.76558 10.4062 7.03125 11.6719 7.03125 13.2188C7.03125 14.7656 5.76558 16.0312 4.21875 16.0312Z" fill="white"></path><path opacity="0.4" d="M5.625 4.78125H12.75V9H5.625V4.78125ZM16.2656 1.96875H14.8594C14.4707 1.96875 14.1562 1.65427 14.1562 1.26562C14.1562 0.876984 14.4707 0.5625 14.8594 0.5625H16.2656C16.6543 0.5625 16.9688 0.876984 16.9688 1.26562C16.9688 1.65427 16.6543 1.96875 16.2656 1.96875Z" fill="white"></path><path opacity="0.4" d="M20.175 13.8067C20.0484 13.877 19.9218 13.9192 19.7813 13.9192C19.5563 13.9192 19.3313 13.8067 19.1907 13.6099L15.9 8.68801C15.675 8.36452 15.7735 7.92858 16.0828 7.70363C16.4062 7.49265 16.8421 7.57702 17.0672 7.90046L19.7813 11.9365L20.3718 12.8223C20.5828 13.1458 20.4984 13.5817 20.175 13.8067ZM12.0469 11.8098V14.6223H4.21875C3.44531 14.6223 2.8125 13.9895 2.8125 13.2161C2.8125 12.4426 3.44531 11.8098 4.21875 11.8098H12.0469Z" fill="white"></path><path d="M16.2656 0.5625C15.8718 0.5625 15.5625 0.871828 15.5625 1.26562V3.375H13.4531C13.2141 3.375 13.0031 3.48755 12.8625 3.68433L10.214 7.59375H8.11406L5.87813 4.24688C5.5125 3.69844 4.90781 3.375 4.24692 3.375H0.703125C0.309328 3.375 0 3.68433 0 4.07812C0 5.87817 1.36402 7.38277 3.12183 7.56558L5.37187 10.9406C5.7375 11.4891 6.34219 11.8125 7.00308 11.8125H8.70469L9.1875 12.6984L9.60938 13.5421C9.94683 14.2031 10.6219 14.625 11.3813 14.625H12.4125C13.3546 14.625 14.1562 13.9641 14.3391 13.0359L14.4516 12.5438C15.0141 9.67495 17.5593 7.59375 20.4844 7.59375C20.8782 7.59375 21.1875 7.28442 21.1875 6.89062V5.48438C21.1875 2.77031 18.9797 0.5625 16.2656 0.5625Z" fill="white"></path></svg>
                        <span className="text-1 font-extrabold text-white translate-y-[2px]">
                          Motorbike:
                        </span>
                        <span className="text-1 font-normal text-greyscale-5 translate-y-[2px]">
                          {tour.details.motorbike}
                        </span>
                      </div>

                      {/* Tour Guide */}
                      <div className="flex space-x-[0.5rem] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.4" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"></path><path d="M12.0002 14.5C6.99015 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5901C20.8701 22.5 21.0901 22.28 21.0901 22C21.0901 17.86 17.0102 14.5 12.0002 14.5Z" fill="white"></path></svg>
                        <span className="text-1 font-extrabold text-white translate-y-[2px]">
                          Tour guide:
                        </span>
                        <span className="text-1 font-normal text-greyscale-5 translate-y-[2px]">
                          {tour.details.tourGuide}
                        </span>
                      </div>

                      {/* Transport */}
                      <div className="flex space-x-[0.5rem] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.4" d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z" fill="white"></path><path d="M20 8H4V13H20V8Z" fill="white"></path><path d="M8 18.7501C7.92 18.7501 7.83999 18.7401 7.75999 18.7301C7.67999 18.7101 7.6 18.6901 7.52 18.6501C7.45 18.6201 7.37 18.5801 7.31 18.5401C7.24 18.4901 7.17 18.4401 7.12 18.3801C6.88 18.1501 6.75 17.8301 6.75 17.5001C6.75 17.1701 6.88 16.8501 7.12 16.6201C7.17 16.5601 7.24 16.5101 7.31 16.4601C7.37 16.4201 7.45 16.3801 7.52 16.3501C7.6 16.3101 7.67999 16.2901 7.75999 16.2701C8.15999 16.1901 8.59 16.3301 8.88 16.6201C9.12 16.8501 9.25 17.1701 9.25 17.5001C9.25 17.8301 9.12 18.1501 8.88 18.3801C8.65 18.6201 8.33 18.7501 8 18.7501Z" fill="white"></path><path d="M16 18.7501C15.92 18.7501 15.84 18.7401 15.76 18.7301C15.68 18.7101 15.6 18.6901 15.52 18.6501C15.45 18.6201 15.37 18.5801 15.31 18.5401C15.24 18.4901 15.17 18.4401 15.12 18.3801C14.88 18.1501 14.75 17.8301 14.75 17.5001C14.75 17.1701 14.88 16.8501 15.12 16.6201C15.17 16.5601 15.24 16.5101 15.31 16.4601C15.37 16.4201 15.45 16.3801 15.52 16.3501C15.6 16.3101 15.68 16.2901 15.76 16.2701C15.92 16.2401 16.08 16.2401 16.25 16.2701C16.32 16.2901 16.4 16.3101 16.48 16.3501C16.55 16.3801 16.63 16.4201 16.69 16.4601C16.76 16.5101 16.83 16.5601 16.88 16.6201C17.12 16.8501 17.25 17.1701 17.25 17.5001C17.25 17.8301 17.12 18.1501 16.88 18.3801C16.83 18.4401 16.76 18.4901 16.69 18.5401C16.63 18.5801 16.55 18.6201 16.48 18.6501C16.4 18.6901 16.32 18.7101 16.25 18.7301C16.16 18.7401 16.08 18.7501 16 18.7501Z" fill="white"></path><path d="M14.5 5.75H9.5C9.09 5.75 8.75 5.41 8.75 5C8.75 4.59 9.09 4.25 9.5 4.25H14.5C14.91 4.25 15.25 4.59 15.25 5C15.25 5.41 14.91 5.75 14.5 5.75Z" fill="white"></path></svg>
                        <span className="text-1 font-extrabold text-white translate-y-[2px]">
                          Transport:
                        </span>
                        <span className="text-1 font-normal text-greyscale-5 translate-y-[2px]">
                          {tour.details.transport}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Button Section */}
                  <div className="flex-col flex items-end justify-center z-10 mt-[1.13rem] mb-[0.5rem] lg:my-0">
                    <div className="lg:group-hover:translate-y-[-1rem] transition-all duration-500 lg:translate-y-[50%] flex lg:flex-col lg:items-end items-center">
                      <span className="block text-1 tablet:text-[2.25rem] font-extrabold text-white opacity-60 lg:ml-0 ml-[0.5rem] xmd:mr-[0.5rem] tablet:mr-[2rem] xmd:ml-0">
                        From to
                      </span>
                      <span className="font-extrabold text-white lg:text-3 text-1125 tablet:text-25">
                        {tour.price}
                      </span>
                    </div>
                    <button className="hidden group-hover:translate-x-0 transition-all duration-500 translate-x-[120%] bg-[#DA4B19] rounded-[0.5rem] h-[3.5rem] py-[1rem] px-[2rem] lg:flex justify-center items-center space-x-[0.5rem] border-[1px] border-solid border-[#DA4B19] text-0875 font-extrabold text-white">
                      DETAILS
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-[0.5rem]"><path d="M10.125 6H0" stroke="url(#paint0_linear_9336_3094)" strokeWidth="2"></path><g filter="url(#filter0_i_9336_3094)"><path d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill="white"></path></g><defs><filter id="filter0_i_9336_3094" x="6" y="0.75" width="26" height="14.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="20" dy="4"></feOffset><feGaussianBlur stdDeviation="50"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_9336_3094"></feBlend></filter><linearGradient id="paint0_linear_9336_3094" x1="4.53912" y1="6" x2="4.53912" y2="6.892" gradientUnits="userSpaceOnUse"><stop offset="0.31" stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="bg-[rgba(255,255,255,0.20)] flex justify-center items-center space-x-[0.5rem] z-10 lg:absolute top-[1.5rem] right-[1.5rem] rounded-[1.5rem] border-[1px] border-solid border-[rgba(255,255,255,0.52)] lg:py-[0.375rem] lg:px-[0.75rem] py-[0.25rem] px-[0.5rem] backdrop-blur-[2px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#E64827"></path><path d="M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z" fill="#FEEEE8"></path></svg>
                    <span className="opacity-80 text-1 tablet:text-2 font-normal text-white h-[1.125rem] w-[7.125rem] flex items-center text-center">
                      {tour.duration}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* All Tour Button - Right Side */}
        <Link
          href="/tours"
          className="top-0 xmd:top-[-1rem] translate-y-1/2 absolute space-y-[0.5rem] right-0 lg:-translate-y-1/2 lg:top-1/2 bg-orange-normal lg:w-[3.4rem] lg:h-[9.4rem] w-[2.125rem] h-[7.9rem] rotate-180 flex justify-center items-center text-white rounded-tr-[0.5rem] rounded-br-[0.5rem] text-0.875 font-extrabold"
          style={{ writingMode: "vertical-rl" }}
        >
          All tour
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-[0.5rem] rotate-180"><path d="M10.125 6H0" stroke="white" strokeWidth="2"></path><g filter="url(#filter0_i_9336_22678)"><path d="M12 6L6 0.75L8.41379 6L6 11.25L12 6Z" fill="white"></path></g><defs><filter id="filter0_i_9336_22678" x="6" y="0.75" width="26" height="14.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="20" dy="4"></feOffset><feGaussianBlur stdDeviation="50"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_9336_22678"></feBlend></filter></defs></svg>
        </Link>
      </section>

      {/* The Gladdest Moment Section */}
      <section className="w-full h-fit mt-[2rem]">
        <div className="w-full h-fit space-y-[0.5rem] lg:hidden">
          {/* Text Slider */}
          <div id="slide_infinity" className="relative overflow-hidden w-full h-[5.5rem]">
            <div className="absolute top-0 left-0 flex items-center h-[5.5rem] w-full">
              <div id="wrapper_infinity" className="flex w-fit">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="item_slide w-[36.3025rem] flex-shrink-0 h-[3.5rem] flex items-center">
                    <span className="font-londrina text-[3.5rem] font-black leading-[1] text-[#23704D] whitespace-nowrap block w-fit">
                      THE GLADDEST MOMENT
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none" className="size-[2.375rem] mx-[2.12rem]"><path d="M38.0225 8.88667C38.0225 9.04628 38.0242 9.20588 38.0225 9.36549C38.0208 9.54939 37.9291 9.65175 37.7441 9.65522C37.5626 9.65869 37.4087 9.72461 37.2825 9.853C37.2341 9.90331 37.2082 9.96056 37.1944 10.0352C37.0837 10.6302 36.9938 11.2288 36.8417 11.8134C36.7552 12.1448 36.5547 12.438 36.2417 12.6271C35.9928 12.778 35.7334 12.6791 35.5069 12.6167C35.1266 12.5143 34.8292 12.6115 34.5526 12.8457C34.2604 13.0955 34.0599 13.4199 33.8628 13.7443C33.4565 14.4157 32.9205 14.9761 32.3275 15.4671C31.8469 15.8644 31.2936 16.1732 30.775 16.5236C30.526 16.6919 30.5346 16.8879 30.7871 17.051C31.1294 17.2714 31.5011 17.4379 31.859 17.6305C33.0052 18.2464 34.1653 18.8362 35.2891 19.4903C35.6989 19.7279 35.991 20.1426 36.278 20.5381C36.7967 21.2512 37.0249 22.1013 37.4226 22.8698C37.6594 23.3261 37.9689 23.7303 38.2507 24.1536C38.4841 24.5041 38.721 24.8511 38.9526 25.2032C39.0443 25.342 38.9492 25.5294 38.7815 25.5589C38.1816 25.6665 37.5816 25.7723 36.9834 25.8833C36.6532 25.944 36.3386 25.8313 36.0239 25.7792C35.7974 25.7428 35.564 25.7029 35.3375 25.6595C34.8742 25.5728 34.4056 25.5034 33.944 25.4027C33.9302 25.3993 33.9164 25.3975 33.9025 25.3993C33.453 25.434 33.0104 25.2917 32.5644 25.3177C32.0595 25.3472 31.6031 25.1842 31.1415 25.0263C30.1923 24.7053 29.2622 24.3289 28.2992 24.0547C27.9188 23.9454 27.5385 23.8205 27.1373 23.8153C26.7777 23.8101 26.6308 23.9663 26.5616 24.3167C26.4423 24.9378 26.3023 25.5519 26.0412 26.1349C25.8614 26.5356 25.7283 26.9572 25.5658 27.3666C25.4413 27.6772 25.2598 27.96 25.0367 28.2011C24.6425 28.6262 24.2276 29.0304 23.9078 29.5179C23.6605 29.8961 23.4738 30.3055 23.3441 30.7323C23.1505 31.3759 23.0174 32.0387 22.8272 32.6823C22.6733 33.2028 22.2221 33.5376 21.6256 33.3242C21.2971 33.2062 20.9686 33.0813 20.6298 32.9998C20.2079 32.8974 19.6529 32.9998 19.4818 33.3797C19.4092 33.5411 19.3625 33.7163 19.3538 33.8967C19.3487 33.9869 19.3435 34.0772 19.3538 34.1674C19.4351 34.9325 19.1204 35.5622 18.6882 36.1573C18.3805 36.5806 18.0796 37.0091 17.7823 37.4394C17.6232 37.6701 17.4192 37.8609 17.21 38.0362C16.9766 38.2322 16.7639 38.4473 16.5461 38.6572C16.451 38.7492 16.3525 38.8012 16.2176 38.8012C16.0326 38.7995 15.8511 38.8169 15.6661 38.8602C15.4068 38.921 15.1526 38.7995 14.8967 38.7631C14.57 38.7197 14.2657 38.5774 13.9597 38.4577C13.7591 38.3779 13.6156 38.2096 13.4479 38.0795C13.0468 37.7655 12.8169 37.3162 12.5489 36.9016C12.2567 36.447 11.9092 36.0584 11.4044 35.8693C10.8511 35.6628 10.2754 35.6039 9.73597 35.9283C9.52332 36.0567 9.3608 36.2562 9.22422 36.4644C9.13258 36.6049 9.01329 36.702 8.86806 36.7697C8.59317 36.9015 8.25603 36.683 8.21973 36.3342C8.1765 35.9265 8.20589 35.5223 8.33729 35.1268C8.56723 34.4363 8.51537 33.8065 7.97422 33.2514C7.55756 32.8228 7.08903 32.4984 6.53578 32.2764C5.96697 32.0473 5.4241 31.7559 4.91407 31.4176C4.59768 31.2077 4.38157 30.9093 4.29512 30.5033C4.21905 30.1494 4.23461 29.8024 4.23288 29.452C4.23288 28.9992 4.12742 28.5758 3.92341 28.1803C3.67099 27.6911 3.48946 27.1793 3.46007 26.6293C3.44796 26.4194 3.41511 26.1713 3.63468 26.0013C3.74361 25.9163 3.84734 25.8538 3.98911 25.8642C4.05826 25.8694 4.12742 25.8712 4.19658 25.8642C4.3418 25.8503 4.54063 25.9336 4.60805 25.7601C4.66684 25.6092 4.50432 25.4843 4.41442 25.3767C4.19831 25.1182 3.9943 24.8476 3.75398 24.6082C3.52403 24.3792 3.3304 24.1172 3.13849 23.857C2.97079 23.6297 2.73393 23.5204 2.45903 23.4736C2.0026 23.3955 1.51851 23.3764 1.19175 22.9722C1.01367 22.7518 0.960077 22.4916 1.00157 22.214C1.01713 22.1117 1.10185 22.0492 1.18483 21.9989C1.80897 21.6224 2.44001 21.2564 3.06069 20.873C3.45661 20.6283 3.86463 20.4011 4.18447 20.0437C4.60633 19.5753 5.14228 19.2387 5.64021 18.8588C6.10701 18.5014 6.55652 18.1266 6.95244 17.6912C7.05963 17.5732 7.17893 17.5108 7.33799 17.568C7.48667 17.6201 7.58349 17.6981 7.57658 17.882C7.56966 18.0902 7.97249 18.4545 8.18169 18.4493C8.34939 18.4441 8.42374 18.2984 8.51883 18.1978C8.70036 18.0069 8.91301 17.9167 9.16889 17.9688C9.53023 18.0434 9.8933 18.1197 10.2477 18.2273C10.6834 18.3591 11.1174 18.3314 11.5409 18.1683C12.0838 17.9584 12.459 17.5489 12.7979 17.0944C13.0658 16.7353 13.3304 16.3727 13.6104 16.0257C13.7747 15.821 13.9735 15.6562 14.2156 15.533C14.6063 15.3335 14.9815 15.0975 15.3635 14.8807C15.4621 14.8252 15.5174 14.7488 15.5209 14.6326C15.5347 14.1954 15.5105 13.7669 15.3808 13.3436C15.2875 13.0365 15.246 12.7138 15.1785 12.3963C15.1146 12.0945 15.0506 11.7926 14.9832 11.4907C14.914 11.1837 14.831 10.8783 14.7705 10.5695C14.7342 10.3873 14.6806 10.2104 14.6581 10.023C14.646 9.91545 14.6495 9.81136 14.71 9.75237C14.8898 9.57888 15.0644 9.39499 15.348 9.3707C15.7059 9.34121 16.0499 9.25273 16.3058 8.96647C16.3335 8.93524 16.3628 8.90228 16.3991 8.88493C16.7086 8.73226 16.7432 8.43386 16.7484 8.14761C16.7518 7.91513 16.8175 7.69827 16.8573 7.47621C16.8902 7.29057 17.2221 7.06157 17.4209 7.04249C17.739 7.01126 18.0191 7.10147 18.2767 7.2819C18.3113 7.30619 18.3424 7.33395 18.377 7.35476C18.8421 7.64102 19.1066 7.60459 19.525 7.23159C20.0177 6.79093 20.5087 6.352 21.1433 6.10565C21.5616 5.94257 21.9316 5.68234 22.3016 5.42905C22.6647 5.18096 23.0813 5.09421 23.4859 4.97277C23.8853 4.85306 24.2916 4.75244 24.6979 4.65702C24.9053 4.60845 25.1076 4.54079 25.3116 4.48874C25.4603 4.45057 25.5519 4.36903 25.6315 4.25106C25.7732 4.04114 25.9738 3.97868 26.1795 4.11921C26.4112 4.27708 26.6896 4.31005 26.9316 4.44016C27.044 4.50088 27.1892 4.48527 27.3137 4.42975C27.6871 4.2632 27.9015 3.98562 27.9689 3.57272C28.0537 3.05052 28.2196 2.55435 28.5948 2.16053C28.7314 2.01653 28.8887 1.88815 29.0478 1.77018C29.4178 1.49607 29.7186 1.11786 30.1646 0.963458C30.7456 0.760477 31.157 0.899267 31.2988 1.54464C31.4769 2.35657 31.9126 2.95857 32.611 3.38362C32.7044 3.44087 32.7978 3.49986 32.8911 3.55711C33.1937 3.74794 33.5032 3.8156 33.8628 3.71498C34.2172 3.61609 34.5924 3.81213 34.7756 4.14176C35.0713 4.6709 35.3686 5.20004 35.6245 5.75C35.813 6.15423 36.1363 6.41272 36.5097 6.63826C36.878 6.86032 37.2687 7.05116 37.5713 7.38079C37.8617 7.69827 37.9585 8.08342 38.0156 8.48764C38.0363 8.62123 38.0208 8.75482 38.0225 8.88667C38.0213 8.88667 38.0213 8.88667 38.0225 8.88667Z" fill="#E64828"></path></svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Slider 1 */}
          <div id="slide_infinity" className="relative overflow-hidden w-full h-[14.18094rem] md:h-[20.18094rem]">
            <div className="left-0 absolute top-0 flex items-center w-full h-[14.18094rem] md:h-[20.18094rem]">
              <div id="wrapper_infinity" className="flex space-x-[0.5rem] w-fit">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="item_slide w-[23.83063rem] flex-shrink-0 h-[14.18094rem] relative group md:w-[31.83063rem] md:h-[20.18094rem]">
                    <Image
                      alt="demo"
                      src={sliderImages[i % sliderImages.length]}
                      width={400}
                      height={300}
                      className="object-cover size-full rounded-[0.67131rem]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Slider 2 */}
          <div id="slide_infinity" className="relative overflow-hidden w-full h-[14.18094rem] md:h-[20.18094rem]">
            <div className="-left-[11.9rem] absolute top-0 flex items-center w-full h-[14.18094rem] md:h-[20.18094rem]">
              <div id="wrapper_infinity" className="flex space-x-[0.5rem] w-fit">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="item_slide w-[23.83063rem] flex-shrink-0 h-[14.18094rem] relative group md:w-[31.83063rem] md:h-[20.18094rem]">
                    <Image
                      alt="demo"
                      src={sliderImages[i % sliderImages.length]}
                      width={400}
                      height={300}
                      className="object-cover size-full rounded-[0.67131rem]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Button */}
        <Link href="/activity">
          <button className="px-8 py-4 xmd:py-[0.75rem] xmd:px-[1.5rem] xmd:h-[3rem] tablet:h-[5rem] h-[3.5rem] group whitespace-nowrap text-sm font-bold ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 tablet:text-15 flex uppercase button text-white justify-center items-center gap-2 border border-orange-hover bg-orange-hover rounded-lg border-solid mt-[0.51rem] mb-[2.03rem] mx-auto md:mt-[1rem]">
            <span>DISCOVERY</span>
            <div className="w-max">
              <svg className="w-3 h-[0.65625rem] tablet:h-[1.5rem] tablet:w-[3rem] group-hover:translate-x-[0.4rem] duration-300 ease-linear group-hover:stroke-white group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path className="group-hover:stroke-white " d="M10.125 6H0" stroke="#FFF" strokeWidth="2"></path><g filter="url(#filter0_i_10201_23415)"><path className="group-hover:fill-white" d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill="#FFF"></path></g><defs><filter id="filter0_i_10201_23415" x="6" y="0.75" width="26" height="14.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="20" dy="4"></feOffset><feGaussianBlur stdDeviation="50"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_10201_23415"></feBlend></filter><linearGradient id="paint0_linear_10201_23415" x1="4.53912" y1="6" x2="4.53912" y2="6.892" gradientUnits="userSpaceOnUse"><stop offset="0.31" stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>
            </div>
          </button>
        </Link>
      </section>
    </>
  );
}

