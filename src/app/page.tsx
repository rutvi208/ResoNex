import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import Services from '@/app/components/Services';
import Expertise from '@/app/components/Expertise';
import WhyUs from '@/app/components/WhyUs';
import Kpi from '@/app/components/Kpi';
import Engagement from '@/app/components/Engagement';
import CtaSection  from '@/app/components/CtaSection';
import CaseStudy from './components/CaseStudy';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';

import HeroBg from '@/assets/hero-bg.png';
import ServicesBg from '@/assets/services-bg.png';
import WhyUsBg from '@/assets/WhyUs-bg.png';
import KpiBg from '@/assets/Kpi-bg.png';
import FooterBg from '@/assets/Footer-bg.png';

import Image from 'next/image';
// import Meta from '@/app/components/Meta';

export const metadata = {
  title: "ResoNex - Actionable Business Insights",
  description: "Lead with Data. Accelerate with Automation.",
  keywords: "ideation, strategy, product, brands, ai, machine learning, data science, cloud, aws, docker, quickbase"
};

export default function Home() {
  return (
    <div>
      {/* <Meta
        title="ResoNex - Actionable Business Insights"
        description="Lead with Data. Accelerate with Automation."
        keywords="ideation, strategy, product, brands, ai, machine learning, data science, cloud, aws, docker, quickbase"
      /> */}

      <ScrollToTop />
      
      {/* Navbar + Hero Section */}

      <div id="/" className='relative w-full h-[740px] md:h-[640px] lg:h-screen overflow-hidden'>
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

      <div id="services" className='relative w-full'>
          <Image
          src={ServicesBg}
          alt="Services Background"
          className='absolute inset-0 w-full h-full top-60'
          priority />
        <div className='relative sm:z-10'>
          <Services/>
        </div>
      </div>

      {/* Expertise */}

      <div><Expertise/></div>

      {/* WhyUs */}
      <div id="why-us" className='relative w-full min-h-screen flex items-center justify-center'>
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
      <div id="kpi-library" className='relative w-full h-max flex items-center justify-center'>
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

      {/* Engagement */}
      <div><Engagement/></div>

      {/* CtaSection */}
      <div><CtaSection/></div>

      {/* Case Studies */}
      <div id="case-studies"><CaseStudy /></div>

      {/* Footer */}
      <div id="contact" className='relative w-full h-max flex items-center justify-center'>
          <Image
          src={FooterBg}
          alt="KPI Background"
          className='absolute inset-0 w-full h-full object-fill'
          priority />
        <div className='relative z-10'>
          <Footer/>
        </div>
      </div>
        
      {/* main page ends */}
    </div>
  );
}
