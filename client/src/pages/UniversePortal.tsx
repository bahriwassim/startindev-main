import { Rocket, Palette, Users, TrendingUp, Star, Zap, Globe, Camera } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function UniversePortal() {
  const eBusinessApps = [
    {
      title: "MarketPlace Hub",
      description: "Centre de gestion e-commerce complet avec analytics avancés",
      icon: <TrendingUp className="h-8 w-8" />,
      path: "/ebusiness/marketplace-hub",
      features: ["Dashboard analytics", "Gestion produits", "Commandes temps réel", "Marketing intégré"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Influencer Dashboard",
      description: "Plateforme complète pour créateurs de contenu et influenceurs",
      icon: <Star className="h-8 w-8" />,
      path: "/ebusiness/influencer-dashboard",
      features: ["Analytics audience", "Gestion collaborations", "Planning contenu", "Revenus tracking"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "E-commerce Platform",
      description: "Solution e-commerce traditionnelle avec outils avancés",
      icon: <Rocket className="h-8 w-8" />,
      path: "/ebusiness/ecommerce-platform",
      features: ["Boutique en ligne", "Paiements sécurisés", "SEO optimisé", "Multi-langues"],
      color: "from-green-500 to-teal-600"
    }
  ];

  const entertainmentApps = [
    {
      title: "EventMaster Pro",
      description: "Gestionnaire d'événements professionnel avec billetterie intégrée",
      icon: <Users className="h-8 w-8" />,
      path: "/entertainment/event-master-pro",
      features: ["Gestion participants", "QR Code check-in", "Analytics temps réel", "Marketing événementiel"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Creative Hub",
      description: "Studio de création multimédia pour photos, vidéos et audio",
      icon: <Palette className="h-8 w-8" />,
      path: "/entertainment/creative-hub",
      features: ["Montage vidéo", "Retouche photo", "Studio audio", "Bibliothèque cloud"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "LiveStreaming Studio",
      description: "Studio de diffusion en direct multi-plateformes",
      icon: <Camera className="h-8 w-8" />,
      path: "/entertainment/live-streaming-studio",
      features: ["Multi-streaming", "Chat interactif", "Analytics live", "Gestion scènes"],
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">StartInDev Universe</h1>
                <p className="text-xs text-muted-foreground">Portail des applications professionnelles</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">Retour accueil</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Univers StartInDev
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Découvrez notre écosystème complet d'applications professionnelles pour l'e-business et l'entertainment
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">6 Applications</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">2 Univers</Badge>
              <Badge className="text-sm px-4 py-2 bg-gradient-to-r from-primary to-purple-600">Toujours à jour</Badge>
            </div>
          </div>

          {/* E-Business Universe */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Univers E-Business</h2>
                <p className="text-muted-foreground">Solutions complètes pour le commerce en ligne et le marketing digital</p>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {eBusinessApps.map((app, i) => (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${app.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${app.color} text-white group-hover:scale-110 transition-transform`}>
                        {app.icon}
                      </div>
                      <Badge variant="secondary">Nouveau</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{app.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {app.features.map((feature, j) => (
                        <div key={j} className="flex items-center text-sm text-muted-foreground">
                          <Zap className="h-3 w-3 mr-2 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link href={app.path}>
                      <Button className={`w-full bg-gradient-to-r ${app.color} hover:opacity-90 transition-opacity`}>
                        Ouvrir l'application
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Entertainment Universe */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full mr-4">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Univers Entertainment</h2>
                <p className="text-muted-foreground">Outils créatifs et de gestion pour l'événementiel et les médias</p>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {entertainmentApps.map((app, i) => (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${app.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${app.color} text-white group-hover:scale-110 transition-transform`}>
                        {app.icon}
                      </div>
                      <Badge variant="secondary">Pro</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{app.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {app.features.map((feature, j) => (
                        <div key={j} className="flex items-center text-sm text-muted-foreground">
                          <Zap className="h-3 w-3 mr-2 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link href={app.path}>
                      <Button className={`w-full bg-gradient-to-r ${app.color} hover:opacity-90 transition-opacity`}>
                        Ouvrir l'application
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Access */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Accès rapide</h2>
              <p className="text-muted-foreground">Liens directs vers les sections principales</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/ebusiness">
                <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-500 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold">E-Business</h3>
                    <p className="text-sm text-muted-foreground">Vue d'ensemble</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/entertainment">
                <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <Palette className="h-8 w-8 mx-auto mb-3 text-purple-500 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold">Entertainment</h3>
                    <p className="text-sm text-muted-foreground">Vue d'ensemble</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/groupe">
                <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-3 text-green-500 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold">Groupe</h3>
                    <p className="text-sm text-muted-foreground">À propos</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-3 text-orange-500 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold">Documentation</h3>
                  <p className="text-sm text-muted-foreground">Guides & API</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Prêt à commencer ?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Explorez nos applications et découvrez comment StartInDev peut transformer votre activité
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                    <Rocket className="h-5 w-5 mr-2" />
                    Commencer maintenant
                  </Button>
                  <Button size="lg" variant="outline">
                    <Users className="h-5 w-5 mr-2" />
                    Contacter l'équipe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}