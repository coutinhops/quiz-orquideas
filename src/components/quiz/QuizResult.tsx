import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Package, Star, Truck, Shield, ArrowRight } from "lucide-react";

interface QuizResultProps {
  onContinue: () => void;
}

const QuizResult = ({ onContinue }: QuizResultProps) => {
  return (
    <div className="animate-fade-in-up text-center">
      {/* Success icon */}
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-primary" />
      </div>

      {/* Title */}
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
        Boas notícias: seu perfil é ideal para receber nossas mudas de orquídeas
      </h2>

      {/* Description */}
      <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto">
        Com base nas suas respostas, você pode começar ou ampliar seu cultivo sem fazer um investimento alto agora.
      </p>

      {/* Offer card */}
      <div className="bg-orchid-gold/10 border border-orchid-gold/30 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="w-5 h-5 text-orchid-gold fill-orchid-gold" />
          <span className="font-semibold text-foreground">Condição Especial</span>
          <Star className="w-5 h-5 text-orchid-gold fill-orchid-gold" />
        </div>
        <p className="text-foreground text-lg">
          <strong className="text-primary">5 mudas reais de orquídeas</strong> enviadas para sua casa pagando apenas o frete.
        </p>
      </div>

      {/* Trust indicators */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-secondary/50 rounded-xl p-4 flex flex-col items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          <span className="text-sm text-muted-foreground text-center">+50 mil caixas enviadas</span>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 flex flex-col items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          <span className="text-sm text-muted-foreground text-center">Entrega em todo Brasil</span>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 flex flex-col items-center gap-2">
          <Leaf className="w-6 h-6 text-primary" />
          <span className="text-sm text-muted-foreground text-center">Mudas selecionadas</span>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 flex flex-col items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-sm text-muted-foreground text-center">Garantia de 24h</span>
        </div>
      </div>

      {/* Note */}
      <p className="text-sm text-muted-foreground mb-6">
        Antes de continuar, é importante entender <strong className="text-foreground">por que isso é possível</strong> e como funciona nosso envio.
      </p>

      {/* CTA Button */}
      <Button variant="hero" size="xl" onClick={onContinue} className="w-full sm:w-auto">
        Quero entender como funciona
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default QuizResult;
