"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type InfiniteTextMarqueeProps = {
  text?: string;
  link?: string;
  speed?: number;
  showTooltip?: boolean;
  tooltipText?: string;
  fontSize?: string;
  textColor?: string;
  hoverColor?: string;
  className?: string;
  textClassName?: string;
};

export const InfiniteTextMarquee: React.FC<InfiniteTextMarqueeProps> = ({
  text = "Let's Get Started",
  link,
  speed = 30,
  showTooltip = true,
  tooltipText = "Time to Flex",
  fontSize = "8rem",
  textColor = "",
  hoverColor = "",
  className = "",
  textClassName = "",
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const maxRotation = 8;

  useEffect(() => {
    if (!showTooltip) return;

    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });

      const midpoint = window.innerWidth / 2;
      const distanceFromMidpoint = Math.abs(event.clientX - midpoint);
      const nextRotation = (distanceFromMidpoint / midpoint) * maxRotation;

      setRotation(event.clientX > midpoint ? nextRotation : -nextRotation);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showTooltip]);

  const repeatedText = Array(8).fill(text).join("  ");

  const content = (
    <span
      className={cn(
        "m-0 inline-block cursor-pointer py-10 font-bold tracking-tight transition-all",
        textColor ? "" : "text-black dark:text-white",
        textClassName
      )}
      style={{
        fontSize,
        color: textColor || undefined,
      }}
    >
      <span className="hoverable-text">{repeatedText}</span>
      <style jsx>{`
        .hoverable-text:hover {
          color: ${hoverColor || "var(--accent-hover)"};
        }
      `}</style>
    </span>
  );

  return (
    <>
      {showTooltip && (
        <div
          className={`following-tooltip fixed z-[99] rounded-3xl bg-primary px-12 py-6 text-nowrap font-bold text-primary-foreground transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`,
          }}
        >
          <p>{tooltipText}</p>
        </div>
      )}

      <main className={cn("relative overflow-hidden", className)}>
        <motion.div
          className="whitespace-nowrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            x: ["0%", "-50%"],
            transition: {
              repeat: Infinity,
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {link ? <Link href={link}>{content}</Link> : content}
        </motion.div>
      </main>
    </>
  );
};
