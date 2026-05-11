import { Shield, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-hero text-navy-foreground">
      <div className="absolute inset-0 cyber-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-semibold">MCS · Meit Cyber Solution</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/70">
              Securing modern businesses with professional VAPT engagements and intelligent SEO audits.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick links</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#audit" className="hover:text-white">Free SEO Audit</a></li>
              <li><a href="#why" className="hover:text-white">Why MCS</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-glow" /> hello@meitcyber.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-glow" /> +91 00000 00000</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Meit Cyber Solution. All rights reserved.</span>
          <span>Crafted for security-first businesses.</span>
        </div>
      </div>
    </footer>
  );
}
