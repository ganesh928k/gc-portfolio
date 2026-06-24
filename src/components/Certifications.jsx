import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { IconCertificate, IconCheck } from '@tabler/icons-react';
import TiltCard from './TiltCard';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <span className="section-label justify-center">05. Achievements</span>
          <h2 className="section-title mt-4">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="glass p-6 h-full relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-indigo/30 transition-all duration-300 bg-bg/80">
                  <div className="absolute -right-6 -top-6 text-surface-2 group-hover:text-indigo/5 transition-colors duration-500">
                    <IconCertificate size={120} stroke={1} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="badge bg-white/5 text-muted border border-white/10 group-hover:bg-indigo/10 group-hover:text-indigo group-hover:border-indigo/20 transition-colors">
                        {cert.year}
                      </span>
                      {cert.status === 'Completed' ? (
                        <span className="flex items-center gap-1 text-xs font-medium text-emerald bg-emerald/10 px-2 py-0.5 rounded border border-emerald/20">
                          <IconCheck size={12} /> Verified
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-amber bg-amber/10 px-2 py-0.5 rounded border border-amber/20">
                          In Progress
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-heading font-semibold text-white mb-1 group-hover:text-cyan transition-colors pr-8">
                      {cert.name}
                    </h3>
                    <p className="text-sm font-mono text-muted">{cert.issuer}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
