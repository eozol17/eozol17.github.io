import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Heart, Code2 } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '2', label: 'Languages Spoken' },
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-secondary-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-200">
                  Hello! I'm Eren Ege Özol
                </h3>
                <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  A passionate Data Scientist and Full-Stack Developer based in the Netherlands. 
                  I completed my Masters at <strong className="text-primary-600 dark:text-primary-400">
                    Jheronimus Academy of Data Science
                  </strong> in <strong className="text-primary-600 dark:text-primary-400">
                    Data Science in Business and Entrepreneurship
                  </strong>.
                </p>
                <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  I love turning complex data into actionable insights and building solutions that solve real-world problems. 
                  My journey in technology started with curiosity and has evolved into a passion for creating meaningful impact through code.
                </p>
              </div>

              {/* Personal Info */}
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                  <span className="text-secondary-700 dark:text-secondary-300">
                    Based in Netherlands
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={20} />
                  <span className="text-secondary-700 dark:text-secondary-300">
                    Masters in Data Science
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Heart className="text-primary-600 dark:text-primary-400" size={20} />
                  <span className="text-secondary-700 dark:text-secondary-300">
                    Passionate about AI & ML
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Code2 className="text-primary-600 dark:text-primary-400" size={20} />
                  <span className="text-secondary-700 dark:text-secondary-300">
                    Full-Stack Development
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-700"
                  >
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="space-y-4 text-center">
                <h4 className="text-lg font-semibold" style={{ color: '#1e293b' }}>
                  Languages I Speak
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="text-secondary-700 dark:text-secondary-300">English</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-primary-500 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">🇩🇪</span>
                    <span className="text-secondary-700 dark:text-secondary-300">German</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-primary-500 rounded-full"
                        />
                      ))}
                      <div className="w-3 h-3 bg-secondary-300 dark:bg-secondary-600 rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">🇹🇷</span>
                    <span className="text-secondary-700 dark:text-secondary-300">Turkish</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-primary-500 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
