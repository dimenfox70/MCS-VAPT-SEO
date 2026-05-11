import { ArrowRight, ShieldCheck, Activity, Lock, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CyberGrid } from "./CyberGrid";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-hero text-navy-foreground">
      <CyberGrid />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-32 pb-24 sm:px-6 lg:grid-cols-2 lg:pt-40 lg:pb-32">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-glow backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-glow/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-glow" />
            </span>
            Trusted by modern businesses
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Secure Your Digital Presence{" "}
            <span className="text-gradient-primary">Before Attackers Find the Weakness</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            Professional VAPT &amp; smart SEO audit solutions for modern businesses — combining certified security experts, manual testing, and AI-driven analysis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-95">
              <a href="#audit">Get Free SEO Audit <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <a href="#contact">Book VAPT Consultation</a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 text-left">
            {[
              { k: "500+", v: "Audits delivered" },
              { k: "99.9%", v: "Uptime maintained" },
              { k: "24/7", v: "Expert support" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-semibold text-white">{s.k}</dt>
                <dd className="text-xs text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-scale-in">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
            <div className="absolute inset-6 rounded-3xl glass-dark p-6 shadow-elegant">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-cyan-glow" />
                  <span className="text-sm font-medium">Live Security Scan</span>
                </div>
                <span className="rounded-full bg-cyan-glow/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-glow">Active</span>
              </div>
              <div className="relative mt-5 h-40 overflow-hidden rounded-xl border border-white/10 bg-black/30 scan-line">
                <div className="absolute inset-0 cyber-grid opacity-50" />
                <div className="absolute inset-0 grid place-items-center">
                  <Radar className="h-20 w-20 text-cyan-glow opacity-90 animate-spin-slow" />
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {[
                  { i: Lock, t: "TLS / Headers", v: "Pass" },
                  { i: Activity, t: "Performance", v: "Optimized" },
                  { i: ShieldCheck, t: "Vulnerabilities", v: "0 critical" },
                ].map(({ i: Icon, t, v }) => (
                  <li key={t} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                    <span className="flex items-center gap-2 text-white/80"><Icon className="h-4 w-4 text-cyan-glow" />{t}</span>
                    <span className="text-xs font-semibold text-cyan-glow">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
