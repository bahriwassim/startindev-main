import { Rocket, Lightbulb, Target, TrendingUp, Users, Zap, Award, CheckCircle, ArrowRight, Star, Globe, Smartphone, Search, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function DigitalAgency() {
  const services = [
    {
      icon: Search,
      title: "SEO & Référencement",
      description: "Positionnement optimal sur Google",
      features: ["Audit SEO complet", "Optimisation technique", "Content marketing", "Link building"],
      color: "primary"
    },
    {
      icon: Target,
      title: "Publicité Digitale",
      description: "Campagnes Google Ads & Social Media",
      features: ["Google Ads", "Facebook/Instagram Ads", "LinkedIn Ads", "Remarketing"],
      color: "secondary"
    },
    {
      icon: Smartphone,
      title: "Sites Web & Apps",
      description: "Développement sur mesure",
      features: ["Sites e-commerce", "Applications mobiles", "PWA", "UX/UI Design"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Analytics & Data",
      description: "Mesure de performance",
      features: ["Google Analytics", "Dashboards", "Rapports", "KPI tracking"],
      color: "destructive"
    }
  ];

  const caseStudies = [
    {
      client: "TechStore Pro",
      sector: "E-commerce",
      challenge: "Augmenter les ventes en ligne",
      results: {
        traffic: "+280%",
        conversions: "+190%",
        revenue: "+350%"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      duration: "6 mois"
    },
    {
      client: "Wellness Spa",
      sector: "Bien-être",
      challenge: "Développer la présence digitale",
      results: {
        traffic: "+220%",
        conversions: "+145%",
        revenue: "+200%"
      },
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
      duration: "8 mois"
    },
    {
      client: "Restaurant Gastronomique",
      sector: "Restauration",
      challenge: "Réservations en ligne",
      results: {
        traffic: "+180%",
        conversions: "+160%",
        revenue: "+240%"
      },
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
      duration: "4 mois"
    }
  ];

  const team = [
    {
      name: "Sarah Digital",
      role: "Directrice Stratégie",
      speciality: "SEO & Analytics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2c9b4b7?w=200",
      experience: "8 ans"
    },
    {
      name: "Thomas Code",
      role: "Lead Developer",
      speciality: "Full Stack & Mobile",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
      experience: "10 ans"
    },
    {
      name: "Emma Creative",
      role: "Designer UX/UI",
      speciality: "Design & Conversion",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      experience: "6 ans"
    },
    {
      name: "Alex Growth",
      role: "Growth Hacker",
      speciality: "Acquisition & Retention",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      experience: "7 ans"
    }
  ];

  const stats = [
    { label: "Projets réalisés", value: "200+", icon: Award },
    { label: "Clients satisfaits", value: "150+", icon: Users },
    { label: "ROI moyen généré", value: "285%", icon: TrendingUp },
    { label: "Années d'expérience", value: "12+", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">StartInDev Digital Agency</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Votre partenaire digital
              <br />
              <span className="text-accent">de confiance</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Stratégie, créativité et expertise technique pour propulser votre business en ligne
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Rocket className="mr-2" size={20} />
                Démarrer un projet
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos expertises digitales
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des solutions complètes pour transformer votre présence digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className={`bg-${service.color}/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`text-${service.color}`} size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle className={`text-${service.color} mr-2`} size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos réussites clients
            </h2>
            <p className="text-muted-foreground text-lg">
              Des résultats concrets qui parlent d'eux-mêmes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.client} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.client}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge>{study.sector}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {study.client}
                    <Badge variant="outline">{study.duration}</Badge>
                  </CardTitle>
                  <CardDescription>{study.challenge}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{study.results.traffic}</div>
                      <div className="text-xs text-muted-foreground">Trafic</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">{study.results.conversions}</div>
                      <div className="text-xs text-muted-foreground">Conversions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{study.results.revenue}</div>
                      <div className="text-xs text-muted-foreground">Revenus</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre méthode éprouvée
            </h2>
            <p className="text-muted-foreground text-lg">
              Un processus structuré pour des résultats garantis
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Audit & Stratégie</h3>
              <p className="text-muted-foreground">
                Analyse complète de votre situation actuelle et définition des objectifs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Planification</h3>
              <p className="text-muted-foreground">
                Création d'un plan d'action détaillé avec timeline et KPIs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Exécution</h3>
              <p className="text-muted-foreground">
                Mise en œuvre rapide et efficace des actions définies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-destructive" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">4. Optimisation</h3>
              <p className="text-muted-foreground">
                Analyse continue et optimisations pour maximiser les performances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre équipe d'experts
            </h2>
            <p className="text-muted-foreground text-lg">
              Des professionnels passionnés au service de vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.speciality}</p>
                  <Badge variant="outline">{member.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à transformer votre business ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discutons de vos objectifs et créons ensemble votre stratégie digitale gagnante
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Rocket className="mr-2" size={20} />
              Démarrer maintenant
            </Button>
            <Button size="lg" variant="outline">
              Audit gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">StartInDev Digital</h3>
              <p className="text-muted-foreground mb-4">
                Votre agence digitale de référence depuis 2012
              </p>
              <div className="flex space-x-2">
                <Badge variant="outline">Certifié Google</Badge>
                <Badge variant="outline">Meta Partner</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">SEO & Référencement</a></li>
                <li><a href="#" className="hover:text-primary">Publicité digitale</a></li>
                <li><a href="#" className="hover:text-primary">Développement web</a></li>
                <li><a href="#" className="hover:text-primary">Analytics & Data</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Secteurs</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">E-commerce</a></li>
                <li><a href="#" className="hover:text-primary">SaaS & Tech</a></li>
                <li><a href="#" className="hover:text-primary">Santé & Bien-être</a></li>
                <li><a href="#" className="hover:text-primary">Finance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>hello@startindev-digital.com</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris, Lyon, Marseille</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 StartInDev Digital Agency. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}