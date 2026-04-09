"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 40,
  as: Tag = "h2",
}: TextRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={cn("overflow-hidden", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span
            className="inline-block transition-all ease-out"
            style={{
              transitionDuration: "600ms",
              transitionDelay: `${delay + i * staggerDelay}ms`,
              transform: inView ? "translateY(0)" : "translateY(110%)",
              opacity: inView ? 1 : 0,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
