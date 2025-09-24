import { Link } from "wouter";
import { Rocket, ShoppingCart, Music, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo-icon.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/20">
                <img src={logo} alt="Start In Dev" className="w-24 h-24 object-contain" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-blue-hero" data-testid="hero-title">
              Start In Dev Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-hero-subtitle" data-testid="hero-subtitle">
              Des solutions digitales sur mesure pour vos univers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ebusiness">
                <Button className="bg-[#105740] text-white border-2 border-[#105740] rounded-2xl px-8 py-4 text-lg font-bold inline-flex items-center justify-center transition-all duration-300 hover:bg-green-700 hover:text-white hover:border-green-700 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 mr-4" data-testid="hero-cta-ebusiness">
                  <ShoppingCart className="mr-2" size={20} />
                  E-Business
                </Button>
              </Link>
              <Link href="/entertainment">
                <Button className="bg-[#105740] text-white border-2 border-[#105740] rounded-2xl px-8 py-4 text-lg font-bold inline-flex items-center justify-center transition-all duration-300 hover:bg-green-700 hover:text-white hover:border-green-700 hover:shadow-2xl hover:-translate-y-1 hover:scale-105" data-testid="hero-cta-entertainment">
                  <Music className="mr-2" size={20} />
                  Entertainment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-primary mb-4" data-testid="services-title">
              Nos domaines d'expertise
            </h2>
            <p className="text-xl text-green-secondary max-w-2xl mx-auto" data-testid="services-subtitle">
              Découvrez nos solutions spécialisées pour chaque secteur d'activité
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* E-Commerce Card */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl card-hover fade-in stagger-1 border border-border/50" data-testid="card-ecommerce">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Modern e-commerce interface with shopping experience"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="text-2xl text-primary mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-green-primary">E-Business</h3>
                </div>
                <p className="text-green-secondary mb-6 leading-relaxed" data-testid="ecommerce-description">
                  Votre partenaire e-commerce pour une croissance digitale réussie. Stratégie, contenu, technologie au service de votre boutique en ligne.
                </p>
                <Link href="/ebusiness">
                  <Button className="btn-primary inline-flex items-center" data-testid="button-ecommerce">
                    <ArrowRight className="mr-2" size={16} />
                    Explorer E-Business
                  </Button>
                </Link>
              </div>
            </div>

            {/* Entertainment Card */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl card-hover fade-in stagger-2 border border-border/50" data-testid="card-entertainment">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Concert festival with crowd and stage lighting"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Music className="text-2xl text-accent mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-green-primary">Entertainment</h3>
                </div>
                <p className="text-green-secondary mb-6 leading-relaxed" data-testid="entertainment-description">
                  Votre partenaire pour dynamiser vos événements. Création, communication et solutions digitales pour valoriser vos projets événementiels.
                </p>
                <Link href="/entertainment">
                  <Button className="btn-primary inline-flex items-center" data-testid="button-entertainment">
                    <ArrowRight className="mr-2" size={16} />
                    Découvrir Entertainment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
