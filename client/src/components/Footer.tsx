import { Link } from "wouter";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";
import logo from "../../../attached_assets/startindev-group.png";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-foreground/95 backdrop-blur text-white border-t border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          <Link href="/">
            <img src={logo} alt="StartInDev Group" className="h-7 w-auto cursor-pointer" />
          </Link>
          <div className="flex items-center gap-4 opacity-80">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-100 transition-opacity"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:opacity-100 transition-opacity"><Twitter size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-100 transition-opacity"><Instagram size={18} /></a>
            <a href="#" aria-label="Github" className="hover:opacity-100 transition-opacity"><Github size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
