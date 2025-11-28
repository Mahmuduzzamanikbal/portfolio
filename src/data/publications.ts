export interface Publication {
  title: string;
  type: 'Conference' | 'Book Chapter';
  venue: string;
  year: number;
  abstract: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: 'Deep Learning Approaches for Optical Character Recognition in Multilingual Documents',
    type: 'Conference',
    venue: 'IEEE International Conference on Computer Vision',
    year: 2024,
    abstract: 'This paper presents a novel deep learning architecture for accurate OCR in multilingual document processing, achieving state-of-the-art results across multiple language datasets.',
    link: '#',
  },
  {
    title: 'Pattern Recognition Techniques for Medical Image Analysis',
    type: 'Conference',
    venue: 'IEEE Conference on Pattern Recognition',
    year: 2024,
    abstract: 'We propose an innovative pattern recognition framework that significantly improves diagnostic accuracy in medical imaging applications through advanced feature extraction methods.',
    link: '#',
  },
  {
    title: 'Computer Vision Applications in Smart City Infrastructure',
    type: 'Book Chapter',
    venue: 'Springer - Advances in Computer Vision',
    year: 2023,
    abstract: 'This chapter explores the integration of computer vision technologies in smart city development, focusing on traffic management, public safety, and urban planning applications.',
    link: '#',
  },
  {
    title: 'Image Classification Using Transfer Learning and Ensemble Methods',
    type: 'Conference',
    venue: 'IEEE Conference on Machine Learning',
    year: 2023,
    abstract: 'An exploration of transfer learning combined with ensemble methods to achieve robust image classification performance across diverse datasets with limited training samples.',
    link: '#',
  },
];
