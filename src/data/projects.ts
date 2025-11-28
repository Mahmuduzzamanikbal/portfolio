export interface Project {
  icon: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    icon: 'Microscope',
    title: 'Multilingual OCR System',
    description: 'Developing an advanced optical character recognition system capable of processing documents in multiple languages with high accuracy.',
    status: 'In Progress',
    tags: ['OCR', 'Deep Learning', 'NLP'],
  },
  {
    icon: 'Beaker',
    title: 'Medical Image Analysis',
    description: 'Research initiative exploring pattern recognition techniques for automated diagnosis support in medical imaging applications.',
    status: 'Research Phase',
    tags: ['Computer Vision', 'Healthcare', 'AI'],
  },
  {
    icon: 'GitBranch',
    title: 'Smart City Vision Framework',
    description: 'Investigating computer vision applications for urban infrastructure optimization and intelligent traffic management systems.',
    status: 'Ongoing',
    tags: ['Computer Vision', 'IoT', 'Smart Cities'],
  },
];
