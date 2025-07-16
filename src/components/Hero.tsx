import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1i-I98bSXFdsATvwmS0_-GTTFutpujcOG/view?usp=sharing';
    link.download = 'Srikanth_9YRS_SSE.pdf';
    link.target="_blank"
    link.rel="noreferrer noopener"
    link.click();
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });b
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-400/30 dark:from-blue-600/20 dark:to-indigo-600/20 animate-pulse shadow-2xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 dark:from-indigo-600/20 dark:to-purple-600/20 animate-pulse shadow-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-200/20 dark:from-blue-800/10 dark:to-indigo-800/10 animate-bounce-slow shadow-xl"></div>
        
        {/* Additional bouncing ball */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-purple-300/25 to-pink-300/25 dark:from-purple-700/15 dark:to-pink-700/15 animate-bounce shadow-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 md:mb-8"
            >

            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-1 shadow-2xl dark:shadow-blue-500/25">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <img
                      src="https://mattfarley.ca/img/mf-avatar.svg"
                    alt="Professional developer avatar"
                    className="w-full h-full object-cover"
                    loading="eager"
                    title="sr3k4nth"
                  />
                </div>
              </div>
            </motion.div>

            <div className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 min-h-[1.2em]">
              <TypeAnimation
                sequence={[
                  `Hello 👋, I'm ${personalInfo.name}`,
                  200000,
                  `I'm ${personalInfo.title}`,
                  3000,
                  // 'I build amazing web apps',
                  // 2000,
                  // 'I create digital experiences',
                  // 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block' }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-base sm:text-lg md:text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold mb-4">
                Full-Stack Expert | AI Engineer
              </p>
              {/* <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
                {personalInfo.experience} years of experience building scalable, high-performance web applications that serve millions of users
              </p> */}
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-6 md:mb-8 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs"
              aria-label="Download resume PDF"
            >
              <Download size={18} className="md:w-5 md:h-5" aria-hidden="true" />
              <span>Download Resume</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="flex items-center space-x-2 md:space-x-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl border-2 border-blue-600 dark:border-blue-400 w-full sm:w-auto max-w-xs"
              aria-label="Navigate to contact section"
            >
              <Mail size={18} className="md:w-5 md:h-5" aria-hidden="true" />
              <span>Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center space-x-4 md:space-x-6 mb-8 md:mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Visit GitHub profile"
            >
              <Github size={20} className="md:w-6 md:h-6" aria-hidden="true" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-300 hover:from-blue-200 hover:to-blue-300 dark:hover:from-blue-800 dark:hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={20} className="md:w-6 md:h-6" aria-hidden="true" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href={`mailto:${personalInfo.email}`}
              className="p-3 md:p-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-700 dark:text-green-300 hover:from-green-200 hover:to-green-300 dark:hover:from-green-800 dark:hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label={`Send email to ${personalInfo.email}`}
            >
              <Mail size={20} className="md:w-6 md:h-6" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator - Always Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            title={'Learn more'}
            className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll to about section"
          >
        {/* <span className="pt-[42px] text-sm font-medium">Learn More</span> */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-1.5 md:p-2 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg"
            >
              <ArrowDown size={16} className="md:w-5 md:h-5" aria-hidden="true" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;