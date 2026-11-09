import React, { useEffect, useRef } from 'react';

interface StarfieldCanvasProps {
  enabled: boolean;
  density?: number;
  className?: string;
}

interface StarParticle {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  speed: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

const SPECTRAL_COLORS = [
  '#F2F5F8', // Class A/F Alabaster Starlight
  '#C4CDD9', // Class F/G Pale Silver
  '#9FB8E8', // Class O/B Blue-White
  '#E59846', // Class K/M Atmospheric Amber
  '#B6A9F2', // Ionized Violet-White
];

export const StarfieldCanvas: React.FC<StarfieldCanvasProps> = ({
  enabled,
  density = 115,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const createStars = (): StarParticle[] => {
      const count = Math.min(180, Math.floor((width * height) / (1400000 / density)));
      const stars: StarParticle[] = [];
      for (let i = 0; i < count; i++) {
        // Weighted spectral distribution: mostly silver/white, 15% amber, 15% blue
        const rand = Math.random();
        const colorIndex =
          rand < 0.45 ? 0 : rand < 0.72 ? 1 : rand < 0.85 ? 2 : rand < 0.95 ? 3 : 4;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() < 0.88 ? 0.6 + Math.random() * 0.8 : 1.4 + Math.random() * 0.9,
          color: SPECTRAL_COLORS[colorIndex],
          alpha: 0.22 + Math.random() * 0.65,
          speed: 0.025 + Math.random() * 0.06,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.004 + Math.random() * 0.01,
        });
      }
      return stars;
    };

    let stars = createStars();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars = createStars();
      if (!enabled || prefersReducedMotion) {
        drawFrame(false);
      }
    };

    const drawFrame = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (animate) {
          star.x -= star.speed;
          star.twinklePhase += star.twinkleSpeed;
          if (star.x < 0) {
            star.x = width;
            star.y = Math.random() * height;
          }
        }

        const currentAlpha = animate
          ? Math.max(0.12, Math.min(0.95, star.alpha + Math.sin(star.twinklePhase) * 0.16))
          : star.alpha;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    // Always draw at least one static starfield frame
    drawFrame(false);

    if (enabled && !prefersReducedMotion) {
      const renderLoop = () => {
        drawFrame(true);
        animationFrameId = window.requestAnimationFrame(renderLoop);
      };
      animationFrameId = window.requestAnimationFrame(renderLoop);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [enabled, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 opacity-70 ${className}`}
    />
  );
};

