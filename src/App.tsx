import { useEffect, useState } from "react";
import HomePage from "@/pages/HomePage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import NotFound from "@/pages/NotFound";
import { getCaseStudy } from "@/constants";

const getPath = () => window.location.pathname.replace(/\/+$/, "") || "/";

const App = () => {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const syncLocation = () => setPath(getPath());
    window.addEventListener("popstate", syncLocation);
    return () => window.removeEventListener("popstate", syncLocation);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (path === "/" && hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);

  if (path === "/") {
    return <HomePage />;
  }

  if (path.startsWith("/work/")) {
    const project = getCaseStudy(path.replace("/work/", ""));
    if (project) {
      return <CaseStudyPage project={project} />;
    }
  }

  return <NotFound />;
};

export default App;
