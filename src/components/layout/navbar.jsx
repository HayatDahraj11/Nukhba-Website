import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link, Events, scrollSpy } from 'react-scroll';
import MobileNav from './mobile-nav';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Initialize scrollspy
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    // Set initial active section
    setActiveSection('welcome');

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navItems = [
    { name: 'Welcome', section: 'welcome' },
    { name: 'About', section: 'about' },
    { name: 'Ideas', section: 'ideas' },
    { name: 'Products', section: 'products' },
    { name: 'Journey', section: 'journey' },
    { name: 'Choose Us', section: 'choose-us' },
    { name: 'Contact', section: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="welcome"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="cursor-pointer"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              NUKHBA
            </motion.span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.section}
                to={item.section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onSetActive={() => setActiveSection(item.section)}
                className="cursor-pointer"
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  } hover:text-nukhba-orange transition-colors`}>
                    {item.name}
                  </span>
                  {activeSection === item.section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-nukhba-orange"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle Button */}
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Navigation */}
          <MobileNav
            isOpen={isMobileNavOpen}
            setIsOpen={setIsMobileNavOpen}
            navItems={navItems}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden md:flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-2 rounded-full text-white shadow-lg"
          >
            <span>Shop Online</span>
            <span className="ml-2 bg-yellow-400 text-xs px-2 py-0.5 rounded-full">
              NEW
            </span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
