import Layout from '@/views/Layout/Layout';
import Banner from '@/views/Banner/Banner';
import Hero from '@/views/Hero/Hero';
import IntroSection from '@/views/IntroSection/IntroSection';
import ServicesSection from '@/views/ServicesSection/ServicesSection';
import PriceSection from '@/views/PriceSection/PriceSection';
import ContactSection from '@/views/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <Layout>
      <Banner>
        <Hero />
        <IntroSection />
      </Banner>
      <ServicesSection />
      <PriceSection />
      <ContactSection />
    </Layout>
  );
}
