import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
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
              Я backend-разработчик из Новосибирска. Основной стек включает C, C++, C#, Go,
              а также проектирование клиент-серверных приложений и разработку серверной логики.
              В последнее время основной интерес сосредоточен на разработке серверов на Go,
              сетевом взаимодействии и построении устойчивой архитектуры сервисов.
            </p>
            
            <p className="about-text">
              В рамках стажировки в Projectum21, стартапе от Сбера, участвовал в разработке
              ИИ-агента для генерации документов. Отвечал за реализацию генератора документов,
              валидацию ответов модели и проработку контейнера, в котором выполняется основная
              логика сервиса. Параллельно продолжаю развиваться в направлении серверной разработки,
              сетевых протоколов, SQL и интеграции прикладных сервисов.
            </p>

            <ul className="about-points">
              <li>Разрабатываю клиент-серверные архитектуры и продумываю взаимодействие между компонентами системы.</li>
              <li>Работаю с HTTP, WebSocket и WebRTC, а также с логикой обмена данными между клиентом и сервером.</li>
              <li>Использую SQL и другие подходы к хранению данных в зависимости от требований проекта.</li>
              <li>Имею опыт командной разработки и умею доводить отдельный технический контур до рабочего результата.</li>
            </ul>
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
              <FaBriefcase className="detail-icon" />
              <div className="detail-content">
                <h4>Профессиональный фокус</h4>
                <p>Go, C/C++, C#, клиент-серверная разработка, SQL и сетевые протоколы</p>
              </div>
            </div>

            <div className="detail-item">
              <FaMapMarkerAlt className="detail-icon" />
              <div className="detail-content">
                <h4>Местоположение</h4>
                <p>Новосибирск, Россия</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 
