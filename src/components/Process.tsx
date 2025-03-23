import React from "react";
import FadeIn from "./animations/FadeIn";

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, target audience, and requirements through in-depth consultation.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "Based on the discovery, we create a strategic roadmap outlining the project scope, timeline, and deliverables.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our designers create wireframes and visual mockups that align with your brand identity and user experience goals.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Our developers build your website using clean, efficient code and modern development practices.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Rigorous testing ensures your website works flawlessly across all devices, browsers, and user scenarios.",
    },
    {
      number: "06",
      title: "Launch",
      description:
        "Once approved, we deploy your website and provide training on content management and maintenance.",
    },
  ];

  return (
    <section id="process" className="py-28 bg-black/50">
      <div className="container">
        <FadeIn delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gradient">
            How It Will Be Done
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={200 + index * 100}>
              <div className="relative">
                <span className="text-8xl font-bold text-white/5 absolute -top-10 -left-3 select-none">
                  {step.number}
                </span>
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
