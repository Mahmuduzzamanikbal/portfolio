import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Publication {
  title: string;
  type: 'Conference' | 'Book Chapter';
  venue: string;
  year: number;
  abstract: string;
  link?: string;
}

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  const publications: Publication[] = [
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

  return (
    <section id="research" className="relative py-24 px-4 bg-gradient-secondary" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed publications in leading conferences and journals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card group cursor-pointer"
              onClick={() => setSelectedPub(pub)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  {pub.type === 'Conference' ? (
                    <FileText className="h-6 w-6 text-primary" />
                  ) : (
                    <BookOpen className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent">
                      {pub.type}
                    </span>
                    <span className="text-sm text-muted-foreground flex-shrink-0">
                      {pub.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {pub.venue}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto"
                  >
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent">
                {selectedPub?.type}
              </span>
              <span className="text-sm text-muted-foreground">
                {selectedPub?.year}
              </span>
            </div>
            <DialogTitle className="text-2xl font-display">
              {selectedPub?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedPub?.venue}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Abstract</h4>
              <p className="text-foreground/80 leading-relaxed">
                {selectedPub?.abstract}
              </p>
            </div>
            {selectedPub?.link && (
              <Button className="w-full" asChild>
                <a href={selectedPub.link} target="_blank" rel="noopener noreferrer">
                  View Full Paper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Research;
