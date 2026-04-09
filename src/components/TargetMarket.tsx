"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const segments = [
  { icon: "🚐", title: "Logistics Operators", desc: "Individuals and fleets running delivery services" },
  { icon: "🛍️", title: "Retail Traders & Wholesalers", desc: "Businesses moving bulk goods across markets" },
  { icon: "🏢", title: "SMEs & Distributors", desc: "Small businesses that need assets and delivery" },
  { icon: "🛒", title: "E-commerce Vendors", desc: "Online sellers requiring last-mile delivery" },
];

export default function TargetMarket() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-4">Target Market</p>
            </FadeIn>
            <TextReveal text="Who We Serve" as="h2" className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6" />
            <FadeIn delay={200}>
              <p className="text-white/55 leading-relaxed font-light text-lg mb-10">
                We serve individuals and businesses across Nigeria who need both assets to operate and logistics to scale.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {segments.map((s, i) => (
                <FadeIn key={s.title} delay={i * 80 + 200}>
                  <div className="flex items-start gap-4 group card-hover rounded-xl bg-navy-mid border border-white/5 p-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-lg shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white mb-0.5">{s.title}</h4>
                      <p className="text-sm text-white/45">{s.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Nigeria-focused visual */}
          <FadeIn direction="left" delay={200}>
            <div className="animated-border rounded-3xl bg-navy-mid p-8 text-center">
              <div className="relative inline-flex items-center justify-center w-48 h-48 mx-auto mb-8">
                {/* Concentric rings */}
                {[1,2,3].map((n) => (
                  <div
                    key={n}
                    className="absolute rounded-full border border-accent-blue/20"
                    style={{ inset: `${n * 18}px` }}
                  />
                ))}
                <div className="relative z-10 w-24 h-24 rounded-full bg-linear-to-br from-accent-blue to-accent-green flex items-center justify-center shadow-xl shadow-blue-900/30">
                  <span className="text-4xl">🇳🇬</span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-accent-blue/20 animate-spin" style={{ animationDuration: "20s" }} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Nigeria First</h3>
              <p className="text-white/50 mb-8 text-sm">Expanding across Africa</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "36", l: "States covered" },
                  { v: "200M+", l: "Population reached" },
                  { v: "40M+", l: "SME market" },
                  { v: "$400B+", l: "Market opportunity" },
                ].map((stat) => (
                  <div key={stat.l} className="rounded-xl bg-white/5 p-4">
                    <p className="font-display text-xl font-bold text-accent-blue-bright">{stat.v}</p>
                    <p className="text-xs text-white/40 mt-1">{stat.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
