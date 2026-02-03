import { Navbar } from "@/components/Navbar";
import { PhotoGrid } from "@/components/PhotoGrid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-black selection:text-white">
      <Navbar />
      
      <main className="px-6 md:px-12 pt-32 pb-32 md:pt-48 md:pb-48">
        
        {/* Hero Section */}
        <section className="mb-32 md:mb-56 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter text-foreground mb-8 text-balance">
              Visual <br/> Dialogue
            </h1>
            <div className="max-w-xl">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-balance">
                Explorations in light, form, and negative space. 
                A curated collection of photographic works by Kaelen.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <PhotoGrid />

        {/* Footer */}
        <footer className="mt-48 border-t border-border pt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Kaelen Portfolio</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}