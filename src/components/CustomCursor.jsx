import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function TrailDot({ cursorX, cursorY, index, isVisible }) {
  // Progressively change physics properties to create a fluid wave/snake effect
  const springConfig = { 
    damping: 12 + index * 2.5, 
    stiffness: 400 - index * 20,
    mass: 0.2 + index * 0.05
  };
  
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Dots get smaller and more transparent towards the tail
  const scale = Math.max(0.2, 1 - (index * 0.08));
  const opacity = Math.max(0, 0.8 - (index * 0.06));

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-cyan rounded-full mix-blend-screen pointer-events-none z-[9999]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        scale,
      }}
      animate={{
        opacity: isVisible ? opacity : 0
      }}
      transition={{ duration: 0.15 }}
    />
  );
}

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div className="hidden md:block">
      {/* Generate 15 dots for a long, fluid tail */}
      {Array.from({ length: 15 }).map((_, i) => (
        <TrailDot 
          key={i} 
          index={i} 
          cursorX={cursorX} 
          cursorY={cursorY} 
          isVisible={isVisible} 
        />
      ))}
    </div>
  );
}
