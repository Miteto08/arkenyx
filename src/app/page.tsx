import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Layout from '@/views/Layout/Layout';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};
import Banner from '@/views/Banner/Banner';
import Hero from '@/views/Hero/Hero';
import IntroSection from '@/views/IntroSection/IntroSection';
import ServicesSection from '@/views/ServicesSection/ServicesSection';
import ContentZone from '@/views/ContentZone/ContentZone';
import WhyChooseUsSection from '@/views/WhyChooseUsSection/WhyChooseUsSection';
import CommitmentsSection from '@/views/CommitmentsSection/CommitmentsSection';
import HowItWorksSection from '@/views/HowItWorksSection/HowItWorksSection';
import TestimonialsSection from '@/views/TestimonialsSection/TestimonialsSection';
import InterventionAreaSection from '@/views/InterventionAreaSection/InterventionAreaSection';
import FAQSchema from '@/views/FAQSection/FAQSchema';

const PriceSection = dynamic(
  () => import('@/views/PriceSection/PriceSection').then((m) => m.default),
  { ssr: true }
);

const FAQSection = dynamic(
  () => import('@/views/FAQSection/FAQSection').then((m) => m.default),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import('@/views/ContactSection/ContactSection').then((m) => m.default),
  { ssr: true }
);

export default function HomePage() {
  return (
    <Layout>
      <FAQSchema />
      <Banner>
        <Hero />
        <IntroSection />
      </Banner>
      <ServicesSection />
      <ContentZone>
        <WhyChooseUsSection />
        <CommitmentsSection />
        <HowItWorksSection />
        <PriceSection />
        <InterventionAreaSection />
        <TestimonialsSection />
        <FAQSection />
      </ContentZone>
      <ContactSection />
    </Layout>
  );
}
