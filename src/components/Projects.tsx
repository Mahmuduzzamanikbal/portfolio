import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beaker, GitBranch, Microscope } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      icon: Microscope,
      title: 'Multilingual OCR System',
      description: 'Developing an advanced optical character recognition system capable of processing documents in multiple languages with high accuracy.',
      status: 'In Progress',
      tags: ['OCR', 'Deep Learning', 'NLP'],
    },
    {
      icon: Beaker,
      title: 'Medical Image Analysis',
      description: 'Research initiative exploring pattern recognition techniques for automated diagnosis support in medical imaging applications.',
      status: 'Research Phase',
      tags: ['Computer Vision', 'Healthcare', 'AI'],
    },
    {
      icon: GitBranch,
      title: 'Smart City Vision Framework',
      description: 'Investigating computer vision applications for urban infrastructure optimization and intelligent traffic management systems.',
      status: 'Ongoing',
      tags: ['Computer Vision', 'IoT', 'Smart Cities'],
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 bg-gradient-secondary" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Research <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ongoing research initiatives and academic projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <project.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent">
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card border border-primary/30 rounded-xl p-8 max-w-2xl">
            <h3 className="text-xl font-display font-bold mb-3">
              Open to <span className="text-gradient">Collaboration</span>
            </h3>
            <p className="text-muted-foreground">
              I'm always interested in collaborating on research projects related to AI, 
              deep learning, and computer vision. Feel free to reach out if you'd like to work together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
