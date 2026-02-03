import { Package, ShieldCheck, Clock, MapPin } from "lucide-react";

const ShippingSection = () => {
  const features = [
    {
      icon: Package,
      title: "Embalagem Especial",
      description: "Mudas enviadas em celofane, acomodadas com jornal em caixa resistente.",
    },
    {
      icon: ShieldCheck,
      title: "Garantia de 24h",
      description: "Garantia de resistência na viagem. Qualquer problema, entre em contato em até 24h.",
    },
    {
      icon: Clock,
      title: "Envio Rápido",
      description: "Processamos seu pedido rapidamente para que suas mudas cheguem fresquinhas.",
    },
    {
      icon: MapPin,
      title: "Todo Brasil",
      description: "Entregamos em todo território nacional com rastreamento completo.",
    },
  ];

  return (
    <section id="entrega" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Entrega Segura e Garantida
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Suas orquídeas serão enviadas com todo cuidado para chegarem 
            saudáveis na sua casa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/20 max-w-3xl mx-auto">
          <p className="text-center text-primary-foreground/90">
            <strong>Importante:</strong> As mudas são enviadas <strong>sem vaso</strong>, 
            envoltas em celofane e acomodadas em caixa resistente com jornal. 
            Mantenha na embalagem original para eventual reclamação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
