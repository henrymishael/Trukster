"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const revenues = [
  { icon: "📊", label: "Financing margins on asset purchases", pct: 45 },
  { icon: "🚚", label: "Delivery and logistics fees", pct: 35 },
  { icon: "🤝", label: "Vendor partnerships and listings", pct: 20 },
];

export default function BusinessModel() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#070E1A] to-[#050A18]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#0EA5E9] uppercase mb-4">Business Model</p>
          </FadeIn>
          <TextReveal text="How We Operate" as="h2" className="font-display text-4xl lg:text-5xl font-bold text-center mb-5" />
          <FadeIn delay={200}>
            <p className="text-white/50 max-w-lg mx-auto">
              Trukster generates revenue through a combination of financing and logistics services.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {revenues.map((r, i) => (
            <FadeIn key={r.label} delay={i * 100}>
              <div className="card-hover animated-border rounded-2xl bg-[#0B1528] p-7">
                <span className="text-3xl block mb-4">{r.icon}</span>
                <p className="text-white/70 mb-5 text-sm leading-relaxed">{r.label}</p>
                {/* Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-white/30">
                    <span>Revenue share</span>
                    <span className="text-[#0EA5E9] font-semibold">{r.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981]"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="rounded-2xl bg-gradient-to-r from-[#0EA5E9]/10 to-[#10B981]/10 border border-white/5 p-8 text-center max-w-2xl mx-auto">
            <p className="text-lg text-white/80 font-light leading-relaxed">
              We create a complete ecosystem where businesses can{" "}
              <span className="text-[#0EA5E9] font-semibold">own assets</span> and{" "}
              <span className="text-[#10B981] font-semibold">move goods</span> seamlessly.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
