import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CareSection from "@/components/CareSection";
import ShippingSection from "@/components/ShippingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ShippingSection />
        <CareSection />
      </main>
    </div>
  );
};

export default Index;
