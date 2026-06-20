import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import './index.css'
import React, { Suspense } from 'react';
const ParticleMesh = React.lazy(() => import('./components/ParticleMesh'));
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Terminal from './components/Terminal'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-bg text-text selection:bg-indigo/30 min-h-screen relative">
      <Suspense fallback={null}>
        <ParticleMesh />
      </Suspense>
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-grad origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="relative flex flex-col space-y-8 divide-y divide-white/5">
        <Hero />
        <About />
        <Terminal />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
