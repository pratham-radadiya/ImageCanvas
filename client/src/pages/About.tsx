import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import imgPortrait from "../assets/images/portrait.png";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      
      <main className="px-6 md:px-12 pt-32 pb-32 md:pt-48 md:pb-48">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img 
                src={imgPortrait} 
                alt="Kaelen Portrait" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-12"
          >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
              Observing the <br/> unseen details.
            </h1>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Kaelen is a visual artist focused on the intersection of architecture, 
                light, and human emotion. Based in the Pacific Northwest, their work 
                explores the quiet tension between built environments and the natural world.
              </p>
              <p>
                By stripping away the unnecessary, Kaelen's photography invites the 
                viewer into a space of contemplation and stillness.
              </p>
            </div>

            <div className="pt-8 border-t border-border grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Exhibitions</h4>
                <ul className="text-sm space-y-2">
                  <li>Form & Void (2023)</li>
                  <li>Minimalist Lines (2022)</li>
                  <li>Quiet Spaces (2021)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</h4>
                <ul className="text-sm space-y-2">
                  <li>hello@kaelen.com</li>
                  <li>Portland, OR</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}