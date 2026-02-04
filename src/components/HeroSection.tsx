import { Button } from "@/components/ui/button";
import { Star, Award, Leaf } from "lucide-react";
import heroOrchids from "@/assets/hero-orchids.jpg";
import { memo } from "react";

const HeroSection = () => {
  return (
    <>
      <section className="bg-gradient-hero py-8 sm:py-12 md:py-20 overflow-hidden pb-24 sm:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="bg-accent/20 text-accent-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orchid-gold fill-orchid-gold" />
                  Especial da Live
                </span>
              </div>
              
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight">
                <span className="text-primary">Kit Gratuito</span> – 5 Mudinhas de{" "}
                <span className="text-primary">Cattleyas</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-orchid-gold mb-4 sm:mb-6">
                Condição especial para novos clientes
              </p>
              
              <div className="text-muted-foreground mb-6 sm:mb-8 max-w-lg space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg">
                  Este kit faz parte de uma condição especial liberada para novos clientes 
                  conhecerem nosso padrão de cultivo e envio.
                </p>
                <p className="text-sm sm:text-base">
                  As mudas são selecionadas, saudáveis e preparadas para transporte, 
                  ideais para quem está começando ou quer ampliar sua coleção com baixo risco.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orchid-gold" />
                  <span>Qualidade Premium</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span>5 Mudas Variadas</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 sm:mb-8 bg-secondary/50 rounded-xl p-4 sm:p-5">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Valor das mudas: <span className="line-through">R$ 60,00</span>
                </p>
                <div className="flex items-baseline gap-2 mb-2 sm:mb-3 flex-wrap">
                  <span className="text-xs sm:text-sm text-muted-foreground">Hoje:</span>
                  <span className="font-display text-3xl sm:text-4xl font-bold text-primary">R$ 0,00</span>
                  <span className="text-xs sm:text-sm text-orchid-gold font-medium">(condição especial)</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground">
                  Você paga apenas o frete para sua região, calculado no próximo passo.
                </p>
              </div>

              {/* Desktop CTA */}
              <div className="hidden sm:flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="shadow-lg shadow-primary/30" asChild>
                  <a href="#comprar">Receber minhas mudas pagando só o frete</a>
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
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-card rounded-xl shadow-soft p-3 sm:p-4 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-foreground">5 Mudas</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">Cores variadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button - Mobile only */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background via-background to-transparent sm:hidden z-50">
        <Button 
          variant="hero" 
          size="lg" 
          className="w-full shadow-xl shadow-primary/40 text-sm py-4" 
          asChild
        >
          <a href="#comprar">Receber minhas mudas pagando só o frete</a>
        </Button>
      </div>
    </>
  );
};

export default memo(HeroSection);
