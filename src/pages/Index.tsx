import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeBuild from "@/components/WhatWeBuild";
import FeaturedProduct from "@/components/FeaturedProduct";
import ExpertSolutions from "@/components/ExpertSolutions";
import SelectedWorks from "@/components/SelectedWorks";
import WhyChoose from "@/components/WhyChoose";
import OurProcess from "@/components/OurProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhatWeBuild />
      <FeaturedProduct />
      <ExpertSolutions />
      <SelectedWorks />
      <WhyChoose />
      <OurProcess />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
