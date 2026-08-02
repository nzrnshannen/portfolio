"use client";

import { useEffect, useRef } from "react";

type Shape = "star" | "square" | "circle";

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  shape: Shape;
  vx: number;
  vy: number;
}

export const CanvasTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let lastSpawn = 0;

    // Palette: Teal, bright cyan, white, silver
    const colors = ["#2dd4bf", "#5eead4", "#ffffff", "#e2e8f0"];
    const shapes: Shape[] = ["star", "star", "square", "circle"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Spawn particles less frequently for a sparser effect
      if (now - lastSpawn > 30) {
        // Spawn 1 particle at a time
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 8, // slight scatter
          y: e.clientY + (Math.random() - 0.5) * 8,
          size: Math.random() * 4 + 2, // 2 to 6px
          life: 0,
          maxLife: Math.random() * 40 + 40, // 40 to 80 frames
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          // Wind effect: drift left and slightly up
          vx: (Math.random() - 0.5) * 0.5 - 1.5,
          vy: (Math.random() - 0.5) * 0.5 - 0.8,
        });
        lastSpawn = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter out dead particles
      particles = particles.filter((p) => p.life < p.maxLife);

      particles.forEach((p) => {
        p.life++;
        
        // Apply wind velocity
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        // Fade out as it gets older
        const alpha = 1 - progress;
        // Shrink as it dies
        const currentSize = p.size * (1 - progress);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.globalAlpha = alpha;

        if (p.shape === "star") {
          ctx.beginPath();
          // Draw a 4-pointed star (upright)
          ctx.moveTo(0, -currentSize);
          ctx.quadraticCurveTo(0, 0, currentSize, 0);
          ctx.quadraticCurveTo(0, 0, 0, currentSize);
          ctx.quadraticCurveTo(0, 0, -currentSize, 0);
          ctx.quadraticCurveTo(0, 0, 0, -currentSize);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (p.shape === "square") {
          ctx.fillStyle = p.color;
          // Draw a tiny square
          const sqSize = currentSize * 0.6;
          ctx.fillRect(-sqSize / 2, -sqSize / 2, sqSize, sqSize);
        } else if (p.shape === "circle") {
          ctx.beginPath();
          const radius = Math.max(0, currentSize * 0.8);
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          // Add a soft glow for circles
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
};


