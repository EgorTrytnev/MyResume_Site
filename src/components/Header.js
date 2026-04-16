import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const focusTags = ['Python', 'C/C++', 'LLM', 'Networking'];

  return (
    <motion.header 
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="header-content">
        {/* Фото профиля с анимацией */}
        <motion.div 
          className="profile-image-container"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="profile-image">
            <div className="image-placeholder">
            <img src={require('../images/Photo_2.jpg')} alt="Фото" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </motion.div>

        {/* Основная информация */}
        <motion.div 
          className="header-info"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="header-eyebrow">Backend • Go • C/C++ • Networking</p>
          <h1 className="name">Трутнев Егор</h1>
          <h2 className="title">Backend-разработчик</h2>
          <p className="description">
            Разрабатываю клиент-серверные приложения и серверную логику, работаю с Go, C, C++,
            C#, SQL и сетевыми протоколами HTTP, WebSocket и WebRTC. Дополнительно использую
            LLM-интеграции в прикладных задачах, где важны структура ответа и надежная валидация.
          </p>

          <div className="focus-tags">
            {focusTags.map((tag) => (
              <span key={tag} className="focus-tag">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Социальные ссылки */}
          <motion.div 
            className="social-links"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="mailto:tryegor41@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="social-link"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a 
              href="tel:+79682203011"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="social-link"
            >
              <FaPhone />
            </motion.a>
            <motion.a 
              href="https://github.com/EgorTrytnev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="social-link"
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 
