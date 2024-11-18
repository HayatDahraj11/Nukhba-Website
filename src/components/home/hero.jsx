// src/components/home/hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Floating elements animation variants
  const floatingElements = Array(12).fill().map((_, i) => ({
    size: Math.random() * 60 + 20,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center">
      {/* Animated background elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          initial={{
            x: `${el.initialX}%`,
            y: `${el.initialY}%`,
          }}
          animate={{
            x: [`${el.initialX}%`, `${el.initialX + 10}%`, `${el.initialX}%`],
            y: [`${el.initialY}%`, `${el.initialY - 10}%`, `${el.initialY}%`],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 blur-xl"
            style={{
              width: el.size,
              height: el.size,
            }}
          />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl text-orange-400 font-light mb-4">
              Inspiring Technologies
            </h2>
            <motion.div 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
                Welcome to{' '}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                    Nukhba
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-500 opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </h1>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold text-orange-500"
              >
                (Elite)
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Paving the way to future technologies with innovation and excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,165,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Our Services</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-orange-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;