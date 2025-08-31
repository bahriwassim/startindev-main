import { Rocket, Palette, Zap, TrendingUp, Code, Search, Users, Mail, Package, CreditCard, Globe, Link as LinkIcon, Check } from "lucide-react";
import logo from "../../../attached_assets/startindev-group.png";

export default function ECommerce() {
  return (
    <div className="min-h-screen">
      {/* Local Page Menu */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border/50 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 text-sm overflow-x-auto">
            <a href="/" className="mr-4 flex items-center">
              <img src={logo} alt="StartInDev" className="h-6 w-auto" />
            </a>
            <a href="/ebusiness" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Aperçu</a>
            <a href="/ebusiness/strategie" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Stratégie</a>
            <a href="/ebusiness/contenu" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Contenu</a>
            <a href="/ebusiness/tech" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Tech</a>
            <a href="/ebusiness/contact" className="ml-auto px-3 py-2 btn-secondary">Contact</a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="ebusiness-gradient pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg" data-testid="ecommerce-hero-title">
                Votre partenaire e-commerce pour une croissance digitale réussie
              </h1>
              <p className="text-xl mb-8 text-white/95 drop-shadow-md leading-relaxed" data-testid="ecommerce-hero-subtitle">
                Stratégie, contenu, technologie au service de votre boutique en ligne
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://startindev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-white text-primary hover:bg-accent px-8 py-4 text-lg inline-flex items-center justify-center"
                  data-testid="ecommerce-hero-cta"
                >
                  <Rocket className="mr-2" size={20} />
                  Commencer maintenant
                </a>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                alt="Modern e-business workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Overview */}
      <section id="overview" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="pillars-title">
              Notre approche E‑Business
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Conseil stratégique, exécution créative et solutions techniques pour accélérer votre croissance e‑commerce.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in stagger-1" data-testid="pillar-strategy">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-2xl text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Stratégie Marketing</h3>
              <p className="text-muted-foreground">Publicité en ligne, SEO et optimisation Amazon pour booster vos ventes</p>
            </div>
            
            <div className="text-center fade-in stagger-2" data-testid="pillar-content">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="text-2xl text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Création de Contenu</h3>
              <p className="text-muted-foreground">Production photos et vidéos produits pour valoriser votre catalogue</p>
            </div>
            
            <div className="text-center fade-in stagger-3" data-testid="pillar-tech">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="text-2xl text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Solutions Techniques</h3>
              <p className="text-muted-foreground">Sites e-commerce sur mesure et landing pages optimisées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="solutions-title">
              Nos services E‑Business
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover" data-testid="solution-marketing">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-2xl text-primary mr-3" size={28} />
                <h3 className="text-xl font-bold text-foreground">Stratégie Marketing</h3>
              </div>
              <p className="text-muted-foreground mb-4">Boostez votre visibilité et vos ventes avec nos campagnes digitales</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center"><Check className="text-primary mr-2" size={16} />Google Ads & Facebook/Instagram Ads</li>
                <li className="flex items-center"><Check className="text-primary mr-2" size={16} />Optimisation des ventes Amazon</li>
                <li className="flex items-center"><Check className="text-primary mr-2" size={16} />Référencement SEO e-commerce</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover" data-testid="solution-content">
              <div className="flex items-center mb-4">
                <Palette className="text-2xl text-secondary mr-3" size={28} />
                <h3 className="text-xl font-bold text-foreground">Création de Contenu</h3>
              </div>
              <p className="text-muted-foreground mb-4">Mettez en valeur vos produits avec du contenu visuel professionnel</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center"><Check className="text-secondary mr-2" size={16} />Photos et vidéos produits</li>
                <li className="flex items-center"><Check className="text-secondary mr-2" size={16} />Mise en avant visuelle pages produits</li>
                <li className="flex items-center"><Check className="text-secondary mr-2" size={16} />Contenu pour réseaux sociaux</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover" data-testid="solution-tech">
              <div className="flex items-center mb-4">
                <Code className="text-2xl text-accent mr-3" size={28} />
                <h3 className="text-xl font-bold text-foreground">Solutions Techniques</h3>
              </div>
              <p className="text-muted-foreground mb-4">Sites e-commerce performants et pages de vente optimisées</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center"><Check className="text-accent mr-2" size={16} />Sites e-commerce sur mesure</li>
                <li className="flex items-center"><Check className="text-accent mr-2" size={16} />Landing pages de vente</li>
                <li className="flex items-center"><Check className="text-accent mr-2" size={16} />Pages produits optimisées</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="features-title">
              Fonctionnalités clés
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="feature-catalog">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Gestion catalogue</h4>
              <p className="text-sm text-muted-foreground">Catalogue et stock en temps réel</p>
            </div>
            
            <div className="text-center" data-testid="feature-payments">
              <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-secondary" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Paiements sécurisés</h4>
              <p className="text-sm text-muted-foreground">Toutes les méthodes de paiement</p>
            </div>
            
            <div className="text-center" data-testid="feature-multilang">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-accent" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Multi-langue</h4>
              <p className="text-sm text-muted-foreground">Sites internationaux</p>
            </div>
            
            <div className="text-center" data-testid="feature-integrations">
              <div className="bg-destructive/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <LinkIcon className="text-destructive" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Intégrations</h4>
              <p className="text-sm text-muted-foreground">Marketplaces et outils</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="portfolio-title">
              Nos réussites clients
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border" data-testid="portfolio-jia">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="E-commerce platform with product catalog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Jia Vente</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversion:</span>
                    <span className="text-primary font-semibold">+280%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trafic:</span>
                    <span className="text-secondary font-semibold">+210%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CA:</span>
                    <span className="text-accent font-semibold">+350%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border" data-testid="portfolio-tech">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="Electronics e-commerce website with tech products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Tech Store</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversion:</span>
                    <span className="text-primary font-semibold">+190%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trafic:</span>
                    <span className="text-secondary font-semibold">+220%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CA:</span>
                    <span className="text-accent font-semibold">+280%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border" data-testid="portfolio-artisan">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="Artisan marketplace with handmade products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Marketplace Artisan</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversion:</span>
                    <span className="text-primary font-semibold">+300%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trafic:</span>
                    <span className="text-secondary font-semibold">+250%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CA:</span>
                    <span className="text-accent font-semibold">+400%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 ebusiness-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
            Lancez votre e-commerce avec StartInDev Groupe
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-subtitle">
            Transformez votre vision en boutique en ligne performante
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://startindev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-primary hover:bg-accent px-8 py-4 text-lg inline-flex items-center justify-center"
              data-testid="cta-button"
            >
              <Rocket className="mr-2" size={20} />
              Démarrer mon projet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
