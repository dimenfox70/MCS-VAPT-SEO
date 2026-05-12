import { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#audit", label: "Free Audit" },
  { href: "#why", label: "Why MCS" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className={`flex items-center gap-2 ${scrolled ? "text-foreground" : "text-white"}`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-semibold tracking-tight">MCS<span className={`font-normal ${scrolled ? "text-muted-foreground" : "text-white/80"}`}> · Meit Cyber Solution</span></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white hover:text-cyan-glow"}`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className={`hidden sm:inline-flex ${scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}`}
          >
            <a href="#audit">Free Audit</a>
          </Button>
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-95">
            <a href="#contact">Book Consultation</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
