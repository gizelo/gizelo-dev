import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import { Button } from "@/components/ui/button";

const projectCategories = [
  "All",
  "E-commerce",
  "Corporate",
  "Portfolio",
  "Web App",
];

const projectsData = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    category: "E-commerce",
    description:
      "A full-featured online store with customer accounts, product management, and secure checkout.",
    imageUrl:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    category: "Corporate",
    description:
      "Complete redesign of a financial services company website with improved user experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Photography Portfolio",
    category: "Portfolio",
    description:
      "Minimalist portfolio website for a professional photographer with gallery and booking system.",
    imageUrl:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2674&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Project Management Tool",
    category: "Web App",
    description:
      "Custom project management application with task tracking, team collaboration, and reporting.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Luxury Brand Online Store",
    category: "E-commerce",
    description:
      "High-end e-commerce experience for a luxury fashion brand with advanced filtering.",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Healthcare Provider Portal",
    category: "Web App",
    description:
      "Secure patient management system for healthcare providers with appointment scheduling.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-28 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-3">
              Our Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Recent Projects
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore our latest work showcasing our expertise in creating
              stunning, functional websites.
            </p>
          </FadeIn>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex space-x-2 p-1 bg-white/5 rounded-lg">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                  activeCategory === category
                    ? "bg-white text-black shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={200 + index * 100}>
              <div className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-300 hover:border-white/20">
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-slate-300"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
