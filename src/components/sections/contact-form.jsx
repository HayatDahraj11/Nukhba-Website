// src/components/sections/contact-form.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputFocus = (field) => {
    setFocusedField(field);
  };

  const handleInputBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const inputClasses = (field) => `
    w-full bg-transparent border-2 rounded-lg px-4 py-3 
    text-gray-300 transition-all duration-300
    ${focusedField === field 
      ? 'border-orange-500 shadow-lg shadow-orange-500/20' 
      : 'border-gray-700 hover:border-gray-600'
    }
    focus:outline-none focus:border-orange-500
  `;

  return (
    <section className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-orange-500/5 to-transparent"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-yellow-500/5 to-transparent"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Subtle floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            y: [-20, 20],
            opacity: [0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            y: [20, -20],
            opacity: [0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Let's connect and create something amazing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => handleInputFocus('name')}
                  onBlur={handleInputBlur}
                  className={inputClasses('name')}
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => handleInputFocus('email')}
                  onBlur={handleInputBlur}
                  className={inputClasses('email')}
                  required
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => handleInputFocus('phone')}
                  onBlur={handleInputBlur}
                  className={inputClasses('phone')}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => handleInputFocus('subject')}
                  onBlur={handleInputBlur}
                  className={inputClasses('subject')}
                  required
                />
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <textarea
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => handleInputFocus('message')}
                onBlur={handleInputBlur}
                className={inputClasses('message')}
                required
              />
            </motion.div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative overflow-hidden px-8 py-4 bg-gradient-to-r 
                  from-orange-500 to-yellow-500 rounded-full text-white 
                  font-semibold shadow-lg group
                `}
                type="submit"
              >
                <motion.span
                  initial={false}
                  animate={{
                    opacity: submitted ? 0 : 1,
                    y: submitted ? -20 : 0
                  }}
                >
                  Send Message
                </motion.span>
                {submitted && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    ✓ Sent Successfully!
                  </motion.span>
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-3xl mb-4"
              >
                📍
              </motion.div>
              <h3 className="text-white font-semibold mb-2">Our Location</h3>
              <p className="text-gray-400">Jeddah, Saudi Arabia</p>
            </div>

            <div className="p-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-3xl mb-4"
              >
                📞
              </motion.div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">+966 XX XXX XXXX</p>
            </div>

            <div className="p-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-3xl mb-4"
              >
                ✉️
              </motion.div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">info@nukhba.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;