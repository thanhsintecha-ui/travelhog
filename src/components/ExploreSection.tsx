import Image from "next/image";
import React from "react";

const ExploreSection: React.FC = () => {
  return (
    <div className="xmd:mb-[2rem] xmd:pl-[0.75rem] tablet:pl-[4rem]">
      {/* Section Header */}
      <h3 className="font-extrabold text-1125 xmd:text-0875 xmd:text-greyscale-60 text-greyscale-80 opacity-40">
        EXPLORE
      </h3>

      <h2 className="mt-[0.75rem] font-londrina xmd:leading-[1.2] text-35 xmd:text-25 font-black text-greyscale-80 tablet:mb-[2rem] ">
        BEST TRIPS <br className="md:hidden" /> FOR YOU
      </h2>

      {/* Image */}
      <Image
        alt="map"
        loading="lazy"
        width={500}
        height={500}
        decoding="async"
        data-nimg="1"
        className="xmd:hidden tablet:hidden w-[29.3rem] h-[28.1rem] object-contain mt-[2.44rem]"
        src="https://cms.honghaotravel.com/wp-content/uploads/dongvan-hagiang-2n-1.png"
        style={{ color: 'transparent' }}
      />
    </div>
  );
};

export default ExploreSection;
