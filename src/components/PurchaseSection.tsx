import { Button } from "@/components/ui/button";
import { Truck, ArrowRight } from "lucide-react";
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
                  Condição Especial
                </div>
              </div>

              {/* Purchase card */}
              <div className="p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  Kit Gratuito – 5 Mudinhas de <span className="text-primary">Cattleyas</span>
                </h2>
                <p className="text-sm text-orchid-gold font-medium mb-4">
                  Condição especial para novos clientes
                </p>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Este kit faz parte de uma condição especial liberada para novos clientes conhecerem nosso padrão de cultivo e envio.
                  <br /><br />
                  As mudas são selecionadas, saudáveis e preparadas para transporte, ideais para quem está começando ou quer ampliar sua coleção com baixo risco.
                </p>

                {/* Price */}
                <div className="mb-6 bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-muted-foreground">Valor das mudas:</span>
                    <span className="text-destructive line-through font-semibold">R$ 60,00</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-muted-foreground">Hoje:</span>
                    <span className="font-display text-3xl font-bold text-primary">R$ 0,00</span>
                    <span className="text-sm text-orchid-gold font-medium">(condição especial)</span>
                  </div>
                </div>

                {/* Shipping info */}
                <div className="bg-orchid-gold/10 border border-orchid-gold/30 rounded-lg p-3 mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orchid-gold flex-shrink-0" />
                  <span className="text-sm">
                    Você paga apenas o <strong className="text-foreground">frete para sua região</strong>, calculado no próximo passo.
                  </span>
                </div>

                {/* CTA button */}
                <Button variant="hero" size="xl" className="w-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
                  Receber minhas mudas pagando só o frete
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
