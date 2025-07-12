import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    alert('Message sent successfully!');
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-full">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300"
                  aria-label="Visit GitHub profile"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" aria-hidden="true" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-full hover:from-blue-300 hover:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-all duration-300"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-300" aria-hidden="true" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-sky-200 to-sky-300 dark:from-sky-700 dark:to-sky-600 rounded-full hover:from-sky-300 hover:to-sky-400 dark:hover:from-sky-600 dark:hover:to-sky-500 transition-all duration-300"
                  aria-label="Visit Twitter profile"
                >
                  <Twitter className="w-5 h-5 text-sky-700 dark:text-sky-300" aria-hidden="true" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="Your Name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="srikantdh.tnrs@gmail.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="Project Discussion"
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-red-500 text-sm mt-1" role="alert">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="Tell me about your project..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;