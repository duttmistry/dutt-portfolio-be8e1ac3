
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-blue-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-purple-800">
            Dutt Mistry
          </h1>
          <h2 className="text-3xl text-gray-700 mb-6 font-light">Full Stack Developer</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Crafting innovative solutions through elegant code.
            Transforming complex challenges into seamless digital experiences.
          </p>
          <div className="flex items-center justify-center space-x-6 mb-12">
            <Button className="gap-2 text-lg px-8 py-6 bg-blue-900 hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
              View Projects <ArrowRight className="h-5 w-5" />
            </Button>
            <div className="flex space-x-6">
              <a href="https://github.com/duttmistry" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-all duration-300 transform hover:scale-110">
                <Github className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com/in/duttmistry" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
