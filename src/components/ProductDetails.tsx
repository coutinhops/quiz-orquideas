import { Check, Sparkles, Palette } from "lucide-react";
import seedlingsImg from "@/assets/seedlings.jpg";

const ProductDetails = () => {
  const features = [
    "5 mudas de Cattleyas selecionadas",
    "Provenientes de sementeira de bandeja",
    "Cores podem variar - surpresa garantida!",
    "Prontas para transplante",
    "Ideal para colecionadores",
  ];

  return (
    <section id="produto" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orchid-gold/5 to-primary/5 rounded-3xl"></div>
            <img
              src={seedlingsImg}
              alt="Mudas de Cattleya em vasos"
              className="relative w-full rounded-2xl shadow-soft"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-orchid-gold" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Sobre o Produto
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Orquídeas de Sementeira com{" "}
              <span className="text-primary">Variação de Cores</span>
            </h2>

            <p className="text-muted-foreground mb-6 text-lg">
              Este kit contém 5 mudas de Cattleyas originárias de sementeira de bandeja. 
              Como são produzidas a partir de sementes em laboratório, cada muda pode 
              apresentar variações únicas de cor e formato, tornando sua coleção ainda mais especial.
            </p>

            <div className="bg-secondary/50 rounded-xl p-4 mb-8 flex items-start gap-3">
              <Palette className="w-6 h-6 text-orchid-pink flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Foto ilustrativa</p>
                <p className="text-sm text-muted-foreground">
                  A imagem das flores é meramente ilustrativa. Cada orquídea pode 
                  florescer com cores e padrões únicos.
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
