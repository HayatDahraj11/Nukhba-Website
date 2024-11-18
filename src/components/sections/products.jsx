// src/components/sections/products.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../layout/section-wrapper';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'security', name: 'Security Systems' },
    { id: 'network', name: 'Network Solutions' },
    { id: 'computers', name: 'Computers & Parts' }
  ];

  const products = [
    {
      id: 1,
      name: 'HD CCTV Camera',
      category: 'security',
      price: '$299',
      image: '🎥'
    },
    {
      id: 2,
      name: 'Network Switch',
      category: 'network',
      price: '$199',
      image: '🔌'
    },
    {
      id: 3,
      name: 'Gaming PC',
      category: 'computers',
      price: '$1299',
      image: '🖥️'
    },
    // Add more products as needed
  ];

  const filteredProducts = products.filter(
    product => selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <SectionWrapper id="products" className="bg-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our <span className="text-nukhba-orange">Products</span>
      </motion.h2>

      <motion.div 
        className="flex justify-center space-x-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category.id
                ? 'bg-nukhba-orange text-white'
                : 'bg-gray-800 text-gray-300'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="wait">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl p-6 text-center"
            >
              <motion.div 
                className="text-6xl mb-4"
                whileHover={{ scale: 1.1 }}
              >
                {product.image}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-nukhba-orange text-lg font-bold">{product.price}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-nukhba-orange text-white px-6 py-2 rounded-full"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};

export default Products;