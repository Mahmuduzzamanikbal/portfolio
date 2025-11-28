export interface Skill {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface SkillsData {
  skills: Skill[];
  tools: string[];
}

export const skillsData: SkillsData = {
  skills: [
    {
      icon: 'Eye',
      title: 'Computer Vision',
      description: 'Advanced image processing and visual recognition systems',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'Image',
      title: 'Image Classification',
      description: 'Deep learning models for accurate image categorization',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'Network',
      title: 'Pattern Recognition',
      description: 'Complex pattern detection and feature extraction',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'Cpu',
      title: 'OCR Technologies',
      description: 'Optical character recognition for document processing',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: 'Database',
      title: 'Data Science',
      description: 'Statistical analysis and data-driven insights',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: 'Code2',
      title: 'Deep Learning',
      description: 'Neural networks and AI model development',
      gradient: 'from-pink-500 to-rose-500',
    },
  ],
  tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas'],
};
