import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
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

  const typewriterTexts = [
    `I'm ${personalInfo.name}`,
    `I'm ${personalInfo.title}`
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 min-h-[1.2em]">
              <TypeWriter 
                texts={typewriterTexts}
                speed={200}
                deleteSpeed={50}
                delayBetweenTexts={3000}
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto px-4">
              Full-Stack Expert | AI Engineer | Distributed Systems
            </p>

            {/* <span style={
              background: linear-gradient(
                90deg,
                #007bff 0%,
                #17a2b8 25%,
                #a435f0 50%,
                #ff9800 75%,
                #28a745 100%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              font-size: 2.8rem;
              font-weight: bold;
              letter-spacing: 2px;
              display: inline-block;
              animation: animateHello 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1;
            ">
            Hello!
          </span> */}


            {/* <p className="text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {personalInfo.experience} Passionate and result-driven Senior-Engineer with 9+ years of experience building scalable, high-performant web applications
            </p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="flex items-center space-x-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors text-lg font-semibold"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
            title="Github"
              whileHover={{ scale: 1.1 }}
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
             title="LinkedIn"
              whileHover={{ scale: 1.1 }}
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              title="Send Email"
              whileHover={{ scale: 1.1 }}
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;