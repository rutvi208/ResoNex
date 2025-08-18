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
      
      <ScrollToTop />
      
      {/* Navbar + Hero Section */}
      <div id="/"><HeroSection/></div>

      {/* Services */}
      <div id="services" ><Services/></div>

      {/* Expertise */}
      <div><Expertise/></div>

      {/* WhyUs */}
      <div id="why-us"><WhyUs/></div>

      {/* KPI section */}
      <div id="kpi-library"><Kpi/></div>

      {/* Engagement */}
      <div><Engagement/></div>

      {/* CtaSection */}
      <div><CtaSection/></div>

      {/* Case Studies */}
      <div id="case-studies"><CaseStudy /></div>

      {/* Footer */}
      <div id="contact"><Footer/></div>
        
      {/* main page ends */}
    </div>
  );
}
