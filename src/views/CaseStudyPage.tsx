import GirexCaseStudyPage from "@/views/GirexCaseStudyPage";
import StandardCaseStudyPage from "@/views/StandardCaseStudyPage";
import { CaseStudy } from "@/types";

type CaseStudyPageProps = {
  project: CaseStudy;
};

const CaseStudyPage = ({ project }: CaseStudyPageProps) => {
  if (project.slug === "girex") {
    return <GirexCaseStudyPage project={project} />;
  }

  return <StandardCaseStudyPage project={project} />;
};

export default CaseStudyPage;
