import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('light');

  useEffect(() => {
    // Default to light as requested
    const saved = localStorage.getItem('portfolio-theme') || 'light';
    setActiveTheme(saved);
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    setActiveTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border text-muted hover:text-cyan hover:border-cyan/50 transition-all duration-300"
      aria-label="Toggle Light/Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: activeTheme === 'light' ? 90 : 0, scale: activeTheme === 'light' ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <IconMoon size={20} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{ rotate: activeTheme === 'light' ? 0 : -90, scale: activeTheme === 'light' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute text-orange-500"
      >
        <IconSun size={20} />
      </motion.div>
    </button>
  );
}
