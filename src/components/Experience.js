import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaTools } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  // Данные об опыте работы
  const experiences = [
    {
      id: 1,
      company: "Projectum21",
      position: "Стажер-разработчик",
      period: "конец 2025 - апрель 2026",
      focus: "AI-агент для генерации документов",
      tag: "Стажировка",
      description: [
        "Участвовал в разработке ИИ-агента для генерации документов вместе с командой стартапа от Сбера.",
        "Разрабатывал генератор документов и прорабатывал структуру выходных данных под реальный сценарий использования.",
        "Валидировал ответы модели, чтобы результат оставался предсказуемым и пригодным для дальнейшей обработки.",
        "Работал с реализацией самого агента и контейнером, внутри которого выполнялась основная логика сервиса."
      ]
    },
    {
      id: 2,
      company: "EasyCode",
      position: "Преподаватель Python и Unity",
      period: "2025 - конец 2025",
      focus: "Обучение и работа с группами",
      tag: "Преподавание",
        description: [
          "Преподаю Unity и Python для начинающих, помогая ученикам быстрее перейти от теории к собственным проектам.",
          "Работаю с детьми и подростками: адаптирую материал под уровень группы и удерживаю темп обучения.",
          "Сотрудничаю с другими преподавателями и участвую в развитии учебных материалов.",
          "Развиваю навыки коммуникации, наставничества и командного взаимодействия."
        ]
    },
        {
      id: 3,
      company: "СибГУТИ",
      position: "Студент",
      period: "2024 - настоящее время",
      focus: "Обучение на направлении ИВТ",
      tag: "Обучение",
        description: [
          "Обучаюсь на направлении Информатика и Вычислительная техника, изучая широкий спектр тем от алгоритмов до веб-разработки.",
          "Участвую в учебных проектах и командных задачах.",
          "Совмещаю учебу с практикой в pet-проектах и стажировках, что позволяет быстрее закреплять знания на практике.",
          "Развиваю навыки работы с различными технологиями и инструментами, а также алгоритмическое мышление."
        ]
    },
    {
      id: 4,
      company: "Школа 21",
      position: "Студент",
      period: "2024 - настоящее время",
      focus: "Командные и учебные проекты",
      tag: "Обучение",
      description: [
        "Прохожу интенсивное обучение, совмещая самостоятельную работу, peer-to-peer формат и проектную практику.",
        "Изучаю современные подходы к разработке и регулярно закрепляю их в командных задачах.",
        "Участвую в проектах и хакатонах, где особенно важны ответственность, коммуникация и скорость принятия решений.",
        "Развиваю алгоритмическое мышление и навык аккуратно доводить решение до рабочего состояния."
      ]
    },
    {
      id: 5,
      company: "Pet-проекты",
      position: "Разработчик",
      period: "2019 - настоящее время",
      focus: "Go, C/C++, C# и клиент-серверные приложения",
      tag: "Практика",
      description: [
        "Разрабатываю учебные и pet-проекты на C, C++, C#, Go и Python, усиливая backend-направление.",
        "Сосредоточен на разработке серверов на Go и построении клиент-серверного взаимодействия.",
        "Работаю с HTTP, WebSocket и WebRTC, проектирую обмен данными между клиентом и сервером.",
        "Использую SQL, SQLite и MongoDB в зависимости от требований к хранению и обработке данных."
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
                  <span className="experience-tag">{exp.tag}</span>
                  <h3 className="position">{exp.position}</h3>
                  <h4 className="company">{exp.company}</h4>
                </div>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <FaTools className="meta-icon" />
                    <span>{exp.focus}</span>
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
