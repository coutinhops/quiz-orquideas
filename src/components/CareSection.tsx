import { Sun, Droplets, Flower, TreeDeciduous } from "lucide-react";
import careItemsImg from "@/assets/care-items.jpg";

const CareSection = () => {
  const careSteps = [
    {
      icon: Sun,
      title: "Luminosidade",
      description: "Manter em local claro, sem sol direto. Luz filtrada é ideal para Cattleyas.",
    },
    {
      icon: Droplets,
      title: "Rega",
      description: "Regar sempre que o vaso secar. Evite encharcamento para prevenir apodrecimento.",
    },
    {
      icon: TreeDeciduous,
      title: "Substrato",
      description: "Utilize casca de pinus, carvão e musgo. Garantem drenagem e aeração adequadas.",
    },
    {
      icon: Flower,
      title: "Vaso",
      description: "Use vasos proporcionais à planta. Orquídeas preferem vasos apertados.",
    },
  ];

  return (
    <section id="cuidados" className="py-16 md:py-24 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Cuidar das suas{" "}
            <span className="text-primary">Orquídeas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Siga estas dicas simples para garantir que suas Cattleyas 
            floresçam lindas e saudáveis por muitos anos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {careSteps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Materiais Recomendados
              </h3>
              <p className="text-muted-foreground mb-6">
                Para um cultivo bem-sucedido, recomendamos utilizar:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orchid-earth rounded-full"></span>
                  Casca de pinus - drenagem natural
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground/60 rounded-full"></span>
                  Carvão vegetal - absorve impurezas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Musgo sphagnum - retenção de umidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orchid-gold rounded-full"></span>
                  Vaso de barro ou plástico com furos
                </li>
              </ul>
            </div>
            <div>
              <img
                src={careItemsImg}
                alt="Materiais para cultivo de orquídeas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;
