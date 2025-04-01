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
        <div className="flex justify-between items-start flex-wrap gap-8 mb-16">
          <div>
            <a href="#home" className="relative">
              <img
                src="/gizelo-logo-full.svg"
                alt="Logo"
                className="h-8 md:h-12"
              />
            </a>
            <p className="text-slate-400 max-w-xs mt-2">
              Build Your Web Solution.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-sm font-medium text-white hover:text-slate-300 transition-colors"
          >
            Back to Top <ArrowUp className="ml-1 h-4 w-4" />
          </button>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-8">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Gizelo. All rights reserved.
          </p>
          {/* <div className="flex flex-col md:flex-row gap-6">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
