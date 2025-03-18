
import React from "react";
import { ArrowRight } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(35,35,35,0.8)_0%,rgba(10,10,10,1)_100%)]" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={200}>
            <p className="inline-block mb-3 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-sm font-medium">
              Web Development Studio
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gradient">
              Crafting Digital<br />Experiences with Code
            </h1>
          </FadeIn>
          
          <FadeIn delay={600}>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              We design and develop exceptional web solutions that help businesses 
              stand out in the digital landscape. Clean code, beautiful design, amazing results.
            </p>
          </FadeIn>
          
          <FadeIn delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white hover:bg-slate-200 text-black rounded-lg px-6 py-6 text-base"
                onClick={() => window.location.href = "#projects"}
              >
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/10 text-white rounded-lg px-6 py-6 text-base"
                onClick={() => window.location.href = "#contact"}
              >
                Start a Project
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
