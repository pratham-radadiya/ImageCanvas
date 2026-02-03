import { motion } from "framer-motion";

// Import images
import imgArch from "../assets/images/architecture.png";
import imgPortrait from "../assets/images/portrait.png";
import imgLandscape from "../assets/images/landscape.png";
import imgAbstract from "../assets/images/abstract.png";

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
  }
];

export function PhotoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 md:gap-y-32 md:gap-x-24 w-full max-w-[1600px] mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-32' : ''}`}
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
  );
}