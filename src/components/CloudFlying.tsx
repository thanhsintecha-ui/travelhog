"use client";
import Image from "next/image";

export default function CloudFlying() {
  return (
    <div className="relative w-full h-[4rem] md:h-[13.5rem] z-10 bg-transparent -translate-y-full overflow-hidden">
      {/* Main cloud background */}
      <div className="relative w-full h-full">
        <Image
          src="/cloud-flying-1.png"
          alt="cloud flying (づ ◕‿◕ )づ"
          fill
          className="object-cover object-top min-w-[108vw] main-cloud"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute bottom-0 left-0 z-20 w-full h-6 md:h-[6rem]"
        style={{
          background:
            "linear-gradient(0deg, rgb(255,255,255) 50%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Animated clouds */}
      <Image
        src="/animate-cloud-1.png"
        alt="animate cloud"
        width={1920}
        height={1080}
        className="animate-cloud-1 absolute -top-4 md:-top-6 left-0 md:left-[10%] z-10 w-[50rem] object-cover"
      />
      <Image
        src="/animate-cloud-1.png"
        alt="animate cloud"
        width={1920}
        height={1080}
        className="animate-cloud-2 absolute top-0 md:top-5 right-0 z-10 w-[50rem] object-cover"
      />
      <Image
        src="/animate-cloud-1.png"
        alt="animate cloud"
        width={1920}
        height={1080}
        className="animate-cloud-4 absolute top-0 md:top-4 right-0 md:right-[30%] z-10 w-[50rem] object-cover"
      />
    </div>
  );
}
