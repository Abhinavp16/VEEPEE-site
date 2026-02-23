import HeroSection from '@/components/home/HeroSection';
import BrandsSection from '@/components/home/BrandsSection';
import AboutSection from '@/components/home/AboutSection';
import ProductsSection from '@/components/home/ProductsSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import StatsSection from '@/components/home/StatsSection';
import SustainabilitySection from '@/components/home/SustainabilitySection';
import BlogSection from '@/components/home/BlogSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <ProductsSection />
      <CategoriesSection />
      <StatsSection />
      <SustainabilitySection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
