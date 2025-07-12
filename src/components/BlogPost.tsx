import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SocialShare from './SocialShare';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            // Navigate back to home and scroll to blog section
            navigate('/');
            setTimeout(() => {
              const element = document.getElementById('blog');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8 group"
          aria-label="Back to blog section"
        >
          <motion.div
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </motion.div>
          <span>Back to Blog</span>
        </motion.button>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" aria-hidden="true" />
                  {post.category}
                </div>
              </div>

              {/* Social Share Component */}
              <SocialShare post={post} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-4"
            >
              {post.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              {post.excerpt}
            </motion.p>
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Bottom Social Share */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Found this helpful?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Share it with your network!
                </p>
              </div>
              <SocialShare post={post} showLabels={true} />
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;