import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-[#050e1f]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[#00ff9f] text-xs tracking-widest mb-2">
            <span className="text-slate-500">$ </span>ls projects/
          </div>
          <h2 className="font-display text-4xl font-bold text-white">
            INFRA <span className="gradient-text">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glow-border corner-box bg-[#0a1628] rounded-lg p-5 group hover:translate-y-[-4px] transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                >
                  {project.icon}
                </div>
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{ color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                >
                  {project.highlight}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-sm font-bold text-white mb-2 group-hover:text-[#00ff9f] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 bg-[#0f2545] text-slate-400 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom line */}
              <div
                className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/ganesh928k"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs glow-border px-6 py-3 text-[#00ff9f] rounded hover:bg-[#00ff9f]/10 transition-all duration-200 tracking-widest"
          >
            VIEW MORE ON GITHUB ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
