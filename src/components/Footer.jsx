import { profile } from '../data/portfolio';
import { IconBrandGithub, IconBrandLinkedin, IconHeart } from '@tabler/icons-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-white/5 bg-bg pt-12 pb-6 z-10 overflow-hidden">
      {/* Top glowing line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          
          <div className="flex items-center gap-2 text-xl font-heading font-bold">
            <span className="grad-text">{profile.name.split(' ')[0]}</span>
            <span className="text-white">.sh</span>
          </div>

          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
              <IconBrandGithub size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-[#0a66c2] transition-colors">
              <IconBrandLinkedin size={22} />
            </a>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted/80 border-t border-white/5 pt-6">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <IconHeart size={14} className="text-rose inline" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
