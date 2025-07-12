import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typewriterTexts = [
    `I'm ${personalInfo.name}`,
    `I'm ${personalInfo.title}`
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-400/30 dark:from-blue-600/20 dark:to-indigo-600/20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 dark:from-indigo-600/20 dark:to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-200/20 dark:from-blue-800/10 dark:to-indigo-800/10 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    SR
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 min-h-[1.2em]">
              <TypeWriter 
                texts={typewriterTexts}
                speed={200}
                deleteSpeed={50}
                delayBetweenTexts={3000}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold mb-4">
                Full-Stack Expert | AI Engineer | Distributed Systems
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {personalInfo.experience} years of experience building scalable, high-performance web applications that serve millions of users
              </p>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
              aria-label="Download resume PDF"
            >
              <Download size={20} aria-hidden="true" />
              <span>Download Resume</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="flex items-center space-x-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300 text-lg font-semibold"
              aria-label="Navigate to contact section"
            >
              <Mail size={20} aria-hidden="true" />
              <span>Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300"
              aria-label="Visit GitHub profile"
            >
              <Github size={24} aria-hidden="true" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900 dark:hover:to-blue-800 transition-all duration-300"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={24} aria-hidden="true" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200 dark:hover:from-green-900 dark:hover:to-green-800 transition-all duration-300"
              aria-label={`Send email to ${personalInfo.email}`}
            >
              <Mail size={24} aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">Learn More</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} aria-hidden="true" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;