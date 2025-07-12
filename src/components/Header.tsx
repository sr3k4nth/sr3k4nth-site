import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set active section based on current path
    const currentPath = location.pathname;
    if (currentPath === '/') {
      // On home page, track scroll position
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section.id);
              break;
            }
          }
        }
        
        // If we're at the top, no section is active
        if (window.scrollY < 100) {
          setActiveSection('');
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
      
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Set active section based on current route
      const activeRoute = sections.find(section => currentPath.startsWith(section.path));
      setActiveSection(activeRoute?.id || '');
    }
  }, [location.pathname]);

  const handleNavigation = (section: { id: string; path: string }) => {
    setIsMenuOpen(false);
    
    if (location.pathname === '/' || location.pathname.startsWith('/blog/')) {
      // If we're on home page, scroll to section
      if (location.pathname.startsWith('/blog/')) {
        // If we're on a blog post, navigate to home first
        navigate('/');
      }
      setTimeout(() => {
        const element = document.getElementById(section.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, location.pathname.startsWith('/blog/') ? 300 : 100);
    } else {
      // Navigate to the dedicated page
      navigate(section.path);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate('/');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg" aria-hidden="true">SR</span>
            </div>
            <span className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent'
                : 'text-white dark:text-white'
            }`}>
              Sr3k4nth
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <div key={section.id} className="relative">
                <motion.button
                  onClick={() => handleNavigation(section)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === section.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 shadow-lg'
                      : isScrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Navigate to ${section.label} section`}
                >
                  {section.label}
                </motion.button>
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Download resume PDF"
            >
              <Download size={16} aria-hidden="true" />
              <span>Resume</span>
            </motion.button>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300'
                  : 'bg-white/10 text-white'
              }`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300'
                  : 'bg-white/10 text-white'
              }`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-lg mt-4"
        >
          <div className="flex flex-col space-y-2 pt-4 pb-4 border-t border-gray-200/50 dark:border-gray-700/50">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigation(section)}
                className={`text-left px-4 py-3 rounded-lg transition-all duration-300 w-full ${
                  activeSection === section.id
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700'
                }`}
                aria-label={`Navigate to ${section.label} section`}
              >
                {section.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                x: isMenuOpen ? 0 : -20 
              }}
              transition={{ delay: sections.length * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadResume}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg w-full"
              aria-label="Download resume PDF"
            >
              <Download size={16} aria-hidden="true" />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;