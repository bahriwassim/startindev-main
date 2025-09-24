import { Megaphone, Target, Zap, Camera, BarChart3 } from "lucide-react";
import logo from "../../../../attached_assets/startindev-group.png";

export default function EntertainmentCommunication() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Simple Style */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 text-sm">
            <a href="/" className="mr-6 flex items-center">
              <img src={logo} alt="StartInDev" className="h-8 w-auto" />
            </a>
            <a href="/entertainment" className="px-4 py-2 text-gray-600 hover:text-[#bf3100] transition-colors font-medium">Aperçu</a>
            <a href="/entertainment/creation" className="px-4 py-2 text-gray-600 hover:text-[#bf3100] transition-colors font-medium">Création</a>
            <a href="/entertainment/communication" className="px-4 py-2 text-[#F2A541] font-bold border-b-2 border-[#F2A541]">Communication</a>
            <a href="/entertainment/digital" className="px-4 py-2 text-gray-600 hover:text-[#bf3100] transition-colors font-medium">Digital</a>
            <a href="/entertainment/contact" className="ml-auto px-6 py-3 bg-[#F2A541] text-white rounded-lg hover:bg-[#bf3100] transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>

      {/* Hero Section - Simple */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-[#F2A541] rounded-full flex items-center justify-center mx-auto mb-6">
              <Megaphone className="text-white" size={32} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Communication & Marketing
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Stratégies de communication 360°, campagnes digitales percutantes et storytelling pour maximiser votre portée.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-[#bf3100]">2M+</div>
                <div className="text-gray-600">Impressions générées</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#bf3100]">+450%</div>
                <div className="text-gray-600">ROI moyen</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#bf3100]">85%</div>
                <div className="text-gray-600">Taux d'engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Expanded */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stratégie Communication 360°
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De la stratégie de marque aux campagnes d'activation, nous créons des écosystèmes de communication qui marquent les esprits
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Strategy & Branding */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F2A541] rounded-xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Stratégie & Positionnement</h3>
                  <p className="text-[#bf3100] font-medium">Brand Strategy</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#F2A541] pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Audit de Marque</h4>
                  <p className="text-gray-600 text-sm">Analyse concurrentielle approfondie, étude de positionnement et identification des opportunités de différenciation.</p>
                </div>
                <div className="border-l-4 border-[#bf3100] pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Identité & Storytelling</h4>
                  <p className="text-gray-600 text-sm">Développement de l'identité de marque, création du storytelling et définition du ton de communication.</p>
                </div>
                <div className="border-l-4 border-[#F2A541] pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Personas & Mapping</h4>
                  <p className="text-gray-600 text-sm">Définition des personas cibles, mapping du parcours client et stratégie de contenus personnalisés.</p>
                </div>
              </div>
            </div>

            {/* Campaigns & Activation */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F2A541] rounded-xl flex items-center justify-center mr-4">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Campagnes Digitales</h3>
                  <p className="text-[#bf3100] font-medium">Performance Marketing</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#F2A541] pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Social Media Strategy</h4>
                  <p className="text-gray-600 text-sm">Stratégie cross-platform, community management expert et campagnes d'engagement ciblées.</p>
                </div>
                <div className="border-l-4 border-[#bf3100] pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Publicité Digital</h4>
                  <p className="text-gray-600 text-sm">Google Ads, Facebook Ads, retargeting avancé et optimisation continue des performances ROI.</p>
                </div>
                <div className="border-l-4 border-[#F2A541] pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Influence Marketing</h4>
                  <p className="text-gray-600 text-sm">Partenariats influenceurs stratégiques, ambassadeurs de marque et activation communautaire.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content & Production Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#bf3100] transition-colors">
              <div className="w-16 h-16 bg-[#F2A541] rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Factory</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Création vidéo & motion design</li>
                <li>• Photography événementielle</li>
                <li>• Rédaction & storytelling</li>
                <li>• Podcasts & interviews</li>
                <li>• Templates réseaux sociaux</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#bf3100] transition-colors">
              <div className="w-16 h-16 bg-[#F2A541] rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics & Reporting</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Dashboard temps réel</li>
                <li>• Métriques de performance</li>
                <li>• Rapports détaillés ROI</li>
                <li>• Optimisation continue</li>
                <li>• Recommandations stratégiques</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#bf3100] transition-colors">
              <div className="w-16 h-16 bg-[#F2A541] rounded-full flex items-center justify-center mx-auto mb-4">
                <Megaphone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Relations Presse</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Communiqués & dossiers presse</li>
                <li>• Relations médias spécialisés</li>
                <li>• Événements presse</li>
                <li>• Gestion de crise</li>
                <li>• Veille & monitoring</li>
              </ul>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-[#F2A541]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Performance & Résultats</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#bf3100] mb-2">+450%</div>
                <div className="text-gray-600">ROI moyen campagnes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#bf3100] mb-2">2M+</div>
                <div className="text-gray-600">Impressions mensuelles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#bf3100] mb-2">85%</div>
                <div className="text-gray-600">Taux d'engagement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#bf3100] mb-2">150+</div>
                <div className="text-gray-600">Publications presse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expertise Secteurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une connaissance approfondie des enjeux spécifiques de différents secteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Entertainment</h4>
              <p className="text-gray-600 text-sm">Festivals, concerts, spectacles</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Corporate</h4>
              <p className="text-gray-600 text-sm">Lancements produits, conventions</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Sport</h4>
              <p className="text-gray-600 text-sm">Compétitions, événements sportifs</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Culturel</h4>
              <p className="text-gray-600 text-sm">Expositions, arts, patrimoine</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple */}
      <section className="py-16 bg-[#F2A541]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à amplifier votre message ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Créons ensemble une stratégie communication qui marque les esprits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/entertainment/contact" className="bg-white text-[#bf3100] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Lancer ma campagne
            </a>
            <a href="https://startindev.com/portfolio-communication" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Voir nos succès
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}