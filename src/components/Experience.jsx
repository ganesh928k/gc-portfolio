import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experience } from '../data/portfolio';
import { IconBriefcase } from '@tabler/icons-react';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={ref} className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <span className="section-label justify-center">03. Career</span>
          <h2 className="section-title mt-4">Work History</h2>
        </div>

        <div className="relative">
          {/* Dynamic SVG Snake Line */}
          <div className="absolute left-[calc(50%-100px)] top-0 bottom-0 w-[200px] pointer-events-none hidden md:block">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-80 overflow-visible">
              {(() => {
                const numItems = experience.length;
                let pathD = `M 50 0 `;
                let points = [];
                
                experience.forEach((_, i) => {
                  const isEven = i % 2 === 0;
                  const y = ((i + 0.5) / numItems) * 100;
                  const x = isEven ? 90 : 10;
                  points.push({ x, y });
                });

                if (points.length > 0) {
                  pathD += `C 50 ${points[0].y/2}, ${points[0].x} ${points[0].y/2}, ${points[0].x} ${points[0].y} `;
                  for (let i = 0; i < points.length - 1; i++) {
                    const curr = points[i];
                    const next = points[i+1];
                    const midY = (curr.y + next.y) / 2;
                    pathD += `S ${next.x} ${midY}, ${next.x} ${next.y} `;
                  }
                  const last = points[points.length - 1];
                  pathD += `S 50 ${last.y + (100 - last.y)/2}, 50 100`;
                }

                return (
                  <>
                    <path d={pathD} fill="none" stroke="var(--border)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                    <motion.path 
                      d={pathD} 
                      fill="none" 
                      stroke="url(#gradLine)" 
                      strokeWidth="3" 
                      vectorEffect="non-scaling-stroke" 
                      style={{ pathLength }}
                    />
                    {points.map((p, i) => (
                      <circle key={i} cx={p.x} cy={p.y} r="2" fill="#050810" stroke="#06b6d4" strokeWidth="1" vectorEffect="non-scaling-stroke" className="animate-pulse" />
                    ))}
                  </>
                );
              })()}
              <defs>
                <linearGradient id="gradLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(var(--color-primary))" />
                  <stop offset="100%" stopColor="rgb(var(--color-secondary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Simple vertical line for mobile */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-border md:hidden">
            <motion.div className="w-full bg-grad origin-top" style={{ scaleY: pathLength, height: '100%' }} />
          </div>

          <div className="space-y-12">
            {experience.map((job, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-[11px] top-8 w-2.5 h-2.5 rounded-full bg-cyan md:hidden" />
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} pl-12`}
                  >
                    <div className="glass p-6 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-indigo/40 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <IconBriefcase size={80} />
                      </div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
                        <h3 className="text-xl font-heading font-bold text-white">{job.role}</h3>
                        <span className="badge bg-indigo/10 text-indigo border border-indigo/20">{job.type}</span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-6 relative z-10">
                        <span className="text-cyan font-medium">{job.company}</span>
                        <span className="text-muted text-sm font-mono flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-muted before:rounded-full">
                          {job.period}
                        </span>
                      </div>

                      <motion.ul 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0 },
                          show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                        }}
                        className="space-y-3 relative z-10"
                      >
                        {job.responsibilities.map((resp, i) => (
                          <motion.li 
                            key={i} 
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              show: { opacity: 1, y: 0 }
                            }}
                            className="flex items-start gap-3 text-sm text-muted"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo/50 shrink-0" />
                            <span className="leading-relaxed">{resp}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
