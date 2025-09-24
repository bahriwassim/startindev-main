import logo from "../../../../attached_assets/startindev-group.png";

export default function EBusinessContact() {
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
            <a href="/ebusiness/tech" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Tech</a>
            <span className="ml-auto px-3 py-2 text-primary font-semibold">Contact</span>
          </div>
        </div>
      </div>

      <section className="hero-gradient pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact E‑Business</h1>
          <p className="text-xl opacity-95 max-w-2xl">On vous répond sous 24h.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <form className="grid gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nom</label>
              <input className="w-full rounded-xl border border-border px-4 py-3 bg-background" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full rounded-xl border border-border px-4 py-3 bg-background" placeholder="vous@exemple.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={5} className="w-full rounded-xl border border-border px-4 py-3 bg-background" placeholder="Parlez de votre boutique, objectifs, budget..." />
            </div>
            <button type="submit" className="btn-primary inline-flex items-center justify-center">Envoyer</button>
          </form>
        </div>
      </section>
    </div>
  );
}



