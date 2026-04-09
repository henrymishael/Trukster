"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-navy via-navy-mid to-navy" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left visual */}
          <div>
            <Image
              src="/assets/images/about.jpeg"
              alt="About"
              width={500}
              height={500}
              loading="eager"
            />
          </div>
          <div>
            <FadeIn delay={100}>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-blue-bright uppercase mb-4">
                Who We Are
              </p>
            </FadeIn>

            <TextReveal
              text="Bridging the Gap Between Finance and Movement"
              as="h2"
              className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6"
              staggerDelay={35}
            />

            <FadeIn delay={200}>
              <p className="text-white/55 leading-relaxed mb-5 text-lg font-light">
                Trukster Logistics Limited is a technology-enabled company
                bridging two critical gaps in emerging markets—access to
                productive assets and efficient movement of goods.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-white/55 leading-relaxed mb-5 font-light">
                We empower entrepreneurs and businesses by providing asset
                financing through a structured hire purchase system, while also
                enabling seamless delivery of goods across cities.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-white/55 leading-relaxed font-light">
                By combining finance, logistics, and digital technology,
                Trukster creates a unified ecosystem where users can acquire
                assets, move products efficiently, and grow sustainably.
              </p>
            </FadeIn>

            {/* Pill tags */}
            <FadeIn delay={500}>
              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  "Asset Financing",
                  "Cross-City Delivery",
                  "Digital Platform",
                  "Hire Purchase",
                  "Emerging Markets",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-white/5 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
