import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import AnimatedBackground from '@/components/AnimatedBackground';
import InfiniteTextSlider from '@/components/InfiniteTextSlider';
import ExploreTrips from '@/components/ExploreTrips';
import ClientsSay from '@/components/ClientsSay';
import OurTeam from '@/components/OurTeam';
import CloudFlying from '@/components/CloudFlying';
import SeasonSlider from '@/components/SeasonSlider';

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <section
        style={{
          order: 0,
          zIndex: 'auto',
          float: 'none',
          flexShrink: 1,
          display: 'block',
          margin: 0,
          inset: 0,
          position: 'relative',
          flexBasis: 'auto',
          overflow: 'visible',
          boxSizing: 'border-box',
          width: '1912px',
          height: '2099px',
          padding: '0px 0px 1647px'
        }}
      >
        <Container>
          <ExploreTrips />
          <AnimatedBackground />
          <InfiniteTextSlider />
        </Container>
        <ClientsSay />
        <OurTeam />
        <CloudFlying />
        <SeasonSlider />
      </section>
    </>
  );
}

