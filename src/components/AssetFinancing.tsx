"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const features = [
  { icon: "📅", label: "Flexible installment plans" },
  { icon: "⚡", label: "Fast approval process" },
  { icon: "📈", label: "Transparent repayment tracking" },
  { icon: "📄", label: "Digital agreements and records" },
];

const assets = [
  { emoji: "🏍️", name: "Motorcycles", desc: "Okada & dispatch riders" },
  { emoji: "🛺", name: "Tricycles", desc: "Keke NAPEP & cargo trikes" },
  { emoji: "⚙️", name: "Equipment", desc: "Business machinery & tools" },
  { emoji: "🚐", name: "Vehicles", desc: "Delivery vans & trucks" },
];

export default function AssetFinancing() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-navy via-[#071020] to-navy" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Asset cards */}
          <FadeIn direction="right">
            <Image
              src="/assets/images/assets.jpeg"
              alt="Asset Financing"
              width={1000}
              height={1000}
            />
          </FadeIn>

          {/* Right: Copy */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4">
                Asset Financing
              </p>
            </FadeIn>

            <TextReveal
              text="Own What You Need, Pay Over Time"
              as="h2"
              className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6"
            />

            <FadeIn delay={200}>
              <p className="text-white/55 leading-relaxed mb-10 font-light text-lg">
                Access productive assets such as motorcycles, tricycles, and
                equipment without upfront payment.
              </p>
            </FadeIn>

            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <FadeIn key={f.label} delay={i * 80 + 300}>
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center text-base shrink-0">
                      {f.icon}
                    </div>
                    <span className="text-white/70">{f.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={600}>
              <a
                href="#final-cta"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white font-semibold transition-all duration-300"
              >
                Apply for Financing
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
