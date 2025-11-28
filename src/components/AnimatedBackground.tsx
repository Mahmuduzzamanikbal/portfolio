import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  baseY: number;
  amp: number;
  speed: number;
  phase: number;
};

type Connection = {
  a: Node;
  b: Node;
  phase: number;
};

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[][] = [];
    let connections: Connection[] = [];

    const LAYERS = 7; // fewer vertical layers for calmer motion
    const NODES_PER_LAYER = 8; // fewer nodes per layer

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNetwork();
    };

    const initNetwork = () => {
      nodes = [];
      connections = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let l = 0; l < LAYERS; l++) {
        const layerX = ((l + 1) / (LAYERS + 1)) * w;
        const layer: Node[] = [];
        for (let n = 0; n < NODES_PER_LAYER; n++) {
          const spacing = h / (NODES_PER_LAYER + 1);
          const baseY = spacing * (n + 1) + (Math.random() - 0.5) * spacing * 0.4;
          layer.push({
            x: layerX + (Math.random() - 0.5) * 10,
            y: baseY,
            baseY,
            amp: 8 + Math.random() * 10, // smaller amplitude
            speed: 0.15 + Math.random() * 0.2, // slower speed
            phase: Math.random() * Math.PI * 2,
          });
        }
        nodes.push(layer);
      }

      // Create connections to nearest 2 nodes in next layer (less dense)
      for (let l = 0; l < LAYERS - 1; l++) {
        const aLayer = nodes[l];
        const bLayer = nodes[l + 1];
        for (const a of aLayer) {
          const sorted = [...bLayer].sort((p, q) => Math.abs(p.y - a.y) - Math.abs(q.y - a.y));
          const k = 2; // connect to 2 nearest nodes
          for (let i = 0; i < Math.min(k, sorted.length); i++) {
            connections.push({ a, b: sorted[i], phase: Math.random() * Math.PI * 2 });
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = (t: number) => {
      const time = t * 0.0003; // seconds
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Subtle dark vignette to help content pop
      const vignette = ctx.createRadialGradient(
        w * 0.5,
        h * 0.5,
        Math.min(w, h) * 0.2,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.9
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0.0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.06)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      // Update node positions (gentle vertical breathing)
      for (const layer of nodes) {
        for (const n of layer) {
          n.y = n.baseY + Math.sin(time * n.speed + n.phase) * n.amp;
        }
      }

      // Draw connections (AI network feel)
      ctx.globalCompositeOperation = 'lighter';
      for (const c of connections) {
        const ax = c.a.x, ay = c.a.y;
        const bx = c.b.x, by = c.b.y;

        // Base line
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = 'rgba(99,102,241,0.06)'; // indigo-500 at low alpha
        ctx.lineWidth = 1;
        ctx.stroke();

        // Traveling signal dot
        const prog = (Math.sin(time * 1.2 + c.phase) + 1) * 0.5; // slower signal travel
        const px = ax + (bx - ax) * prog;
        const py = ay + (by - ay) * prog;

        const glow = ctx.createRadialGradient(px, py, 0, px, py, 10);
        glow.addColorStop(0, 'rgba(59,130,246,0.35)'); // primary
        glow.addColorStop(1, 'rgba(59,130,246,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw nodes
      for (const layer of nodes) {
        for (const n of layer) {
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 6);
          g.addColorStop(0, 'rgba(167,139,250,0.5)'); // violet
          g.addColorStop(1, 'rgba(167,139,250,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Fade the background near content (center) so it doesn't distract
      ctx.globalCompositeOperation = 'destination-out';
      const fade = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, Math.min(w, h) * 0.35);
      fade.addColorStop(0.0, 'rgba(0,0,0,0.18)'); // strongest erase at center
      fade.addColorStop(0.6, 'rgba(0,0,0,0.08)');
      fade.addColorStop(1.0, 'rgba(0,0,0,0)');
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, w, h);

      // Restore
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedBackground;
