import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Universe", path: "/universe" },
    { name: "Groupe", path: "/groupe" },
    { name: "E-Business", path: "/ebusiness" },
    { name: "Entertainment", path: "/entertainment" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary cursor-pointer flex items-center" data-testid="logo-link">
                <Code className="mr-2" size={28} />
                Start In Dev Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors ${
                  location === item.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`nav-${item.name.toLowerCase().replace('-', '')}`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://Start In Dev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="contact-button"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border" data-testid="mobile-menu">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-3 py-2 transition-colors ${
                    location === item.path
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase().replace('-', '')}`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://Start In Dev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-primary"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-contact-button"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
