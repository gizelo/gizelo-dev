import { ElementType, FC } from "react";
import FadeIn from "./animations/FadeIn";
import { services } from "@/constants";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ElementType;
  delay: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon: Icon, delay }) => {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="group glass-card flex flex-col h-full">
        <FadeIn delay={delay * 1.2}>
          <div className="bg-white/10 rounded-xl p-3 w-fit mb-5">
            <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
          </div>
        </FadeIn>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-slate-400 flex-grow">{description}</p>
      </div>
    </FadeIn>
  );
};

const Services: FC = () => {
  return (
    <section id="services" className="py-28 bg-black">
      <div className="container">
        <FadeIn delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gradient">
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
