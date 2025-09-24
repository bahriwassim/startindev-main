import { Rocket, Palette, Zap, TrendingUp, Code, Search, Users, Mail, Package, CreditCard, Globe, Link as LinkIcon, Check, Target, Eye, ArrowRight } from "lucide-react";
import EBusinessLayout from "../components/EBusinessLayout";

export default function ECommerce() {
  return (
    <EBusinessLayout currentPage="apercu">
      <div className="min-h-screen bg-white">
      {/* Hero Section - Creative Asymmetric Layout */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="text-white" size={24} />
                </div>
                <div className="px-4 py-2 bg-[#105740]/10 rounded-full">
                  <span className="text-[#105740] font-semibold text-sm">E-Business Expert</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-slate-900">Partenaire</span>
                <br />
                <span className="text-[#105740]">
                  E-Business
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Stratégie, contenu, technologie au service de votre croissance digitale. Transformez votre vision en boutique en ligne performante.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <div className="w-2 h-2 bg-[#105740] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">ROI garanti 4x</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <Zap size={14} className="text-[#105740]" />
                  <span className="text-sm font-medium text-slate-700">Livraison 48h</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <Check size={14} className="text-[#105740]" />
                  <span className="text-sm font-medium text-slate-700">Expertise certifiée</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#105740] rounded-3xl blur-2xl opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern e-business workspace" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#105740]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#105740] rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-white" size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">+320%</div>
                      <div className="text-xs text-slate-500">Croissance CA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Overview */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#105740]/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#105740] mb-4" data-testid="pillars-title">
                Notre approche E‑Business
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Conseil stratégique, exécution créative et solutions techniques pour accélérer votre croissance e‑commerce.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center fade-in stagger-1 bg-white rounded-2xl p-6 border border-[#105740]/20" data-testid="pillar-strategy">
                <div className="bg-[#105740]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="text-2xl text-[#105740]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#105740] mb-4">Stratégie Marketing</h3>
                <p className="text-slate-600">Publicité en ligne, SEO et optimisation Amazon pour booster vos ventes</p>
              </div>
              
              <div className="text-center fade-in stagger-2 bg-white rounded-2xl p-6 border border-[#105740]/20" data-testid="pillar-content">
                <div className="bg-[#105740]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="text-2xl text-[#105740]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#105740] mb-4">Création de Contenu</h3>
                <p className="text-slate-600">Production photos et vidéos produits pour valoriser votre catalogue</p>
              </div>
              
              <div className="text-center fade-in stagger-3 bg-white rounded-2xl p-6 border border-[#105740]/20" data-testid="pillar-tech">
                <div className="bg-[#105740]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="text-2xl text-[#105740]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#105740] mb-4">Solutions Techniques</h3>
                <p className="text-slate-600">Sites e-commerce sur mesure et landing pages optimisées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#105740] mb-4" data-testid="solutions-title">
              Nos services E‑Business
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#105740]/20 card-hover" data-testid="solution-marketing">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-2xl text-[#105740] mr-3" size={28} />
                <h3 className="text-xl font-bold text-[#105740]">Stratégie Marketing</h3>
              </div>
              <p className="text-slate-600 mb-4">Boostez votre visibilité et vos ventes avec nos campagnes digitales</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Google Ads & Facebook/Instagram Ads</li>
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Optimisation des ventes Amazon</li>
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Référencement SEO e-commerce</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#105740]/20 card-hover" data-testid="solution-content">
              <div className="flex items-center mb-4">
                <Palette className="text-2xl text-[#105740] mr-3" size={28} />
                <h3 className="text-xl font-bold text-[#105740]">Création de Contenu</h3>
              </div>
              <p className="text-slate-600 mb-4">Mettez en valeur vos produits avec du contenu visuel professionnel</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Photos et vidéos produits</li>
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Mise en avant visuelle pages produits</li>
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Contenu pour réseaux sociaux</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#105740]/20 card-hover" data-testid="solution-tech">
              <div className="flex items-center mb-4">
                <Code className="text-2xl text-[#105740] mr-3" size={28} />
                <h3 className="text-xl font-bold text-[#105740]">Solutions Techniques</h3>
              </div>
              <p className="text-slate-600 mb-4">Sites e-commerce performants et pages de vente optimisées</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Sites e-commerce sur mesure</li>
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Landing pages de vente</li>
                <li className="flex items-center"><Check className="text-[#105740] mr-2" size={16} />Pages produits optimisées</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#105740] mb-4" data-testid="features-title">
              Fonctionnalités clés
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#105740]/20">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center bg-white rounded-2xl p-4 border border-[#105740]/20" data-testid="feature-catalog">
                <div className="bg-[#105740]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-[#105740]" size={24} />
                </div>
                <h4 className="font-semibold text-[#105740] mb-2">Gestion catalogue</h4>
                <p className="text-sm text-slate-600">Catalogue et stock en temps réel</p>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-4 border border-[#105740]/20" data-testid="feature-payments">
                <div className="bg-[#105740]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-[#105740]" size={24} />
                </div>
                <h4 className="font-semibold text-[#105740] mb-2">Paiements sécurisés</h4>
                <p className="text-sm text-slate-600">Toutes les méthodes de paiement</p>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-4 border border-[#105740]/20" data-testid="feature-multilang">
                <div className="bg-[#105740]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-[#105740]" size={24} />
                </div>
                <h4 className="font-semibold text-[#105740] mb-2">Multi-langue</h4>
                <p className="text-sm text-slate-600">Sites internationaux</p>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-4 border border-[#105740]/20" data-testid="feature-integrations">
                <div className="bg-[#105740]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LinkIcon className="text-[#105740]" size={24} />
                </div>
                <h4 className="font-semibold text-[#105740] mb-2">Intégrations</h4>
                <p className="text-sm text-slate-600">Marketplaces et outils</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#105740] mb-4" data-testid="portfolio-title">
              Nos réussites clients
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#105740]/20" data-testid="portfolio-jia">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="E-commerce platform with product catalog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#105740] mb-2">Jia Vente</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Conversion:</span>
                    <span className="text-[#105740] font-semibold">+280%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Trafic:</span>
                    <span className="text-[#105740] font-semibold">+210%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">CA:</span>
                    <span className="text-[#105740] font-semibold">+350%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#105740]/20" data-testid="portfolio-tech">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="Electronics e-commerce website with tech products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#105740] mb-2">Tech Store</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Conversion:</span>
                    <span className="text-[#105740] font-semibold">+190%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Trafic:</span>
                    <span className="text-[#105740] font-semibold">+220%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">CA:</span>
                    <span className="text-[#105740] font-semibold">+280%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#105740]/20" data-testid="portfolio-artisan">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="Artisan marketplace with handmade products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#105740] mb-2">Marketplace Artisan</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Conversion:</span>
                    <span className="text-[#105740] font-semibold">+300%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Trafic:</span>
                    <span className="text-[#105740] font-semibold">+250%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">CA:</span>
                    <span className="text-[#105740] font-semibold">+400%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Creative Style */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#105740]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl mb-8">
            <Rocket className="text-white" size={20} />
            <span className="font-bold text-sm">E-Business</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Prêt à Lancer Votre
            <br />
            <span className="text-white">
              E-Business ?
            </span>
          </h2>
          
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Transformez votre vision en boutique en ligne performante avec notre expertise complète en stratégie, contenu et technologie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/ebusiness/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
              <Target className="mr-3" size={20} />
              Démarrer mon projet
              <ArrowRight className="ml-3" size={20} />
            </a>
            <a href="https://startindev.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-200">
              <Eye className="mr-3" size={20} />
              Voir Nos Réussites
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Consultation gratuite</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} />
              <span>Réponse sous 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} />
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      </section>
      </div>
    </EBusinessLayout>
  );
}
