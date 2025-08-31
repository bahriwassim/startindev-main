import { Users, Heart, MessageCircle, Share2, TrendingUp, Star, Camera, Video, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function InfluencerDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Star className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">Influencer Hub</h1>
                <p className="text-xs text-muted-foreground">Tableau de bord créateur</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="default" className="bg-gradient-to-r from-pink-500 to-purple-600">Premium</Badge>
              <Button variant="outline" size="sm">Créer du contenu</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Followers Total</CardTitle>
                <Users className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">125.7K</div>
                <p className="text-xs opacity-90">+5.2% cette semaine</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-500 to-pink-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement Moyen</CardTitle>
                <Heart className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.4%</div>
                <p className="text-xs opacity-90">Très bon taux</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenus du mois</CardTitle>
                <TrendingUp className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€3,240</div>
                <p className="text-xs opacity-90">+12% vs mois dernier</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Collaborations</CardTitle>
                <Award className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs opacity-90">5 en cours</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="content">Contenu</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
              <TabsTrigger value="monetization">Monétisation</TabsTrigger>
              <TabsTrigger value="planning">Planning</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Mes Contenus</h2>
                <div className="space-x-2">
                  <Button variant="outline"><Camera className="h-4 w-4 mr-2" />Photo</Button>
                  <Button><Video className="h-4 w-4 mr-2" />Vidéo</Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Camera className="h-12 w-12 mx-auto mb-2" />
                          <p className="text-sm">Contenu #{i}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{i % 2 === 0 ? 'Instagram' : 'TikTok'}</Badge>
                        <span className="text-xs text-muted-foreground">Il y a {i}h</span>
                      </div>
                      <p className="text-sm font-medium mb-2">Post #{i} - Collaboration marque</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center"><Heart className="h-3 w-3 mr-1" />{Math.floor(Math.random() * 5000 + 1000)}</span>
                          <span className="flex items-center"><MessageCircle className="h-3 w-3 mr-1" />{Math.floor(Math.random() * 100 + 10)}</span>
                          <span className="flex items-center"><Share2 className="h-3 w-3 mr-1" />{Math.floor(Math.random() * 50 + 5)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Analytics & Performance</h2>
                <Button variant="outline">Rapport complet</Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance par plateforme</CardTitle>
                    <CardDescription>Évolution des followers par réseau</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span>Instagram</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">78.2K</div>
                          <div className="text-xs text-green-600">+3.2%</div>
                        </div>
                      </div>
                      <Progress value={78} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>TikTok</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">35.8K</div>
                          <div className="text-xs text-green-600">+8.1%</div>
                        </div>
                      </div>
                      <Progress value={35} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span>YouTube</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">11.7K</div>
                          <div className="text-xs text-green-600">+2.4%</div>
                        </div>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Données démographiques</CardTitle>
                    <CardDescription>Profil de votre audience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">18-24 ans</span>
                          <span className="text-sm font-medium">42%</span>
                        </div>
                        <Progress value={42} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">25-34 ans</span>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <Progress value={35} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">35-44 ans</span>
                          <span className="text-sm font-medium">18%</span>
                        </div>
                        <Progress value={18} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">45+ ans</span>
                          <span className="text-sm font-medium">5%</span>
                        </div>
                        <Progress value={5} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="collaborations" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Collaborations</h2>
                <Button><Target className="h-4 w-4 mr-2" />Nouvelle demande</Button>
              </div>

              <div className="grid gap-4">
                {[
                  { brand: "Fashion Nova", status: "En cours", value: "€850", deadline: "15 Jan" },
                  { brand: "Nike Training", status: "Négociation", value: "€1,200", deadline: "22 Jan" },
                  { brand: "Sephora", status: "Terminé", value: "€650", deadline: "Livré" },
                  { brand: "Daniel Wellington", status: "En attente", value: "€400", deadline: "28 Jan" },
                ].map((collab, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{collab.brand}</h3>
                            <p className="text-sm text-muted-foreground">Collaboration produit + story</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-lg">{collab.value}</div>
                          <Badge 
                            variant={collab.status === "Terminé" ? "default" : collab.status === "En cours" ? "secondary" : "outline"}
                          >
                            {collab.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {collab.deadline}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monetization" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Revenus & Monétisation</h2>
                <Button variant="outline">Demander paiement</Button>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenus du mois</CardTitle>
                    <CardDescription>Janvier 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">€3,240</div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +12%
                      </div>
                      <span className="text-muted-foreground">vs mois dernier</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>En attente de paiement</CardTitle>
                    <CardDescription>Montants à recevoir</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">€1,650</div>
                    <div className="text-sm text-muted-foreground">3 collaborations terminées</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenu moyen par post</CardTitle>
                    <CardDescription>Basé sur 30 derniers jours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">€180</div>
                    <div className="text-sm text-muted-foreground">18 posts ce mois</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Sources de revenus</CardTitle>
                  <CardDescription>Répartition de vos gains</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Posts sponsorisés</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={65} className="w-24" />
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Codes promo/affiliation</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={25} className="w-24" />
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Contenu exclusif</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={10} className="w-24" />
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="planning" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Planning de contenu</h2>
                <Button>Programmer un post</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Cette semaine</CardTitle>
                    <CardDescription>Planning du 15 au 21 Janvier</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { day: "Lun", content: "Story collaboration Nike", time: "10:00" },
                      { day: "Mar", content: "Post OOTD", time: "14:00" },
                      { day: "Mer", content: "Reel makeup routine", time: "18:00" },
                      { day: "Jeu", content: "Story Q&A followers", time: "20:00" },
                      { day: "Ven", content: "Post weekend outfit", time: "16:00" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">{item.day}</Badge>
                          <span className="text-sm">{item.content}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{item.time}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Idées de contenu</CardTitle>
                    <CardDescription>Inspirations pour vos prochains posts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Routine matinale healthy",
                      "Try on haul nouvelle collection",
                      "Behind the scenes shooting",
                      "Favoris beauté du mois",
                      "Get ready with me soirée",
                    ].map((idea, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded">
                        <span className="text-sm">{idea}</span>
                        <Button variant="ghost" size="sm">Utiliser</Button>
                      </div>
                    ))}
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