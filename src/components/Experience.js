import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  // Данные об опыте работы
  const experiences = [
{
        id: 1,
        company: "EasyCode",
        position: "Преподаватель",
        period: "2025 - настоящее время",
        location: "Новосибирск",
        description: [
        "Преподаю Unity (игровая разработка) и Python (основы программирования) для начинающих.",
        "Работаю с детьми и подростками: объясняю сложные темы простым языком, мотивирую на проекты.",
        "Сотрудничаю с другими преподавателями: обмениваюсь опытом, участвую в разработке учебных программ.",
        "Развиваю коммуникативные навыки и подходы к обучению для эффективной работы с учениками."
        ]
    },
    {
        
      id: 2,
      company: "Школа 21",
      position: "Студент",
      period: "2024 - настоящее время",
      location: "Новосибирск",
      description: [
        "Прохожу обучение в школе 21",
        "Изучаю современные технологии программирования",
        "Участвую в командных проектах и хакатонах",
        "Развиваю навыки алгоритмического мышления"
      ]
    },
    {
      id: 3,
      company: "Самостоятельные проекты",
      position: "Разработчик мобильных приложений",
      period: "2019 - настоящее время",
      location: "Новосибирск",
      description: [
        "Разработка на С и С++",
        "Создание игр на Unity с интеграцией GigaChat",
        "Изучение и применение паттернов проектирования (MVC, ООП)",
        "Работа с базами данных SQLite и Core Data"
      ]
    },
    {
      id: 4,
      company: "Хакатоны и конкурсы",
      position: "Участник",
      period: "2023 - настоящее время",
      location: "Новосибирск",
      description: [
        "Активное участие в различных хакатонах",
        "Разработка игровых проектов с использованием Unity",
        "Интеграция AI-технологий (GigaChat) в игровые проекты",
        "Создание инновационных решений в команде"
      ]
    }
  ];

  return (
    <motion.section 
      className="experience-section"
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
          <FaBriefcase className="section-icon" />
          Опыт работы
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Точка на временной линии */}
              <div className="timeline-dot"></div>
              
              {/* Содержимое опыта */}
              <motion.div 
                className="experience-content"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <h4 className="company">{exp.company}</h4>
                </div>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="experience-description">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 