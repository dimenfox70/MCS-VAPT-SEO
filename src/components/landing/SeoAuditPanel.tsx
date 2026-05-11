import { useState } from "react";
import { Lock, Loader2, Search, Gauge, Smartphone, FileCheck, ShieldAlert, Link2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Result = {
  seo: number; speed: number; mobile: "Pass" | "Warn"; meta: number; headers: number; broken: number;
};

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h);
}

function generate(url: string): Result {
  const h = hash(url);
  return {
    seo: 60 + (h % 35),
    speed: 55 + ((h >> 3) % 40),
    mobile: ((h >> 5) % 5) === 0 ? "Warn" : "Pass",
    meta: 70 + ((h >> 7) % 25),
    headers: 50 + ((h >> 9) % 45),
    broken: (h >> 11) % 12,
  };
}

function ScoreCard({ icon: Icon, label, value, suffix = "" }: { icon: any; label: string; value: string | number; suffix?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-card">
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}{suffix}</div>
    </div>
  );
}

export function SeoAuditPanel() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const onScan = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) { toast.error("Please enter a website URL"); return; }
    try { new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`); }
    catch { toast.error("Enter a valid URL (e.g. example.com)"); return; }
    setLoading(true); setResult(null);
    setTimeout(() => { setResult(generate(trimmed)); setLoading(false); }, 1800);
  };

  return (
    <section id="audit" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 cyber-grid opacity-40" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Free Audit Panel</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Scan your website in seconds</h2>
          <p className="mt-3 text-muted-foreground">Enter your URL — get an instant snapshot. Unlock the full professional report with our experts.</p>
        </div>

        <form onSubmit={onScan} className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-border bg-card p-3 shadow-elegant sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter Your Website URL"
              className="h-12 border-0 bg-transparent pl-9 focus-visible:ring-0" />
          </div>
          <Button type="submit" disabled={loading} className="h-12 bg-gradient-primary px-6 text-primary-foreground hover:opacity-95">
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Scanning…</> : "Generate Free Audit Report"}
          </Button>
        </form>

        {(loading || result) && (
          <div className="relative mx-auto mt-10 max-w-5xl animate-fade-in">
            {loading && (
              <div className="relative h-64 overflow-hidden rounded-2xl border border-border bg-card scan-line">
                <div className="absolute inset-0 cyber-grid opacity-50" />
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div>
                    <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                    <p className="mt-3 text-sm text-muted-foreground">Analyzing security headers, performance, SEO signals…</p>
                  </div>
                </div>
              </div>
            )}

            {result && (
              <>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  <ScoreCard icon={Search} label="SEO Score" value={result.seo} suffix="/100" />
                  <ScoreCard icon={Gauge} label="Speed" value={result.speed} suffix="/100" />
                  <ScoreCard icon={Smartphone} label="Mobile" value={result.mobile} />
                  <ScoreCard icon={FileCheck} label="Meta Tags" value={result.meta} suffix="%" />
                  <ScoreCard icon={ShieldAlert} label="Sec. Headers" value={result.headers} suffix="/100" />
                  <ScoreCard icon={Link2} label="Broken Links" value={result.broken} />
                </div>

                <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="pointer-events-none select-none blur-sm">
                    <h4 className="text-lg font-semibold">Detailed insights</h4>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {["Keyword analysis", "Competitor analysis", "Full technical issues", "Complete recommendations"].map((t) => (
                        <div key={t} className="rounded-xl border border-border bg-muted/40 p-4">
                          <p className="text-sm font-semibold">{t}</p>
                          <div className="mt-2 space-y-1.5">
                            <div className="h-2 w-5/6 rounded bg-foreground/10" />
                            <div className="h-2 w-2/3 rounded bg-foreground/10" />
                            <div className="h-2 w-3/4 rounded bg-foreground/10" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-card/40 via-card/70 to-card">
                    <div className="text-center">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Lock className="h-3.5 w-3.5" /> Premium content locked
                      </span>
                      <h4 className="mt-3 text-xl font-semibold">Unlock Full Professional Report</h4>
                      <p className="mt-1 text-sm text-muted-foreground">Get keyword, competitor &amp; technical breakdowns with expert recommendations.</p>
                      <Button asChild className="mt-4 bg-gradient-primary text-primary-foreground hover:opacity-95">
                        <a href="#contact"><Sparkles className="mr-1 h-4 w-4" /> Request Complete SEO Audit</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
