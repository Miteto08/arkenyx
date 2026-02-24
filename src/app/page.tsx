import Layout from '@/views/Layout/Layout';
import Banner from '@/views/Banner/Banner';
import Hero from '@/views/Hero/Hero';
import IntroSection from '@/views/IntroSection/IntroSection';
import ServicesSectionHeader from '@/views/ServicesSectionHeader/ServicesSectionHeader';
import ServicesSection from '@/views/ServicesSection/ServicesSection';
import ContactSection from '@/views/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <Layout>
      <Banner>
        <Hero />
        <IntroSection />
        <div id="services">
          <ServicesSectionHeader />
        </div>
      </Banner>
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
}
