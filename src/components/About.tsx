import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Zap, Users, Award } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  const iconMap = {
    Code,
    Database,
    Server,
    Zap,
    Users,
    Award
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
    <section id="about" className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            {personalInfo.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <img
                  role="img"
                  alt="Developer working on code"
                  src="https://epnovate.com/wp-content/uploads/2020/08/5-1-898x1024.png"
                  className="w-full h-full object-scale-down"
                  loading="lazy"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{personalInfo.experience}+</span>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            ⚡  I build apps that work—fast, reliable, and scalable
            </h3> */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Hi, I'm <b>Srikanth1 👋 </b>— a passionate <b>Senior Software Engineer</b> with <b>9 years of experience</b> crafting scalable, high-performance 🚀, and user-focused web applications.🧠💻
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            My core expertise lies in the JavaScript ecosystem, especially React.js, Node.js, and modern web architectures. I’ve worked across dynamic industries like Fintech, E-Commerce, and Healthcare, delivering robust solutions that balance performance, usability, and maintainability.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            I care deeply about clean code, engineering best practices, and collaborative development. I'm also passionate about mentorship and continuously learning to stay ahead in the ever-evolving world of web development.    
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                    Based in Bengaluru, I'm always exploring ways to build better products, share knowledge, and create meaningful impact through technology.                    </p>
            <div className="flex flex-wrap gap-3">
              {personalInfo.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {personalInfo.skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4" aria-hidden="true">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;