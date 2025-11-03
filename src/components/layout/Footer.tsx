import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="z-[100] overflow-hidden pt-[3.69rem] xmd:pt-[5.28rem] h-auto bg-greyscale-0 relative before:size-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.93)_0%,#FFF_37.97%,#FFF_98.21%)] before:z-10 before:opacity-50">
      <Image
        alt="hong hao travel"
        loading="lazy"
        width={2000}
        height={1000}
        className="w-full h-full object-contain absolute top-[-5rem] left-0 xmd:hidden"
        src="/Group.png"
      />
      <Image
        alt="hong hao travel"
        loading="lazy"
        width={931}
        height={334.308}
        className="z-[9] w-full h-full object-cover absolute top-0 left-0 md:hidden"
        src="/groupmb.png"
      />
      <div className="container">
        <div className="w-[59.6875rem] xmd:w-full h-full relative z-40">
          <Link href="/">
            <Image
              alt="Hồng Hào travel"
              fetchPriority="high"
              width={200}
              height={200}
              className="w-[13.875rem] h-[4.875rem] object-contain xmd:w-[7.8845rem] xmd:h-[2.772rem] ml-[-0.75rem] mb-[2.81rem] xmd:mb-[2.63rem]"
              src="/logoBlack.png"
            />
          </Link>
          <div className="flex mb-[2.44rem] xmd:mb-[1.62rem] xmd:flex-col-reverse">
            <div className="w-max xmd:w-full first:mr-[7.5rem] xmd:first:mr-0 xmd:last:mb-[2rem]">
              <div className="text-1 text-greyscale-80 font-bold tracking-0.0125 mb-[1rem] uppercase">
                CONTACT US
              </div>
              <ul>
                <li className="relative flex items-center mb-[1rem]">
                  <a className="flex w-full h-full absolute top-0 left-0" href="tel:+84914556338"></a>
                  <Image
                    alt="hong hao travel"
                    loading="lazy"
                    width={20}
                    height={20}
                    className="size-[1rem] object-contain mr-[0.5rem]"
                    src="/phone.svg"
                  />
                  <span className="text-1 tracking-0.0125 text-greyscale-40 xmd:text-greyscale-80 xmd:font-medium">
                    +84914556338
                  </span>
                </li>
                <li className="relative flex items-center mb-[1rem]">
                  <a className="flex w-full h-full absolute top-0 left-0" href="mailto:honghaotravel@gmail.com"></a>
                  <Image
                    alt="hong hao travel"
                    loading="lazy"
                    width={20}
                    height={20}
                    className="size-[1rem] object-contain mr-[0.5rem]"
                    src="/mail.svg"
                  />
                  <span className="text-1 tracking-0.0125 text-greyscale-40 xmd:text-greyscale-80 xmd:font-medium">
                    honghaotravel@gmail.com
                  </span>
                </li>
                <li className="relative flex items-center mb-[1rem]">
                  <Image
                    alt="hong hao travel"
                    loading="lazy"
                    width={20}
                    height={20}
                    className="size-[1rem] object-contain mr-[0.5rem]"
                    src="/local.svg"
                  />
                  <span className="text-1 tracking-0.0125 text-greyscale-40 xmd:text-greyscale-80 xmd:font-medium">
                    No. 10 Pham Hong Thai, Minh Khai Ward, City. Ha Giang.
                  </span>
                </li>
                <li className="relative flex items-center mb-[1rem]">
                  <a className="flex w-full h-full absolute top-0 left-0" href="https://honghaotravel.com/"></a>
                  <Image
                    alt="hong hao travel"
                    loading="lazy"
                    width={20}
                    height={20}
                    className="size-[1rem] object-contain mr-[0.5rem]"
                    src="/web.svg"
                  />
                  <span className="text-1 tracking-0.0125 text-greyscale-40 xmd:text-greyscale-80 xmd:font-medium">
                    honghaotravel.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-max xmd:w-full first:mr-[7.5rem] xmd:first:mr-0 xmd:last:mb-[2rem]">
              <div className="text-1 text-greyscale-80 font-bold tracking-0.0125 mb-[1rem] uppercase">All Tour</div>
              <ul>
                <li className="relative flex items-center mb-[1rem]">
                  <a className="flex w-full h-full absolute top-0 left-0" href="/tours"></a>
                  <Image
                    alt="hong hao travel"
                    loading="lazy"
                    width={20}
                    height={20}
                    className="size-[1rem] object-contain mr-[0.5rem]"
                    src="/tour.svg"
                  />
                  <span className="text-1 tracking-0.0125 text-greyscale-40 xmd:text-greyscale-80 xmd:font-medium">
                    Best Budget
                  </span>
                </li>
                <li className="relative flex items-center mb-[1rem]">
                  <a className="flex w-full h-full absolute top-0 left-0" href="/tours"></a>
                  <Image
                    alt="hong hao travel"
                    loading="lazy"
                    width={20}
                    height={20}
                    className="size-[1rem] object-contain mr-[0.5rem]"
                    src="/tour.svg"
                  />
                  <span className="text-1 tracking-0.0125 text-greyscale-40 xmd:text-greyscale-80 xmd:font-medium">
                    Standard Tour
                  </span>
                </li>
                <li className="relative flex items-center mb-[1rem]">
                  <a className="flex w-full h-full absolute top-0 left-0" href="/tours"></a>
                  <Image
                    alt="hong hao travel"
                    loading="lazy"
                    width={20}
                    height={20}
                    className="size-[1rem] object-contain mr-[0.5rem]"
                    src="/tour.svg"
                  />
                  <span className="text-1 tracking-0.0125 text-greyscale-40 xmd:text-greyscale-80 xmd:font-medium">
                    Premium Tour
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-1 text-greyscale-80 font-bold tracking-0.0125 mb-[1rem] uppercase">FOLLOW US</div>
            <div className="flex items-center">
              <a
                target="_blank"
                href="https://www.tripadvisor.com.vn/Hotel_Review-g1544599-d23325277-Reviews-Hong_Hao_Hostel_and_Motorbikes-Ha_Giang_Ha_Giang_Province.html"
              >
                <Image
                  alt="hong hao travel"
                  loading="lazy"
                  width={100}
                  height={100}
                  className="size-[1.5rem] object-contain mr-[1rem]"
                  src="/trip.svg"
                />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@honghaotravel?_t=8oIsaJo5hBQ&_r=1">
                <Image
                  alt="hong hao travel"
                  loading="lazy"
                  width={100}
                  height={100}
                  className="size-[1.5rem] object-contain mr-[1rem]"
                  src="/tiktok.svg"
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/honghao_hostel_motorbikes?igsh=OGQ5ZDc2ODk2ZA==">
                <Image
                  alt="hong hao travel"
                  loading="lazy"
                  width={100}
                  height={100}
                  className="size-[1.5rem] object-contain mr-[1rem]"
                  src="/insta.svg"
                />
              </a>
              <a target="_blank" href="https://www.facebook.com/honghaohg">
                <Image
                  alt="hong hao travel"
                  loading="lazy"
                  width={100}
                  height={100}
                  className="size-[1.5rem] object-contain mr-[1rem]"
                  src="/facebook.svg"
                />
              </a>
              <a target="_blank" href="https://www.youtube.com/channel/UCM7mmSj98exowjQVK1zCgFg">
                <Image
                  alt="hong hao travel"
                  loading="lazy"
                  width={100}
                  height={100}
                  className="size-[1.5rem] object-contain mr-[1rem]"
                  src="/youtube.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none flex w-[80.1875rem] xmd:w-[40rem] h-auto absolute top-0 xmd:top-[4rem] right-0 z-20 xmd:z-10">
        <Image
          alt="hong hao travel"
          loading="lazy"
          width={2000}
          height={1000}
          className="w-full h-full object-cover"
          src="/subBg.png"
        />
      </div>
      <div className="mt-[10rem] xmd:mt-[2.81rem] container flex py-[0.94rem] justify-center text-0875 font-medium tracking-[0.00875rem] text-greyscale-20 border-t border-solid border-greyscale-10 relative z-20">
        © DESIGNED BY OKHUB AGENCY
      </div>
    </footer>
  );
};

export default Footer;

