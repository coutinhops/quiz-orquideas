import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Package, Star, Truck, Shield, ArrowRight } from "lucide-react";

interface QuizResultProps {
  onContinue: () => void;
}

const QuizResult = ({ onContinue }: QuizResultProps) => {
  return (
    // pb-24 ensures button is visible above mobile footer
    <div className="animate-fade-in-up text-center pb-24 sm:pb-0">
      {/* Success icon */}
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-primary" />
      </div>

      {/* Title */}
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
        <span className="text-primary">Boas notícias:</span> seu perfil é ideal para receber nossas mudas de orquídeas
      </h2>

      {/* Subtitle */}
      <p className="text-muted-foreground text-base mb-6">
        Direto de um dos orquidários com maior volume de envios do Brasil
      </p>

      {/* Offer card */}
      <div className="bg-orchid-gold/10 border border-orchid-gold/30 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="w-5 h-5 text-orchid-gold fill-orchid-gold" />
          <span className="font-semibold text-foreground">Condição Especial</span>
          <Star className="w-5 h-5 text-orchid-gold fill-orchid-gold" />
        </div>
        <p className="text-foreground text-lg mb-2">
          <strong className="text-primary">5 mudas reais de orquídeas</strong> enviadas para sua casa pagando apenas o frete.
        </p>
        <p className="text-sm text-muted-foreground">
          Uma condição liberada para novos clientes conhecerem nosso padrão de cultivo e envio.
        </p>
      </div>

      {/* Trust indicators - ordem psicológica ideal */}
      <div className="grid grid-cols-2 gap-3 mb-6">
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

      {/* Note - mais emocional */}
      <p className="text-sm text-muted-foreground mb-5 bg-secondary/30 rounded-xl p-4">
        Antes de continuar, vale entender <strong className="text-foreground">por que conseguimos oferecer essa condição</strong>, como preparamos as mudas e como funciona o envio para sua região.
      </p>

      {/* CTA Button - destacado */}
      <Button variant="hero" size="xl" onClick={onContinue} className="w-full sm:w-auto shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow">
        Quero entender como funciona
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default QuizResult;
