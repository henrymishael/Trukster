"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const problems = [
  {
    icon: "🏦",
    title: "Limited Access to Financing",
    description:
      "Many individuals and businesses cannot acquire essential tools due to lack of upfront capital.",
    accent: "#952cd6",
    number: "01",
  },
  {
    icon: "🚛",
    title: "Inefficient Delivery Systems",
    description:
      "Moving goods across cities is often unreliable, expensive, and poorly coordinated.",
    accent: "#10B981",
    number: "02",
  },
  {
    icon: "🔗",
    title: "Fragmented Solutions",
    description:
      "Businesses struggle because financing and logistics are not integrated into one seamless system.",
    accent: "#c71616",
    number: "03",
  },
];

export default function Problem() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Top gradient separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-blue-bright uppercase mb-4">
              The Challenge
            </p>
          </FadeIn>
          <TextReveal
            text="The Challenge We're Solving"
            as="h2"
            className="font-display text-4xl lg:text-5xl font-bold text-center mb-5"
          />
          <FadeIn delay={200}>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Africa&apos;s entrepreneurs face systemic barriers that limit
              their ability to grow, transport, and scale.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <FadeIn key={p.number} delay={i * 120} direction="up">
              <div className="card-hover group relative rounded-2xl bg-[#0b1328] border border-white/5 p-8 overflow-hidden h-full">
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-6 font-display text-7xl font-black opacity-[0.09] select-none"
                  style={{ color: p.accent }}
                >
                  {p.number}
                </span>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${p.accent}80, transparent 80%)`,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="w-12 h-1 rounded-full mb-6 group-hover:w-24 transition-all duration-500"
                  style={{ background: p.accent }}
                />

                <div className="relative">
                  <span className="text-3xl mb-4 block">{p.icon}</span>
                  <h3 className="font-display text-xl font-bold mb-3 text-white/90">
                    {p.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    {p.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
