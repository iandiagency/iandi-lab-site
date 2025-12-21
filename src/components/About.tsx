import professionalImage from "@/assets/professional-executive.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
            <img
              src={professionalImage}
              alt="Profissional Iandi Agency"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Construindo o futuro digital de{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Angola
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A Iandi Agency é a principal agência de crescimento digital de Angola, especializada em transformar empresas através de estratégias baseadas em dados e execução impecável.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nossa missão é acelerar a economia digital angolana, oferecendo soluções de marketing digital de nível internacional adaptadas ao mercado local.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Clientes atendidos</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">300%</div>
                <div className="text-muted-foreground">ROI médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
