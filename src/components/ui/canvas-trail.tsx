"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
}

export const CanvasTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: Point[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update ages and filter out old points
      points = points.filter((p) => p.age < 50);

      if (points.length > 1) {
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        // Draw the trail
        for (let i = 1; i < points.length; i++) {
          const p1 = points[i - 1];
          const p2 = points[i];

          // Calculate opacity based on age (fades out as it gets older)
          // Also older points are smaller
          const life = 1 - p2.age / 50;
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          
          ctx.strokeStyle = `rgba(45, 212, 191, ${life * 0.8})`; // Teal color
          ctx.lineWidth = life * 8; // Max width of 8px, tapering off
          ctx.stroke();
        }
      }

      // Increase age for next frame
      points.forEach((p) => p.age++);

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
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
};
