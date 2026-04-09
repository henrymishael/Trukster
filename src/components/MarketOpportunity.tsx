"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-5xl font-black gradient-text">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { prefix: "$", value: 400, suffix: "B+", label: "African SME Market Size" },
  { prefix: "", value: 40, suffix: "M+", label: "Unbanked Entrepreneurs" },
  { prefix: "", value: 24, suffix: "+", label: "Cities Served" },
  { prefix: "", value: 99, suffix: "%", label: "Customer Satisfaction" },
];

export default function MarketOpportunity() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Large decorative orb */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0EA5E9]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#0EA5E9] uppercase mb-4">
              Market Opportunity
            </p>
          </FadeIn>
          <TextReveal
            text="A Growing Demand for Integrated Solutions"
            as="h2"
            className="font-display text-4xl lg:text-5xl font-bold text-center mb-6"
          />
          <FadeIn delay={200}>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed text-lg font-light">
              Africa's economy is driven by small businesses that need both financing and logistics to thrive.
              Trukster sits at the intersection of these needs—unlocking a massive opportunity to scale across cities and regions.
            </p>
          </FadeIn>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100} direction="up">
              <div className="card-hover animated-border rounded-2xl bg-[#0B1528] p-8 text-center">
                <CountUp target={s.value} suffix={s.suffix} prefix={s.prefix} />
                <p className="text-sm text-white/40 mt-3 leading-snug">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Chart bar visual */}
        <FadeIn delay={400}>
          <div className="animated-border rounded-2xl bg-[#0B1528] p-8">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-6">Projected Growth (₦ Billion)</p>
            <div className="flex items-end gap-3 h-36">
              {[
                { year: "2024", val: 20, color: "#0EA5E9" },
                { year: "2025", val: 45, color: "#0EA5E9" },
                { year: "2026", val: 80, color: "#10B981" },
                { year: "2027", val: 130, color: "#10B981" },
                { year: "2028", val: 200, color: "#38BDF8" },
              ].map((bar, i) => (
                <div key={bar.year} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-display font-bold" style={{ color: bar.color }}>
                    ₦{bar.val}B
                  </span>
                  <FadeIn delay={i * 100 + 500} direction="up">
                    <div
                      className="w-full rounded-t-lg"
                      style={{
                        height: `${(bar.val / 200) * 100}px`,
                        background: `linear-gradient(to top, ${bar.color}40, ${bar.color})`,
                        minHeight: "8px",
                      }}
                    />
                  </FadeIn>
                  <span className="text-[11px] text-white/30">{bar.year}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
