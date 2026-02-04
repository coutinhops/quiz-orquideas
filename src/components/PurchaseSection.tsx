import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, CreditCard, Shield } from "lucide-react";
import heroOrchids from "@/assets/hero-orchids.jpg";

const PurchaseSection = () => {
  return (
    <section id="comprar" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-elevated overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <img
                  src={heroOrchids}
                  alt="Kit 5 Mudas de Cattleyas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orchid-gold text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Especial da Live
                </div>
              </div>

              {/* Purchase card */}
              <div className="p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Kit 5 Mudinhas de Cattleyas
                </h2>
                <p className="text-muted-foreground mb-6">
                  Especial da Live - Mudas selecionadas de sementeira
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-primary">R$ 60</span>
                    <span className="text-muted-foreground text-lg">,00</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    ou até <span className="font-semibold text-foreground">3x de R$ 20,00</span> sem juros
                  </p>
                </div>

                {/* Points */}
                <div className="bg-orchid-gold/10 border border-orchid-gold/30 rounded-lg p-3 mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-orchid-gold fill-orchid-gold flex-shrink-0" />
                  <span className="text-sm">
                    Ganhe <span className="font-bold text-orchid-gold">60 Pontos</span> de fidelidade!
                  </span>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Quantidade
                  </label>
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                      -
                    </button>
                    <span className="w-12 text-center font-semibold text-lg">1</span>
                    <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                      +
                    </button>
                  </div>
                </div>

                {/* Buy button */}
                <Button variant="gold" size="xl" className="w-full mb-4">
                  <ShoppingCart className="w-5 h-5" />
                  Adicionar ao Carrinho
                </Button>

                {/* Payment info */}
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CreditCard className="w-4 h-4" />
                    <span>Parcele em até 12x</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Compra segura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="font-semibold text-foreground">Peso</p>
              <p className="text-sm text-muted-foreground">0.5 kg</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="font-semibold text-foreground">Dimensões</p>
              <p className="text-sm text-muted-foreground">30 × 20 × 10 cm</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="font-semibold text-foreground">Disponibilidade</p>
              <p className="text-sm text-primary font-medium">Em estoque</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
