import logo from "../../../../attached_assets/startindev-group.png";

export default function EntertainmentCommunication() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border/50 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 text-sm overflow-x-auto">
            <a href="/" className="mr-4 flex items-center">
              <img src={logo} alt="StartInDev" className="h-6 w-auto" />
            </a>
            <a href="/entertainment" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Aperçu</a>
            <a href="/entertainment/creation" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Création</a>
            <a href="/entertainment/communication" className="px-3 py-2 text-primary font-semibold">Communication</a>
            <a href="/entertainment/digital" className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Digital</a>
          </div>
        </div>
      </div>
      <section className="hero-gradient pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Communication Événementielle</h1>
          <p className="text-xl opacity-95 max-w-2xl">Stratégie, campagnes (réseaux, Google Ads), pages dédiées.</p>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">Stratégie</h3>
            <p className="text-muted-foreground">Positionnement, messages et planning.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">Campagnes</h3>
            <p className="text-muted-foreground">Social Ads, Google Ads et tracking.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-2">Pages dédiées</h3>
            <p className="text-muted-foreground">Landing pages, billets et inscription.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


