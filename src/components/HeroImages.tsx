import Image from "next/image";

export default function HeroImages() {
  return (
    <div className="absolute left-0 top-0 right-[-50rem]">
      {/* Ảnh nền lớn */}
      <Image
        src="/animate.png"
        alt="hong hao travel"
        width={1000}
        height={1000}
        priority
        className="w-screen h-[44.375rem] object-contain xmd:hidden xlg:right-0 z-0"
      />

      {/* Đám mây 1 */}
      <Image
        src="/cloud.png"
        alt="hong hao travel"
        width={500}
        height={500}
        className="absolute top-[1rem] left-1/2 animate-cloud delay-300 opacity-30 tablet:hidden"
      />

      {/* Đám mây 2 */}
      <Image
        src="/cloud2.png"
        alt="hong hao travel"
        width={500}
        height={500}
        className="absolute top-[2rem] left-1/2 animate-cloud2 tablet:hidden"
      />
    </div>
  );
}
