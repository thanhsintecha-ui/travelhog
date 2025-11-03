'use client';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Hình nền chính */}
      <Image
        src="/animate.png"
        alt="Hong Hao Travel"
        width={1920}
        height={710}
        className="w-screen h-[44.375rem] object-contain xmd:hidden xlg:right-0 z-0"
        priority
      />

      {/* Cloud 1 */}
      <Image
        src="/cloud.png"
        alt="Hong Hao Travel"
        width={500}
        height={500}
        className="absolute top-[1rem] left-1/2 animate-cloud delay-300 opacity-30 tablet:hidden"
      />

      {/* Cloud 2 */}
      <Image
        src="/cloud2.png"
        alt="Hong Hao Travel"
        width={500}
        height={500}
        className="absolute top-[2rem] left-1/2 animate-cloud2 tablet:hidden"
      />
    </div>
  );
};

export default AnimatedBackground;
