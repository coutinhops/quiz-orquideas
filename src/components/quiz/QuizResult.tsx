import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Package, Star, Truck, Shield, ArrowRight } from "lucide-react";

interface QuizResultProps {
  onContinue: () => void;
}

const QuizResult = ({ onContinue }: QuizResultProps) => {
  return (
    <div className="animate-fade-in-up text-center pb-4 md:pb-8">
      {/* Success icon */}
      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
        <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
      </div>

      {/* Title */}
      <h2 className="font-display text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-1 md:mb-2">
        <span className="text-primary">Boas notícias:</span> seu perfil é ideal para receber nossas mudas de orquídeas
      </h2>

      {/* Subtitle */}
      <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-6">
        Direto de um dos orquidários com maior volume de envios do Brasil
      </p>

      {/* Offer card */}
      <div className="bg-orchid-gold/10 border border-orchid-gold/30 rounded-2xl p-3 md:p-5 mb-3 md:mb-6">
        <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
          <Star className="w-4 h-4 md:w-5 md:h-5 text-orchid-gold fill-orchid-gold" />
          <span className="font-semibold text-foreground text-sm md:text-base">Condição Especial</span>
          <Star className="w-4 h-4 md:w-5 md:h-5 text-orchid-gold fill-orchid-gold" />
        </div>
        <p className="text-foreground text-sm md:text-lg mb-1 md:mb-2">
          <strong className="text-primary">5 mudas reais de orquídeas</strong> enviadas para sua casa pagando apenas o frete.
        </p>
        <p className="text-xs md:text-sm text-muted-foreground">
          Uma condição liberada para novos clientes conhecerem nosso padrão de cultivo e envio.
        </p>
      </div>

      {/* Trust indicators - hidden on mobile */}
      <div className="hidden md:grid grid-cols-2 gap-3 mb-6">
        <div className="bg-secondary/50 rounded-xl p-3 flex flex-col items-center gap-1.5">
          <Package className="w-5 h-5 text-primary" />
          <span className="text-xs text-muted-foreground text-center">+50 mil caixas enviadas</span>
        </div>
        <div className="bg-secondary/50 rounded-xl p-3 flex flex-col items-center gap-1.5">
          <Truck className="w-5 h-5 text-primary" />
          <span className="text-xs text-muted-foreground text-center">Entrega em todo o Brasil</span>
        </div>
        <div className="bg-secondary/50 rounded-xl p-3 flex flex-col items-center gap-1.5">
          <Leaf className="w-5 h-5 text-primary" />
          <span className="text-xs text-muted-foreground text-center">Mudas selecionadas para envio</span>
        </div>
        <div className="bg-secondary/50 rounded-xl p-3 flex flex-col items-center gap-1.5">
          <Shield className="w-5 h-5 text-primary" />
          <span className="text-xs text-muted-foreground text-center">Garantia de 24h após o recebimento</span>
        </div>
      </div>

      {/* Note - compact on mobile */}
      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-5 bg-secondary/30 rounded-xl p-2 md:p-4">
        Antes de continuar, vale entender <strong className="text-foreground">por que conseguimos oferecer essa condição</strong>, como preparamos as mudas e como funciona o envio para sua região.
      </p>

      {/* CTA Button */}
      <Button variant="hero" size="lg" onClick={onContinue} className="w-full sm:w-auto md:h-14 md:px-10 md:text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow">
        Quero entender como funciona
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default QuizResult;
