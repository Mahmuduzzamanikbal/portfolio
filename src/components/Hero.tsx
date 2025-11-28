import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';
import { heroData } from '@/data/hero';

const Hero = () => {
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
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl glow">
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
              {heroData.title}
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
            className="flex flex-wrap gap-4 justify-center"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="group border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {link.label}
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
