import { Camera, Video, Palette, Music, Mic, Edit3, Play, Download, Upload, Users, Award, Zap, Sparkles, Image, Film, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CreativeStudio() {
  const services = [
    {
      icon: Camera,
      title: "Production Photo",
      description: "Shooting professionnel et retouche créative",
      features: ["Portraits artistiques", "Photos événementielles", "Produit & lifestyle", "Retouche avancée"],
      projects: 150,
      color: "primary"
    },
    {
      icon: Video,
      title: "Réalisation Vidéo",
      description: "Clips, documentaires et contenu digital",
      features: ["Clips musicaux", "Films corporate", "Contenu social media", "Motion design"],
      projects: 89,
      color: "secondary"
    },
    {
      icon: Music,
      title: "Production Audio",
      description: "Enregistrement, mixage et mastering",
      features: ["Enregistrement studio", "Mixage professionnel", "Mastering audio", "Sound design"],
      projects: 67,
      color: "accent"
    },
    {
      icon: Palette,
      title: "Design Créatif",
      description: "Identité visuelle et créations graphiques",
      features: ["Logo & branding", "Affiches événements", "Merchandising", "Packaging"],
      projects: 234,
      color: "destructive"
    }
  ];

  const portfolio = [
    {
      title: "Clip 'Neon Dreams'",
      category: "Vidéo Musicale",
      client: "Electric Pulse",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      views: "2.3M",
      duration: "3:45",
      type: "video"
    },
    {
      title: "Festival Summer Vibes",
      category: "Photographie",
      client: "Music Festival",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
      views: "450K",
      shots: "500+",
      type: "photo"
    },
    {
      title: "Album 'City Lights'",
      category: "Production Audio",
      client: "Urban Sound",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      streams: "1.8M",
      tracks: "12",
      type: "audio"
    },
    {
      title: "Brand Identity 'Creative Lab'",
      category: "Design Graphique",
      client: "StartUp Creative",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      impact: "+300%",
      elements: "25+",
      type: "design"
    }
  ];

  const equipment = [
    {
      category: "Caméras",
      items: ["RED Komodo 6K", "Sony FX9", "Canon R5C", "DJI FPV Drone"],
      icon: Video
    },
    {
      category: "Audio",
      items: ["Neumann U87", "SSL Console", "Pro Tools HD", "Genelec Monitors"],
      icon: Headphones
    },
    {
      category: "Éclairage",
      items: ["ARRI SkyPanel", "Aputure 600D", "LED Tubes RGB", "Smokers & Haze"],
      icon: Zap
    },
    {
      category: "Post-Production",
      items: ["DaVinci Resolve Studio", "After Effects", "Logic Pro X", "Photoshop CC"],
      icon: Edit3
    }
  ];

  const team = [
    {
      name: "Alex Vision",
      role: "Réalisateur / DOP",
      speciality: "Clips musicaux & Documentaires",
      experience: "12 ans",
      projects: 200,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
    {
      name: "Maya Sound",
      role: "Ingénieure Son",
      speciality: "Production & Mixage",
      experience: "8 ans", 
      projects: 150,
      image: "https://images.unsplash.com/photo-1494790108755-2616b2c9b4b7?w=200"
    },
    {
      name: "Leo Frame",
      role: "Photographe",
      speciality: "Portrait & Événementiel",
      experience: "10 ans",
      projects: 300,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    },
    {
      name: "Zoe Creative",
      role: "Designer Graphique",
      speciality: "Branding & Motion Design",
      experience: "6 ans",
      projects: 180,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    }
  ];

  const stats = [
    { label: "Projets créatifs", value: "500+", icon: Sparkles },
    { label: "Clients satisfaits", value: "200+", icon: Users },
    { label: "Awards remportés", value: "25+", icon: Award },
    { label: "Millions de vues", value: "50M+", icon: Play }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920"
            alt="Creative studio setup"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-accent text-black">Creative Studio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Créons ensemble
              <br />
              <span className="text-accent">l'extraordinaire</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Studio créatif multidisciplinaire : photo, vidéo, audio et design au service de vos projets artistiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-black hover:bg-accent/90">
                <Play className="mr-2" size={20} />
                Voir notre showreel
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos expertises créatives
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              De l'idée à la réalisation, nous donnons vie à vos projets artistiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className={`bg-${service.color}/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`text-${service.color}`} size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full bg-${service.color} mr-2`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center pt-4 border-t">
                    <Badge variant="outline">{service.projects} projets réalisés</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Portfolio créatif
            </h2>
            <p className="text-muted-foreground text-lg">
              Découvrez quelques-unes de nos réalisations les plus marquantes
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="video">Vidéo</TabsTrigger>
              <TabsTrigger value="photo">Photo</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolio.map((project, index) => (
                  <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                          <Play size={16} className="mr-1" />
                          Voir
                        </Button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge>{project.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        {project.type === "video" && <Video className="text-white" size={20} />}
                        {project.type === "photo" && <Camera className="text-white" size={20} />}
                        {project.type === "audio" && <Music className="text-white" size={20} />}
                        {project.type === "design" && <Palette className="text-white" size={20} />}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-foreground mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                      <div className="flex justify-between items-center text-xs">
                        {project.views && <span>{project.views} vues</span>}
                        {project.shots && <span>{project.shots} photos</span>}
                        {project.streams && <span>{project.streams} écoutes</span>}
                        {project.impact && <span>{project.impact} impact</span>}
                        {project.duration && <span>{project.duration}</span>}
                        {project.tracks && <span>{project.tracks} titres</span>}
                        {project.elements && <span>{project.elements} éléments</span>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other tab contents would filter the portfolio items */}
          </Tabs>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Équipements professionnels
            </h2>
            <p className="text-muted-foreground text-lg">
              Matériel haut de gamme pour des résultats exceptionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((category) => (
              <Card key={category.category}>
                <CardHeader className="text-center">
                  <category.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              L'équipe créative
            </h2>
            <p className="text-muted-foreground text-lg">
              Des artistes passionnés aux compétences complémentaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                  />
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.speciality}</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-accent">{member.experience}</div>
                      <div className="text-xs text-muted-foreground">expérience</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">{member.projects}</div>
                      <div className="text-xs text-muted-foreground">projets</div>
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
              Notre processus créatif
            </h2>
            <p className="text-muted-foreground text-lg">
              De l'inspiration à la livraison, chaque étape est soigneusement orchestrée
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">1. Brainstorming</h3>
              <p className="text-sm text-muted-foreground">Exploration créative et définition du concept</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Edit3 className="text-secondary" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">2. Pré-production</h3>
              <p className="text-sm text-muted-foreground">Planification détaillée et préparation</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="text-accent" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">3. Production</h3>
              <p className="text-sm text-muted-foreground">Captation et création du contenu</p>
            </div>

            <div className="text-center">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Edit3 className="text-destructive" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">4. Post-production</h3>
              <p className="text-sm text-muted-foreground">Montage, retouche et finitions</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">5. Livraison</h3>
              <p className="text-sm text-muted-foreground">Formats finaux et diffusion</p>
            </div>
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
            Votre projet mérite une création unique
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discutons de vos idées et créons ensemble quelque chose d'extraordinaire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90">
              <Upload className="mr-2" size={20} />
              Envoyer votre brief
            </Button>
            <Button size="lg" variant="outline">
              Portfolio complet
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Creative Studio</h3>
              <p className="text-muted-foreground mb-4">
                Studio créatif multidisciplinaire depuis 2018
              </p>
              <div className="flex space-x-2">
                <Badge variant="outline">Award Winner</Badge>
                <Badge variant="outline">50M+ Views</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Production vidéo</a></li>
                <li><a href="#" className="hover:text-primary">Photographie</a></li>
                <li><a href="#" className="hover:text-primary">Production audio</a></li>
                <li><a href="#" className="hover:text-primary">Design graphique</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Spécialités</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Clips musicaux</a></li>
                <li><a href="#" className="hover:text-primary">Films corporate</a></li>
                <li><a href="#" className="hover:text-primary">Contenu social media</a></li>
                <li><a href="#" className="hover:text-primary">Branding créatif</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>creative@startindev-studio.com</li>
                <li>+33 1 34 56 78 90</li>
                <li>Studio Paris & Lyon</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 StartInDev Creative Studio. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}