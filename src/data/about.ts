export interface AboutData {
  paragraphs: string[];
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export const aboutData: AboutData = {
  paragraphs: [
    'I am a passionate Computer Science student at Varendra University, deeply engaged in cutting-edge research across multiple domains of artificial intelligence and computational sciences.',
    'My research interests span Data Science, Artificial Intelligence, Deep Learning, and Software Engineering. I believe in the power of collaborative research and continuous learning to push the boundaries of what\'s possible in technology.',
    'Through my work in OCR, image classification, pattern recognition, and computer vision, I strive to contribute meaningful solutions to real-world problems while advancing the field of artificial intelligence.',
  ],
  highlights: [
    {
      icon: 'GraduationCap',
      title: 'Education',
      description: 'BSc in Computer Science and Engineering, Varendra University',
    },
    {
      icon: 'Brain',
      title: 'Research Focus',
      description: 'AI, Deep Learning, Data Science & Software Engineering',
    },
    {
      icon: 'Lightbulb',
      title: 'Philosophy',
      description: 'Collaborative research and continuous learning',
    },
  ],
};
