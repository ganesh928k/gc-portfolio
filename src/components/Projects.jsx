import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { IconBrandGithub, IconExternalLink, IconFolder } from '@tabler/icons-react';
import TiltCard from './TiltCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-bg2/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-label">04. Work</span>
            <h2 className="section-title mt-4">Featured Projects</h2>
          </div>
          <a href="https://github.com/ganesh928k" target="_blank" rel="noreferrer" className="text-indigo hover:text-cyan transition-colors flex items-center gap-2 font-mono text-sm group">
            View all on GitHub 
            <IconBrandGithub size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="glass p-8 flex flex-col h-full group hover:-translate-y-2 hover:border-indigo/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(var(--color-primary),0.1)] transition-all duration-300 relative overflow-hidden bg-bg/80">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-indigo group-hover:text-cyan transition-colors">
                      <IconFolder size={24} />
                    </div>
                    <div className="flex gap-3 text-muted">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="hover:text-white transition-colors">
                          <IconBrandGithub size={22} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} live site`} className="hover:text-cyan transition-colors">
                          <IconExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-heading font-semibold text-white mb-3 group-hover:text-indigo transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-6 border-t border-border group-hover:border-indigo/20 transition-colors">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-cyan bg-cyan/10 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
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
