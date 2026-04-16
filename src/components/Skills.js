import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaDatabase, FaCloud, FaCode, FaUser, FaAddressCard } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  // Данные о навыках
  const skillCategories = [
    {
      id: 1,
      title: "Основной стек",
      icon: <FaCode />,
      description: "Языки и backend-основа.",
      skills: [
        { name: "C/C++", level: 65 },
        { name: "C#", level: 60 },
        { name: "Go", level: 40 },
        { name: "Visual Studio", level: 70 }

      ]
    },
    {
      id: 2,
      title: "Серверы и сети",
      icon: <FaCloud />,
      description: "Протоколы и обмен данными.",
      skills: [
        { name: "HTTP", level: 82 },
        { name: "WebSocket", level: 76 },
        { name: "WebRTC", level: 67 },
        { name: "Клиент-серверная архитектура", level: 81 }
      ]
    },
    {
      id: 3,
      title: "Базы данных",
      icon: <FaDatabase />,
      description: "SQL и хранение данных.",
      skills: [
        { name: "SQL", level: 75 },
        { name: "PostgreSQL", level: 68 },
        { name: "SQLite", level: 72 },
        { name: "MongoDB", level: 64 }
      ]
    },
    {
      id: 4,
      title: "Инженерная практика",
      icon: <FaUsers />,
      description: "API, контейнеры и процессы.",
      skills: [
        { name: "REST API", level: 78 },
        { name: "Контейнеризация", level: 69 },
        { name: "Git", level: 76 },
        { name: "Работа в команде", level: 88 }
      ]
    },
    {
      id: 5,
      title: "AI и прикладная логика",
      icon: <FaUser />,
      description: "Дополнительный рабочий контур.",
      skills: [
        { name: "Python", level: 82 },
        { name: "Работа с LLM", level: 84 },
        { name: "Промт инженеринг", level: 78 },
        { name: "Валидация ответов модели", level: 76 }
      ]
    },
        {
      id: 6,
      title: "Личные навыки и развитие",
      icon: <FaAddressCard />,
      description: "Навыки, которые помогают в профессиональном росте.",
      skills: [
        { name: "Адаптивность", level: 75 },
        { name: "Коммуникация", level: 90 },
        { name: "Лидерство", level: 60 },
        { name: "Выстравлять себе навыки", level: 80 }
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
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
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
