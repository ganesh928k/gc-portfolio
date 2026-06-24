import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { profile } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sectionIds = ['about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-heading font-bold cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="grad-text">{profile.name.split(' ')[0]}</span>
            <span className="text-white">.sh</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link, i) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link)}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  {link}
                  <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-grad transition-all duration-300 rounded-full ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </motion.button>
              );
            })}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.6 }}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-grad text-sm py-2 px-5 rounded-full shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--color-secondary),0.5)] transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                GitHub
              </span>
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              className="text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => {
                const isActive = activeSection === link.toLowerCase();
                return (
                  <button
                    key={link}
                    onClick={() => scrollTo(link)}
                    className={`text-2xl font-heading font-medium text-left border-b border-white/5 pb-4 transition-colors ${
                      isActive ? 'text-cyan' : 'text-muted hover:text-white'
                    }`}
                  >
                    {isActive && <span className="text-cyan mr-2 text-base">▶</span>}
                    {link}
                  </button>
                );
              })}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-grad text-center justify-center mt-4"
              >
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


