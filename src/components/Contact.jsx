import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#050e1f]/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[#00ff9f] text-xs tracking-widest mb-2">
            <span className="text-slate-500">$ </span>ping ganesh
          </div>
          <h2 className="font-display text-4xl font-bold text-white">
            GET IN <span className="gradient-text">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="glow-border corner-box bg-[#0a1628] rounded-lg p-6">
              <div className="font-mono text-xs text-[#00ff9f] mb-4 pb-3 border-b border-[#0f2545]">
                // CONTACT DETAILS
              </div>
              <div className="space-y-4">
                {[
                  { icon: "✉", label: "EMAIL", value: profile.email, href: `mailto:${profile.email}` },
                  { icon: "📱", label: "PHONE", value: profile.phone, href: `tel:${profile.phone}` },
                  { icon: "📍", label: "LOCATION", value: profile.location, href: null },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div className="font-mono text-xs text-slate-500">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-mono text-sm text-[#00ff9f] hover:text-[#00d4ff] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-mono text-sm text-slate-300">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glow-border bg-[#0a1628] rounded-lg p-4 text-center group hover:bg-[#00d4ff]/5 transition-all"
              >
                <div className="text-2xl mb-2">💼</div>
                <div className="font-mono text-xs text-[#00d4ff]">LINKEDIN</div>
                <div className="font-mono text-xs text-slate-500 mt-1 group-hover:text-slate-300 transition-colors">
                  /in/ganesh928
                </div>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glow-border bg-[#0a1628] rounded-lg p-4 text-center group hover:bg-[#00ff9f]/5 transition-all"
              >
                <div className="text-2xl mb-2">🐙</div>
                <div className="font-mono text-xs text-[#00ff9f]">GITHUB</div>
                <div className="font-mono text-xs text-slate-500 mt-1 group-hover:text-slate-300 transition-colors">
                  /ganesh928k
                </div>
              </a>
            </div>
          </motion.div>

          {/* Message panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glow-border corner-box bg-[#0a1628] rounded-lg p-6 h-full">
              <div className="font-mono text-xs text-[#00ff9f] mb-6 pb-3 border-b border-[#0f2545]">
                // SEND A MESSAGE
              </div>

              <form
                action={`mailto:${profile.email}`}
                method="GET"
                className="space-y-4"
              >
                <div>
                  <label className="font-mono text-xs text-slate-500 block mb-1.5">NAME</label>
                  <input
                    name="name"
                    className="w-full bg-[#0f2545] border border-[#0f2545] rounded px-3 py-2.5 font-mono text-sm text-white focus:outline-none focus:border-[#00ff9f]/50 transition-colors placeholder-slate-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-500 block mb-1.5">SUBJECT</label>
                  <input
                    name="subject"
                    className="w-full bg-[#0f2545] border border-[#0f2545] rounded px-3 py-2.5 font-mono text-sm text-white focus:outline-none focus:border-[#00ff9f]/50 transition-colors placeholder-slate-600"
                    placeholder="Job opportunity / collab"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-500 block mb-1.5">MESSAGE</label>
                  <textarea
                    name="body"
                    rows={4}
                    className="w-full bg-[#0f2545] border border-[#0f2545] rounded px-3 py-2.5 font-mono text-sm text-white focus:outline-none focus:border-[#00ff9f]/50 transition-colors placeholder-slate-600 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 font-mono text-xs font-bold bg-[#00ff9f] text-[#020912] rounded hover:bg-[#00d4ff] transition-all duration-200 tracking-widest"
                >
                  SEND MESSAGE ↗
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
