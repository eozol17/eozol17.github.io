import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  BarChart3, 
  Cloud,
  GitBranch,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', stars: 5 },
        { name: 'JavaScript', stars: 4 },
        { name: 'R', stars: 4 },
        { name: 'SQL', stars: 4 },
        { name: 'Java', stars: 3 },
        { name: 'C#', stars: 3 },
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Data Science & ML',
      skills: [
        { name: 'Pandas', stars: 5 },
        { name: 'NumPy', stars: 4 },
        { name: 'Scikit-learn', stars: 4 },
        { name: 'Jupyter Notebooks', stars: 5 },
        { name: 'Data Visualization', stars: 4 },
        { name: 'Statistical Analysis', stars: 4 },
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: [
        { name: 'React', stars: 4 },
        { name: 'Vue.js', stars: 3 },
        { name: 'HTML/CSS', stars: 4 },
        { name: 'Node.js', stars: 3 },
        { name: 'Express.js', stars: 3 },
        { name: 'MongoDB', stars: 3 },
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', stars: 4 },
        { name: 'AWS', stars: 3 },
        { name: 'Docker', stars: 3 },
        { name: 'Slack Integration', stars: 4 },
        { name: 'LLM/AI Integration', stars: 4 },
        { name: 'MCP (Model Context Protocol)', stars: 4 },
      ],
      color: 'from-orange-500 to-orange-600'
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
    <section id="skills" ref={ref} className="section-padding bg-gradient-secondary dark:bg-secondary-900">
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
              My Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across different domains
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card p-8 space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name} 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                          {skill.name}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, starIndex) => (
                            <motion.div
                              key={starIndex}
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : { scale: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + starIndex * 0.1,
                                ease: "easeOut"
                              }}
                              className={`w-4 h-4 ${
                                starIndex < skill.stars 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-400 dark:text-gray-500'
                              }`}
                            >
                              ★
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h3 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-200">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Machine Learning', 'Data Visualization', 'Statistical Analysis',
                'API Development', 'Responsive Design', 'Version Control',
                'Agile Methodology', 'Problem Solving', 'Team Collaboration'
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full border border-primary-200 dark:border-primary-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Let's Discuss Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
