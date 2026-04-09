"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const ops = [
  {
    icon: "🏭",
    title: "Asset Sourcing",
    desc: "Partnerships with manufacturers and distributors to source quality assets at competitive prices.",
    color: "#0EA5E9",
  },
  {
    icon: "🧑‍💼",
    title: "Customer & Vendor Onboarding",
    desc: "Digital verification and onboarding process for fast, secure account setup.",
    color: "#10B981",
  },
  {
    icon: "⚙️",
    title: "Logistics & Repayment Management",
    desc: "Coordinated delivery network and automated payment systems for seamless operations.",
    color: "#F59E0B",
  },
];

export default function Operations() {
  return (
    <section id="operations" className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#0A1220] to-[#050A18]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#0EA5E9] uppercase mb-4">Operations</p>
          </FadeIn>
          <TextReveal text="How We Run" as="h2" className="font-display text-4xl lg:text-5xl font-bold text-center mb-5" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ops.map((op, i) => (
            <FadeIn key={op.title} delay={i * 120} direction="up">
              <div className="card-hover group h-full rounded-2xl bg-[#0B1528] border border-white/5 p-8 overflow-hidden relative">
                {/* Accent top line */}
                <div className="w-full h-1 rounded-b-full mb-8 opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to right, ${op.color}, transparent)` }} />
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(ellipse at top, ${op.color}08, transparent 60%)` }} />

                <div className="text-4xl mb-5">{op.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{op.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{op.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
