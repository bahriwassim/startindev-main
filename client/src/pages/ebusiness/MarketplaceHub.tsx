import { ShoppingCart, Users, BarChart, Settings, Package, TrendingUp, DollarSign, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function MarketplaceHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">MarketPlace Hub</h1>
                <p className="text-xs text-muted-foreground">Centre de gestion e-commerce</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Pro Plan</Badge>
              <Button variant="outline" size="sm">Support</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ventes totales</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45 320 €</div>
                <p className="text-xs text-muted-foreground">+20.1% depuis le mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Commandes</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% depuis le mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taux de conversion</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5%</div>
                <p className="text-xs text-muted-foreground">+19% depuis le mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visiteurs actifs</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 depuis la semaine</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="products" className="space-y-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="products">Produits</TabsTrigger>
              <TabsTrigger value="orders">Commandes</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Paramètres</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Gestion des produits</h2>
                <Button>Ajouter un produit</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="aspect-square bg-muted rounded-md mb-2"></div>
                      <CardTitle className="text-base">Produit #{i}</CardTitle>
                      <CardDescription>Description du produit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">€{(Math.random() * 100 + 10).toFixed(2)}</span>
                        <Badge variant="outline">En stock</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Commandes récentes</h2>
                <Button variant="outline">Exporter</Button>
              </div>

              <div className="rounded-md border">
                <div className="p-4">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded">
                        <div>
                          <p className="font-medium">Commande #{1000 + i}</p>
                          <p className="text-sm text-muted-foreground">Client #{i}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">€{(Math.random() * 200 + 50).toFixed(2)}</p>
                          <Badge className="mt-1" variant={i % 3 === 0 ? "default" : i % 2 === 0 ? "secondary" : "outline"}>
                            {i % 3 === 0 ? "Livré" : i % 2 === 0 ? "En cours" : "En attente"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Campagnes Marketing</h2>
                <Button>Nouvelle campagne</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Google Ads</CardTitle>
                    <CardDescription>Campagne publicitaire en cours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Budget quotidien:</span>
                        <span className="font-medium">€50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CTR:</span>
                        <span className="font-medium text-green-600">2.34%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conversions:</span>
                        <span className="font-medium">23</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Facebook/Instagram</CardTitle>
                    <CardDescription>Campagne sociale active</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Portée:</span>
                        <span className="font-medium">12.5K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Engagement:</span>
                        <span className="font-medium text-green-600">4.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Clics:</span>
                        <span className="font-medium">387</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Analyses et Rapports</h2>
                <Button variant="outline">Télécharger rapport</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance des ventes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded flex items-center justify-center">
                      <BarChart className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sources de trafic</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Recherche organique</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }}></div>
                          </div>
                          <span className="text-sm font-medium">68%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Publicité payante</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-secondary h-2 rounded-full" style={{ width: '24%' }}></div>
                          </div>
                          <span className="text-sm font-medium">24%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Réseaux sociaux</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: '8%' }}></div>
                          </div>
                          <span className="text-sm font-medium">8%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Paramètres de la boutique</h2>
                <Button>Sauvegarder</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations générales</CardTitle>
                    <CardDescription>Configurez les informations de base de votre boutique</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Nom de la boutique</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="Ma Boutique" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description</label>
                      <textarea className="w-full mt-1 p-2 border rounded h-20" defaultValue="Description de ma boutique"></textarea>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Paiements et livraison</CardTitle>
                    <CardDescription>Configurez vos options de paiement et de livraison</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Frais de livraison</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="5.99" type="number" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">TVA (%)</label>
                      <input className="w-full mt-1 p-2 border rounded" defaultValue="20" type="number" />
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