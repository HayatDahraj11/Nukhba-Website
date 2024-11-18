// src/components/sections/video-tour.jsx
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VideoTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and opacity effects based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        // Trigger fullscreen on play
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen bg-black py-20 overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              Our Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a virtual tour through our state-of-the-art facilities and witness innovation in action
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          style={{ opacity, scale }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden group"
        >
          {/* Video Overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isPlaying ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm group-hover:bg-black/30 transition-all duration-300"
          />

          {/* Play Button */}
          <motion.button
            initial={false}
            animate={{ 
              opacity: isPlaying ? 0 : 1,
              scale: isPlaying ? 0.8 : 1 
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlayClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              {!isPlaying ? (
                <motion.svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </motion.svg>
              ) : (
                <motion.svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </motion.svg>
              )}
            </div>
          </motion.button>

          {/* Video Element */}
          <motion.video
            ref={videoRef}
            className="w-full aspect-video object-cover rounded-2xl shadow-2xl"
            loop
            playsInline
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>

          {/* Progress Bar */}
          {isPlaying && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: videoRef.current?.duration || 0, ease: "linear" }}
            />
          )}
        </motion.div>

        {/* Video Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Experience our journey of innovation and excellence. 
            Click to watch in fullscreen for the best experience.
          </p>
        </motion.div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute -left-20 top-1/4 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default VideoTour;