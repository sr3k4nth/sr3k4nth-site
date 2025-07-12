import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, MessageCircle, Linkedin, Copy, Check } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
}

interface SocialShareProps {
  post: BlogPost;
  showLabels?: boolean;
}

const SocialShare: React.FC<SocialShareProps> = ({ post, showLabels = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentUrl = `${window.location.origin}/blog/${post.slug}`;
  const shareText = `Check out this article: "${post.title}" - ${post.excerpt}`;

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${currentUrl}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareOptions = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      action: handleLinkedInShare,
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: handleWhatsAppShare,
      color: 'bg-green-600 hover:bg-green-700',
      textColor: 'text-green-600'
    },
    {
      name: 'Copy Link',
      icon: copied ? Check : Copy,
      action: handleCopyLink,
      color: copied ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-700',
      textColor: copied ? 'text-green-600' : 'text-gray-600'
    }
  ];

  if (showLabels) {
    return (
      <div className="flex items-center space-x-4">
        {shareOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <motion.button
              key={option.name}
              onClick={option.action}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all duration-300 ${option.color}`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="text-sm font-medium">{option.name}</span>
            </motion.button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
      >
        <Share2 className="w-4 h-4" />
        <span className="text-sm font-medium">Share</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Share Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[200px]"
            >
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                  Share this article
                </div>
                {shareOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <motion.button
                      key={option.name}
                      onClick={() => {
                        option.action();
                        if (option.name !== 'Copy Link') {
                          setIsOpen(false);
                        }
                      }}
                      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      className="w-full flex items-center space-x-3 px-3 py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg"
                    >
                      <div className={`p-2 rounded-lg ${option.color.includes('bg-') ? option.color.split(' ')[0] : 'bg-gray-100 dark:bg-gray-700'}`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          {option.name === 'Copy Link' && copied ? 'Copied!' : option.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {option.name === 'LinkedIn' && 'Share on LinkedIn'}
                          {option.name === 'WhatsApp' && 'Send via WhatsApp'}
                          {option.name === 'Copy Link' && (copied ? 'Link copied to clipboard' : 'Copy article link')}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialShare;