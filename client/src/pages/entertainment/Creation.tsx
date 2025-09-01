import { Palette, Music, Camera, Ticket, Users, Sparkles, Play, Calendar, MapPin, Award, Clock, Star, Heart, ArrowRight, Zap, Megaphone } from "lucide-react";
import logo from "../../../../attached_assets/startindev-group.png";

export default function EntertainmentCreation() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Simple Style */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 text-sm">
            <a href="/" className="mr-6 flex items-center">
              <img src={logo} alt="StartInDev" className="h-8 w-auto" />
            </a>
            <a href="/entertainment" className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors font-medium">Aperçu</a>
            <a href="/entertainment/creation" className="px-4 py-2 text-purple-600 font-bold border-b-2 border-purple-600">Création Événements</a>
            <a href="/entertainment/communication" className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors font-medium">Communication</a>
            <a href="/entertainment/digital" className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors font-medium">Digital</a>
            <a href="/entertainment/contact" className="ml-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>

      {/* Hero Section - Simple */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-white" size={32} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Création d'Événements
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              De l'idéation à la réalisation, nous transformons vos idées d'événements en expériences inoubliables.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Événements créés</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">50K+</div>
                <div className="text-gray-600">Participants ravis</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600">Satisfaction client</div>
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
              Nos Services de Création
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De l'idée à la réalisation, nous orchestrons chaque détail pour créer des événements inoubliables
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Conception & Design */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Palette className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Conception & Design</h3>
                  <p className="text-purple-600 font-medium">Créativité sur mesure</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Idéation & Concept</h4>
                  <p className="text-gray-600 text-sm">Brainstorming créatif, développement du thème unique et définition de l'expérience utilisateur complète.</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Scénographie</h4>
                  <p className="text-gray-600 text-sm">Design d'espace, aménagement scénique et création d'ambiances immersives adaptées à votre vision.</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Identité Visuelle</h4>
                  <p className="text-gray-600 text-sm">Création d'une charte graphique événementielle, supports visuels et déclinaisons multicanal.</p>
                </div>
              </div>
            </div>

            {/* Production & Organisation */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Production & Organisation</h3>
                  <p className="text-purple-600 font-medium">Coordination experte</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Gestion de Projet</h4>
                  <p className="text-gray-600 text-sm">Planification détaillée, coordination des équipes et suivi rigoureux de tous les aspects logistiques.</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Sélection Venues</h4>
                  <p className="text-gray-600 text-sm">Recherche et négociation des lieux parfaits, gestion des contrats et optimisation des coûts.</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Prestataires</h4>
                  <p className="text-gray-600 text-sm">Réseau qualifié de partenaires, coordination technique et garantie qualité sur tous les services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ticket className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Billetterie & Inscriptions</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Plateforme de vente personnalisée</li>
                <li>• Gestion des capacités et tarifications</li>
                <li>• Paiement sécurisé multi-devises</li>
                <li>• Contrôle d'accès et badging</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Production Audiovisuelle</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Captation multicaméras 4K</li>
                <li>• Streaming direct professionnel</li>
                <li>• Post-production et montage</li>
                <li>• Highlights et contenus réseaux</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Animation & Artistes</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Booking d'artistes et intervenants</li>
                <li>• Animation événementielle</li>
                <li>• Spectacles sur mesure</li>
                <li>• Coordination artistique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une méthode éprouvée en 4 étapes pour transformer vos idées en événements réussis
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Découverte</h3>
              <p className="text-gray-600 text-sm">Brief détaillé, analyse des besoins et définition des objectifs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conception</h3>
              <p className="text-gray-600 text-sm">Création du concept, design et planification détaillée</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600 text-sm">Mise en œuvre, coordination et installation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Réalisation</h3>
              <p className="text-gray-600 text-sm">Jour-J, suivi temps réel et livrables finaux</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à créer votre événement ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Discutons de votre projet et créons ensemble une expérience inoubliable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/entertainment/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Démarrer mon projet
            </a>
            <a href="https://startindev.com/portfolio-events" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Voir nos réalisations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}