import { FC } from "react";
import { ArrowUp, Linkedin, Send } from "lucide-react";

const Footer: FC = () => {
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
              <img src="/gizelo-logo-full.svg" alt="Logo" className="h-8 md:h-12" />
            </a>
            <p className="text-slate-400 max-w-xs mt-2">Building web products end-to-end.</p>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-sm font-medium text-white hover:text-slate-300 transition-colors"
          >
            Back to Top <ArrowUp className="ml-1 h-4 w-4" />
          </button>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row-reverse justify-between gap-8">
          <div className="flex gap-4">
            <a
              href="https://t.me/gizelo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-accent transition-all"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/gizelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-accent transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Robert Gizelo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
