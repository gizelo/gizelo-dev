import { FC } from "react";
import FadeIn from "./animations/FadeIn";
import useMousePosition from "@/hooks/useMousePosition";
import { steps } from "@/constants";

const Process: FC = () => {
  const mousePosition = useMousePosition();

  return (
    <section
      id="process"
      className="py-28 bg-black/50 relative overflow-hidden"
    >
      <FadeIn direction="none" delay={1000} duration={1000}>
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out"
          style={{
            right: "-70px",
            top: "4%",
            transform: `translate(${
              (mousePosition.x - window.innerWidth / 2) * 0.03
            }px, ${(mousePosition.y - window.innerHeight / 2) * 0.03}px)`,
          }}
        >
          <img src="/asterisk-color.svg" className="w-full h-full" />
        </div>
      </FadeIn>
      <div className="container">
        <FadeIn delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gradient">
            How It Will Be Done
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={200 + index * 100}>
              <div className="relative">
                <FadeIn delay={200 + index * 150}>
                  <span className="text-8xl font-bold text-white/10 absolute -top-10 -left-3 select-none">
                    {step.number}
                  </span>
                </FadeIn>
                <div className="relative pt-8">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
