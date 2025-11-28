import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Brain, Lightbulb } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BSc in Computer Science and Engineering, Varendra University',
    },
    {
      icon: Brain,
      title: 'Research Focus',
      description: 'AI, Deep Learning, Data Science & Software Engineering',
    },
    {
      icon: Lightbulb,
      title: 'Philosophy',
      description: 'Collaborative research and continuous learning',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am a passionate Computer Science student at <span className="text-primary font-semibold">Varendra University</span>, 
                deeply engaged in cutting-edge research across multiple domains of artificial intelligence and computational sciences.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                My research interests span <span className="text-accent font-semibold">Data Science</span>, 
                <span className="text-accent font-semibold"> Artificial Intelligence</span>, 
                <span className="text-accent font-semibold"> Deep Learning</span>, and 
                <span className="text-accent font-semibold"> Software Engineering</span>. I believe in the power of 
                collaborative research and continuous learning to push the boundaries of what's possible in technology.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Through my work in OCR, image classification, pattern recognition, and computer vision, I strive to 
                contribute meaningful solutions to real-world problems while advancing the field of artificial intelligence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
