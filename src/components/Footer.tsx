import React from "react";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-white/10 text-white pt-16 pb-8">
      <div className="container">
        <div className="flex justify-between flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-tight mb-4">gizelo.</h3>
            <p className="text-slate-400 mb-6 max-w-xs">
              Crafting exceptional digital experiences through innovative web
              development solutions.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center text-sm font-medium text-white hover:text-slate-300 transition-colors"
            >
              Back to Top <ArrowUp className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gizelo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
