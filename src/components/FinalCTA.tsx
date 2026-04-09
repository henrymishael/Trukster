"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071828] via-[#050A18] to-[#071828]" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        {/* Orbs */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0EA5E9]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        {/* Badge */}
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/5 mb-10">
            <span className="text-[#0EA5E9] text-xs">✦</span>
            <span className="text-xs font-medium text-[#38BDF8] tracking-wide">
              Start your journey today
            </span>
            <span className="text-[#0EA5E9] text-xs">✦</span>
          </div>
        </FadeIn>

        <TextReveal
          text="Power Your Business with Trukster"
          as="h2"
          className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
          staggerDelay={30}
        />

        <FadeIn delay={300}>
          <p className="text-xl text-white/50 font-light mb-12 max-w-lg mx-auto leading-relaxed">
            Access assets.{" "}
            <span className="text-[#0EA5E9]">Deliver goods.</span>{" "}
            Grow{" "}
            <span className="text-[#10B981]">without limits.</span>
          </p>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary */}
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0EA5E9] text-white font-semibold overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>💼</span> Apply for Financing
              </span>
              <span className="absolute inset-0 bg-[#38BDF8] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </a>

            {/* Secondary */}
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#10B981] text-white font-semibold overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>📦</span> Book a Delivery
              </span>
              <span className="absolute inset-0 bg-[#059669] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </a>

            {/* Tertiary */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>🤝</span> Partner With Us
            </a>
          </div>
        </FadeIn>

        {/* Trust signals */}
        <FadeIn delay={600}>
          <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { icon: "🔒", label: "Secure & Encrypted" },
              { icon: "⚡", label: "Fast Approval" },
              { icon: "🇳🇬", label: "Nigeria Focused" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-center">
                <span className="text-xl">{t.icon}</span>
                <span className="text-xs text-white/35">{t.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
