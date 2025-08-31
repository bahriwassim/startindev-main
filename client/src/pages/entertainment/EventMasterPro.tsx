import { Calendar, Users, MapPin, Clock, QrCode, BarChart3, Camera, Ticket, Star, Settings, Plus, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function EventMasterPro() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Calendar className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">EventMaster Pro</h1>
                <p className="text-xs text-muted-foreground">Gestionnaire d'événements professionnel</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-pink-600">Premium</Badge>
              <Button><Plus className="h-4 w-4 mr-2" />Nouvel événement</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Événements Actifs</CardTitle>
                <Calendar className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs opacity-90">3 ce mois-ci</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Participants Total</CardTitle>
                <Users className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,847</div>
                <p className="text-xs opacity-90">+18% ce mois</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenus</CardTitle>
                <Star className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€45,230</div>
                <p className="text-xs opacity-90">Janvier 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
                <CheckCircle className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8/5</div>
                <p className="text-xs opacity-90">Note moyenne</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="events" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="events">Événements</TabsTrigger>
              <TabsTrigger value="calendar">Planning</TabsTrigger>
              <TabsTrigger value="participants">Participants</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="settings">Paramètres</TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Mes Événements</h2>
                <div className="space-x-2">
                  <Button variant="outline">Importer</Button>
                  <Button><Plus className="h-4 w-4 mr-2" />Créer un événement</Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Gala de Fin d'Année 2024",
                    date: "25 Février 2024",
                    location: "Palais des Congrès Paris",
                    participants: 850,
                    status: "En cours",
                    revenue: "€25,500"
                  },
                  {
                    title: "Concert Jazz Underground",
                    date: "15 Mars 2024",
                    location: "Le Trianon, Paris",
                    participants: 420,
                    status: "Planification",
                    revenue: "€12,600"
                  },
                  {
                    title: "Soirée Nouvel An Privée",
                    date: "31 Décembre 2023",
                    location: "Château de Versailles",
                    participants: 650,
                    status: "Terminé",
                    revenue: "€45,000"
                  },
                  {
                    title: "Festival Électro Summer",
                    date: "20 Juin 2024",
                    location: "Parc des Expositions Lyon",
                    participants: 1200,
                    status: "Billetterie ouverte",
                    revenue: "€38,400"
                  }
                ].map((event, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-32 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="h-12 w-12 text-purple-500" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          variant={event.status === "Terminé" ? "default" : event.status === "En cours" ? "secondary" : "outline"}
                        >
                          {event.status}
                        </Badge>
                        <span className="text-sm font-medium text-green-600">{event.revenue}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{event.title}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-2" />
                          {event.participants} participants
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">Modifier</Button>
                        <Button size="sm" className="flex-1">Détails</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Planning des Événements</h2>
                <Button variant="outline">Vue mensuelle</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-7">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                  <div key={day} className="text-center">
                    <div className="font-medium mb-2">{day}</div>
                    <div className="space-y-2">
                      {day === 'Sam' && (
                        <div className="bg-purple-100 p-2 rounded text-xs">
                          <div className="font-medium">Concert Jazz</div>
                          <div className="text-purple-600">20:00</div>
                        </div>
                      )}
                      {day === 'Dim' && (
                        <div className="bg-pink-100 p-2 rounded text-xs">
                          <div className="font-medium">Gala Privé</div>
                          <div className="text-pink-600">19:00</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Événements à venir</CardTitle>
                  <CardDescription>Prochaines échéances importantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Finaliser playlist Concert Jazz", date: "Dans 3 jours", priority: "high" },
                      { title: "Confirmer traiteur Gala", date: "Dans 5 jours", priority: "medium" },
                      { title: "Test technique éclairage", date: "Dans 1 semaine", priority: "high" },
                      { title: "Répétition générale", date: "Dans 2 semaines", priority: "medium" },
                    ].map((task, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${task.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                          <span className="font-medium">{task.title}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{task.date}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="participants" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Gestion des Participants</h2>
                <div className="space-x-2">
                  <Button variant="outline"><QrCode className="h-4 w-4 mr-2" />Scanner</Button>
                  <Button>Inviter</Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Check-in en temps réel</CardTitle>
                    <CardDescription>Gala de Fin d'Année 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold">642</div>
                      <div className="text-sm text-muted-foreground">/ 850 présents</div>
                    </div>
                    <Progress value={76} className="mb-4" />
                    <div className="text-center text-sm text-muted-foreground">
                      76% de taux de présence
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Types de participants</CardTitle>
                    <CardDescription>Répartition par catégorie</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>VIP</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={15} className="w-24" />
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Premium</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={35} className="w-24" />
                          <span className="text-sm font-medium">35%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Standard</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={50} className="w-24" />
                          <span className="text-sm font-medium">50%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Liste des participants</CardTitle>
                  <CardDescription>Participants confirmés pour vos événements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Marie Dubois", email: "marie.dubois@email.com", ticket: "VIP", status: "Présent" },
                      { name: "Jean Martin", email: "jean.martin@email.com", ticket: "Premium", status: "Confirmé" },
                      { name: "Sophie Laurent", email: "sophie.laurent@email.com", ticket: "Standard", status: "En attente" },
                      { name: "Pierre Bernard", email: "pierre.bernard@email.com", ticket: "VIP", status: "Présent" },
                      { name: "Anne Moreau", email: "anne.moreau@email.com", ticket: "Premium", status: "Confirmé" },
                    ].map((participant, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium">{participant.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-medium">{participant.name}</div>
                            <div className="text-xs text-muted-foreground">{participant.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{participant.ticket}</Badge>
                          <Badge 
                            variant={participant.status === "Présent" ? "default" : participant.status === "Confirmé" ? "secondary" : "outline"}
                          >
                            {participant.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Analytics & Performances</h2>
                <Button variant="outline">Rapport complet</Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Évolution des inscriptions</CardTitle>
                    <CardDescription>Inscriptions par jour - 30 derniers jours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded flex items-center justify-center">
                      <BarChart3 className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sources d'inscription</CardTitle>
                    <CardDescription>Canaux d'acquisition des participants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Réseaux sociaux</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={45} className="w-24" />
                          <span className="text-sm font-medium">45%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Site web direct</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={30} className="w-24" />
                          <span className="text-sm font-medium">30%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Bouche à oreille</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={15} className="w-24" />
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Partenaires</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={10} className="w-24" />
                          <span className="text-sm font-medium">10%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Satisfaction clients</CardTitle>
                  <CardDescription>Retours et évaluations des événements passés</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">4.8/5</div>
                      <div className="text-sm text-muted-foreground">Note moyenne</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">94%</div>
                      <div className="text-sm text-muted-foreground">Recommandations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">347</div>
                      <div className="text-sm text-muted-foreground">Avis laissés</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Marketing & Communication</h2>
                <Button>Nouvelle campagne</Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Campagnes actives</CardTitle>
                    <CardDescription>Promotion en cours pour vos événements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Instagram Ads - Concert Jazz</h4>
                        <Badge>Actif</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Portée: </span>
                          <span className="font-medium">15.2K</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Clics: </span>
                          <span className="font-medium">432</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Budget: </span>
                          <span className="font-medium">€150/jour</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Conversions: </span>
                          <span className="font-medium text-green-600">23</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Google Ads - Gala 2024</h4>
                        <Badge variant="secondary">Planifié</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Démarrage: </span>
                          <span className="font-medium">20 Jan</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Budget: </span>
                          <span className="font-medium">€300/jour</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Réseaux sociaux</CardTitle>
                    <CardDescription>Performance de vos posts événementiels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span>Instagram</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">2.4K followers</div>
                          <div className="text-xs text-green-600">+12% ce mois</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>Facebook</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">1.8K abonnés</div>
                          <div className="text-xs text-green-600">+8% ce mois</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span>TikTok</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">950 followers</div>
                          <div className="text-xs text-green-600">+25% ce mois</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Paramètres</h2>
                <Button>Sauvegarder</Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations de l'organisateur</CardTitle>
                    <CardDescription>Vos coordonnées publiques</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Nom de l'entreprise</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="StartInDev Entertainment" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email de contact</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="events@startindev.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Téléphone</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="+33 1 23 45 67 89" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Configurez vos alertes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Nouvelles inscriptions</div>
                        <div className="text-sm text-muted-foreground">Recevoir un email à chaque inscription</div>
                      </div>
                      <Button variant="outline" size="sm">Activé</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Rappels d'événements</div>
                        <div className="text-sm text-muted-foreground">Rappel 24h avant l'événement</div>
                      </div>
                      <Button variant="outline" size="sm">Activé</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Rapports hebdomadaires</div>
                        <div className="text-sm text-muted-foreground">Résumé des performances</div>
                      </div>
                      <Button variant="outline" size="sm">Désactivé</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}