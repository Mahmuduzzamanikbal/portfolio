import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Image, Network, Cpu, Database, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/data/skills';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Get proficiency level for technologies
  const getTechProficiency = (tech: string): number => {
    const proficiencyMap: { [key: string]: number } = {
      'Python': 95,
      'TensorFlow': 90,
      'PyTorch': 90,
      'Keras': 88,
      'OpenCV': 92,
      'Scikit-learn': 85,
      'NumPy': 90,
      'Pandas': 88,
    };
    return proficiencyMap[tech] || 85;
  };

  const iconMap = {
    Eye,
    Image,
    Network,
    Cpu,
    Database,
    Code2,
  };

  const skills = skillsData.skills.map(skill => ({
    icon: iconMap[skill.icon as keyof typeof iconMap],
    title: skill.title,
    description: skill.description,
    gradient: skill.gradient,
  }));

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
          <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30 rounded-2xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            </div>
            
            <div className="relative">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
              Research Tools & <span className="text-gradient">Technologies</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.tools.map((tool, i) => {
                const proficiency = getTechProficiency(tool);
                const level = proficiency >= 90 ? 'Expert' : proficiency >= 85 ? 'Advanced' : 'Proficient';
                const levelColor = proficiency >= 90 ? 'text-green-400' : proficiency >= 85 ? 'text-blue-400' : 'text-purple-400';
                
                return (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {tool}
                        </span>
                        <Badge variant="outline" className={`text-[10px] px-2 py-0 h-5 ${levelColor} border-current`}>
                          {level}
                        </Badge>
                      </div>
                      <span className="text-sm font-bold text-primary tabular-nums">
                        {proficiency}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-3 bg-background/60 rounded-full overflow-hidden shadow-inner">
                      {/* Background Grid */}
                      <div className="absolute inset-0 opacity-20" style={{ 
                        backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0, currentColor 1px, transparent 1px, transparent 10%)',
                        backgroundSize: '10% 100%'
                      }} />
                      
                      {/* Animated Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
                        transition={{ 
                          delay: 0.9 + i * 0.1 + 0.3, 
                          duration: 1.2, 
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        className="relative h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                        style={{
                          boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2.5, 
                            ease: "linear",
                            delay: 1
                          }}
                          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                        />
                        
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
