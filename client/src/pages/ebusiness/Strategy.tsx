import logo from "../../../../attached_assets/startindev-group.png";

export default function EBusinessStrategy() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border/50 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 text-sm overflow-x-auto">
            <a href="/" className="mr-4 flex items-center">
              <img src={logo} alt="StartInDev" className="h-6 w-auto" />
            </a>
            <a href="/ebusiness" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Aperçu</a>
            <a href="/ebusiness/strategie" className="px-3 py-2 text-primary font-semibold">Stratégie</a>
            <a href="/ebusiness/contenu" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Contenu</a>
            <a href="/ebusiness/tech" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Tech</a>
          </div>
        </div>
      </div>
      <section className="hero-gradient pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Stratégie Marketing</h1>
              <p className="text-xl opacity-95 max-w-2xl">Publicité en ligne, optimisation Amazon et SEO e‑commerce pour accélérer vos ventes.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop" alt="Marketing strategy" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">Publicité en ligne</h3>
            <p className="text-muted-foreground mb-4">Campagnes Google Ads et Facebook/Instagram Ads orientées ROAS.</p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
              <li>Structuration des comptes et audiences</li>
              <li>Création d'annonces et A/B testing</li>
              <li>Optimisation budgets et enchères</li>
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">Optimisation Amazon</h3>
            <p className="text-muted-foreground mb-4">Maximisez la visibilité et les ventes sur Amazon.</p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
              <li>Fiches produits (titres, images, A+)</li>
              <li>SEO Amazon (mots‑clés, catégories)</li>
              <li>Publicité sponsorisée et reporting</li>
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">SEO e‑commerce</h3>
            <p className="text-muted-foreground mb-4">Améliorez le trafic organique et la conversion.</p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
              <li>Audit technique et performance</li>
              <li>Optimisation catégories et produits</li>
              <li>Netlinking et contenus sémantiques</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


