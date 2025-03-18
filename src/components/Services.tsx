
import React from "react";
import { Code, Palette, Smartphone, Lightbulb, LineChart, Database } from "lucide-react";
import FadeIn from "./animations/FadeIn";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, delay }) => {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="glass-card flex flex-col h-full">
        <div className="bg-white/10 rounded-xl p-3 w-fit mb-5">
          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-slate-400 flex-grow">{description}</p>
      </div>
    </FadeIn>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust and scalable backend systems with secure API integrations and database architecture.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Beautiful interfaces that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive user experiences and stunning visual designs that engage and convert visitors.",
    },
    {
      icon: LineChart,
      title: "SEO Optimization",
      description: "Strategic optimization to increase visibility and drive organic traffic to your website.",
    },
    {
      icon: Lightbulb,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies tailored to achieve your business goals and objectives.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-3">Our Services</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gradient">
              What We Offer
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We provide comprehensive web development services to help you build and grow your online presence.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
