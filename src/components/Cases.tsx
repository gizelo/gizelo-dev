import { FC, useState } from "react";
import { ArrowRight } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import ProjectModal from "./ui/ProjectModal";
import { ProjectDetails } from "@/types";
import { projectsData, projectCategories } from "@/constants";

const Cases: FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    null
  );

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const openProjectModal = (project: ProjectDetails) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="cases" className="py-28 bg-black">
      <div className="container">
        <FadeIn delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gradient">
            Our Cases
          </h2>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="flex justify-center mt-8 overflow-x-auto whitespace-nowrap">
            <div className="flex space-x-2 p-1 bg-white/5 rounded-lg max-w-full overflow-auto">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                    activeCategory === category
                      ? "bg-accent text-black shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={200 + index * 100}>
              <div
                className="h-full group rounded-xl overflow-hidden bg-white/5 transition-all duration-300 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden min-h-56">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 h-full p-6">
                    <div className="flex flex-col flex-grow gap-4">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>
                        <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">
                        {project.description}
                      </p>
                      <ul className="list-disc list-inside">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <span className="inline-flex items-center w-fit text-sm font-medium text-white bg-transparent px-3 py-2 rounded-lg group-hover:bg-accent group-hover:text-black transition-all duration-500">
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:text-black transition-all duration-500" />
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={500}>
          <p className="text-center text-slate-400 mt-14">
            and the story continues...
          </p>
        </FadeIn>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      )}
    </section>
  );
};

export default Cases;
