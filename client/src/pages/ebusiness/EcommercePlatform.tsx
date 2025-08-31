import { ShoppingCart, CreditCard, Truck, Shield, Globe, Star, Users, TrendingUp, Package, Search, Filter, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function EcommercePlatform() {
  const products = [
    {
      id: 1,
      name: "Smartphone Pro Max",
      price: 1199,
      originalPrice: 1399,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      rating: 4.8,
      reviews: 2847,
      category: "Tech",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Casque Audio Premium",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      rating: 4.6,
      reviews: 1523,
      category: "Audio",
      badge: "25% OFF"
    },
    {
      id: 3,
      name: "Montre Connectée Elite",
      price: 449,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      rating: 4.9,
      reviews: 3291,
      category: "Wearables",
      badge: "Nouveau"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">TechStore Pro</h1>
              <Badge variant="secondary">E-Business Universe</Badge>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Rechercher des produits..." 
                  className="pl-10 w-80 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Heart size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 relative">
                <ShoppingCart size={20} />
                <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">3</Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex space-x-8">
              <a href="#" className="text-primary font-medium">Tous les produits</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Smartphones</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Audio</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Wearables</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Accessoires</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Truck size={16} />
                <span>Livraison gratuite dès 50€</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield size={16} />
                <span>Paiement sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Découvrez les dernières innovations tech
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Plus de 10,000 produits high-tech avec livraison express et garantie premium
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <ShoppingCart className="mr-2" size={20} />
                  Explorer le catalogue
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Offres spéciales
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" 
                alt="Shopping experience" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-accent text-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500 fill-current" size={20} />
                  <span className="font-bold">4.9/5</span>
                </div>
                <p className="text-sm">+15,000 avis clients</p>
              </div>
            </div>
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
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="tech">Tech</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="wearables">Wearables</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Prix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous prix</SelectItem>
                <SelectItem value="0-100">0€ - 100€</SelectItem>
                <SelectItem value="100-500">100€ - 500€</SelectItem>
                <SelectItem value="500+">500€+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popularité</SelectItem>
                <SelectItem value="price-asc">Prix croissant</SelectItem>
                <SelectItem value="price-desc">Prix décroissant</SelectItem>
                <SelectItem value="rating">Note</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Produits vedettes</h2>
            <p className="text-muted-foreground">Découvrez notre sélection de produits les plus populaires</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={product.badge === "Bestseller" ? "default" : product.badge === "Nouveau" ? "secondary" : "destructive"}>
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Eye size={16} />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{product.name}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}€</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}€</span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">
                    <ShoppingCart className="mr-2" size={16} />
                    Ajouter au panier
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">50K+</h3>
              <p className="text-muted-foreground">Clients satisfaits</p>
            </div>
            <div>
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-secondary" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">10K+</h3>
              <p className="text-muted-foreground">Produits disponibles</p>
            </div>
            <div>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-accent" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">99.8%</h3>
              <p className="text-muted-foreground">Satisfaction client</p>
            </div>
            <div>
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-destructive" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">25+</h3>
              <p className="text-muted-foreground">Pays de livraison</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ne manquez aucune nouveauté</h2>
          <p className="text-xl mb-8 opacity-90">
            Recevez nos offres exclusives et découvrez les derniers produits tech en avant-première
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Votre email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
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
              <h3 className="font-bold text-foreground mb-4">TechStore Pro</h3>
              <p className="text-muted-foreground mb-4">
                Votre destination tech de confiance depuis 2020
              </p>
              <div className="flex space-x-2">
                <Badge variant="outline">Livraison 24h</Badge>
                <Badge variant="outline">SAV Premium</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Catégories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Smartphones</a></li>
                <li><a href="#" className="hover:text-primary">Audio & Son</a></li>
                <li><a href="#" className="hover:text-primary">Montres connectées</a></li>
                <li><a href="#" className="hover:text-primary">Accessoires</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Livraison express</a></li>
                <li><a href="#" className="hover:text-primary">Installation</a></li>
                <li><a href="#" className="hover:text-primary">Garantie étendue</a></li>
                <li><a href="#" className="hover:text-primary">SAV</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Paiement sécurisé</h4>
              <div className="flex items-center space-x-2 mb-4">
                <CreditCard className="text-muted-foreground" size={24} />
                <Shield className="text-muted-foreground" size={24} />
              </div>
              <p className="text-sm text-muted-foreground">
                Paiements sécurisés par SSL et cryptage 256 bits
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TechStore Pro - StartInDev E-Business Universe. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}