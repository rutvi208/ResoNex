import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import Services from '@/app/components/Services';
import Expertise from '@/app/components/Expertise';
import WhyUs from '@/app/components/WhyUs';
import Kpi from '@/app/components/Kpi';

import HeroBg from '@/assets/hero-bg.png';
import ServicesBg from '@/assets/services-bg.png';
import WhyUsBg from '@/assets/WhyUs-bg.png';
import KpiBg from '@/assets/Kpi-bg.png';

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Navbar + Hero Section */}

      <div className='relative w-full h-[740px] md:h-[640px] lg:h-screen overflow-hidden'>
        <Image
          src={HeroBg}
          alt="Hero Background"
          className='absolute inset-0 w-full h-full object-cover'
          priority />
        <div className='absolute inset-0 z-10'>
          <Navbar />
          <HeroSection/>
        </div>
      </div>

      {/* Services */}

      <div className='relative w-full'>
          <Image
          src={ServicesBg}
          alt="Services Background"
          className='absolute inset-0 w-full h-full top-60'
          priority />
        <div className='relative z-10'>
          <Services/>
        </div>
      </div>

      {/* Expertise */}

      <div><Expertise/></div>

      {/* WhyUs */}
      <div className='relative w-full min-h-screen flex items-center justify-center'>
          <Image
          src={WhyUsBg}
          alt="Why Us Background"
          className='absolute inset-0 w-full h-full object-fill'
          priority />
        <div className='relative z-10'>
          <WhyUs/>
        </div>
      </div>

      {/* KPI section */}
      <div className='relative w-full min-h-screen flex items-center justify-center'>
          <Image
          src={KpiBg}
          alt="KPI Background"
          className='absolute inset-0 w-full h-full object-fill'
          priority />
        <div className='relative z-10'>
          <Kpi/>
        </div>
      </div>
      {/* <div><Kpi/></div> */}

      {/* main page ends */}
    </div>
  );
}
