"use client";

import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

const WORDS = [
  "Speed.",
  "Reliability.",
  "Intelligence.",
  "Efficiency.",
  "Growth.",
];

function TypewriterWord() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % WORDS.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text font-display">
      {displayed}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-xl mx-auto float">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-accent-blue/10 rounded-3xl blur-2xl" />

      {/* Dashboard card */}
      <div className="relative animated-border rounded-2xl bg-navy-mid/80 backdrop-blur-sm overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-white/30 font-mono">
            trukster.dashboard
          </span>
          <div className="w-16 h-1.5 rounded-full bg-white/10" />
        </div>

        {/* Dashboard content */}
        <div className="p-5 grid grid-cols-3 gap-3">
          {/* Stat cards */}
          {[
            {
              label: "Active Deliveries",
              value: "1,284",
              color: "text-accent-blue-bright",
              delta: "+12%",
            },
            {
              label: "Assets Financed",
              value: "3,901",
              color: "text-accent-green",
              delta: "+8%",
            },
            {
              label: "Cities Covered",
              value: "24",
              color: "text-amber-500",
              delta: "+3",
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-xl p-3">
              <p className="text-[10px] text-white/40 leading-tight mb-2">
                {stat.label}
              </p>
              <p className={`text-lg font-display font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-[10px] text-green-400 mt-1">
                {stat.delta} today
              </p>
            </div>
          ))}
        </div>

        {/* Map / route visual */}
        <div className="mx-5 mb-5 rounded-xl bg-[#071020] border border-white/5 overflow-hidden relative h-44">
          {/* Grid lines */}
          <div className="absolute inset-0 grid-pattern opacity-40" />

          {/* Animated route path SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 176">
            {/* Route line */}
            <path
              d="M 30 140 C 80 80, 160 60, 220 100 S 340 40, 370 30"
              fill="none"
              stroke="url(#routeGrad)"
              strokeWidth="2"
              strokeDasharray="600"
              strokeDashoffset="0"
              style={{
                animation: "drawRoute 3s ease-in-out infinite alternate",
              }}
            />
            <defs>
              <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            {/* Nodes */}
            {[
              [30, 140],
              [220, 100],
              [370, 30],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill={
                    i === 2
                      ? "var(--color-accent-green)"
                      : "var(--color-accent-blue)"
                  }
                />
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  fill="none"
                  stroke={
                    i === 2
                      ? "var(--color-accent-green)"
                      : "var(--color-accent-blue)"
                  }
                  strokeWidth="1"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    from="8"
                    to="16"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}
          </svg>

          {/* Labels */}
          <div className="absolute bottom-3 left-4 text-[10px] font-mono text-accent-blue">
            Lagos ●
          </div>
          <div className="absolute top-3 right-4 text-[10px] font-mono text-accent-green">
            ● Abuja
          </div>

          {/* Scan line */}
          <div
            className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-accent-blue/40 to-transparent"
            style={{ animation: "scanline 4s linear infinite", top: 0 }}
          />
        </div>

        {/* Recent activity */}
        <div className="px-5 pb-5">
          <p className="text-[11px] text-white/30 uppercase tracking-widest mb-3">
            Live Activity
          </p>
          <div className="space-y-2">
            {[
              {
                id: "TRK-4421",
                status: "In Transit",
                from: "Lagos",
                to: "Port Harcourt",
                color: "bg-blue-500",
              },
              {
                id: "TRK-4418",
                status: "Delivered",
                from: "Abuja",
                to: "Kaduna",
                color: "bg-green-500",
              },
              {
                id: "TRK-4415",
                status: "Financing",
                from: "Motorcycle",
                to: "Approved",
                color: "bg-amber-500",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-white/3 rounded-lg px-3 py-2"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${item.color} shrink-0`}
                />
                <span className="text-[11px] font-mono text-white/40">
                  {item.id}
                </span>
                <span className="text-[11px] text-white/70 flex-1">
                  {item.from} → {item.to}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.status === "Delivered"
                      ? "bg-green-500/15 text-green-400"
                      : item.status === "Financing"
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-blue-500/15 text-blue-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawRoute {
          0% {
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes scanline {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center mesh-bg grid-pattern pt-20 pb-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 rounded-full bg-accent-green/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          {/* Badge */}
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/30 bg-accent-blue/5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              <span className="text-xs font-medium gradient-text tracking-wide">
                Now live across Nigeria
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={200}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
              Finance Assets. <br className="hidden sm:block" />
              Move Goods.
              <br />
              <TypewriterWord />
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={350}>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-md mb-10 font-light">
              Trukster Logistics Limited is a technology-driven platform that
              provides <span className="text-[var(--foreground)] opacity-80">asset financing</span>{" "}
              and{" "}
              <span className="text-[var(--foreground)] opacity-80">
                reliable cross-city delivery
              </span>{" "}
              solutions for individuals and businesses.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={450}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#solution"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-blue text-white font-semibold text-sm overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <svg
                  className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                <span className="absolute inset-0 bg-accent-blue-bright -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--border)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] hover:border-[var(--foreground)]/30 font-semibold text-sm transition-all duration-300"
              >
                Explore Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* Stats row */}
          <FadeIn delay={550}>
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-10">
              {[
                { value: "24+", label: "Cities" },
                { value: "₦2B+", label: "Assets Financed" },
                { value: "99.2%", label: "On-time Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-[var(--foreground)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: Dashboard mockup */}
        <FadeIn delay={300} direction="left">
          {/* <DashboardMockup /> */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent-blue/10 rounded-3xl blur-2xl group-hover:bg-accent-blue/20 transition-all duration-500" />
            <Image
              src="/assets/images/bike.jpeg"
              alt="Asset Financing"
              width={1000}
              height={1000}
              className="relative rounded-2xl border border-[var(--border)] shadow-2xl"
            />
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest text-[var(--muted-foreground)] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-[var(--border)] to-transparent" />
      </div>
    </section>
  );
}
