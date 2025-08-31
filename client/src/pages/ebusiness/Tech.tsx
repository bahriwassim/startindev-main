import logo from "../../../../attached_assets/startindev-group.png";

export default function EBusinessTech() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border/50 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 text-sm overflow-x-auto">
            <a href="/" className="mr-4 flex items-center">
              <img src={logo} alt="StartInDev" className="h-6 w-auto" />
            </a>
            <a href="/ebusiness" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Aperçu</a>
            <a href="/ebusiness/strategie" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Stratégie</a>
            <a href="/ebusiness/contenu" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Contenu</a>
            <a href="/ebusiness/tech" className="px-3 py-2 text-primary font-semibold">Tech</a>
          </div>
        </div>
      </div>
      <section className="hero-gradient pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions Techniques</h1>
              <p className="text-xl opacity-95 max-w-2xl">Sites e‑commerce sur mesure, landing pages et pages de vente optimisées.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1200&auto=format&fit=crop" alt="E-commerce tech" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">Sites e‑commerce</h3>
            <p className="text-muted-foreground mb-4">Développements sur mesure orientés performance et conversion.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">Landing pages</h3>
            <p className="text-muted-foreground mb-4">Pages de vente A/B testées et optimisées SEO.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">Intégrations</h3>
            <p className="text-muted-foreground mb-4">Paiements, marketplaces, ERP/CRM et analytics.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


