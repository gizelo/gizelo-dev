import { FC, useRef, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { ProjectDetails } from "@/types";

interface ProjectModalProps {
  project: ProjectDetails | null;
  onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tooltipTech, setTooltipTech] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-y-auto p-4">
      <FadeIn>
        <div
          ref={modalRef}
          className="bg-darkGray border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all"
            >
              <X size={20} />
            </button>

            {/* Image carousel */}
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 p-2 rounded-full backdrop-blur-sm">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "bg-accent w-4"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              <span className="text-sm bg-white/10 text-slate-300 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Project info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Overview
                  </h3>
                  <p className="text-slate-400">{project.description}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-white mb-1">- Business Challenge</h3>
                  <p className="text-slate-400">{project.challenge}</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-white mb-1">- Solution</h3>
                  <p className="text-slate-400">{project.solution}</p>
                </div>

                {project.client && (
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-2">
                      Client
                    </h3>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-medium">
                          {project.client.name}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {project.client.description}
                        </p>
                      </div>
                      <div className="bg-white/5 px-3 py-1 rounded-full text-sm">
                        {project.client.country}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Features
                  </h3>
                  <ul className="list-disc list-inside text-slate-400">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-4 relative">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="relative w-10 h-10 flex items-center justify-center bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-all"
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTooltipTech({
                            name: tech.name,
                            x: rect.left + rect.width / 2,
                            y: rect.top - 5,
                          });
                        }}
                        onMouseLeave={() => setTooltipTech(null)}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 h-6 object-contain rounded-md"
                        />
                      </div>
                    ))}

                    {tooltipTech && (
                      <div
                        className="fixed bg-black px-2 py-1 rounded text-xs font-medium transform -translate-x-1/2 -translate-y-full pointer-events-none z-50"
                        style={{
                          left: `${tooltipTech.x}px`,
                          top: `${tooltipTech.y}px`,
                        }}
                      >
                        {tooltipTech.name}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ProjectModal;
