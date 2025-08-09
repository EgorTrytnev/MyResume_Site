import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <motion.section 
      className="about-section"
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
          <FaUser className="section-icon" />
          О себе
        </motion.h2>

        <div className="about-content">
          {/* Основная информация */}
          <motion.div 
            className="about-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="about-text">
              Меня зовут Егор, мне 19 лет, и я увлечен разработкой мобильных приложений уже около 6 лет. 
              За это время я активно обучался, используя как книги, так и различные онлайн-курсы. 
              В моем портфолио уже есть несколько завершенных проектов на разные темы.
            </p>
            
            <p className="about-text">
            Одно из моих главных преимуществ — стремление к непрерывному обучению. Я всегда готов осваивать новое, независимо от сложности задачи, и довожу начатое дело до конца. 
            В настоящее время:
            <ul>
            <li>Активно участвую в <b>хакатонах</b>, развивая навыки командной работы и решения нестандартных задач.</li>
            <li>Участвовал в разработке небольшой игры с использованием GigaChat на <b>Unity</b>.</li>
            <li>Занимаюсь созданием собственной игры с перспективой публикации на игровых площадках.</li>
            <li>Прохожу обучение в <b>Школе 21</b>.</li>
            <li>Совершенствую <b>C++</b> под руководством ментора из <b>Arqa Technologies</b> , изучая современные подходы и лучшие практики индустрии.</li>
            </ul>
            </p>
          </motion.div>

          {/* Детали */}
          <motion.div 
            className="about-details"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="detail-item">
              <FaGraduationCap className="detail-icon" />
              <div className="detail-content">
                <h4>Образование</h4>
                <p>Сибирский государственный университет телекоммуникаций и информатики, ИВТ (2028)</p>
              </div>
            </div>

            <div className="detail-item">
              <FaMapMarkerAlt className="detail-icon" />
              <div className="detail-content">
                <h4>Местоположение</h4>
                <p>Новосибирск, Россия</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">💼</div>
              <div className="detail-content">
                <h4>Опыт работы</h4>
                <p>6 лет обучения и разработки проектов</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 