import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Code, Cpu, LineChart, ChevronsRight } from 'lucide-react';
import ElectricBorder from '../ui/ElectricBorder';

// ─── Data ─────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 1,
    label: 'Chat & Plan',
    description:
      'We start by talking about your business, your goals, and what you need. Then, we create a clear plan to make it happen.',
    color: '#00F5FF',
    Icon: Brain,
  },
  {
    id: 2,
    label: 'Visual Design',
    description:
      'We design how your website or software will look and feel, making sure it is easy and friendly for your clients to use.',
    color: '#00FFB2',
    Icon: Code,
  },
  {
    id: 3,
    label: 'Coding & Setup',
    description:
      'Our developers write clean, fast code to build your website, set up any smart tools or automation, and make everything work.',
    color: '#7B2DFF',
    Icon: Cpu,
  },
  {
    id: 4,
    label: 'Launch & Support',
    description:
      'We thoroughly test everything to make sure there are no errors, then publish it live and support you afterwards.',
    color: '#FF3366',
    Icon: LineChart,
  },
];

function getDims(vw) {
  if (vw <= 600) {
    return { itemWidth: 280, itemHeight: 450, gap: 104 };
  }
  return { itemWidth: 380, itemHeight: 340, gap: 140 };
}

export default function Workflow() {
  const containerRef = useRef(null);

  const [vw, setVw] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { itemWidth, itemHeight, gap } = getDims(vw);
  const totalDistance = (STEPS.length - 1) * (itemWidth + gap);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div className="bg-transparent overflow-x-clip py-10 md:py-[100px]">

      {/* Title Section */}
      <div className="container  px- mb- md:mb- text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Our Working Process
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-transparent mb-6 mx-auto" />
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-[Inter] opacity-80">
            A simple, clear process from initial concept to launch.
          </p>
        </motion.div>
      </div>

      <div
        ref={containerRef}
        style={{ height: vw <= 600 ? '180vh' : '300vh', position: 'relative' }}
      >
        <div
          style={{
            position: 'sticky',
            top: '20px',
            height: '100vh',
            width: itemWidth,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflow: 'visible',
          }}
        >
          <motion.div
            style={{
              x,
              display: 'flex',
              gap: 0,
              willChange: 'transform',
              alignItems: 'center',
            }}
          >
            {STEPS.map((step, idx) => (
              <React.Fragment key={step.id}>
                {/* ── Card ── */}
                <ElectricBorder
                  color={step.color}
                  speed={4.0}
                  chaos={0.07}
                  borderRadius={20}
                  style={{ flexShrink: 0, width: itemWidth, height: itemHeight }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                      position: 'relative',
                      overflow: 'hidden',
                      background: '#0a0a0a',
                      boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                    }}
                  >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 60%, ${step.color})`,
                      mixBlendMode: 'multiply',
                      opacity: 0.45,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Content */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      padding: itemWidth <= 280 ? '24px 20px' : '32px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      gap: '20px',
                      zIndex: 1,
                    }}
                  >
                    {/* Top block */}
                    <div>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: step.color,
                          marginBottom: 16,
                        }}
                      >
                        <step.Icon size={20} />
                      </div>

                      <span
                        style={{
                          display: 'block',
                          fontFamily: 'monospace',
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.35em',
                          textTransform: 'uppercase',
                          color: step.color,
                          opacity: 0.8,
                          marginBottom: 6,
                        }}
                      >
                        Step 0{step.id}
                      </span>

                      <h3
                        className="font-heading font-bold text-white"
                        style={{
                          fontSize: itemWidth <= 280 ? 20 : 24,
                          lineHeight: 1.2,
                          margin: 0,
                        }}
                      >
                        {step.label}
                      </h3>
                    </div>

                    {/* Bottom: description */}
                    <p
                      className="font-[Inter] text-gray-400"
                      style={{
                        fontSize: itemWidth <= 280 ? 13 : 14,
                        lineHeight: 1.6,
                        margin: 0,
                        opacity: 0.75,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: 3,
                      width: '100%',
                      background: step.color,
                      opacity: 0.7,
                    }}
                  />
                </div>
              </ElectricBorder>

                {/* Arrow connector */}
                {idx < STEPS.length - 1 && (
                  <motion.div
                    key={`arrow-${step.id}`}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    style={{
                      flexShrink: 0,
                      width: gap,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: vw <= 600 ? 50 : 44,
                        height: vw <= 600 ? 50 : 44,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`,
                        border: `1px solid ${step.color}66`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: step.color,
                        boxShadow: `0 0 20px ${step.color}40`,
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <ChevronsRight size={vw <= 600 ? 32 : 20} strokeWidth={1.5} />
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
