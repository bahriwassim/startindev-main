import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, Users, ShoppingCart, CreditCard, Eye, MousePointer, DollarSign, Target, Calendar, Filter, Download, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MarketingDashboard() {
  const salesData = [
    { month: "Jan", revenue: 45000, orders: 320, visitors: 12500 },
    { month: "Fév", revenue: 52000, orders: 380, visitors: 14200 },
    { month: "Mar", revenue: 48000, orders: 345, visitors: 13800 },
    { month: "Avr", revenue: 61000, orders: 420, visitors: 16500 },
    { month: "Mai", revenue: 58000, orders: 395, visitors: 15800 },
    { month: "Juin", revenue: 67000, orders: 465, visitors: 18200 }
  ];

  const conversionData = [
    { name: "Visiteurs", value: 18200, color: "#3b82f6" },
    { name: "Ajouts panier", value: 2847, color: "#10b981" },
    { name: "Commandes", value: 465, color: "#f59e0b" },
  ];

  const channelData = [
    { name: "Google Ads", visits: 6500, conversions: 195, roi: 285 },
    { name: "Facebook", visits: 4200, conversions: 126, roi: 220 },
    { name: "Instagram", visits: 3800, conversions: 95, roi: 180 },
    { name: "SEO Organique", visits: 2900, conversions: 87, roi: 450 },
    { name: "Email", visits: 800, conversions: 48, roi: 380 }
  ];

  const topProducts = [
    { name: "Smartphone Pro Max", sales: 1240, revenue: 1487600, growth: 12.5 },
    { name: "Casque Audio Premium", sales: 856, revenue: 255840, growth: 8.2 },
    { name: "Montre Connectée Elite", sales: 623, revenue: 279735, growth: 15.7 },
    { name: "Écouteurs Sans Fil", sales: 945, revenue: 141750, growth: -2.1 },
    { name: "Chargeur Rapide", sales: 1580, revenue: 78900, growth: 22.3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard Marketing</h1>
              <p className="text-muted-foreground">Vue d'ensemble des performances e-commerce</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="30">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 derniers jours</SelectItem>
                  <SelectItem value="30">30 derniers jours</SelectItem>
                  <SelectItem value="90">3 derniers mois</SelectItem>
                  <SelectItem value="365">12 derniers mois</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download size={16} className="mr-2" />
                Exporter
              </Button>
              <Button size="sm">
                <RefreshCw size={16} className="mr-2" />
                Actualiser
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chiffre d'affaires</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">67 000€</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+15.3%</span>
                <span>vs mois dernier</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commandes</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">465</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+10.8%</span>
                <span>vs mois dernier</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visiteurs uniques</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">18 200</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+22.1%</span>
                <span>vs mois dernier</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de conversion</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">2.55%</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+0.3%</span>
                <span>vs mois dernier</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Évolution du chiffre d'affaires</CardTitle>
              <CardDescription>Revenus mensuels sur les 6 derniers mois</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}€`, "Revenus"]} />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Conversion Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Entonnoir de conversion</CardTitle>
              <CardDescription>Du visiteur à la commande</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {conversionData.map((stage, index) => (
                  <div key={stage.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{stage.name}</span>
                      <span className="text-sm text-muted-foreground">{stage.value.toLocaleString()}</span>
                    </div>
                    <Progress 
                      value={(stage.value / conversionData[0].value) * 100} 
                      className="h-3"
                    />
                    {index < conversionData.length - 1 && (
                      <div className="text-center mt-2">
                        <Badge variant="outline" className="text-xs">
                          {((conversionData[index + 1].value / stage.value) * 100).toFixed(1)}% conversion
                        </Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Channel Performance */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Performance par canal d'acquisition</CardTitle>
              <CardDescription>Analyse des sources de trafic et ROI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Canal</th>
                      <th className="text-right py-3 px-4">Visites</th>
                      <th className="text-right py-3 px-4">Conversions</th>
                      <th className="text-right py-3 px-4">Taux</th>
                      <th className="text-right py-3 px-4">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channelData.map((channel) => (
                      <tr key={channel.name} className="border-b">
                        <td className="py-3 px-4 font-medium">{channel.name}</td>
                        <td className="py-3 px-4 text-right">{channel.visits.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right">{channel.conversions}</td>
                        <td className="py-3 px-4 text-right">
                          {((channel.conversions / channel.visits) * 100).toFixed(2)}%
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Badge variant={channel.roi >= 300 ? "default" : channel.roi >= 200 ? "secondary" : "outline"}>
                            {channel.roi}%
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
              <CardDescription>Accès direct aux outils</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Target className="mr-2" size={16} />
                Créer une campagne
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Eye className="mr-2" size={16} />
                Analyser l'audience
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <MousePointer className="mr-2" size={16} />
                Test A/B
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2" size={16} />
                Planifier posts
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Filter className="mr-2" size={16} />
                Segmenter clients
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top produits</CardTitle>
            <CardDescription>Produits les plus performants ce mois-ci</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Produit</th>
                    <th className="text-right py-3 px-4">Ventes</th>
                    <th className="text-right py-3 px-4">Revenus</th>
                    <th className="text-right py-3 px-4">Croissance</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product) => (
                    <tr key={product.name} className="border-b">
                      <td className="py-3 px-4 font-medium">{product.name}</td>
                      <td className="py-3 px-4 text-right">{product.sales}</td>
                      <td className="py-3 px-4 text-right">{product.revenue.toLocaleString()}€</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          {product.growth > 0 ? (
                            <TrendingUp className="h-3 w-3 text-green-500" />
                          ) : (
                            <TrendingUp className="h-3 w-3 text-red-500 rotate-180" />
                          )}
                          <span className={product.growth > 0 ? "text-green-500" : "text-red-500"}>
                            {product.growth > 0 ? "+" : ""}{product.growth}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}