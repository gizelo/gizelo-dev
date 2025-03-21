import React from "react";
import {
  Briefcase,
  ShoppingCart,
  MonitorSmartphone,
  LayoutDashboard,
  Paintbrush,
  MessagesSquare,
} from "lucide-react";
import FadeIn from "./animations/FadeIn";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  delay,
}) => {
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
      icon: Briefcase,
      title: "Business Website",
      description:
        "Professional and scalable business websites designed to establish your online presence and attract customers.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Store",
      description:
        "Custom-built online stores with secure payment gateways, inventory management, and a seamless shopping experience.",
    },
    {
      icon: MonitorSmartphone,
      title: "Landing Page",
      description:
        "High-converting landing pages tailored to your marketing goals, optimized for engagement and lead generation.",
    },
    {
      icon: LayoutDashboard,
      title: "Web Application",
      description:
        "Advanced web applications with modern technologies, delivering interactive and dynamic user experiences.",
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description:
        "User-centric design solutions that enhance usability, improve engagement, and create visually stunning interfaces.",
    },
    {
      icon: MessagesSquare,
      title: "...or consult you for FREE",
      description:
        "Get expert advice and insights on your project, technology stack, or digital strategy at no cost.",
    },
  ];

  return (
    <section id="services" className="py-28 bg-black">
      <div className="container">
        <FadeIn delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient">
            We can build you a...
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={200 + index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
