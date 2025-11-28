import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { FileText, ExternalLink, BookOpen, Award, Users, Calendar, Tag, Sparkles, X, ChevronRight, Image as ImageIcon, MapPin, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { publications, Publication } from '@/data/publications';

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [filter, setFilter] = useState<'All' | 'Conference Paper' | 'Book Chapter' | 'Journal'>('All');

  // Filter publications based on selected type
  const filteredPublications = useMemo(() => {
    if (filter === 'All') return publications;
    return publications.filter(pub => pub.publicationType === filter);
  }, [filter]);

  // Get unique publication types for filters - always include all types
  const publicationTypes: Array<'All' | 'Conference Paper' | 'Book Chapter' | 'Journal'> = ['All', 'Conference Paper', 'Book Chapter', 'Journal'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Presented': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Accepted': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'On Going': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type === 'Conference Paper') return <FileText className="h-5 w-5" />;
    if (type === 'Book Chapter') return <BookOpen className="h-5 w-5" />;
    if (type === 'Journal') return <ScrollText className="h-5 w-5" />;
    return <Award className="h-5 w-5" />;
  };

  return (
    <section id="research" className="relative py-24 px-4 bg-gradient-secondary" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Peer-reviewed publications in leading conferences and journals
          </p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Tabs value={filter} onValueChange={(value) => setFilter(value as typeof filter)} className="w-full max-w-2xl">
              <TabsList className="grid w-full grid-cols-4 h-auto p-1">
                {publicationTypes.map((type) => (
                  <TabsTrigger 
                    key={type} 
                    value={type}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm py-2"
                  >
                    {type}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>
        </motion.div>

        {/* Publications Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-primary">{filteredPublications.length}</span> {filteredPublications.length === 1 ? 'publication' : 'publications'}
          </p>
        </motion.div>

        {/* Publications Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-6 justify-items-center ${
              filteredPublications.length === 1 
                ? 'grid-cols-1 justify-center' 
                : filteredPublications.length === 2 
                ? 'md:grid-cols-2 justify-center' 
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-card cursor-pointer flex flex-col w-full max-w-md mx-auto"
                onClick={() => setSelectedPub(pub)}
              >
                {/* Banner Image with Overlay */}
                {pub.banner && (
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img 
                      src={pub.banner} 
                      alt={pub.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    
                    {/* Floating Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getStatusColor(pub.status)} border backdrop-blur-md shadow-lg`}>
                        {pub.status}
                      </Badge>
                    </div>

                    {/* Event Photos Indicator */}
                    {pub.eventPhotos && pub.eventPhotos.length > 0 && (
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="secondary" className="backdrop-blur-md shadow-lg gap-1">
                          <ImageIcon className="h-3 w-3" />
                          {pub.eventPhotos.length} Photos
                        </Badge>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  {/* Type and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-primary">
                      {getTypeIcon(pub.publicationType)}
                      <span className="text-xs font-semibold uppercase tracking-wide">{pub.publicationType}</span>
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {pub.presentationDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {pub.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {pub.shortDescription}
                  </p>

                  {/* Conference and Publisher */}
                  <div className="flex items-center justify-between gap-3 mb-4 text-xs">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Award className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span className="font-semibold text-foreground truncate">{pub.conference}</span>
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <MapPin className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground truncate">{pub.publisher}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-primary hover:text-primary hover:bg-primary/10 group/btn mt-auto"
                  >
                    View Full Details
                    <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Detailed Modal */}
      <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
        <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-hidden gap-0">
          <ScrollArea className="max-h-[95vh]">
            {selectedPub && (
              <div className="relative">
                {/* Hero Section with Banner */}
                <div className="relative">
                  {selectedPub.banner && (
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={selectedPub.banner} 
                        alt={selectedPub.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
                    </div>
                  )}
                  
                  {/* Close Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-6 right-6 bg-background/90 backdrop-blur-md hover:bg-background shadow-lg z-10"
                    onClick={() => setSelectedPub(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge className={`${getStatusColor(selectedPub.status)} border shadow-lg backdrop-blur-sm`}>
                        {selectedPub.status}
                      </Badge>
                      <Badge variant="outline" className="gap-1 bg-background/80 backdrop-blur-sm shadow-lg">
                        {getTypeIcon(selectedPub.publicationType)}
                        {selectedPub.publicationType}
                      </Badge>
                      <Badge variant="outline" className="gap-1 bg-background/80 backdrop-blur-sm shadow-lg">
                        <Calendar className="h-3 w-3" />
                        {selectedPub.presentationDate}
                      </Badge>
                    </div>

                    <DialogTitle className="text-4xl font-display leading-tight text-foreground mb-3">
                      {selectedPub.title}
                    </DialogTitle>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full border shadow-lg">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-medium">{selectedPub.conference}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full border shadow-lg">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="font-medium">{selectedPub.publisher}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Short Description Highlight */}
                  <div className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl">
                    <p className="text-base leading-relaxed font-medium">{selectedPub.shortDescription}</p>
                  </div>

                  {/* Two Column Layout */}
                  <div className={`grid gap-8 ${selectedPub.certificate ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                    {/* Main Content - Left */}
                    <div className={selectedPub.certificate ? 'lg:col-span-2' : 'lg:col-span-3'}>
                      <div className="space-y-8">
                      {/* Full Description */}
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-xl mb-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Sparkles className="h-5 w-5 text-primary" />
                          </div>
                          Full Description
                        </h4>
                        <div className="prose prose-sm max-w-none">
                          <p className="text-foreground/90 leading-relaxed">{selectedPub.fullDescription}</p>
                        </div>
                      </div>

                      {/* AI Contribution */}
                      <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl">
                        <h4 className="flex items-center gap-2 font-semibold text-lg mb-3">
                          <Sparkles className="h-5 w-5 text-accent" />
                          AI Contribution
                        </h4>
                        <p className="text-sm text-foreground/90 leading-relaxed">{selectedPub.aiContribution}</p>
                      </div>

                      {/* Novelty */}
                      <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
                        <h4 className="flex items-center gap-2 font-semibold text-lg mb-3">
                          <Award className="h-5 w-5 text-primary" />
                          Key Novelty & Innovation
                        </h4>
                        <p className="text-sm text-foreground/90 leading-relaxed">{selectedPub.novelty}</p>
                      </div>
                      </div>
                    </div>

                    {/* Sidebar - Right */}
                    <div className="space-y-6">
                      {/* Certificate */}
                      {selectedPub.certificate && (
                        <div className="relative overflow-hidden rounded-xl border-2 border-border group">
                          <img
                            src={selectedPub.certificate}
                            alt="Certificate"
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <Badge className="bg-background/90 backdrop-blur-sm">
                              <Award className="h-3 w-3 mr-1" />
                              Certificate
                            </Badge>
                          </div>
                        </div>
                      )}

                      {/* Authors */}
                      <div className="p-5 bg-card border rounded-xl">
                        <h4 className="flex items-center gap-2 font-semibold mb-3">
                          <Users className="h-4 w-4 text-primary" />
                          Authors
                        </h4>
                        <div className="space-y-2">
                          {selectedPub.authors.map((author, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{author}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="p-5 bg-card border rounded-xl">
                        <h4 className="flex items-center gap-2 font-semibold mb-3">
                          <Tag className="h-4 w-4 text-primary" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPub.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Keywords */}
                      <div className="p-5 bg-card border rounded-xl">
                        <h4 className="flex items-center gap-2 font-semibold mb-3">
                          <Tag className="h-4 w-4 text-primary" />
                          Keywords
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPub.keywords.map((keyword, i) => (
                            <Badge key={i} className="bg-primary/10 text-primary border-primary/20 text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Photos Gallery - Full Width at Bottom */}
                  {selectedPub.eventPhotos && selectedPub.eventPhotos.length > 0 && (
                    <div className="mt-8">
                      <h4 className="flex items-center gap-2 font-bold text-xl mb-6">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <ImageIcon className="h-5 w-5 text-primary" />
                        </div>
                        Event Gallery
                        <Badge variant="secondary" className="ml-2">
                          {selectedPub.eventPhotos.length} Photos
                        </Badge>
                      </h4>
                      
                      <div className="relative px-12">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {selectedPub.eventPhotos.map((photo, i) => (
                              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                  <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-border group">
                                    <img
                                      src={photo.src}
                                      alt={`Event photo ${i + 1}`}
                                      className={`w-full h-full object-cover object-${photo.focus} group-hover:scale-105 transition-transform duration-500`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="-left-12" />
                          <CarouselNext className="-right-12" />
                        </Carousel>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-6 border-t">
                    {selectedPub.doi && (
                      <Button size="lg" className="flex-1 min-w-[200px]" asChild>
                        <a href={selectedPub.doi} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          View Publication
                        </a>
                      </Button>
                    )}
                    {selectedPub.certificate && (
                      <Button size="lg" variant="outline" className="flex-1 min-w-[200px]" asChild>
                        <a href={selectedPub.certificate} target="_blank" rel="noopener noreferrer">
                          <Award className="mr-2 h-5 w-5" />
                          View Certificate
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Research;
