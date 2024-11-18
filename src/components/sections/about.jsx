// src/components/sections/about.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const About = () => {
  // Respect user's motion preferences
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { number: "15+", label: "Years Experience", icon: "⏳" },
    { number: "500+", label: "Projects Completed", icon: "🎯" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "99%", label: "Client Satisfaction", icon: "⭐" }
  ];

  // Simplified animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Nukhba</span>
              </h2>
              
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-6" />

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Since 2004, Nukhba has been at the forefront of technological innovation,
                  providing cutting-edge solutions in PC, CCTV, PABX, and IT business domains.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our commitment to excellence and customer satisfaction has made us a
                  trusted partner for businesses across Saudi Arabia and beyond.
                </p>
              </div>

              <div className="mt-8 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-semibold shadow-lg"
                >
                  Learn More
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInScale}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">
                  {stat.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  {stat.number}
                </h3>
                
                <p className="text-gray-600 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;