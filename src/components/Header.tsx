import { Flower2, ShieldCheck, Truck } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>Entrega Garantida</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Você está Seguro!</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Flower2 className="w-4 h-4" />
            <span>Orquídeas de Qualidade</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <nav className="bg-card py-4 shadow-soft">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flower2 className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-semibold text-foreground">
              Campo das Orquídeas
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#produto" className="hover:text-primary transition-colors">Produto</a>
            <a href="#cuidados" className="hover:text-primary transition-colors">Cuidados</a>
            <a href="#entrega" className="hover:text-primary transition-colors">Entrega</a>
            <a href="#comprar" className="hover:text-primary transition-colors">Comprar</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
