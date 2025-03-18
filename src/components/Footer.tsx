import React from "react";
import { ChevronRight, ArrowUp } from "lucide-react";
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-gizelo-800 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold tracking-tight mb-4">
              gizelo
            </h3>
            <p className="text-gizelo-300 mb-6 max-w-xs">
              Crafting exceptional digital experiences through innovative web development solutions.
            </p>
            <button onClick={scrollToTop} className="inline-flex items-center text-sm font-medium text-white hover:text-gizelo-200 transition-colors">
              Back to Top <ArrowUp className="ml-1 h-4 w-4" />
            </button>
          </div>

          

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gizelo-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-gizelo-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gizelo-500 flex-grow" />
              <button className="bg-white text-gizelo-800 px-4 py-2 rounded-r-lg font-medium hover:bg-gizelo-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gizelo-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gizelo-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} gizelo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gizelo-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gizelo-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gizelo-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;