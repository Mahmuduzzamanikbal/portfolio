import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Image, Network, Cpu, Database, Code2 } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image processing and visual recognition systems',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Image,
      title: 'Image Classification',
      description: 'Deep learning models for accurate image categorization',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Network,
      title: 'Pattern Recognition',
      description: 'Complex pattern detection and feature extraction',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cpu,
      title: 'OCR Technologies',
      description: 'Optical character recognition for document processing',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Statistical analysis and data-driven insights',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Code2,
      title: 'Deep Learning',
      description: 'Neural networks and AI model development',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized knowledge in AI and deep learning technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-display font-bold mb-4">
              Research Tools & <span className="text-gradient">Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
