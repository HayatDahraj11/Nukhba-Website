// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/layout/navbar';
import Hero from '../components/home/hero';
import About from '../components/sections/about';
import Services from '../components/home/services';
import Products from '../components/sections/products';
import Features from '../components/home/features';
import VideoTour from '../components/sections/video-tour';
import ContactForm from '../components/sections/contact-form';

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <section id="welcome" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="ideas" className="min-h-screen">
        <Services />
      </section>
      <section id="products" className="min-h-screen">
        <Products />
      </section>
      <section id="journey" className="min-h-screen"> {/* Make sure this ID matches */}
      <VideoTour />
    </section>
      <section id="choose-us" className="min-h-screen">
        <Features />
      </section>
      
<section id="contact" className="min-h-screen">
  <ContactForm />
</section>
    </div>
  );
};

export default Home;