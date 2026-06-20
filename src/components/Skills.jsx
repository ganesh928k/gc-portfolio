import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-bg2/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <span className="section-label justify-center">02. Expertise</span>
          <h2 className="section-title mt-4">Technical Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass p-8 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-indigo/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                  style={{ backgroundColor: `${category.color}15`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {category.items.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted font-medium">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: category.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
