import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Passionate full-stack engineer crafting exceptional digital experiences
              with modern technologies and best practices.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>using React & TypeScript</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => handleNavigation('about')}
                  className="hover:text-white transition-colors"
                  aria-label="Navigate to about section"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('projects')}
                  className="hover:text-white transition-colors"
                  aria-label="Navigate to projects section"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('blog')}
                  className="hover:text-white transition-colors"
                  aria-label="Navigate to blog section"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="hover:text-white transition-colors"
                  aria-label="Navigate to contact section"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:srikanddth.tnrs@gmail.com" className="hover:text-white transition-colors" aria-label="Send email">
                  Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit LinkedIn profile">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit GitHub profile">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit Twitter profile">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Portfolio. All rights reserved.
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;