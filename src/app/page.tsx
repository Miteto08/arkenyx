import dynamic from 'next/dynamic';
import Layout from '@/views/Layout/Layout';
import Banner from '@/views/Banner/Banner';
import Hero from '@/views/Hero/Hero';
import IntroSection from '@/views/IntroSection/IntroSection';
import ServicesSection from '@/views/ServicesSection/ServicesSection';
import WhyChooseUsSection from '@/views/WhyChooseUsSection/WhyChooseUsSection';
import CommitmentsSection from '@/views/CommitmentsSection/CommitmentsSection';

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
      <Banner>
        <Hero />
        <IntroSection />
      </Banner>
      <ServicesSection />
      <WhyChooseUsSection />
      <CommitmentsSection />
      <PriceSection />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
}
