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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Floating asterisk decorators */}
      <FadeIn direction="none" delay={1000} duration={2000}>
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out"
          style={{
            right: isMobile ? "-60px" : "10%",
            top: "20%",
            transform: isMobile
              ? "none"
              : `translate(${(mousePosition.x - window.innerWidth / 2) * 0.06}px, ${(mousePosition.y - window.innerHeight / 2) * 0.06}px)`,
          }}
        >
          <img src="/asterisk-color.svg" className="w-full h-full" />
        </div>
      </FadeIn>
      <FadeIn direction="none" delay={800} duration={1000}>
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out"
          style={{
            left: isMobile ? "-60px" : "55%",
            bottom: "12%",
            transform: isMobile
              ? "none"
              : `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
          }}
        >
          <img src="/asterisk-color.svg" className="w-full h-full" />
        </div>
      </FadeIn>

      <div className="container relative flex-1 flex items-center py-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mobile: photo on top; Desktop: text on left */}

          {/* Photo — shown first on mobile via order */}
          <div className="flex justify-center md:order-2">
            <FadeIn delay={400} direction="none">
              <div className="relative flex items-center justify-center">
                {/* Radial glow behind photo */}
                <div
                  className="absolute rounded-full blur-3xl opacity-30"
                  style={{
                    width: isMobile ? "220px" : "340px",
                    height: isMobile ? "220px" : "340px",
                    background: "radial-gradient(circle, #B3F753 0%, transparent 70%)",
                  }}
                />
                <img
                  src="/me1.jpeg"
                  alt="Robert Gizelo"
                  className="relative rounded-full object-cover ring-4 ring-[#B3F753]/30"
                  style={{
                    width: isMobile ? "200px" : "300px",
                    height: isMobile ? "200px" : "300px",
                  }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Text — shown second on mobile via order */}
          <div className="flex flex-col gap-6 md:order-1 text-center md:text-left items-center md:items-start">
            <FadeIn delay={100}>
              <span className="inline-block border border-[#B3F753]/50 text-[#B3F753] text-sm font-medium rounded-full px-4 py-1.5">
                Technical Partner & Full-Stack Engineer · 6+ yrs
              </span>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gradient">
                I build web products end-to-end.
              </h1>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                I don't just write code — I help figure out what to build and why. From architecture
                and product thinking to UI and deployment, I cover the full cycle.
              </p>
            </FadeIn>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <FadeIn delay={600}>
                <Button
                  className="group bg-white hover:bg-slate-200 text-black rounded-lg px-6 py-6 text-base"
                  onClick={() => (window.location.href = "#cases")}
                >
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-500" />
                </Button>
              </FadeIn>
              <FadeIn delay={800}>
                <Button
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 text-white rounded-lg px-6 py-6 text-base"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Hire Me
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
