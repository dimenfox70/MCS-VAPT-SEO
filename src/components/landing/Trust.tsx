import { Star, ShieldCheck } from "lucide-react";

const testimonials = [
  { n: "Priya Sharma", r: "CTO, FinEdge", q: "MCS uncovered critical API flaws our previous vendor missed. Reporting was crystal clear." },
  { n: "Rahul Verma", r: "Founder, ShopNexa", q: "The free audit hooked us — the full VAPT engagement was worth every rupee." },
  { n: "Aisha Khan", r: "Head of Eng, MedCare", q: "Fast, professional, and zero fluff. Their team felt like an extension of ours." },
];

const badges = ["ISO 27001", "OWASP", "CERT-In aligned", "GDPR ready", "PCI DSS"];

export function Trust() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Trusted</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Security teams &amp; founders trust MCS</h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-card">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />{b}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.n} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                  {t.n.split(" ").map((s) => s[0]).join("")}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 items-center gap-6 opacity-60 sm:grid-cols-3 lg:grid-cols-6">
          {["NIMBUS", "OCTANE", "VERDA", "QUANTA", "HELIX", "AXION"].map((c) => (
            <div key={c} className="text-center text-sm font-bold tracking-[0.25em] text-muted-foreground">{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
