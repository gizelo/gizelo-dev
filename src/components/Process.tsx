
import React from "react";
import FadeIn from "./animations/FadeIn";

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, target audience, and requirements through in-depth consultation.",
    },
    {
      number: "02",
      title: "Planning",
      description: "Based on the discovery, we create a strategic roadmap outlining the project scope, timeline, and deliverables.",
    },
    {
      number: "03",
      title: "Design",
      description: "Our designers create wireframes and visual mockups that align with your brand identity and user experience goals.",
    },
    {
      number: "04",
      title: "Development",
      description: "Our developers build your website using clean, efficient code and modern development practices.",
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous testing ensures your website works flawlessly across all devices, browsers, and user scenarios.",
    },
    {
      number: "06",
      title: "Launch",
      description: "Once approved, we deploy your website and provide training on content management and maintenance.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gizelo-50">
      <div className="container">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-gizelo-600 text-sm font-medium uppercase tracking-wider mb-3">Our Process</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gizelo-900">
              How We Work
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-gizelo-600 max-w-2xl mx-auto">
              Our proven methodology ensures a smooth, transparent development process from start to finish.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={200 + index * 100}>
              <div className="relative">
                <span className="text-8xl font-display font-bold text-gizelo-100 absolute -top-10 -left-3 select-none">
                  {step.number}
                </span>
                <div className="relative z-10 pt-8">
                  <h3 className="text-xl font-semibold mb-3 text-gizelo-800">{step.title}</h3>
                  <p className="text-gizelo-600">{step.description}</p>
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
