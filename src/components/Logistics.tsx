"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const capabilities = [
  { icon: "🛣️", label: "Inter-state and intra-city delivery" },
  { icon: "💰", label: "Structured pricing across regions" },
  { icon: "🤝", label: "Reliable logistics coordination" },
  { icon: "📍", label: "Last-mile delivery support" },
];

const useCases = [
  { icon: "🛒", title: "Vendors", desc: "Delivering to customers nationwide" },
  { icon: "🏭", title: "Businesses", desc: "Restocking inventory across locations" },
  { icon: "👤", title: "Individuals", desc: "Sending goods across Nigeria" },
];

export default function Logistics() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Copy */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#10B981] uppercase mb-4">
                Logistics & Delivery
              </p>
            </FadeIn>

            <TextReveal
              text="Move Goods Across Cities with Ease"
              as="h2"
              className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6"
            />

            <FadeIn delay={200}>
              <p className="text-white/55 leading-relaxed mb-8 font-light text-lg">
                Trukster provides reliable delivery services that connect businesses and customers across different cities.
              </p>
            </FadeIn>

            <div className="space-y-4 mb-10">
              {capabilities.map((c, i) => (
                <FadeIn key={c.label} delay={i * 80 + 250}>
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-base shrink-0">
                      {c.icon}
                    </div>
                    <span className="text-white/70">{c.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={600}>
              <a
                href="#final-cta"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#10B981] text-white font-semibold overflow-hidden relative"
              >
                <span className="relative z-10">Send a Package</span>
                <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 bg-[#059669] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            </FadeIn>
          </div>

          {/* Right: Use cases + map card */}
          <div className="space-y-4">
            {/* Map visual */}
            <FadeIn direction="left" delay={100}>
              <div className="animated-border rounded-2xl bg-[#0B1528] overflow-hidden">
                {/* Map header */}
                <div className="px-5 pt-5 pb-3 border-b border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/40 uppercase tracking-widest">Live Route Map</span>
                  <span className="flex items-center gap-1.5 text-xs text-[#10B981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    Live
                  </span>
                </div>
                {/* SVG Nigeria-ish map placeholder */}
                <div className="p-5 relative h-48 grid-pattern">
                  <svg viewBox="0 0 400 180" className="w-full h-full opacity-80">
                    {/* Routes */}
                    <path d="M 60 130 Q 120 60 200 80 Q 280 100 340 40" stroke="#10B981" fill="none" strokeWidth="2" strokeDasharray="8 4" opacity="0.6" />
                    <path d="M 60 130 Q 100 150 200 140 Q 280 130 340 150" stroke="#0EA5E9" fill="none" strokeWidth="2" strokeDasharray="8 4" opacity="0.6" />
                    {/* City nodes */}
                    {[
                      [60, 130, "Lagos"],
                      [200, 80, "Abuja"],
                      [340, 40, "Kano"],
                      [340, 150, "PH"],
                      [200, 140, "Enugu"],
                    ].map(([x, y, city], i) => (
                      <g key={city}>
                        <circle cx={x} cy={y} r="5" fill={i === 0 ? "#0EA5E9" : "#10B981"} />
                        <text x={x as number} y={(y as number) - 8} textAnchor="middle" fill="white" fontSize="9" opacity="0.6">
                          {city}
                        </text>
                        {i === 0 && (
                          <circle cx={x} cy={y} r="12" fill="none" stroke="#0EA5E9" strokeWidth="1" opacity="0.3">
                            <animate attributeName="r" from="8" to="18" dur="2.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </FadeIn>

            {/* Use case cards */}
            <div className="grid grid-cols-3 gap-3">
              {useCases.map((u, i) => (
                <FadeIn key={u.title} delay={i * 100 + 300} direction="up">
                  <div className="card-hover rounded-2xl bg-[#0B1528] border border-white/5 p-4 text-center">
                    <span className="text-2xl block mb-2">{u.icon}</span>
                    <h4 className="font-display text-sm font-bold text-white mb-1">{u.title}</h4>
                    <p className="text-[11px] text-white/40 leading-tight">{u.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
