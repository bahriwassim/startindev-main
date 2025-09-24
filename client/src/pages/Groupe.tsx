import { Building, Hotel, ShoppingCart, PartyPopper, Users, Target, Lightbulb, ArrowRight } from "lucide-react";
import logo from "../../../attached_assets/startindev-group.png";
import { Button } from "@/components/ui/button";

export default function Groupe() {
  return (
    <div className="min-h-screen">
      {/* Local Page Menu */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border/50 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 text-sm overflow-x-auto">
            <a href="/" className="mr-4 flex items-center">
              <img src={logo} alt="Start In Dev" className="h-6 w-auto" />
            </a>
            <a href="#intro" className="px-3 py-2 text-muted-foreground hover:text-primary">Intro</a>
            <a href="#poles" className="px-3 py-2 text-muted-foreground hover:text-primary">Pôles</a>
            <a href="#trust" className="px-3 py-2 text-muted-foreground hover:text-primary">Références</a>
            <a href="/groupe/contact" className="ml-auto px-3 py-2 btn-secondary">Contact</a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="hero-gradient pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/20">
                <Building className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg" data-testid="groupe-hero-title">
              L’expertise digitale à 360° au service de vos projets
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-md" data-testid="groupe-hero-subtitle">
              Trois domaines, un savoir-faire, une même exigence.
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto text-white/90" data-testid="groupe-hero-tagline">
              Chez Start In Dev Group, nous mettons notre expertise digitale au service de trois grands univers : l’hospitalité, le e-business et l’événementiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://startindev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary border-2 border-white rounded-2xl px-8 py-4 text-lg font-bold inline-flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                data-testid="groupe-hero-cta"
              >
                <Target className="mr-2" size={20} />
                Découvrir notre approche
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="intro" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="groupe-intro">
              Chez Start In Dev Group, nous mettons notre expertise digitale au service de trois grands univers : 
              l'hospitalité, le e-business et l'événementiel. Que vous soyez un hôtelier, un e-commerçant ou 
              un professionnel de l'événementiel, nous vous accompagnons avec les mêmes standards de qualité 
              et de personnalisation.
            </p>
          </div>
        </div>
      </section>

      {/* Three Poles of Expertise */}
      <section id="poles" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="poles-title">
              Nos trois pôles d'expertise
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Hospitality */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/50 card-hover" data-testid="pole-hospitality">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6">
                <Hotel className="text-2xl text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">🏨 Hôtellerie</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous aidons les hôtels à développer leur visibilité digitale, à créer des contenus visuels 
                impactants et à déployer des solutions technologiques sur mesure pour enrichir l'expérience client.
              </p>
              <div className="text-center">
                <a
                  href="https://startindev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                  data-testid="button-hospitality-expertise"
                >
                  <ArrowRight className="mr-2" size={16} />
                  En savoir plus
                </a>
              </div>
            </div>

            {/* E-commerce */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/50 card-hover" data-testid="pole-ecommerce">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mx-auto mb-6">
                <ShoppingCart className="text-2xl text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">🛒 E-Business</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Pour les e-commerçants, nous apportons notre savoir-faire en stratégie webmarketing, en création 
                de contenu produit et en développement de solutions techniques pour booster vos ventes et 
                optimiser votre présence en ligne.
              </p>
              <div className="text-center">
                <a
                  href="/ebusiness"
                  className="btn-primary inline-flex items-center"
                  data-testid="button-ecommerce-expertise"
                >
                  <ArrowRight className="mr-2" size={16} />
                  Voir nos solutions
                </a>
              </div>
            </div>

            {/* Entertainment */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/50 card-hover" data-testid="pole-entertainment">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-6">
                <PartyPopper className="text-2xl text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">🎉 Événementiel</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous accompagnons les professionnels qui souhaitent développer leur activité événementielle : 
                création d'événements, communication, mise en place de billetterie en ligne, production photo 
                et vidéo… Tout pour faire rayonner vos projets.
              </p>
              <div className="text-center">
                <a
                  href="/entertainment"
                  className="btn-primary inline-flex items-center"
                  data-testid="button-entertainment-expertise"
                >
                  <ArrowRight className="mr-2" size={16} />
                  Découvrir nos services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8" data-testid="trust-title">
            Nos clients nous font confiance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-muted-foreground text-lg font-semibold px-6 py-3 bg-card rounded-lg border border-border">
              Jia Vente
            </div>
            <div className="text-muted-foreground text-lg font-semibold px-6 py-3 bg-card rounded-lg border border-border">
              Gipsy Events
            </div>
            <div className="text-muted-foreground text-lg font-semibold px-6 py-3 bg-card rounded-lg border border-border">
              Garden Party Pro
            </div>
            <div className="text-muted-foreground text-lg font-semibold px-6 py-3 bg-card rounded-lg border border-border">
              + de 50 clients
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg" data-testid="cta-title">
            Prêt à développer votre projet digital ?
          </h2>
          <p className="text-xl mb-8 text-white/95 drop-shadow-md" data-testid="cta-subtitle">
            Découvrez comment notre expertise peut transformer votre activité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://startindev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary border-2 border-white rounded-2xl px-8 py-4 text-lg font-bold inline-flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
              data-testid="cta-button"
            >
              <Users className="mr-2" size={20} />
              Parlons de votre projet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}