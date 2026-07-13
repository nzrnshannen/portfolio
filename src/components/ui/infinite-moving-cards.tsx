"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote?: string;
    name: string;
    title?: string;
    icon?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-neutral-700/50 flex-shrink-0 bg-gradient-to-br from-neutral-800/80 to-neutral-900/90 shadow-2xl backdrop-blur-sm px-8 py-6 md:w-[450px] hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.2)] transition-all duration-500 overflow-hidden group"
            key={item.name + idx}
          >
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-400/10 to-transparent pointer-events-none" />
            
            <blockquote className="relative z-10">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {item.quote && (
                <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.quote}
                </span>
              )}
              <div className="relative z-20 mt-2 flex flex-row items-center gap-4">
                {/* Logo Icon */}
                {item.icon && (
                  <div className="w-12 h-12 flex-shrink-0 bg-neutral-800/50 rounded-lg p-2 border border-neutral-700 flex items-center justify-center">
                    <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                  </div>
                )}
                <span className="flex flex-col gap-1">
                  <span className=" text-base leading-[1.6] text-white font-semibold">
                    {item.name}
                  </span>
                  {item.title && (
                    <span className=" text-sm leading-[1.6] text-neutral-400 font-normal">
                      {item.title}
                    </span>
                  )}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
