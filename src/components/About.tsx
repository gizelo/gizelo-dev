import { FC } from "react";
import FadeIn from "./animations/FadeIn";

const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "15+", label: "Projects delivered" },
  { value: "5", label: "Industries" },
  { value: "7", label: "Countries served" },
];

const techStack = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/next-js.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Payload", icon: "/icons/payload.svg" },
  { name: "NestJS", icon: "/icons/nestjs.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
];

const About: FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container">
        <FadeIn delay={100}>
          <div className="mb-14 text-center md:text-left">
            <span className="text-sm font-medium text-[#B3F753] uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Who I am</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Bio + Stats */}
          <div className="flex flex-col gap-8">
            <FadeIn delay={200}>
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm a full-stack engineer with 6+ years of experience who works as a technical
                partner — I don't just write code, I help figure out what to build and why.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mt-4">
                From architecture and product thinking to UI and deployment — I cover the full
                cycle. I've worked across e-commerce, fintech, SaaS, and crypto, both as an engineer
                on a team and as a solo lead delivering end-to-end.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mt-4">
                Lately I've been deeply integrating AI into my development workflow — agent-based
                automation, spec-driven development, AI orchestration. Not as a shortcut, but as a
                serious multiplier that lets me deliver faster without cutting corners.
              </p>
            </FadeIn>

            <FadeIn delay={350}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/10 bg-white/5 rounded-xl p-4"
                  >
                    <span className="text-3xl font-bold text-[#B3F753]">{stat.value}</span>
                    <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Tech Stack */}
          <FadeIn delay={300}>
            <div className="flex flex-col gap-6">
              <span className="text-sm font-medium text-[#B3F753] uppercase tracking-widest">
                Tech Stack
              </span>
              <div className="grid grid-cols-4 gap-6">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2">
                    <img src={tech.icon} className="w-12 h-12" alt={tech.name} />
                    <span className="text-xs text-slate-400 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
