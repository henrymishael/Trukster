"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const offerings = [
  {
    icon: "💳",
    text: "Asset financing through flexible installment plans",
    color: "#0EA5E9",
  },
  {
    icon: "🚚",
    text: "Cross-city delivery and logistics coordination",
    color: "#10B981",
  },
  {
    icon: "📊",
    text: "Digital platform for tracking assets and shipments",
    color: "#F59E0B",
  },
  {
    icon: "🔄",
    text: "Seamless integration between ownership and distribution",
    color: "#A78BFA",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-28 relative overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#071828] to-[#050A18]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0EA5E9]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left copy */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-blue-bright uppercase mb-4">
                Our Solution
              </p>
            </FadeIn>

            <TextReveal
              text="A Unified Solution for Finance & Logistics"
              as="h2"
              className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6"
            />

            <FadeIn delay={200}>
              <p className="text-white/55 leading-relaxed mb-10 font-light text-lg">
                Trukster provides a dual-powered platform that enables users to
                access assets immediately and move goods efficiently across
                cities.
              </p>
            </FadeIn>

            <div className="space-y-4 mb-10">
              {offerings.map((o, i) => (
                <FadeIn key={o.text} delay={i * 80 + 250}>
                  <div className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform"
                      style={{
                        background: `${o.color}15`,
                        border: `1px solid ${o.color}30`,
                      }}
                    >
                      {o.icon}
                    </div>
                    <p className="text-white/65 leading-relaxed pt-2">
                      {o.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={600}>
              <a
                href="#final-cta"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-blue text-white font-semibold overflow-hidden"
              >
                <span className="relative z-10">Get Started Today</span>
                <svg
                  className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="absolute inset-0 bg-[#38BDF8] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            </FadeIn>
          </div>

          {/* Right visual: dual pillars */}
          <FadeIn direction="left" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {/* Finance pillar */}
              <div className="col-span-2 animated-border rounded-2xl bg-[#0B1528] p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#0EA5E9]/15 border border-[#0EA5E9]/20 flex items-center justify-center text-2xl shrink-0">
                  💼
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-1">
                    Asset Financing
                  </h4>
                  <p className="text-sm text-white/50">
                    Hire purchase for motorcycles, tricycles, and more
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-2xl font-display font-bold text-[#0EA5E9]">
                    ₦2B+
                  </p>
                  <p className="text-xs text-white/30">Disbursed</p>
                </div>
              </div>

              {/* Logistics pillar */}
              <div className="col-span-2 animated-border rounded-2xl bg-[#0B1528] p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/20 flex items-center justify-center text-2xl shrink-0">
                  🗺️
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-1">
                    Logistics Network
                  </h4>
                  <p className="text-sm text-white/50">
                    Inter-state and intra-city delivery across Nigeria
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-2xl font-display font-bold text-[#10B981]">
                    24+
                  </p>
                  <p className="text-xs text-white/30">Cities</p>
                </div>
              </div>

              {/* Platform card */}
              <div className="animated-border rounded-2xl bg-[#0B1528] p-5 text-center">
                <p className="text-3xl mb-2">📱</p>
                <p className="text-sm font-display font-semibold text-white/80">
                  Digital Platform
                </p>
                <p className="text-xs text-white/40 mt-1">Track everything</p>
              </div>

              {/* Integration card */}
              <div className="animated-border rounded-2xl bg-gradient-to-br from-[#0EA5E9]/10 to-[#10B981]/10 p-5 text-center border border-white/5">
                <p className="text-3xl mb-2">🔗</p>
                <p className="text-sm font-display font-semibold text-white/80">
                  Integrated
                </p>
                <p className="text-xs text-white/40 mt-1">One ecosystem</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
