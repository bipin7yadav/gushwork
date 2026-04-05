import React from 'react';
import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import TechSpecs from '../components/TechSpecs';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Applications from '../components/Applications';
import ManufacturingProcess from '../components/ManufacturingProcess';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Resources from '../components/Resources';
import CTASection from '../components/CTASection';
import ProductConfigurator from '../components/ProductConfigurator';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoMarquee />
      <ProductConfigurator />
      <TechSpecs />
      <Features />
      <Applications />
      <ManufacturingProcess />
      <Testimonials />
      <Portfolio />
      <Resources />
      <FAQ />
      <CTASection />
    </main>
  );
}
