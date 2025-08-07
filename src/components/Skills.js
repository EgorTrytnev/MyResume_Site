import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaCloud } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  // Данные о навыках
  const skillCategories = [
    {
      id: 1,
      title: "Мобильная разработка",
      icon: <FaCode />,
      skills: [
        { name: "iOS Swift", level: 65 },
        { name: "UIKit", level: 70 },
        { name: "Xcode", level: 70 },
        { name: "Core Data", level: 65 }
      ]
    },
    {
      id: 2,
      title: "Разработка",
      icon: <FaTools />,
      skills: [
        { name: "Unity", level: 80 },
        { name: "C#", level: 60 },
        { name: "C++", level: 50 },
        { name: "C", level: 70 }
      ]
    },
    {
      id: 3,
      title: "Инструменты и технологии",
      icon: <FaDatabase />,
      skills: [
        { name: "Git", level: 75 },
        { name: "SQLite", level: 45 },
        { name: "Python", level: 55 },
        { name: "VS Code", level: 80 }
      ]
    },
    {
      id: 4,
      title: "Дополнительно",
      icon: <FaCloud />,
      skills: [
        { name: "ООП", level: 75 },
        { name: "MVC", level: 65 },
        { name: "GigaChat", level: 55 },
        { name: "Алгоритмы", level: 70 }
      ]
    }
  ];

  return (
    <motion.section 
      className="skills-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaCode className="section-icon" />
          Навыки
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    
                    {/* Прогресс-бар */}
                    <div className="skill-progress">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills; 