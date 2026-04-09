"use client";

import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

const features = [
  { icon: "🖥️", title: "User Dashboards", desc: "Unified view of assets and deliveries in real-time" },
  { icon: "🔄", title: "Automated Repayment", desc: "Smart tracking and payment reminder systems" },
  { icon: "📡", title: "Shipment Tracking", desc: "Live GPS tracking across all active deliveries" },
  { icon: "🔔", title: "Smart Notifications", desc: "Payment reminders and delivery updates" },
  { icon: "🧠", title: "AI Risk Optimization", desc: "Data-driven credit and route optimization" },
  { icon: "🔐", title: "Secure Digital Agreements", desc: "Fully verified and encrypted documents" },
];

export default function Technology() {
  return (
    <section id="technology" className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-blue/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4">Technology</p>
          </FadeIn>
          <TextReveal text="Built on Smart Technology" as="h2" className="font-display text-4xl lg:text-5xl font-bold text-center mb-5" />
          <FadeIn delay={200}>
            <p className="text-white/50 max-w-lg mx-auto">
              Our platform powers both financing and logistics through a single digital infrastructure.
            </p>
          </FadeIn>
        </div>

        {/* Hexagonal feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 80} direction="up">
              <div className="card-hover group relative rounded-2xl bg-navy-mid border border-white/5 p-6 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-accent-blue/5 to-transparent" />
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-accent-blue/10 to-transparent" />

                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-display font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tech stack ticker */}
        <FadeIn delay={600}>
          <div className="mt-16 overflow-hidden rounded-2xl bg-navy-mid border border-white/5">
            <div className="flex ticker-track whitespace-nowrap py-5 px-4 gap-10">
              {[...Array(2)].flatMap((_, i) =>
                ["AI Risk Engine", "GPS Tracking", "Digital Agreements", "Payment Automation", "Cloud Infrastructure", "Real-time Sync", "Mobile-first", "Data Analytics"].map((tech) => (
                  <span key={`${tech}-${i}`} className="inline-flex items-center gap-2 text-sm text-white/30 shrink-0">
                    <span className="w-1 h-1 rounded-full bg-accent-blue" />
                    {tech}
                  </span>
                ))
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
