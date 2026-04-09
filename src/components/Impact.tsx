"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const impacts = [
  {
    icon: "📈",
    title: "Enables Business Expansion",
    desc: "Entrepreneurs grow their operations with financed assets and reliable logistics.",
    color: "#0EA5E9",
  },
  {
    icon: "🔧",
    title: "Improves Access to Tools",
    desc: "Critical equipment reaches those who need it most, regardless of upfront capital.",
    color: "#10B981",
  },
  {
    icon: "🚀",
    title: "Simplifies Movement of Goods",
    desc: "Products reach customers faster, reducing waste and increasing revenue.",
    color: "#F59E0B",
  },
  {
    icon: "👷",
    title: "Creates Jobs",
    desc: "New roles across logistics, commerce, and technology continue to emerge.",
    color: "#A78BFA",
  },
];

export default function Impact() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#060D1A] to-[#050A18]" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#A78BFA]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A78BFA] uppercase mb-4">
              Our Impact
            </p>
          </FadeIn>
          <TextReveal
            text="Driving Economic Growth"
            as="h2"
            className="font-display text-4xl lg:text-5xl font-bold text-center mb-5"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {impacts.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100} direction="up">
              <div className="card-hover group h-full rounded-2xl bg-[#0B1528] border border-white/5 p-7 text-center overflow-hidden relative">
                {/* Radial glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at bottom, ${item.color}10, transparent 60%)` }}
                />
                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: item.color }}
                />

                <div
                  className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-white mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Highlight statement */}
        <FadeIn delay={500}>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/20 via-[#10B981]/15 to-[#0EA5E9]/20" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute inset-px rounded-3xl bg-[#0B1528]/60 backdrop-blur-sm" />

            <div className="relative px-8 py-14 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                We don't just finance assets—
              </p>
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text">
                we enable commerce.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
