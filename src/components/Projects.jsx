import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Slack-LLM-AWS-MCP',
      description: 'Advanced chatbot project for Mackolik utilizing Claude 3.7 Sonnet as background with AWS Athena as data repository. Features natural language processing and intelligent data querying.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Python', 'Claude 3.7', 'AWS Athena', 'Slack API', 'LLM'],
      github: 'https://github.com/eozol17/Slack-LLM-AWS-MCP',
      demo: '#',
      featured: true
    },
    {
      title: 'MCP-Server-Slack-Claude-AWS',
      description: 'Slack bot that takes natural language messages and queries AWS Athena to provide meaningful analysis. Built with Model Context Protocol for enhanced AI interactions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Python', 'AWS Athena', 'Slack Bot', 'MCP', 'Natural Language Processing'],
      github: 'https://github.com/eozol17/MCP-Server-Slacak-Claude-AWS',
      demo: '#',
      featured: true
    },
    {
      title: 'AIS-Weather-Anomaly-Detection',
      description: 'MSc Thesis project for JADS focusing on anomaly detection in maritime travel using AIS data and weather patterns. Advanced data science and machine learning techniques.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      technologies: ['Python', 'Jupyter Notebooks', 'Machine Learning', 'Data Analysis', 'Maritime Data'],
      github: 'https://github.com/eozol17/AIS-Weather-Anomaly-detection-in-maritime-travel',
      demo: '#',
      featured: true
    },
    {
      title: 'ADA Project ElderCare 2025',
      description: 'Advanced Data Architectures project for JADS focusing on elder care solutions. Implements modern data architecture patterns and healthcare data processing.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      technologies: ['Python', 'Data Architecture', 'Healthcare Data', 'Advanced Analytics'],
      github: 'https://github.com/eozol17/ADA_Project_ElderCare_2025',
      demo: '#',
      featured: false
    },
    {
      title: 'RAGMeUp',
      description: 'Generic RAG (Retrieval-Augmented Generation) framework to apply the power of LLMs on any given dataset. Forked and enhanced from original project.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      technologies: ['Python', 'RAG', 'LLM', 'Data Processing', 'Machine Learning'],
      github: 'https://github.com/eozol17/RAGMeUp',
      demo: '#',
      featured: false
    },
    {
      title: 'Data Engineering JADS',
      description: 'Data Engineering course project built with Vue.js. Focuses on modern data engineering practices and frontend development for data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Data Engineering', 'Frontend Development', 'Data Visualization'],
      github: 'https://github.com/eozol17/Data_Engineering_Jads',
      demo: '#',
      featured: false
    }
  ];

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

  return (
    <section id="projects" ref={ref} className="section-padding bg-white dark:bg-secondary-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              A showcase of my recent work and projects that demonstrate my skills and expertise
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-secondary-800 hover:text-primary-600 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-secondary-800 hover:text-primary-600 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900-30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <Eye size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Interested in seeing more of my work?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/eozol17"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                View All Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
