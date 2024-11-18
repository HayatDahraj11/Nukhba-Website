// src/components/home/why-choose-us.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: "🛡️",
      title: "Proven Expertise",
      description: "15+ years of excellence in technology solutions",
      stat: "15+",
      statLabel: "Years"
    },
    {
      icon: "🌟",
      title: "Quality Assured",
      description: "ISO certified processes and premium products",
      stat: "99%",
      statLabel: "Satisfaction"
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      description: "24/7 technical assistance and maintenance",
      stat: "24/7",
      statLabel: "Support"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Sayed",
      position: "IT Director",
      company: "Tech Solutions Inc.",
      quote: "Nukhba's expertise in CCTV implementation has transformed our security infrastructure. Their team's dedication is unmatched.",
      image: "👨‍💼"
    },
    {
      name: "Sarah Mohammad",
      position: "Operations Manager",
      company: "Global Enterprises",
      quote: "The quality of service and professional approach from Nukhba has exceeded our expectations. Truly a reliable technology partner.",
      image: "👩‍💼"
    },
    {
      name: "Khalid Rahman",
      position: "CEO",
      company: "Innovation Labs",
      quote: "Working with Nukhba has been instrumental in our digital transformation journey. Their solutions are innovative and effective.",
      image: "👨‍💼"
    }
  ];

  return (
    <div className="bg-white relative overflow-hidden py-24">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [-50, 50],
          y: [-50, 50],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [50, -50],
          y: [50, -50],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Nukhba
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience excellence in technology solutions with a partner you can trust
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-end space-x-2">
                <span className="text-3xl font-bold text-orange-500">{feature.stat}</span>
                <span className="text-gray-500">{feature.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === activeTestimonial && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center mb-6">
                        <span className="text-4xl mr-4">{testimonial.image}</span>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.position}</p>
                          <p className="text-orange-500">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-orange-500' 
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-semibold shadow-lg hover:shadow-orange-500/20"
          >
            Start Your Journey With Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;