'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import AnimatedBackground from '@/components/AnimatedBackground';
import InfiniteTextSlider from '@/components/InfiniteTextSlider';
import ClientsSay from '@/components/ClientsSay';
import OurTeam from '@/components/OurTeam';
import CloudFlying from '@/components/CloudFlying';
import SeasonSlider from '@/components/SeasonSlider';
import ExploreSection from '@/components/ExploreSection';
import TourList from '@/components/TourList';
import OurGallery from '@/components/OurGallery';

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <section className='relative w-full bg-white lg:h-screen'>

        <div className='lg:container subContainer xmd:!px-0 pt-[5.63rem] xmd:pt-[3rem] flex justify-between xmd:flex-col tablet:flex-col xmd:mb-[1.5rem] lg:space-x-[0.75rem]'>

          <ExploreSection />
          <TourList />

        </div>

        <OurGallery />
        <ClientsSay />
        <OurTeam />
        <SeasonSlider />

      </section>
    </>
  );
}

