import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogPosts';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || filteredPosts.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredPosts.length]);

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
    // Scroll to top when navigating to blog post
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPosts.length);
    setIsAutoPlaying(false);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredPosts.length) % filteredPosts.length);
    setIsAutoPlaying(false);
  };

  const goToPost = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
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
    <section id="blog" className="py-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing insights, tutorials, and best practices from my journey as a full-stack developer.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
          role="tablist"
          aria-label="Blog post categories"
        >
          {blogCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 hover:shadow-md'
              }`}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-label={`Filter posts by ${category} category`}
            >
              {category}
              {selectedCategory === category && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full"
                >
                  {filteredPosts.length}
                </motion.span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {filteredPosts.length > 0 ? (
          <>
            {/* Compact Featured Post Carousel */}
            <div className="relative max-w-4xl mx-auto mb-10">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedCategory}-${currentIndex}`}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <article 
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
                      onClick={() => handlePostClick(filteredPosts[currentIndex].slug)}
                    >
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Post Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={filteredPosts[currentIndex].image}
                            alt={filteredPosts[currentIndex].title}
                            className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center shadow-lg">
                            <Tag className="w-3 h-3 mr-1" aria-hidden="true" />
                            {filteredPosts[currentIndex].category}
                          </div>
                        </div>
                        
                        {/* Post Content */}
                        <div className="p-6 flex flex-col justify-center">
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                              {filteredPosts[currentIndex].date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                              {filteredPosts[currentIndex].readTime}
                            </div>
                          </div>
                          
                          <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-3 group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all duration-300 line-clamp-2">
                            {filteredPosts[currentIndex].title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                            {filteredPosts[currentIndex].excerpt}
                          </p>
                          
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm"
                          >
                            <span className="mr-2">Read more</span>
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </motion.div>
                        </div>
                      </div>
                    </article>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              {filteredPosts.length > 1 && (
                <>
                  <button
                    onClick={prevPost}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
                    aria-label="Previous blog post"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </button>
                  <button
                    onClick={nextPost}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
                    aria-label="Next blog post"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {filteredPosts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToPost(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-125'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Go to blog post ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Compact Posts Grid */}
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={`${selectedCategory}-${post.slug}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handlePostClick(post.slug)}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center shadow-md">
                      <Tag className="w-3 h-3 mr-1" aria-hidden="true" />
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm"
                    >
                      <span className="mr-2">Read more</span>
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No posts found for "{selectedCategory}" category.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Showing {filteredPosts.length} of {blogPosts.length} posts
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;