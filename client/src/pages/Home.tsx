import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Wrench, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Wrench,
      title: "Riparazione",
      description: "Interventi rapidi e professionali per risolvere qualsiasi problema alla tua caldaia Vaillant."
    },
    {
      icon: Shield,
      title: "Manutenzione",
      description: "Controlli periodici e manutenzione programmata per garantire efficienza e sicurezza."
    },
    {
      icon: Clock,
      title: "Installazione",
      description: "Installazione certificata di nuove caldaie Vaillant con garanzia e assistenza completa."
    }
  ];

  const brands = [
    { name: "Vaillant", featured: true },
    { name: "Ariston", featured: false },
    { name: "Baxi", featured: false },
    { name: "Immergas", featured: false },
    { name: "Junkers", featured: false },
    { name: "Ferroli", featured: false },
    { name: "Beretta", featured: false },
    { name: "Riello", featured: false }
  ];

  const features = [
    "Tecnici certificati e qualificati",
    "Interventi rapidi entro 24h",
    "Ricambi originali garantiti",
    "Preventivi gratuiti e trasparenti",
    "Assistenza telefonica dedicata",
    "Servizio disponibile 7 giorni su 7"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">GF Impianti</h1>
              <p className="text-sm md:text-base opacity-90">Centro Assistenza Caldaie Vaillant a Milano</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+390212345678" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">02 1234 5678</span>
              </a>
              <a href="tel:+390212345678" className="sm:hidden">
                <Button size="sm" variant="secondary">
                  <Phone className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Assistenza Specializzata Caldaie Vaillant a Milano
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
              Riparazione, manutenzione e installazione di caldaie Vaillant. Tecnici certificati, interventi rapidi e ricambi originali garantiti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg font-semibold" asChild>
                <a href="tel:+390212345678">
                  <Phone className="w-5 h-5 mr-2" />
                  Chiama Ora
                </a>
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-semibold" asChild>
                <a href="mailto:info@gfimpianti.it">
                  <Mail className="w-5 h-5 mr-2" />
                  Richiedi Preventivo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">I Nostri Servizi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Offriamo un servizio completo per la tua caldaia Vaillant, dalla manutenzione ordinaria alle riparazioni urgenti
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">Marchi Trattati</h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Specializzati in caldaie Vaillant, ci occupiamo anche di altre marche leader del settore come Ariston, Baxi e Immergas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {brands.map((brand, index) => (
              <Card 
                key={index} 
                className={`${brand.featured ? 'border-accent border-2 bg-card shadow-lg' : 'bg-card/50'} hover:shadow-md transition-all duration-300`}
              >
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className={`font-bold text-lg ${brand.featured ? 'text-accent text-xl' : 'text-card-foreground'}`}>
                      {brand.name}
                    </p>
                    {brand.featured && (
                      <span className="text-xs text-accent/80 font-medium mt-1 block">Specializzati</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Perché Sceglierci</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hai Bisogno di Assistenza?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Contattaci subito per un intervento rapido o per richiedere un preventivo gratuito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg font-semibold" asChild>
              <a href="tel:+390212345678">
                <Phone className="w-5 h-5 mr-2" />
                02 1234 5678
              </a>
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-semibold" asChild>
              <a href="mailto:info@gfimpianti.it">
                <Mail className="w-5 h-5 mr-2" />
                info@gfimpianti.it
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GF Impianti</h3>
              <p className="opacity-90 leading-relaxed">
                Centro assistenza specializzato in caldaie Vaillant a Milano. Riparazione, manutenzione e installazione.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contatti</h3>
              <div className="space-y-3">
                <a href="tel:+390212345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Phone className="w-5 h-5" />
                  <span>02 1234 5678</span>
                </a>
                <a href="mailto:info@gfimpianti.it" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Mail className="w-5 h-5" />
                  <span>info@gfimpianti.it</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Milano e provincia</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Orari</h3>
              <div className="space-y-2 opacity-90">
                <p>Lunedì - Venerdì: 8:00 - 19:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p>Domenica: Su appuntamento</p>
                <p className="text-accent font-semibold mt-3">Pronto intervento 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="text-center space-y-2">
              <p className="text-sm opacity-80">
                <strong>Disclaimer:</strong> GF Impianti è un centro assistenza indipendente specializzato in caldaie Vaillant. 
                Non siamo affiliati, collegati o autorizzati da Vaillant Group. Il nome "Vaillant" viene utilizzato esclusivamente 
                a carattere informativo per indicare la nostra specializzazione nel servizio di assistenza per prodotti di questo marchio.
              </p>
              <p className="text-sm opacity-70">
                © {new Date().getFullYear()} GF Impianti. Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
