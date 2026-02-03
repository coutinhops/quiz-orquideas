import { Button } from "@/components/ui/button";
import { Star, Award, Leaf } from "lucide-react";
import heroOrchids from "@/assets/hero-orchids.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-4 h-4 text-orchid-gold fill-orchid-gold" />
                Especial da Live
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Kit 5 Mudinhas de{" "}
              <span className="text-primary">Cattleyas</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-lg">
              Transforme seu jardim com estas magníficas orquídeas Cattleya. 
              Mudas selecionadas de sementeira, prontas para florescer e 
              encantar seu espaço com cores vibrantes.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-5 h-5 text-orchid-gold" />
                <span>Qualidade Premium</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="w-5 h-5 text-primary" />
                <span>5 Mudas Variadas</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-primary">R$ 60</span>
                <span className="text-muted-foreground">,00</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Em até <span className="font-semibold text-foreground">3x de R$ 20,00</span> sem juros
              </p>
            </div>

            {/* Points badge */}
            <div className="bg-orchid-gold/10 border border-orchid-gold/30 rounded-lg p-3 mb-6 inline-flex items-center gap-2">
              <Star className="w-5 h-5 text-orchid-gold fill-orchid-gold" />
              <span className="text-sm">
                Compre agora e ganhe <span className="font-bold text-orchid-gold">60 Pontos!</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#comprar">Comprar Agora</a>
              </Button>
              <Button variant="outline-primary" size="xl" asChild>
                <a href="#cuidados">Saiba Mais</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-orchid-gold/10 rounded-3xl blur-2xl"></div>
              <img
                src={heroOrchids}
                alt="Kit 5 Mudas de Cattleyas"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl shadow-soft p-4 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">5 Mudas</p>
                    <p className="text-xs text-muted-foreground">Cores variadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
