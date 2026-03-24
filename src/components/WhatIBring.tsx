import { FC } from "react";
import { GitBranch, Zap, Bot } from "lucide-react";
import FadeIn from "./animations/FadeIn";

const pillars = [
  {
    icon: GitBranch,
    title: "Architecture & Product Thinking",
    description:
      "I come in at the product level, not just the ticket level. Before writing a line of code I help you define what to build, why, and how — requirements, scope, tech decisions, team structure. So you don't end up six months in with the wrong thing, well-built.",
  },
  {
    icon: Zap,
    title: "Full-Cycle Engineering",
    description:
      "From database schema to UI to CI/CD — I cover the full stack. React, Next.js, Node.js, mobile. One person, zero handoff friction. I've led end-to-end delivery on fintech platforms, e-commerce stores, SaaS products, and real-time applications.",
  },
  {
    icon: Bot,
    title: "AI-Augmented Delivery",
    description:
      "I deeply integrate AI into my workflow — agent-based automation, spec-driven development, AI orchestration. Not as a shortcut, but as a serious multiplier that lets me deliver faster without cutting corners on quality or architecture.",
  },
];

const WhatIBring: FC = () => {
  return (
    <section id="expertise" className="py-28 bg-black">
      <div className="container">
        <FadeIn delay={200}>
          <span className="block text-sm font-medium text-[#B3F753] uppercase tracking-widest text-center">
            What I bring
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gradient mt-2">
            How I can help
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={300 + index * 150}>
              <div className="glass-card flex flex-col h-full">
                <div className="bg-white/10 rounded-xl p-3 w-fit mb-5">
                  <pillar.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{pillar.title}</h3>
                <p className="text-slate-400 flex-grow">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
