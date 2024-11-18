// src/components/home/Features.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Features = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'security', name: 'Security' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'support', name: 'Support' }
  ];

  const features = [
    {
      title: "Security First",
      description: "Advanced CCTV and surveillance systems for maximum protection",
      icon: "🔒",
      gradient: "from-blue-500 to-cyan-500",
      category: 'security'
    },
    {
      title: "Smart Solutions",
      description: "Innovative technology integration for modern businesses",
      icon: "💡",
      gradient: "from-purple-500 to-pink-500",
      category: 'solutions'
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and maintenance",
      icon: "⚡",
      gradient: "from-orange-500 to-yellow-500",
      category: 'support'
    },
    {
      title: "Custom Design",
      description: "Tailored solutions matching your specific requirements",
      icon: "✨",
      gradient: "from-green-500 to-teal-500",
      category: 'solutions'
    }
  ];

  const filteredFeatures = features.filter(
    feature => activeCategory === 'all' || feature.category === activeCategory
  );

  const reviews = [
    {
      name: "Mohammed Al-Hassan",
      position: "CTO, Tech Solutions",
      review: "Nukhba's security solutions have revolutionized our infrastructure. Their 24/7 support is exceptional!",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Fatima Ahmed",
      position: "Operations Director",
      review: "The custom solutions provided by Nukhba have streamlined our processes significantly.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Abdul Rahman",
      position: "IT Manager",
      review: "Their smart solutions and innovative approach have transformed our business operations.",
      avatar: "👨‍💻",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Us
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide cutting-edge solutions backed by years of expertise and innovation
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex justify-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          <AnimatePresence mode="wait">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Reviews Section - Keeping the existing implementation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-64">
            <AnimatePresence mode="wait">
              {reviews.map((review, index) => (
                index === activeReview && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl">{review.avatar}</span>
                        <div>
                          <h4 className="font-semibold text-lg">{review.name}</h4>
                          <p className="text-gray-600">{review.position}</p>
                        </div>
                        <div className="ml-auto">
                          {"⭐".repeat(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-700 italic text-lg">"{review.review}"</p>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 gap-3">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeReview 
                    ? 'bg-orange-500' 
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,165,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg group relative overflow-hidden"
          >
            <span className="relative z-10">Explore All Features</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;