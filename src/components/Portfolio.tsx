
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";

// Updated projects structure to support multiple images per project
const projects = [
  {
    id: 1,
    title: "Luxury Hotel Website",
    description: "A responsive website for a luxury hotel with online booking capabilities and virtual tours.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1800&auto=format&fit=crop",
    ],
    tags: ["Web Development", "UI/UX Design"]
  },
  {
    id: 2,
    title: "Kindergarten School Website",
    description: "A vibrant, user-friendly website for a kindergarten school with parent portal and event calendar.",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?q=80&w=1800&auto=format&fit=crop",
    ],
    tags: ["Web Design", "CMS Development"]
  },
  {
    id: 3,
    title: "Credit Bank Website",
    description: "A secure, modern website for a credit bank with online banking features and application forms.",
    images: [
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1800&auto=format&fit=crop",
    ],
    tags: ["Web Development", "Security"]
  },
  {
    id: 4,
    title: "Retail Business Website",
    description: "An e-commerce website for a retail business with inventory management and payment processing.",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1800&auto=format&fit=crop",
    ],
    tags: ["E-commerce", "Web Design"]
  }
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({
    1: 0, 2: 0, 3: 0, 4: 0
  });
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = (projectId: number) => {
    setActiveImageIndex((prev) => {
      const currentIndex = prev[projectId];
      const projectImages = projects.find(p => p.id === projectId)?.images || [];
      const newIndex = currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1;
      return { ...prev, [projectId]: newIndex };
    });
  };

  const handleNextImage = (projectId: number) => {
    setActiveImageIndex((prev) => {
      const currentIndex = prev[projectId];
      const projectImages = projects.find(p => p.id === projectId)?.images || [];
      const newIndex = currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1;
      return { ...prev, [projectId]: newIndex };
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <section id="portfolio" className="py-16">
      <div className="container-section">
        <h2 className="section-title">
          Our <span className="gradient-text">Portfolio</span>
        </h2>

        <div className="relative mt-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden h-full">
                    <div className="relative">
                      {/* Image carousel for each project */}
                      <div className="relative h-[400px] overflow-hidden">
                        {project.images.map((image, idx) => (
                          <img 
                            key={idx}
                            src={image} 
                            alt={`${project.title} - Image ${idx + 1}`}
                            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${
                              idx === activeImageIndex[project.id] ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        ))}
                        
                        {/* Image navigation for the current project */}
                        {project.images.length > 1 && (
                          <>
                            <button 
                              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md z-10"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage(project.id);
                              }}
                            >
                              <ChevronLeft className="h-5 w-5 text-blue-600" />
                            </button>
                            
                            <button 
                              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md z-10"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage(project.id);
                              }}
                            >
                              <ChevronRight className="h-5 w-5 text-blue-600" />
                            </button>
                            
                            {/* Image indicators */}
                            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10">
                              {project.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  className={`h-2 w-2 rounded-full transition-colors ${
                                    idx === activeImageIndex[project.id] ? "bg-white" : "bg-white/50"
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImageIndex(prev => ({ ...prev, [project.id]: idx }));
                                  }}
                                  aria-label={`View image ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full">View Project</Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          {/* Project indicators */}
          <div className="flex justify-center mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-colors ${
                  activeIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
