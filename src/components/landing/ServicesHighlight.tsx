import { Shield, Bug, Network, FileCheck, Search, Gauge, Smartphone, KeyRound, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const vapt = [
  { i: Shield, t: "Web Application Testing" },
  { i: KeyRound, t: "API Security Testing" },
  { i: Network, t: "Network Security Assessment" },
  { i: Bug, t: "Manual + Automated Testing" },
  { i: FileCheck, t: "Compliance & Security Reports" },
];

const seo = [
  { i: Search, t: "Website SEO Scan" },
  { i: Gauge, t: "Performance Check" },
  { i: FileCheck, t: "Basic Technical SEO Review" },
  { i: KeyRound, t: "Keyword Visibility" },
  { i: Smartphone, t: "Mobile Optimization Score" },
];

export function ServicesHighlight() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Our Services</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Two pillars of digital safety</h2>
          <p className="mt-3 text-muted-foreground">From deep VAPT engagements to instant SEO health checks — built for modern businesses.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* VAPT card */}
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-primary opacity-10 blur-2xl" />
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Shield className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">VAPT Services</h3>
                <p className="text-sm text-muted-foreground">Vulnerability Assessment &amp; Penetration Testing</p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {vapt.map(({ i: Icon, t }) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-95">
                <a href="#contact">Request Full Audit <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline"><a href="#contact">Schedule Meeting</a></Button>
            </div>
          </article>

          {/* SEO card */}
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-10 blur-2xl"
              style={{ background: "radial-gradient(circle, var(--cyan-glow), transparent 70%)" }} />
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl text-accent-foreground shadow-glow"
                style={{ background: "linear-gradient(135deg, var(--cyan-glow), var(--primary))" }}>
                <Search className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Free SEO Audit</h3>
                <p className="text-sm text-muted-foreground">Instant insight into your site's health</p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {seo.map(({ i: Icon, t }) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-lg border border-dashed border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
              Free report shows partial insights only. The premium full audit requires consultation.
            </p>
            <div className="mt-5">
              <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-95">
                <a href="#audit">Generate Free Report <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
