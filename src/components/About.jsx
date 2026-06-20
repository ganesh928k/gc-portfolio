import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="section-label">01. Background</span>
          <h2 className="section-title mt-4">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-lg p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo/10 blur-3xl rounded-full mix-blend-screen" />
            
            <p className="text-muted leading-relaxed text-lg relative z-10">
              {profile.bio}
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6 relative z-10">
              <div className="border-l-4 border-indigo pl-4 relative py-2">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo/20 to-transparent -z-10 blur-md" />
                <p className="text-4xl font-heading font-bold text-white mb-1">3+</p>
                <p className="text-sm font-mono text-muted uppercase">Years Experience</p>
              </div>
              <div className="border-l-2 border-cyan/30 pl-4">
                <p className="text-3xl font-heading font-bold text-white mb-1">20+</p>
                <p className="text-sm font-mono text-muted uppercase">Servers Managed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-indigo/50 transition-all duration-300">
              <h3 className="text-xl font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-indigo">⚡</span> Infrastructure First
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                I believe in building resilient infrastructure that scales. From bare-metal Linux servers to cloud environments, I focus on security, performance, and automation.
              </p>
            </div>
            
            <div className="glass p-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-cyan/50 transition-all duration-300">
              <h3 className="text-xl font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-cyan">📞</span> Telephony Expert
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Specialized in Asterisk and VICIdial deployments. I handle complex SIP routing, trunk configurations, and troubleshoot deep VoIP network issues.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
