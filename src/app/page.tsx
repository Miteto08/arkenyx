import Layout from '@/views/Layout/Layout';
import Hero from '@/views/Hero/Hero';
import ServicesSection from '@/views/ServicesSection/ServicesSection';
import ContactSection from '@/views/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
}
