import { Camera, Video, Palette, Image, Play, Share2, CheckCircle, ArrowRight, Instagram, Facebook, Layers, Sparkles, Aperture, Film, Brush, Star, Zap, Eye, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import EBusinessLayout from "../../components/EBusinessLayout";

export default function EBusinessContent() {
  return (
    <EBusinessLayout currentPage="contenu">
      <div className="min-h-screen bg-white">

      {/* Hero Section - Creative Asymmetric Layout */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                  <Aperture className="text-white" size={24} />
                </div>
                <div className="px-4 py-2 bg-[#105740]/10 rounded-full">
                  <span className="text-[#105740] font-semibold text-sm">Studio Créatif Pro</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-slate-900">Contenu Visuel</span>
                <br />
                <span className="text-[#105740]">
                  Qui Convertit
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Photos produits haute définition, vidéos immersives et contenus social media pour maximiser l'impact visuel de votre marque e-commerce.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <div className="w-2 h-2 bg-[#105740] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">Studio disponible 24/7</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <Zap size={14} className="text-[#105740]" />
                  <span className="text-sm font-medium text-slate-700">Livraison express 48h</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <Star size={14} className="text-[#105740]" />
                  <span className="text-sm font-medium text-slate-700">Formats illimités</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#105740] rounded-3xl blur-2xl opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Studio créatif" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#105740]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#105740] rounded-lg flex items-center justify-center">
                      <Eye className="text-white" size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">+340%</div>
                      <div className="text-xs text-slate-500">Engagement moyen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Services Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-2xl mb-8">
              <Brush className="text-green-600" size={20} />
              <span className="text-green-700 font-bold text-sm">Studio de Création</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Portfolio Créatif
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transformez vos produits en œuvres d'art visuel qui captent l'attention et génèrent des conversions
            </p>
          </div>

          {/* Creative Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* Photography Section */}
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12 h-full">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Camera className="text-white" size={24} />
                      </div>
                      <div className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                        Photographie Pro
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Packshots & Lifestyle</h3>
                    <p className="text-lg text-slate-700 mb-8">
                      Studio professionnel avec éclairage cinématographique pour des visuels produits époustouflants
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Studio Setup
                    </h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Cyclorama infini professionnel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Éclairage LED 5600K modulaire</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Appareil 50MP + objectifs macro</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      Creative Direction
                    </h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Moodboard & direction artistique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Props styling & mise en scène</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Retouche Photoshop avancée</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-1">6-12</div>
                      <div className="text-sm text-slate-600">Angles par produit</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-1">5K</div>
                      <div className="text-sm text-slate-600">Résolution max</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-1">24h</div>
                      <div className="text-sm text-slate-600">Délai moyen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Film className="text-white" size={20} />
                  </div>
                  <div className="bg-emerald-200 text-emerald-800 px-3 py-2 rounded-full text-sm font-bold">
                    Vidéo 4K
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Motion & Video</h3>
                <p className="text-slate-700 mb-8">
                  Création vidéo immersive pour captiver vos audiences sur tous les canaux
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Play className="text-emerald-500" size={16} />
                      Formats Créatifs
                    </h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div>• Démo produit 360° interactive</div>
                      <div>• Unboxing cinématographique</div>
                      <div>• Stop-motion & time-lapse</div>
                      <div>• Stories & Reels optimisés</div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Engagement vidéo</span>
                      <span className="font-bold text-emerald-600">+340%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Share2 className="text-white" size={24} />
                  </div>
                  <div className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                    Social Media
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-6">Brand Identity & Social</h3>
                <p className="text-lg text-slate-700 mb-8">
                  Créez une identité visuelle cohérente et impactante sur tous vos canaux de communication
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-4">Assets Créatifs</h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Instagram className="text-emerald-500" size={16} />
                        <span>Templates Instagram personnalisés</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Facebook className="text-blue-500" size={16} />
                        <span>Visuels Facebook ads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="text-green-500" size={16} />
                        <span>Stories animées & highlights</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-4">Brand Guidelines</h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Palette className="text-green-500" size={16} />
                        <span>Charte graphique complète</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="text-emerald-500" size={16} />
                        <span>Déclinaisons multi-formats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="text-green-500" size={16} />
                        <span>Guidelines d'utilisation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-200">
                <h4 className="font-bold text-slate-800 mb-6 text-center">Performance Sociale</h4>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">+180%</div>
                    <div className="text-sm text-slate-600">Reach organique</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">8.5%</div>
                    <div className="text-sm text-slate-600">Taux engagement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                    <div className="text-sm text-slate-600">Formats créés</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">72h</div>
                    <div className="text-sm text-slate-600">Livraison assets</div>
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
            <Aperture className="text-white" size={20} />
            <span className="font-bold text-sm">Studio Créatif</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Prêt à Créer du Contenu
            <br />
            <span className="text-transparent bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text">
              Extraordinaire ?
            </span>
          </h2>

          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Transformons vos produits en visuels irrésistibles qui capturent l'attention et génèrent des ventes. Notre équipe créative vous accompagne de l'idée à la réalisation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/ebusiness/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
              <Camera className="mr-3" size={20} />
              Réserver une Session
              <ArrowRight className="ml-3" size={20} />
            </a>
            <a href="https://startindev.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-200">
              <Eye className="mr-3" size={20} />
              Voir le Portfolio
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Studio disponible 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} />
              <span>Livraison express 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={14} />
              <span>Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </section>

      </div>
    </EBusinessLayout>
  );
}


