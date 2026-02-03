import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import imgArch from "../assets/images/architecture.png";
import imgPortrait from "../assets/images/portrait.png";
import imgLandscape from "../assets/images/landscape.png";
import imgAbstract from "../assets/images/abstract.png";
import imgTexture from "../assets/images/texture.png";
import imgIndustrial from "../assets/images/industrial.png";

const projects = [
  {
    id: 1,
    title: "Concrete Silence",
    category: "Architecture",
    year: "2024",
    image: imgArch,
    aspect: "aspect-[4/5]"
  },
  {
    id: 2,
    title: "Mono Study",
    category: "Portrait",
    year: "2023",
    image: imgPortrait,
    aspect: "aspect-square"
  },
  {
    id: 3,
    title: "Northern Mist",
    category: "Landscape",
    year: "2024",
    image: imgLandscape,
    aspect: "aspect-[16/10]"
  },
  {
    id: 4,
    title: "Light Forms",
    category: "Abstract",
    year: "2023",
    image: imgAbstract,
    aspect: "aspect-[3/4]"
  },
  {
    id: 5,
    title: "Organic Rhythm",
    category: "Texture",
    year: "2024",
    image: imgTexture,
    aspect: "aspect-square"
  },
  {
    id: 6,
    title: "Urban Reflection",
    category: "Industrial",
    year: "2023",
    image: imgIndustrial,
    aspect: "aspect-[4/5]"
  }
];

export function PhotoGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);
  const selectedIndex = projects.findIndex(p => p.id === selectedId);

  const navigate = (direction: 'next' | 'prev') => {
    if (selectedIndex === -1) return;
    let nextIndex = direction === 'next' ? selectedIndex + 1 : selectedIndex - 1;
    if (nextIndex >= projects.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = projects.length - 1;
    setSelectedId(projects[nextIndex].id);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 md:gap-y-32 md:gap-x-24 w-full max-w-[1600px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-32' : ''}`}
            onClick={() => setSelectedId(project.id)}
          >
            <div className={`overflow-hidden w-full bg-muted ${project.aspect}`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            <div className="mt-6 flex justify-between items-baseline opacity-80 group-hover:opacity-100 transition-opacity">
              <div>
                <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-8 right-8 p-2 hover:bg-muted rounded-full transition-colors z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              onClick={() => navigate('prev')}
              className="absolute left-4 md:left-8 p-2 hover:bg-muted rounded-full transition-colors z-[110]"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              onClick={() => navigate('next')}
              className="absolute right-4 md:right-8 p-2 hover:bg-muted rounded-full transition-colors z-[110]"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div 
              layoutId={`project-${selectedId}`}
              className="max-w-5xl w-full flex flex-col items-center"
            >
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="max-h-[70vh] w-auto object-contain shadow-2xl"
              />
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-medium tracking-tight">{selectedProject.title}</h2>
                <p className="text-muted-foreground mt-2">{selectedProject.category} &mdash; {selectedProject.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}