import { useEffect, useRef } from 'react';

export default function ParticleMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = [];
    // Lower density to allow drawing network lines without crashing the browser
    const numParticles = 300; 
    
    // Exact Antigravity color palette
    const colors = ["#e11d48", "#3b82f6", "#8b5cf6", "#06b6d4", "#f8fafc"];

    // Mouse tracking
    let mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // Initialize particles forming a central globe/galaxy
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        // Distribute randomly across the ENTIRE screen
        const x = Math.random() * width;
        const y = Math.random() * height;
        
        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          density: (Math.random() * 30) + 5 // Weight for physics
        });
      }
    };

    initParticles();

    // Physics Animation Loop
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Calculate distance from mouse to the particle's BASE anchor
        let dx = mouse.x - p.baseX;
        let dy = mouse.y - p.baseY;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          // Pulling effect: calculate target point stretched towards the mouse
          let force = (mouse.radius - distance) / mouse.radius;
          let targetX = p.baseX + (dx * force * 0.4); 
          let targetY = p.baseY + (dy * force * 0.4);
          
          p.x += (targetX - p.x) * 0.15; // Elastic pull
          p.y += (targetY - p.y) * 0.15;
        } else {
          // Spring back to base position
          p.x += (p.baseX - p.x) * 0.05;
          p.y += (p.baseY - p.y) * 0.05;
        }

        // Add a very subtle continuous drift / float
        p.baseX += Math.sin(Date.now() / 2000 + i) * 0.3;
        p.baseY += Math.cos(Date.now() / 2000 + i) * 0.3;

        // Render dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Render network lines (the "Net")
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dLineX = p.x - p2.x;
          let dLineY = p.y - p2.y;
          let distLineSq = dLineX * dLineX + dLineY * dLineY;
          
          if (distLineSq < 15000) { // Connect dots closer than ~120px
            let opacity = 0.15 * (1 - distLineSq / 15000);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // Violet glow lines
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(); // Re-center the globe
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
    />
  );
}
