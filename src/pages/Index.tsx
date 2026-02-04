import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PurchaseSection from "@/components/PurchaseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PurchaseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
