"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import AssetFinancing from "@/components/AssetFinancing";
import Logistics from "@/components/Logistics";
import BusinessModel from "@/components/BusinessModel";
import Technology from "@/components/Technology";
import TargetMarket from "@/components/TargetMarket";
import Operations from "@/components/Operations";
import MarketOpportunity from "@/components/MarketOpportunity";
import Impact from "@/components/Impact";
import GrowthVision from "@/components/GrowthVision";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#050A18] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Problem />
      <Solution />
      <HowItWorks />
      <AssetFinancing />
      <Logistics />
      <BusinessModel />
      <Technology />
      <TargetMarket />
      <Operations />
      <MarketOpportunity />
      <Impact />
      <GrowthVision />
      <FinalCTA />
      <Footer />
    </main>
  );
}
