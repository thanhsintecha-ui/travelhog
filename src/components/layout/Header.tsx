'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '../HeroSection';
import IntroSection from '@/app/IntroSection';

export default function Header() {
  return (
    <header >
      {/* Logo */}
      <section className='w-full bg-[linear-gradient(180deg,#122718_50%,rgba(18,39,24,0.80)_70%,#122718_100%)] relative'>
      <IntroSection />
      <HeroSection />
      </section>
    </header>
  );
}
