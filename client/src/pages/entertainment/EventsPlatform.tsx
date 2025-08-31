import { Calendar, MapPin, Users, Clock, Star, Heart, Share2, Ticket, Music, Theater, Camera, Gamepad2, Filter, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function EventsPlatform() {
  const featuredEvents = [
    {
      id: 1,
      title: "Festival Electronic Dreams",
      date: "2024-09-15",
      time: "20:00",
      location: "Zénith Paris",
      price: 89,
      category: "Musique",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
      attendees: 2847,
      rating: 4.9,
      tags: ["Electronic", "EDM", "Dance"],
      status: "hot"
    },
    {
      id: 2,
      title: "Stand-Up Comedy Night",
      date: "2024-09-20",
      time: "21:00", 
      location: "Théâtre du Châtelet",
      price: 35,
      category: "Spectacle",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
      attendees: 456,
      rating: 4.7,
      tags: ["Comedy", "Humour", "Stand-up"],
      status: "new"
    },
    {
      id: 3,
      title: "Gaming Convention 2024",
      date: "2024-09-25",
      time: "10:00",
      location: "Palais des Congrès",
      price: 25,
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
      attendees: 5623,
      rating: 4.8,
      tags: ["Gaming", "Esports", "Tech"],
      status: "trending"
    },
    {
      id: 4,
      title: "Soirée Jazz & Blues",
      date: "2024-09-28",
      time: "19:30",
      location: "Blue Note Paris",
      price: 45,
      category: "Musique",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600",
      attendees: 189,
      rating: 4.9,
      tags: ["Jazz", "Blues", "Live"],
      status: "exclusive"
    }
  ];

  const categories = [
    { name: "Musique", icon: Music, count: 234, color: "primary" },
    { name: "Spectacle", icon: Theater, count: 156, color: "secondary" },
    { name: "Gaming", icon: Gamepad2, count: 89, color: "accent" },
    { name: "Art & Expo", icon: Camera, count: 67, color: "destructive" }
  ];

  const upcomingEvents = [
    { title: "Concert Symphonique", date: "Oct 5", location: "Opéra Bastille", price: 75 },
    { title: "Projection Ciné Plein Air", date: "Oct 8", location: "Parc des Buttes", price: 12 },
    { title: "Tournoi Esports", date: "Oct 12", location: "Arena Bercy", price: 35 },
    { title: "Exposition Moderne", date: "Oct 15", location: "Centre Pompidou", price: 22 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920"
            alt="Concert atmosphere"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-black border-accent">EventsPro Platform</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Découvrez les meilleurs
              <br />
              <span className="text-accent">événements</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Concerts, spectacles, gaming, expositions... Votre pass pour l'entertainment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Rechercher un événement..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <Button className="bg-accent text-black hover:bg-accent/90">
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <div className={`bg-${category.color}/10 w-12 h-12 rounded-full flex items-center justify-center`}>
                  <category.icon className={`text-${category.color}`} size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} événements</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={16} />
              <span className="text-sm font-medium">Filtres:</span>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Aujourd'hui</SelectItem>
                <SelectItem value="week">Cette semaine</SelectItem>
                <SelectItem value="month">Ce mois</SelectItem>
                <SelectItem value="all">Toutes dates</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Lieu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paris">Paris</SelectItem>
                <SelectItem value="lyon">Lyon</SelectItem>
                <SelectItem value="marseille">Marseille</SelectItem>
                <SelectItem value="all">Toute la France</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Prix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Gratuit</SelectItem>
                <SelectItem value="0-25">0€ - 25€</SelectItem>
                <SelectItem value="25-50">25€ - 50€</SelectItem>
                <SelectItem value="50+">50€+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Événements à la une</h2>
            <p className="text-muted-foreground">Ne manquez pas ces expériences exceptionnelles</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredEvents.slice(0, 2).map((event) => (
              <Card key={event.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant={
                      event.status === "hot" ? "destructive" : 
                      event.status === "new" ? "secondary" :
                      event.status === "trending" ? "default" : "outline"
                    }>
                      {event.status === "hot" ? "🔥 HOT" : 
                       event.status === "new" ? "✨ NEW" :
                       event.status === "trending" ? "📈 TRENDING" : "⭐ EXCLUSIVE"}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Heart size={16} />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Share2 size={16} />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white">{event.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <span className="text-sm font-medium">{event.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin size={14} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{event.price}€</span>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Users size={14} />
                        <span>{event.attendees} participants</span>
                      </div>
                    </div>
                    <Button>
                      <Ticket className="mr-2" size={16} />
                      Réserver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.slice(2).map((event) => (
              <Card key={event.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={
                      event.status === "hot" ? "destructive" : 
                      event.status === "new" ? "secondary" :
                      event.status === "trending" ? "default" : "outline"
                    }>
                      {event.status === "hot" ? "🔥" : 
                       event.status === "new" ? "✨" :
                       event.status === "trending" ? "📈" : "⭐"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white text-xs">{event.category}</Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <span>{event.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{event.price}€</span>
                    <Button size="sm">Réserver</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Sidebar */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Tendances du moment</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="text-primary" size={20} />
                      <CardTitle className="text-lg">Top Genres</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Electronic Music</span>
                      <Badge variant="outline">+25%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Gaming Events</span>
                      <Badge variant="outline">+18%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Stand-up Comedy</span>
                      <Badge variant="outline">+12%</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-secondary" size={20} />
                      <CardTitle className="text-lg">Lieux populaires</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Zénith Paris</span>
                      <Badge variant="outline">42 events</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Palais des Sports</span>
                      <Badge variant="outline">38 events</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Olympia</span>
                      <Badge variant="outline">29 events</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">À venir</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2">{event.title}</h4>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                          <Calendar size={12} />
                          <span>{event.date}</span>
                          <MapPin size={12} />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-primary">{event.price}€</div>
                        <Button size="sm" variant="outline" className="mt-1 text-xs">
                          Voir
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Voir tous les événements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ne manquez rien</h2>
          <p className="text-xl mb-8 opacity-90">
            Recevez les derniers événements et offres exclusives directement par email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Votre email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-accent text-black hover:bg-accent/90">
              S'abonner
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">EventsPro</h3>
              <p className="text-muted-foreground mb-4">
                La plateforme de référence pour découvrir et réserver vos événements
              </p>
              <div className="flex space-x-2">
                <Badge variant="outline">100k+ events</Badge>
                <Badge variant="outline">Paiement sécurisé</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Catégories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Concerts</a></li>
                <li><a href="#" className="hover:text-primary">Spectacles</a></li>
                <li><a href="#" className="hover:text-primary">Gaming</a></li>
                <li><a href="#" className="hover:text-primary">Expositions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Billetterie</a></li>
                <li><a href="#" className="hover:text-primary">Organisation d'événements</a></li>
                <li><a href="#" className="hover:text-primary">Gestion de salles</a></li>
                <li><a href="#" className="hover:text-primary">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-primary">Remboursements</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Organisateurs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EventsPro - StartInDev Entertainment Universe. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}