import { FC } from "react";
import { ArrowRight } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import useMousePosition from "@/hooks/useMousePosition";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: FC = () => {
  const isMobile = useIsMobile();
  const mousePosition = useMousePosition();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <FadeIn direction="none" delay={1000} duration={2000}>
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out"
          style={{
            right: isMobile ? "-60px" : "10%",
            top: "20%",
            transform: isMobile
              ? "none"
              : `translate(${
                  (mousePosition.x - window.innerWidth / 2) * 0.1
                }px, ${(mousePosition.y - window.innerHeight / 2) * 0.1}px)`,
          }}
        >
          <img src="/asterisk-color.svg" className="w-full h-full" />
        </div>
      </FadeIn>
      <FadeIn direction="none" delay={800} duration={1000}>
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out"
          style={{
            left: isMobile ? "-60px" : "18%",
            bottom: "20%",
            transform: isMobile
              ? "none"
              : `translate(${
                  (mousePosition.x - window.innerWidth / 2) * 0.04
                }px, ${(mousePosition.y - window.innerHeight / 2) * 0.04}px)`,
          }}
        >
          <img src="/asterisk-color.svg" className="w-full h-full" />
        </div>
      </FadeIn>

      <div className="container relative flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gradient">
              Build Your Web Solution.
            </h1>
          </FadeIn>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <FadeIn delay={800}>
              <Button
                className="group bg-white hover:bg-slate-200 text-black rounded-lg px-6 py-6 text-base"
                onClick={() => (window.location.href = "#cases")}
              >
                View Cases
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-500" />
              </Button>
            </FadeIn>
            <FadeIn delay={1000}>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white rounded-lg px-6 py-6 text-base"
                onClick={() => (window.location.href = "#contact")}
              >
                Write Us
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
