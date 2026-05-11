import { BadgeCheck, Bug, Cpu, Briefcase, Zap, Wallet } from "lucide-react";

const items = [
  { i: BadgeCheck, t: "Certified Security Experts", d: "Industry-credentialed engineers with years of red-team experience." },
  { i: Bug, t: "Real Vulnerability Detection", d: "Beyond scanners — exploit-proof findings with reproducible PoCs." },
  { i: Cpu, t: "Manual + AI-Based Analysis", d: "Combining human intuition with automated coverage at scale." },
  { i: Briefcase, t: "Business-Focused Security", d: "Risk prioritized to your operations, not generic CVE lists." },
  { i: Zap, t: "Fast Reporting", d: "Clear, actionable reports — usually within 5 business days." },
  { i: Wallet, t: "Affordable Enterprise Solutions", d: "Senior-level security engagements without enterprise overhead." },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-muted/30 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Why MCS</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Built for businesses that can't afford to be breached</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
