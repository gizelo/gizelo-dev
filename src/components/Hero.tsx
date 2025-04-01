import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(35,35,35,0.8)_0%,rgba(10,10,10,1)_100%)]" />

        {/* Floating Asterisks */}
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out"
          style={{
            right: "24%",
            top: "20%",
            transform: `translate(${
              (mousePosition.x - window.innerWidth / 2) * 0.2
            }px, ${(mousePosition.y - window.innerHeight / 2) * 0.2}px)`,
          }}
        >
          <img
            src="/asterisk.svg"
            className="w-full h-full opacity-20"
            style={{
              filter: "invert(1) sepia(100%) saturate(1000%) hue-rotate(90deg)",
            }}
          />
        </div>
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out"
          style={{
            left: "24%",
            top: "60%",
            transform: `translate(${
              (mousePosition.x - window.innerWidth / 2) * 0.1
            }px, ${(mousePosition.y - window.innerHeight / 2) * 0.1}px)`,
          }}
        >
          <img
            src="/asterisk.svg"
            className="w-full h-full opacity-30"
            style={{
              filter: "invert(1) sepia(100%) saturate(1000%) hue-rotate(90deg)",
            }}
          />
        </div>
      </div>

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
                className="bg-white hover:bg-slate-200 text-black rounded-lg px-6 py-6 text-base"
                onClick={() => (window.location.href = "#projects")}
              >
                View Cases
                <ArrowRight className="ml-2 h-4 w-4" />
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
