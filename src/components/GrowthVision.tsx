"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const milestones = [
  { year: "2024", label: "Launch in Lagos & Abuja", done: true },
  { year: "2025", label: "Expand to 24 cities across Nigeria", done: true },
  { year: "2026", label: "Launch in Ghana & Kenya", done: false },
  { year: "2027", label: "Pan-African platform rollout", done: false },
  { year: "2028", label: "10M users across Africa", done: false },
];

export default function GrowthVision() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#071525] to-[#050A18]" />
      {/* Big glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#10B981]/6 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#10B981] uppercase mb-4">
                Growth Vision
              </p>
            </FadeIn>
            <TextReveal
              text="Scaling Across Africa"
              as="h2"
              className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6"
            />
            <FadeIn delay={200}>
              <p className="text-white/55 leading-relaxed font-light text-lg mb-6">
                Trukster aims to become a leading platform for asset financing and logistics infrastructure across Africa.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-white/45 leading-relaxed font-light">
                Our vision is to build a system where businesses can easily access what they need and deliver where it's needed—without barriers.
              </p>
            </FadeIn>

            {/* Continent highlight */}
            <FadeIn delay={400}>
              <div className="mt-10 flex items-center gap-4 p-5 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20">
                <span className="text-4xl">🌍</span>
                <div>
                  <p className="font-display font-bold text-white">54 Countries. 1.4B People.</p>
                  <p className="text-sm text-white/50 mt-0.5">Africa's market is our canvas.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Timeline */}
          <FadeIn direction="left" delay={200}>
            <div className="space-y-4">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-6">Roadmap</p>
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 100 + 200}>
                  <div className={`flex items-center gap-5 rounded-xl p-4 transition-all ${m.done ? "bg-[#10B981]/10 border border-[#10B981]/20" : "bg-[#0B1528] border border-white/5"}`}>
                    {/* Node */}
                    <div className={`relative w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display text-xs font-bold ${m.done ? "bg-[#10B981] text-white" : "bg-white/5 text-white/30 border border-white/10"}`}>
                      {m.done ? "✓" : i + 1}
                      {m.done && (
                        <span className="absolute inset-0 rounded-full border border-[#10B981] animate-ping opacity-30" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-display font-bold text-sm ${m.done ? "text-[#10B981]" : "text-white/30"}`}>
                        {m.year}
                      </p>
                      <p className={`text-sm ${m.done ? "text-white/80" : "text-white/35"}`}>
                        {m.label}
                      </p>
                    </div>
                    {m.done && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] font-medium shrink-0">
                        Live
                      </span>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
