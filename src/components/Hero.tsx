import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';
import { heroData } from '@/data/hero';

const Hero = () => {
  // Typewriter state (infinite loop: type -> pause -> delete -> pause)
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const text = heroData.title;
    const typingSpeed = 60; // ms per char while typing
    const deletingSpeed = 40; // ms per char while deleting
    const pauseAtEnd = 1200; // pause when fully typed
    const pauseAtStart = 500; // pause before re-typing

    let timeoutId: number | undefined;

    if (!isDeleting && typed.length < text.length) {
      timeoutId = window.setTimeout(() => {
        setTyped(text.slice(0, typed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typed.length === text.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseAtEnd);
    } else if (isDeleting && typed.length > 0) {
      timeoutId = window.setTimeout(() => {
        setTyped(text.slice(0, typed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && typed.length === 0) {
      timeoutId = window.setTimeout(() => setIsDeleting(false), pauseAtStart);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [typed, isDeleting]);

  // Optional cursor blink using state (in addition to motion fallback)
  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 600);
    return () => clearInterval(blink);
  }, []);
  const iconMap = {
    email: Mail,
    linkedin: Linkedin,
    github: Github,
    scholar: FileText,
  };

  const socialLinks = heroData.socialLinks.map(link => ({
    icon: iconMap[link.type],
    href: link.href,
    label: link.label,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 mt-10 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl glow">
              <img
                src={profileImage}
                alt="Md. Mahmuduzzaman Ikbal"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl -z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              <span className="text-gradient">{heroData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              <span className="inline-block align-middle">{typed}</span>
              {/* Bold blinking cursor */}
              <motion.span
                aria-hidden
                className="ml-1 inline-block align-middle h-[1em] border-r-4 border-primary"
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ opacity: cursorOn ? 1 : 0.2 }}
              />
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span>{heroData.status}</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg text-foreground/80 leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-4 gap-3 justify-items-center md:flex md:flex-wrap md:gap-4 md:justify-center"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="group border-primary/30 hover:border-primary hover:bg-primary/10 w-10 h-10 p-0 md:w-auto md:h-auto md:px-4 md:py-2"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <link.icon className="h-5 w-5 md:mr-2 group-hover:scale-110 transition-transform" />
                  <span className="hidden md:inline">{link.label}</span>
                </a>
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-8"
          >
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-bounce"
            >
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
                <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
