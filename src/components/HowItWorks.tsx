"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Browse Assets or Request Delivery",
    desc: "Explore available assets for financing or submit a delivery request through our platform.",
  },
  {
    num: "02",
    icon: "📝",
    title: "Apply for Financing or Book Shipment",
    desc: "Complete your application digitally. Fast, simple, and secure.",
  },
  {
    num: "03",
    icon: "✅",
    title: "Get Approved / Confirm Logistics",
    desc: "Receive approval and confirmations quickly. Track status in real-time.",
  },
  {
    num: "04",
    icon: "📦",
    title: "Receive Asset or Dispatch Goods",
    desc: "Asset delivered to your location, or goods dispatched on schedule.",
  },
  {
    num: "05",
    icon: "📊",
    title: "Track Payments & Deliveries Digitally",
    desc: "Monitor repayments, deliveries, and history—all in one dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-blue-bright uppercase mb-4">
              How It Works
            </p>
          </FadeIn>
          <TextReveal
            text="Simple. Connected. Efficient."
            as="h2"
            className="font-display text-4xl lg:text-5xl font-bold text-center"
          />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[#0EA5E9]/30 via-[#10B981]/30 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn
                key={step.num}
                delay={i * 100}
                direction={i % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`flex items-center gap-8 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${i % 2 !== 0 ? "lg:text-right" : ""}`}
                  >
                    <div
                      className={`card-hover animated-border rounded-2xl bg-[#0B1528] p-6 inline-block max-w-md ${i % 2 !== 0 ? "ml-auto" : ""}`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                      >
                        <span className="text-2xl">{step.icon}</span>
                        <span className="font-display text-xs font-bold text-[#0EA5E9] tracking-widest">
                          STEP {step.num}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative hidden lg:flex shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center text-white font-display font-bold text-sm relative z-10">
                      {parseInt(step.num)}
                    </div>
                    <div
                      className="absolute inset-0 rounded-full border border-[#0EA5E9]/40 animate-ping"
                      style={{
                        animationDuration: "3s",
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
