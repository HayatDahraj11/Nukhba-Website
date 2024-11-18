// src/components/home/services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Printer, Palette, Network } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Inks & computers",
      description: "Ink Cartridges are probably the most expensive part of owning and running a computer system. We provide cost-effective solutions without compromising quality.",
      icon: <Printer className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart web Designs",
      description: "Selecting NUKHBA for your website design means choosing a smart & professional web design company. We create stunning, responsive websites that deliver results.",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Computer Networks",
      description: "Without reliable network support services your business operations can come to a complete halt. Our expert team ensures your network runs smoothly 24/7.",
      icon: <Network className="w-8 h-8" />,
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-800 via-orange-500 to-pink-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
              Our Ideas
            </h2>
          </motion.div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming visions into reality with cutting-edge technology and innovative solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2
              }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="relative bg-gray-900 p-8 rounded-2xl h-full border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                  {/* Icon with gradient background */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white`}
                    >
                      {service.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm font-semibold text-white group"
                  >
                    Learn More 
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:text-orange-500 transition-colors" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-semibold shadow-lg hover:shadow-orange-500/20"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;