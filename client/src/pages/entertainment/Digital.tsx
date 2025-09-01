import { Monitor, Smartphone, QrCode, BarChart3 } from "lucide-react";
import logo from "../../../../attached_assets/startindev-group.png";

export default function EntertainmentDigital() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Simple Style */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 text-sm">
            <a href="/" className="mr-6 flex items-center">
              <img src={logo} alt="StartInDev" className="h-8 w-auto" />
            </a>
            <a href="/entertainment" className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">Aperçu</a>
            <a href="/entertainment/creation" className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">Création</a>
            <a href="/entertainment/communication" className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">Communication</a>
            <a href="/entertainment/digital" className="px-4 py-2 text-blue-600 font-bold border-b-2 border-blue-600">Digital Solutions</a>
            <a href="/entertainment/contact" className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>

      {/* Hero Section - Simple */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Monitor className="text-white" size={32} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions Digitales
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Plateformes digitales innovantes, applications mobiles et solutions tech pour moderniser vos événements.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Apps développées</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">100K+</div>
                <div className="text-gray-600">Utilisateurs</div>
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
              Solutions Digitales Innovantes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technologies de pointe pour transformer vos événements en expériences digitales immersives et interactives
            </p>
          </div>

          {/* Main Digital Solutions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Mobile & Web Applications */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Applications & Plateformes</h3>
                  <p className="text-blue-600 font-medium">Mobile & Web Development</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Apps Événementielles</h4>
                  <p className="text-gray-600 text-sm">Applications mobiles dédiées avec programme interactif, networking, notifications push et intégration réseaux sociaux.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Plateformes Web</h4>
                  <p className="text-gray-600 text-sm">Sites événementiels responsives, systèmes de billetterie, espaces participants et interfaces d'administration.</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">PWA & Cross-Platform</h4>
                  <p className="text-gray-600 text-sm">Progressive Web Apps optimisées, compatibilité multi-device et synchronisation temps réel.</p>
                </div>
              </div>
            </div>

            {/* Interactive Technologies */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <QrCode className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Expériences Interactives</h3>
                  <p className="text-blue-600 font-medium">Engagement Digital</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solutions QR & NFC</h4>
                  <p className="text-gray-600 text-sm">Systèmes de check-in automatisés, accès contenus exclusifs et parcours utilisateur gamifiés.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Réalité Augmentée</h4>
                  <p className="text-gray-600 text-sm">Expériences AR immersives, filtres personnalisés et activations interactives pour engagement maximum.</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Live Streaming & Hybrid</h4>
                  <p className="text-gray-600 text-sm">Solutions de diffusion en direct, événements hybrides et interactions virtuelles avancées.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Systèmes de Gestion</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• CRM événementiel intégré</li>
                <li>• Gestion des inscriptions</li>
                <li>• Systèmes de paiement</li>
                <li>• Contrôle d'accès digital</li>
                <li>• Reporting automatisé</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics & Data</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Tableaux de bord temps réel</li>
                <li>• Tracking comportemental</li>
                <li>• Métriques d'engagement</li>
                <li>• ROI et performance KPIs</li>
                <li>• Rapports personnalisés</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure Cloud</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Architecture scalable AWS/Azure</li>
                <li>• CDN global pour performance</li>
                <li>• Sécurité SSL & GDPR</li>
                <li>• Monitoring 24/7</li>
                <li>• Backup automatique</li>
              </ul>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Performance Technique</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime garanti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 2s</div>
                <div className="text-gray-600">Temps de chargement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
                <div className="text-gray-600">Utilisateurs simultanés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Apps développées</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stack Technologique</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technologies modernes et éprouvées pour des solutions robustes et performantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-4">Frontend</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <div>React • Next.js</div>
                <div>Vue.js • Nuxt.js</div>
                <div>TypeScript • PWA</div>
                <div>Tailwind CSS</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-4">Backend</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <div>Node.js • Express</div>
                <div>Python • Django</div>
                <div>PostgreSQL • MongoDB</div>
                <div>Redis • GraphQL</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-4">Mobile</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <div>React Native</div>
                <div>Flutter • Dart</div>
                <div>iOS • Swift</div>
                <div>Android • Kotlin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processus de Développement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Méthodologie agile pour livrer des solutions digitales de qualité
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyse</h3>
              <p className="text-gray-600 text-sm">Audit technique et définition du cahier des charges</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design UX/UI</h3>
              <p className="text-gray-600 text-sm">Wireframes, maquettes et prototype interactif</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Développement</h3>
              <p className="text-gray-600 text-sm">Sprints agiles avec livraisons itératives</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tests</h3>
              <p className="text-gray-600 text-sm">Tests automatisés et validation utilisateur</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">5</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Déploiement</h3>
              <p className="text-gray-600 text-sm">Mise en production et monitoring continu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à digitaliser votre événement ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Modernisons ensemble votre approche avec des solutions digitales innovantes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/entertainment/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Découvrir nos solutions
            </a>
            <a href="https://startindev.com/portfolio-digital" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Voir nos réalisations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}