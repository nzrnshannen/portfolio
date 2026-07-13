"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40",
        className
      )}
    >
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="fadeGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="var(--neutral-800)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--neutral-900)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-900/80 to-neutral-950"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558603/noise_dty15z.png')] opacity-[0.03] mix-blend-overlay"></div>
    </div>
  );
};
