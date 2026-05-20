import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[#00ff9f] text-xs tracking-widest mb-2">
            <span className="text-slate-500">$ </span>cat certs.txt
          </div>
          <h2 className="font-display text-4xl font-bold text-white">
            CERTIFICATIONS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.short}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glow-border corner-box bg-[#0a1628] rounded-lg p-6 text-center group hover:translate-y-[-4px] transition-transform duration-300"
            >
              {/* Badge circle */}
              <div className="relative mx-auto w-16 h-16 mb-4">
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-2xl border-2"
                  style={{ borderColor: cert.color, background: `${cert.color}10` }}
                >
                  {cert.icon}
                </div>
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 20px ${cert.color}60` }}
                />
              </div>

              <div className="font-display text-xl font-bold mb-1" style={{ color: cert.color }}>
                {cert.short}
              </div>
              <div className="text-white text-xs font-semibold mb-1 leading-snug">{cert.name}</div>
              <div className="font-mono text-xs text-slate-500">{cert.org}</div>

              {/* Verified badge */}
              <div className="mt-3 font-mono text-xs text-[#00ff9f] flex items-center justify-center gap-1">
                <span>✓</span>
                <span>VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="font-mono text-xs text-slate-500">
            Certification IDs and verification links available on request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
