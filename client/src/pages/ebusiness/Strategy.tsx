import { Search, Target, TrendingUp, BarChart3, Globe, Zap, CheckCircle, ArrowRight, Users, ShoppingCart, DollarSign, LineChart, Briefcase, Award, Lightbulb, Star, Eye, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import EBusinessLayout from "../../components/EBusinessLayout";

export default function EBusinessStrategy() {
  return (
    <EBusinessLayout currentPage="strategie">
      <div className="min-h-screen bg-background">

      {/* Hero Section - Creative Asymmetric Layout */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div className="px-4 py-2 bg-[#105740]/10 rounded-full">
                  <span className="text-[#105740] font-semibold text-sm">Stratégie Marketing Pro</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-slate-900">Stratégie Marketing</span>
                <br />
                <span className="text-[#105740]">
                  Data-Driven
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Accélérez votre croissance avec des campagnes publicitaires intelligentes, une optimisation marketplace avancée et un référencement e-commerce qui convertit.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <div className="w-2 h-2 bg-[#105740] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">ROAS garanti 4x</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <Zap size={14} className="text-[#105740]" />
                  <span className="text-sm font-medium text-slate-700">Setup en 48h</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <Star size={14} className="text-[#105740]" />
                  <span className="text-sm font-medium text-slate-700">Expertise certifiée</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#105740] rounded-3xl blur-2xl opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Stratégie marketing" 
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

      {/* Marketing Services Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-[#105740]/10 px-6 py-3 rounded-2xl mb-8">
              <Target className="text-[#105740]" size={20} />
              <span className="text-[#105740] font-bold text-sm">Solutions Marketing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Expertise Data-Driven
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Optimisez chaque canal d'acquisition avec des stratégies basées sur la data et des outils d'analyse avancés
            </p>
          </div>

          {/* Creative Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* Google Ads Section */}
            <div className="lg:col-span-7">
              <div className="bg-[#105740]/5 rounded-3xl p-8 lg:p-12 h-full">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                        <Target className="text-white" size={24} />
                      </div>
                      <div className="bg-[#105740]/10 text-[#105740] px-4 py-2 rounded-full text-sm font-bold">
                        Acquisition Payante
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Google & Meta Ads</h3>
                    <p className="text-lg text-slate-700 mb-8">
                      Campagnes multi-canaux avec ciblage comportemental avancé et optimisation algorithmique temps réel
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#105740] rounded-full"></div>
                      Google Ads Pro
                    </h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Search, Shopping & Performance Max</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Smart Bidding & Attribution</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Lookalike Audiences avancées</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#105740] rounded-full"></div>
                      Meta Business Suite
                    </h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Catalog & Dynamic Product Ads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Conversion API & iOS 14.5+</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Creative Testing automatisé</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#105740] mb-1">4.2x</div>
                      <div className="text-sm text-slate-600">ROAS Moyen</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#105740] mb-1">-35%</div>
                      <div className="text-sm text-slate-600">Réduction CPC</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#105740] mb-1">48h</div>
                      <div className="text-sm text-slate-600">Setup campagnes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amazon Section */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 h-full border border-[#105740]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                    <ShoppingCart className="text-white" size={20} />
                  </div>
                  <div className="bg-[#105740]/10 text-[#105740] px-3 py-2 rounded-full text-sm font-bold">
                    Amazon Marketplace
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">E-commerce & PPC</h3>
                <p className="text-slate-700 mb-8">
                  Maximisation visibilité produits et optimisation conversions avec expertise algorithme Amazon A10
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <ShoppingCart className="text-[#105740]" size={16} />
                      Optimisation Marketplace
                    </h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div>• SEO Amazon & Keyword Research</div>
                      <div>• A+ Content & Brand Store</div>
                      <div>• Sponsored Products & Brands</div>
                      <div>• ACoS & TACoS Optimization</div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#105740]/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Croissance ventes</span>
                      <span className="font-bold text-[#105740]">+180%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="bg-[#105740]/5 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                    <Search className="text-white" size={24} />
                  </div>
                  <div className="bg-[#105740]/10 text-[#105740] px-4 py-2 rounded-full text-sm font-bold">
                    SEO E-commerce
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-6">Référencement Naturel</h3>
                <p className="text-lg text-slate-700 mb-8">
                  Architecture SEO technique avancée avec optimisation Core Web Vitals et stratégie de contenu orientée conversion
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-4">SEO Technique</h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Search className="text-[#105740]" size={16} />
                        <span>Schema Markup E-commerce</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="text-[#105740]" size={16} />
                        <span>Core Web Vitals Optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="text-[#105740]" size={16} />
                        <span>International SEO (hreflang)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-4">Contenu & Liens</h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="text-[#105740]" size={16} />
                        <span>Content Strategy avancée</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="text-[#105740]" size={16} />
                        <span>Digital PR & Brand Mentions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="text-[#105740]" size={16} />
                        <span>Topic Authority Building</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#105740]/20">
                <h4 className="font-bold text-slate-800 mb-6 text-center">Performance SEO</h4>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#105740] mb-2">+250%</div>
                    <div className="text-sm text-slate-600">Trafic organique</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#105740] mb-2">Top 3</div>
                    <div className="text-sm text-slate-600">Position moyenne</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#105740] mb-2">85%</div>
                    <div className="text-sm text-slate-600">Keywords top 10</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#105740] mb-2">6 mois</div>
                    <div className="text-sm text-slate-600">Délai résultats</div>
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
            <Target className="text-white" size={20} />
            <span className="font-bold text-sm">Stratégie Marketing</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Prêt à Multiplier
            <br />
            <span className="text-transparent bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text">
              Votre ROI ?
            </span>
          </h2>

          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Obtenez une analyse personnalisée de votre potentiel de croissance et un plan d'action sur mesure pour transformer vos performances marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/ebusiness/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
              <BarChart3 className="mr-3" size={20} />
              Audit Marketing Gratuit
              <ArrowRight className="ml-3" size={20} />
            </a>
            <a href="https://startindev.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-200">
              <Eye className="mr-3" size={20} />
              Voir Nos Cas Clients
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Analyse incluse 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} />
              <span>Réponse sous 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={14} />
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      </section>

      </div>
    </EBusinessLayout>
  );
}


