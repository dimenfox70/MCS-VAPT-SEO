import { useEffect, useRef, useState } from "react";

const stats = [
  { v: 320, suffix: "+", l: "Businesses Protected" },
  { v: 1500, suffix: "+", l: "Websites Audited" },
  { v: 8200, suffix: "+", l: "Vulnerabilities Found" },
  { v: 24, suffix: "h", l: "Avg Response Time" },
];

function useCountUp(target: number, start: boolean, ms = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0; const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, ms]);
  return n;
}

function StatItem({ v, suffix, l, start }: { v: number; suffix: string; l: string; start: boolean }) {
  const n = useCountUp(v, start);
  return (
    <div className="text-center">
      <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {n.toLocaleString()}<span className="text-cyan-glow">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-white/70">{l}</div>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setStart(true)), { threshold: 0.4 });
    io.observe(ref.current); return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-hero py-16 text-navy-foreground">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((s) => <StatItem key={s.l} {...s} start={start} />)}
      </div>
    </section>
  );
}
