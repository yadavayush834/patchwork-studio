import React, { useEffect, useRef } from 'react';

export interface NeuralSynapticCortexProps {
  neuronCount?: number;
  firingRate?: number;
  synapseColor?: string;
  pulseColor?: string;
  interactiveProbe?: boolean;
}

interface Neuron {
  x: number;
  y: number;
  radius: number;
  potential: number; // membrane potential [0, 1]
  refractory: number;
  connections: number[];
}

interface SpikePulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export function NeuralSynapticCortex({
  neuronCount = 42,
  firingRate = 1.0,
  synapseColor = '#22d3ee',
  pulseColor = '#e11d48',
  interactiveProbe = true,
}: NeuralSynapticCortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const networkRef = useRef<{
    neurons: Neuron[];
    pulses: SpikePulse[];
    mouse: { x: number; y: number; active: boolean };
  }>({
    neurons: [],
    pulses: [],
    mouse: { x: 0, y: 0, active: false },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const w = canvas.width;
    const h = canvas.height;

    // Generate neurons in cortical cluster layers
    const neurons: Neuron[] = [];
    for (let i = 0; i < neuronCount; i++) {
      neurons.push({
        x: 60 + Math.random() * (w - 120),
        y: 50 + Math.random() * (h - 100),
        radius: 3.5 + Math.random() * 3,
        potential: Math.random() * 0.4,
        refractory: 0,
        connections: [],
      });
    }

    // Connect proximate neurons with axon synapses
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const dx = neurons[i].x - neurons[j].x;
        const dy = neurons[i].y - neurons[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 110 && neurons[i].connections.length < 5) {
          neurons[i].connections.push(j);
        }
      }
    }

    networkRef.current.neurons = neurons;
    networkRef.current.pulses = [];

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      networkRef.current.mouse.x = ((e.clientX - rect.left) / rect.width) * w;
      networkRef.current.mouse.y = ((e.clientY - rect.top) / rect.height) * h;
      networkRef.current.mouse.active = true;
    };

    const onMouseLeave = () => {
      networkRef.current.mouse.active = false;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      ctx.fillStyle = '#05070c';
      ctx.fillRect(0, 0, w, h);

      const net = networkRef.current;

      // Random spontaneous action potential firing
      if (Math.random() < 0.04 * firingRate) {
        const idx = Math.floor(Math.random() * net.neurons.length);
        if (net.neurons[idx].refractory === 0) {
          net.neurons[idx].potential = 1.0;
        }
      }

      // Cursor electrical stimulation probe
      if (net.mouse.active && interactiveProbe) {
        net.neurons.forEach((n) => {
          const d = Math.hypot(n.x - net.mouse.x, n.y - net.mouse.y);
          if (d < 65 && n.refractory === 0) {
            n.potential = Math.min(1.0, n.potential + 0.15);
          }
        });

        // Draw probe glow
        ctx.beginPath();
        ctx.arc(net.mouse.x, net.mouse.y, 45, 0, Math.PI * 2);
        ctx.fillStyle = `${synapseColor}10`;
        ctx.fill();
        ctx.strokeStyle = `${synapseColor}40`;
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw Axon Synapse Connections
      ctx.lineWidth = 1;
      net.neurons.forEach((n, idx) => {
        n.connections.forEach((targetIdx) => {
          const target = net.neurons[targetIdx];
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = '#1e293b';
          ctx.stroke();
        });
      });

      // Update and Draw Active Action Potential Pulses
      for (let pIdx = net.pulses.length - 1; pIdx >= 0; pIdx--) {
        const pulse = net.pulses[pIdx];
        pulse.progress += pulse.speed;

        const fromN = net.neurons[pulse.from];
        const toN = net.neurons[pulse.to];

        if (!fromN || !toN) {
          net.pulses.splice(pIdx, 1);
          continue;
        }

        const px = fromN.x + (toN.x - fromN.x) * pulse.progress;
        const py = fromN.y + (toN.y - fromN.y) * pulse.progress;

        // Draw electrical pulse spark
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pulseColor;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = `${pulseColor}40`;
        ctx.fill();

        // Target reached: stimulate recipient neuron
        if (pulse.progress >= 1.0) {
          if (toN.refractory === 0) {
            toN.potential = Math.min(1.0, toN.potential + 0.6);
          }
          net.pulses.splice(pIdx, 1);
        }
      }

      // Update Neuron Potentials & Fire Pulses
      net.neurons.forEach((n, idx) => {
        if (n.refractory > 0) {
          n.refractory--;
        }

        // Action Potential Threshold Reached
        if (n.potential >= 0.85 && n.refractory === 0) {
          n.refractory = 25; // Refractory period
          n.potential = 0;

          // Propagate spike pulse along all outgoing axons
          n.connections.forEach((targetIdx) => {
            net.pulses.push({
              from: idx,
              to: targetIdx,
              progress: 0,
              speed: 0.035 * firingRate,
            });
          });

          // Spike flash aura
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `${pulseColor}30`;
          ctx.fill();
        }

        // Draw Soma Cell Body
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        if (n.refractory > 0) {
          ctx.fillStyle = pulseColor;
        } else if (n.potential > 0.3) {
          ctx.fillStyle = synapseColor;
        } else {
          ctx.fillStyle = '#334155';
        }
        ctx.fill();

        // Membrane potential halo
        if (n.potential > 0.2) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = `${synapseColor}80`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // HUD Telemetry
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`CORTICAL ACTION POTENTIALS: Active Pulses: ${net.pulses.length}`, 20, 25);
      ctx.fillText(`Hover canvas to stimulate synaptic pathways`, 20, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [neuronCount, firingRate, synapseColor, pulseColor, interactiveProbe]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#05070c] rounded-xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} width={640} height={360} className="w-full h-full object-contain cursor-pointer" />
    </div>
  );
}
export default NeuralSynapticCortex;
