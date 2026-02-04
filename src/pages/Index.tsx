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
        <CareSection />
        <ShippingSection />
      </main>
    </div>
  );
};

export default Index;
