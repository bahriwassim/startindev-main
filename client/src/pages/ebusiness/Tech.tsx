import { Code2, Smartphone, Zap, Server, Database, Shield, CheckCircle, ArrowRight, Monitor, Layers, Cloud, Gauge, Terminal, Cpu, HardDrive, GitBranch, Rocket, Lock, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../../../attached_assets/startindev-group.png";

export default function EBusinessTech() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Creative Style */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-[#105740]/30 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 text-sm">
            <a href="/" className="mr-6 flex items-center">
              <img src={logo} alt="StartInDev" className="h-8 w-auto" />
            </a>
            <a href="/ebusiness" className="px-4 py-2 text-slate-600 hover:text-[#105740] transition-colors font-medium">Aperçu</a>
            <a href="/ebusiness/strategie" className="px-4 py-2 text-slate-600 hover:text-[#105740] transition-colors font-medium">Stratégie Marketing</a>
            <a href="/ebusiness/contenu" className="px-4 py-2 text-slate-600 hover:text-[#105740] transition-colors font-medium">Création Contenu</a>
            <a href="/ebusiness/tech" className="px-4 py-2 text-[#105740] font-bold border-b-3 border-[#105740]">Solutions Tech</a>
            <a href="/ebusiness/contact" className="ml-auto px-6 py-3 bg-[#105740] text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">Contact</a>
          </div>
        </div>
      </div>

      {/* Hero Section - Creative Asymmetric Layout */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#105740] rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#105740] rounded-full blur-3xl opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                  <Code2 className="text-white" size={24} />
                </div>
                <div className="px-4 py-2 bg-[#105740]/10 rounded-full">
                  <span className="text-[#105740] font-semibold text-sm">Solutions Tech Pro</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-slate-900">Développement</span>
                <br />
                <span className="text-[#105740]">E-commerce</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Architecture technique moderne, développement full-stack et infrastructure cloud scalable pour des plateformes e-commerce haute performance.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <div className="w-2 h-2 bg-[#105740] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">99.99% uptime</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <Zap size={14} className="text-[#105740]" />
                  <span className="text-sm font-medium text-slate-700">Performance maximale</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#105740]/30">
                  <Shield size={14} className="text-[#105740]" />
                  <span className="text-sm font-medium text-slate-700">Sécurisé SSL</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#105740] rounded-3xl blur-2xl opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                  alt="Développement tech" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#105740]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <Rocket className="text-white" size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">+340%</div>
                      <div className="text-xs text-slate-500">Performance boost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-[#105740]/10 px-6 py-3 rounded-2xl mb-8">
              <Code2 className="text-[#105740]" size={20} />
              <span className="text-[#105740] font-bold text-sm">Stack Technologique</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Architecture Moderne
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Développement full-stack avec les technologies de pointe pour une performance optimale
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Frontend Development */}
            <div className="lg:col-span-4">
              <div className="bg-[#105740]/5 rounded-3xl p-8 lg:p-12 h-full">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                        <Monitor className="text-white" size={24} />
                      </div>
                      <div className="bg-[#105740]/10 text-[#105740] px-4 py-2 rounded-full text-sm font-bold">
                        Frontend Pro
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Interface Utilisateur</h3>
                    <p className="text-lg text-slate-700 mb-8">
                      Technologies React modernes pour des interfaces utilisateur fluides et performantes
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#105740] rounded-full"></div>
                      Technologies Core
                    </h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#105740]" size={16} />
                        <span>React 18 + TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#105740]" size={16} />
                        <span>Next.js App Router</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#105740]" size={16} />
                        <span>Tailwind CSS + Framer</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#105740] rounded-full"></div>
                      Performance
                    </h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#105740]" size={16} />
                        <span>PWA + Service Workers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#105740]" size={16} />
                        <span>Optimisation automatique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#105740]" size={16} />
                        <span>Bundle splitting intelligent</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#105740]/20">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#105740] mb-1">98</div>
                      <div className="text-sm text-slate-600">Lighthouse Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#105740] mb-1">&lt; 250kb</div>
                      <div className="text-sm text-slate-600">Bundle Size</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#105740] mb-1">&lt; 2s</div>
                      <div className="text-sm text-slate-600">Load Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-8 h-full border border-[#105740]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                    <Server className="text-white" size={20} />
                  </div>
                  <div className="bg-[#105740]/10 text-[#105740] px-3 py-2 rounded-full text-sm font-bold">
                    Backend Pro
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">API & Services</h3>
                <p className="text-slate-700 mb-8">
                  Architecture backend scalable avec Node.js et microservices pour une performance optimale
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Database className="text-[#105740]" size={16} />
                      Architecture API
                    </h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div>• Node.js + Express robuste</div>
                      <div>• GraphQL + REST API</div>
                      <div>• JWT Authentication sécurisée</div>
                      <div>• Rate Limiting + CORS</div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#105740]/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Performance API</span>
                      <span className="font-bold text-[#105740]">&lt; 100ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure & Database */}
            <div className="lg:col-span-4">
              <div className="bg-[#105740]/5 rounded-3xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-1 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 bg-[#105740] rounded-2xl flex items-center justify-center shadow-lg">
                        <Database className="text-white" size={24} />
                      </div>
                      <div className="bg-[#105740]/10 text-[#105740] px-4 py-2 rounded-full text-sm font-bold">
                        Infrastructure
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Cloud & Base de Données</h3>
                    <p className="text-lg text-slate-700 mb-8">
                      Infrastructure cloud moderne avec bases de données performantes et cache distribué
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-800 mb-4">Technologies Cloud</h4>
                        <div className="space-y-3 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Cloud className="text-[#105740]" size={16} />
                            <span>AWS / Google Cloud</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Layers className="text-[#105740]" size={16} />
                            <span>Docker + Kubernetes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Server className="text-[#105740]" size={16} />
                            <span>CDN + Edge Cache</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-4">Base de Données</h4>
                        <div className="space-y-3 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Database className="text-[#105740]" size={16} />
                            <span>PostgreSQL + Redis</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="text-[#105740]" size={16} />
                            <span>Auto Scaling</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <HardDrive className="text-[#105740]" size={16} />
                            <span>Backup temps réel</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#105740]/20">
                    <h4 className="font-bold text-slate-800 mb-6 text-center">Performance Infrastructure</h4>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-[#105740] mb-2">99.99%</div>
                        <div className="text-sm text-slate-600">Uptime SLA</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#105740] mb-2">24/7</div>
                        <div className="text-sm text-slate-600">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-[#105740]/10 px-6 py-3 rounded-2xl mb-8">
              <Layers className="text-[#105740]" size={20} />
              <span className="text-[#105740] font-bold text-sm">Stack Technologique</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Technologies Modernes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technologies de production prêtes pour l'excellence e-commerce
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Development Tools */}
            <div className="bg-white rounded-3xl p-8 border border-[#105740]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#105740] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Code2 className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Frontend Suite</h3>
                  <p className="text-[#105740] text-sm font-semibold">React & UI/UX</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">React 18 + TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Next.js App Router</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Tailwind CSS + Framer</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">PWA + Service Workers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Performance optimisée</span>
                </div>
              </div>
            </div>

            {/* Backend & Infrastructure */}
            <div className="bg-white rounded-3xl p-8 border border-[#105740]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#105740] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Server className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Backend Suite</h3>
                  <p className="text-[#105740] text-sm font-semibold">Server & Database</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Node.js v20 LTS</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">PostgreSQL + Redis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Docker + Kubernetes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Microservices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700">API GraphQL + REST</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-[#105740]/10 px-6 py-3 rounded-2xl mb-8">
              <GitBranch className="text-[#105740]" size={20} />
              <span className="text-[#105740] font-bold text-sm">Processus Agile</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Méthodologie DevOps
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Approche agile avec intégration et déploiement continus pour une livraison optimale
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#105740] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Layers className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Analyse</h3>
              <p className="text-slate-600">Audit des besoins techniques et conception de l'architecture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#105740] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Code2 className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Développement</h3>
              <p className="text-slate-600">Sprints agiles avec développement des composants et API</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#105740] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Gauge className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Tests</h3>
              <p className="text-slate-600">Tests automatisés et audits de performance et sécurité</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#105740] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Rocket className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Déploiement</h3>
              <p className="text-slate-600">Mise en production zero-downtime avec monitoring 24/7</p>
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
            <Code2 className="text-white" size={20} />
            <span className="font-bold text-sm">Solutions Tech</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Prêt à Lancer Votre
            <br />
            <span className="text-white">
              Projet Tech ?
            </span>
          </h2>

          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Transformons vos idées en plateforme e-commerce haute performance avec notre expertise technique et notre approche agile.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/ebusiness/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
              <Terminal className="mr-3" size={20} />
              Demander un Devis Tech
              <ArrowRight className="ml-3" size={20} />
            </a>
            <a href="https://startindev.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-200">
              <Rocket className="mr-3" size={20} />
              Voir Nos Projets
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Équipe dev disponible 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} />
              <span>Réponse sous 2h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} />
              <span>Sécurité garantie</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


