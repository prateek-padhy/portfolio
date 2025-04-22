import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center md:pt-20 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl z-10">
        <div className="flex flex-col items-center text-center">
          {/* Developer role badge */}
          <div className="inline-block mb-8 px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium text-sm shadow-sm">
            Frontend Developer
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Building digital experiences with
            <span className="relative inline-block mx-2">
              passion
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500/50"></span>
            </span>
            and
            <span className="relative inline-block mx-2">
              precision
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500/50"></span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-foreground/80 max-w-2xl mb-12 sm:block hidden">
            I create robust, scalable web applications with focus on performance
            and usability.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="p-2 rounded-full backdrop-blur-sm">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
