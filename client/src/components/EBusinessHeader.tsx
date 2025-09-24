import logo from "@assets/startindev-group.png";

interface EBusinessHeaderProps {
  currentPage: "apercu" | "strategie" | "contenu" | "tech" | "contact";
}

export default function EBusinessHeader({ currentPage }: EBusinessHeaderProps) {
  return (
    <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border/50 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-12 text-sm overflow-x-auto">
          <a href="/" className="mr-4 flex items-center">
            <img src={logo} alt="StartInDev" className="h-6 w-auto" />
          </a>
          <a 
            href="/ebusiness" 
            className={`px-3 py-2 transition-colors ${
              currentPage === "apercu" 
                ? "text-[#105740] font-semibold border-b-2 border-[#105740]" 
                : "text-muted-foreground hover:text-[#105740]"
            }`}
          >
            Aperçu
          </a>
          <a 
            href="/ebusiness/strategie" 
            className={`px-3 py-2 transition-colors ${
              currentPage === "strategie" 
                ? "text-[#105740] font-semibold border-b-2 border-[#105740]" 
                : "text-muted-foreground hover:text-[#105740]"
            }`}
          >
            Stratégie
          </a>
          <a 
            href="/ebusiness/contenu" 
            className={`px-3 py-2 transition-colors ${
              currentPage === "contenu" 
                ? "text-[#105740] font-semibold border-b-2 border-[#105740]" 
                : "text-muted-foreground hover:text-[#105740]"
            }`}
          >
            Contenu
          </a>
          <a 
            href="/ebusiness/tech" 
            className={`px-3 py-2 transition-colors ${
              currentPage === "tech" 
                ? "text-[#105740] font-semibold border-b-2 border-[#105740]" 
                : "text-muted-foreground hover:text-[#105740]"
            }`}
          >
            Tech
          </a>
          <a 
            href="/ebusiness/contact" 
            className="ml-auto px-3 py-2 btn-secondary"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}