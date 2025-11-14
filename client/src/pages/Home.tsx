import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Wrench, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Wrench,
      title: "Riparazione",
      description: "Interventi rapidi e professionali per risolvere qualsiasi problema alla tua caldaia Vaillant.",
      image: "/images/boiler-maintenance.jpg"
    },
    {
      icon: Shield,
      title: "Manutenzione",
      description: "Controlli periodici e manutenzione programmata per garantire efficienza e sicurezza.",
      image: "/images/vaillant-boiler.jpg"
    },
    {
      icon: Clock,
      title: "Installazione",
      description: "Installazione certificata di nuove caldaie Vaillant con garanzia e assistenza completa.",
      image: "/images/boiler-installation.jpg"
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
      {/* Header - Ottimizzato per mobile */}
      <header className="bg-primary text-primary-foreground py-3 md:py-4 sticky top-0 z-50 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">GF Impianti</h1>
              <p className="text-xs sm:text-sm md:text-base opacity-90 truncate">Centro Assistenza Caldaie Vaillant</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a href="tel:+39800745695" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="font-semibold">800 745695</span>
              </a>
              <a href="tel:+39800745695" className="sm:hidden">
                <Button size="sm" variant="secondary" className="h-9 px-3">
                  <Phone className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Ottimizzato per mobile */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/hero-technician.jpg" 
            alt="Tecnico specializzato caldaie" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Assistenza Specializzata Caldaie Vaillant a Milano
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 leading-relaxed">
              Riparazione, manutenzione e installazione di caldaie Vaillant. Tecnici certificati, interventi rapidi e ricambi originali garantiti.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg font-semibold h-12 sm:h-auto" asChild>
                <a href="tel:+39800745695">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Chiama Ora - 800 745695</span>
                </a>
              </Button>
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg font-semibold h-12 sm:h-auto" asChild>
                <a href="mailto:info@gfimpianti.it">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Richiedi Preventivo</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Ottimizzato per mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-4">I Nostri Servizi</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Offriamo un servizio completo per la tua caldaia Vaillant, dalla manutenzione ordinaria alle riparazioni urgenti
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden group">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section - Ottimizzato per mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-secondary-foreground px-4">Marchi Trattati</h2>
            <p className="text-base sm:text-lg text-secondary-foreground/80 max-w-2xl mx-auto px-4">
              Specializzati in caldaie Vaillant, ci occupiamo anche di altre marche leader del settore come Ariston, Baxi e Immergas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {brands.map((brand, index) => (
              <Card 
                key={index} 
                className={`${brand.featured ? 'border-accent border-2 bg-card shadow-lg' : 'bg-card/50'} hover:shadow-md transition-all duration-300`}
              >
                <CardContent className="p-4 sm:p-6 flex items-center justify-center min-h-[80px] sm:min-h-[100px]">
                  <div className="text-center">
                    <p className={`font-bold text-base sm:text-lg ${brand.featured ? 'text-accent sm:text-xl' : 'text-card-foreground'}`}>
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

      {/* Features Section - Ottimizzato per mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-4">Perché Sceglierci</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 sm:p-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ottimizzato per mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">Hai Bisogno di Assistenza?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95 px-4">
            Contattaci subito per un intervento rapido o per richiedere un preventivo gratuito
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg font-semibold h-12 sm:h-auto" asChild>
              <a href="tel:+39800745695">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>800 745695</span>
              </a>
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg font-semibold h-12 sm:h-auto" asChild>
              <a href="mailto:info@gfimpianti.it">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>info@gfimpianti.it</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Ottimizzato per mobile */}
      <footer className="bg-primary/95 text-primary-foreground py-8 sm:py-12">
        <div className="container">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-6 sm:mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">GF Impianti</h3>
              <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                Centro assistenza specializzato in caldaie Vaillant a Milano. Riparazione, manutenzione e installazione.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contatti</h3>
              <div className="space-y-2 sm:space-y-3">
                <a href="tel:+39800745695" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>800 745695</span>
                </a>
                <a href="mailto:info@gfimpianti.it" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-base break-all">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>info@gfimpianti.it</span>
                </a>
                <div className="flex items-start gap-2 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span>Milano e provincia</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Orari</h3>
              <div className="space-y-1 sm:space-y-2 opacity-90 text-sm sm:text-base">
                <p>Lunedì - Venerdì: 8:00 - 19:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p>Domenica: Su appuntamento</p>
                <p className="text-accent font-semibold mt-2 sm:mt-3 text-sm sm:text-base">Pronto intervento 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
            <div className="text-center space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed px-2">
                <strong>Disclaimer:</strong> GF Impianti è un centro assistenza indipendente specializzato in caldaie Vaillant. 
                Non siamo affiliati, collegati o autorizzati da Vaillant Group. Il nome "Vaillant" viene utilizzato esclusivamente 
                a carattere informativo per indicare la nostra specializzazione nel servizio di assistenza per prodotti di questo marchio.
              </p>
              <p className="text-xs sm:text-sm opacity-70">
                © {new Date().getFullYear()} GF Impianti. Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button - Solo mobile */}
      <a 
        href="tel:+39800745695"
        className="fixed bottom-6 right-6 sm:hidden bg-accent text-accent-foreground rounded-full p-4 shadow-2xl hover:scale-110 transition-transform z-50 animate-pulse"
        aria-label="Chiama ora"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
