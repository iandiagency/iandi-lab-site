import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Award } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas de alto ROI em Google Ads, Facebook e LinkedIn. Alcance seu público-alvo com precisão cirúrgica.",
  },
  {
    icon: TrendingUp,
    title: "Funis de Conversão",
    description: "Otimização de conversão baseada em dados. Transforme visitantes em clientes fiéis com estratégias comprovadas.",
  },
  {
    icon: Award,
    title: "Otimização de Marca",
    description: "Construa uma marca premium que ressoa com seu mercado. Posicionamento estratégico para crescimento sustentável.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Serviços que geram{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              resultados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções integradas para acelerar o crescimento digital da sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="mb-6 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
