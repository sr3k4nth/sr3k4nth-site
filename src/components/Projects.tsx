import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A showcase of my recent work, demonstrating expertise in full-stack development,
            performance optimization, and scalable architecture.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center shadow-lg">
                      <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                      {projects[currentIndex].date}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-4">
                        {projects[currentIndex].title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {projects[currentIndex].description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {projects[currentIndex].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium flex items-center shadow-sm"
                        >
                          <Tag className="w-3 h-3 mr-1" aria-hidden="true" />
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 rounded-lg font-medium"
                        aria-label={`View ${projects[currentIndex].title} source code on GitHub`}
                      >
                        <Github className="w-5 h-5" aria-hidden="true" />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={projects[currentIndex].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 rounded-lg font-medium shadow-lg"
                        aria-label={`View ${projects[currentIndex].title} live demo`}
                      >
                        <ExternalLink className="w-5 h-5" aria-hidden="true" />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid (Mobile-friendly) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;