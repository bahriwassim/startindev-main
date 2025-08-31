import { Play, Lightbulb, Settings, Heart, Globe, Video, Ticket, CircuitBoard, UserPlus, QrCode, BarChart3, Share, Check, Users } from "lucide-react";
import logo from "../../../attached_assets/startindev-group.png";

export default function Entertainment() {
  return (
    <div className="min-h-screen">
      {/* Local Page Menu */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border/50 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 text-sm overflow-x-auto">
            <a href="/" className="mr-4 flex items-center">
              <img src={logo} alt="StartInDev" className="h-6 w-auto" />
            </a>
            <a href="/entertainment" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Aperçu</a>
            <a href="/entertainment/creation" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Création</a>
            <a href="/entertainment/communication" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Communication</a>
            <a href="/entertainment/digital" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Digital</a>
            <a href="/entertainment/contact" className="ml-auto px-3 py-2 btn-secondary">Contact</a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 text-white overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0 entertainment-gradient"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg" data-testid="entertainment-hero-title">
              Votre partenaire pour dynamiser vos événements
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/95 drop-shadow-md" data-testid="entertainment-hero-subtitle">
              Création, communication et solutions digitales pour valoriser vos projets événementiels
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://startindev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center"
                data-testid="entertainment-hero-cta"
              >
                <Play className="mr-2" size={20} />
                Découvrir nos solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Overview */}
      <section id="overview" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="approach-title">
              Notre approche Événementielle
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Conseil, communication et solutions digitales pour créer des expériences qui marquent.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in stagger-1" data-testid="pillar-creativity">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-2xl text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Créativité</h3>
              <p className="text-muted-foreground">Des concepts innovants pour marquer les esprits</p>
            </div>
            
            <div className="text-center fade-in stagger-2" data-testid="pillar-technology">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="text-2xl text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Technologie</h3>
              <p className="text-muted-foreground">Solutions techniques de pointe pour vos événements</p>
            </div>
            
            <div className="text-center fade-in stagger-3" data-testid="pillar-experience">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-2xl text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Expérience</h3>
              <p className="text-muted-foreground">Moments inoubliables pour votre audience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="solutions-title">
              Nos solutions événementielles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover" data-testid="solution-creation">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-2xl text-primary mr-3" size={28} />
                <h3 className="text-xl font-bold text-foreground">Création d'événements</h3>
              </div>
              <p className="text-muted-foreground mb-4">De l'idée à la réalisation, nous créons vos événements sur mesure</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center"><Check className="text-primary mr-2" size={16} />Conception et organisation sur mesure</li>
                <li className="flex items-center"><Check className="text-primary mr-2" size={16} />Billetterie en ligne intégrée</li>
                <li className="flex items-center"><Check className="text-primary mr-2" size={16} />Production photo et vidéo</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover" data-testid="solution-communication">
              <div className="flex items-center mb-4">
                <Users className="text-2xl text-secondary mr-3" size={28} />
                <h3 className="text-xl font-bold text-foreground">Communication Événementielle</h3>
              </div>
              <p className="text-muted-foreground mb-4">Stratégie de communication complète pour maximiser l'impact</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center"><Check className="text-secondary mr-2" size={16} />Stratégie de communication globale</li>
                <li className="flex items-center"><Check className="text-secondary mr-2" size={16} />Campagnes publicitaires (réseaux, Google Ads)</li>
                <li className="flex items-center"><Check className="text-secondary mr-2" size={16} />Pages événementielles dédiées</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover" data-testid="solution-digital">
              <div className="flex items-center mb-4">
                <Globe className="text-2xl text-accent mr-3" size={28} />
                <h3 className="text-xl font-bold text-foreground">Solutions Digitales</h3>
              </div>
              <p className="text-muted-foreground mb-4">Outils numériques pour gérer et optimiser vos événements</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center"><Check className="text-accent mr-2" size={16} />Mini-sites et landing pages événements</li>
                <li className="flex items-center"><Check className="text-accent mr-2" size={16} />Outils de gestion et suivi</li>
                <li className="flex items-center"><Check className="text-accent mr-2" size={16} />Analytics événementiels</li>
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
              Fonctionnalités essentielles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="feature-registration">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Inscription en ligne</h4>
              <p className="text-sm text-muted-foreground">Gestion complète des participants</p>
            </div>
            
            <div className="text-center" data-testid="feature-qrcode">
              <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="text-secondary" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">QR Codes</h4>
              <p className="text-sm text-muted-foreground">Check-in rapide et sécurisé</p>
            </div>
            
            <div className="text-center" data-testid="feature-analytics">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-accent" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Analytics temps réel</h4>
              <p className="text-sm text-muted-foreground">Statistiques et rapports</p>
            </div>
            
            <div className="text-center" data-testid="feature-social">
              <div className="bg-destructive/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share className="text-destructive" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Réseaux sociaux</h4>
              <p className="text-sm text-muted-foreground">Intégration sociale complète</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="portfolio-title">
              Nos projets marquants
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border" data-testid="portfolio-gipsy">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="New Year party celebration with elegant atmosphere"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Gipsy Soirée Nouvel An</h3>
                <p className="text-sm text-muted-foreground mb-4">Événement festif + billetterie en ligne</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Participants:</span>
                  <span className="text-primary font-semibold">800+</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border" data-testid="portfolio-garden">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="Outdoor garden party with elegant decoration"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Garden Party</h3>
                <p className="text-sm text-muted-foreground mb-4">Événement en plein air + gestion invités</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Participants:</span>
                  <span className="text-secondary font-semibold">450+</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border" data-testid="portfolio-corporate">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="Corporate business event with networking"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Événement Corporate</h3>
                <p className="text-sm text-muted-foreground mb-4">Gala de fin d'année + AR</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Participants:</span>
                  <span className="text-accent font-semibold">1,200+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 entertainment-gradient"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
            Digitalisez vos événements avec StartInDev Groupe
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-subtitle">
            Créez des expériences exceptionnelles qui marquent les esprits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://startindev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center"
              data-testid="cta-button"
            >
              <Play className="mr-2" size={20} />
              Lancer mon événement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
