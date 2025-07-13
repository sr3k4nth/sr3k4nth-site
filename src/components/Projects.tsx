import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to projects section
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development,
            performance optimization, and scalable architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {getCurrentPageItems().map((project, index) => (
            <motion.div
              key={`${currentPage}-${index}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center shadow-lg">
                  <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium flex items-center shadow-sm"
                    >
                      <Tag className="w-2 h-2 mr-1" aria-hidden="true" />
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
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 rounded-lg font-medium text-sm shadow-md"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 rounded-lg font-medium text-sm shadow-lg"
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        )}

        {/* Page Info */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, projects.length)} of {projects.length} projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;