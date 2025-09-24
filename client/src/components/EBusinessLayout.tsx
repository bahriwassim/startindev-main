import { ReactNode } from "react";
import EBusinessHeader from "./EBusinessHeader";

interface EBusinessLayoutProps {
  children: ReactNode;
  currentPage: "apercu" | "strategie" | "contenu" | "tech" | "contact";
}

export default function EBusinessLayout({ children, currentPage }: EBusinessLayoutProps) {
  return (
    <div className="min-h-screen">
      <EBusinessHeader currentPage={currentPage} />
      {children}
    </div>
  );
}