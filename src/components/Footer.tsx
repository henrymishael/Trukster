"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const links = {
  Services: [
    "Asset Financing",
    "Cross-City Delivery",
    "Tracking Dashboard",
    "Digital Agreements",
  ],
  Company: ["About Us", "How It Works", "Technology", "Careers"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-white/5">
      {/* Ticker */}
      <div className="border-b border-white/5 overflow-hidden">
        <div className="flex ticker-track whitespace-nowrap py-3 gap-12">
          {[...Array(3)].flatMap((_, i) =>
            [
              "Asset Financing",
              "Cross-City Delivery",
              "Digital Platform",
              "AI Tracking",
              "Hire Purchase",
              "Last-Mile Delivery",
              "SME Growth",
            ].map((item) => (
              <span
                key={`${item}-${i}`}
                className="inline-flex items-center gap-3 text-xs text-white/20 shrink-0 uppercase tracking-widest"
              >
                <span className="w-1 h-1 rounded-full bg-accent-blue/50" />
                {item}
              </span>
            )),
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <div className="col-span-2">
            <FadeIn>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-5">
                <Image
                  src="/assets/images/Logo2.png"
                  alt="Logo"
                  width={150}
                  height={150}
                />
              </div>

              <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
                Technology-driven asset financing and cross-city logistics for
                entrepreneurs and businesses across Africa.
              </p>

              {/* Socials */}
              <div className="flex gap-3">
                {["𝕏", "in", "▶", "📘"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xs text-white/40 hover:text-white hover:border-white/30 transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 80 + 100}>
              <div>
                <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-white/35 hover:text-white/70 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Trukster Logistics Limited. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-green" />
            </span>
            <span className="text-xs text-white/25">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
