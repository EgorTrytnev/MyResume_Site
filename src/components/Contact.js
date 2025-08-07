import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Обработка изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };
    console.log('Отправляем:', JSON.stringify(data));
    try {
      const response = await fetch('https://functions.yandexcloud.net/d4enjna9dgjeud6du5oa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert('Спасибо за сообщение!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Ошибка при отправке сообщения.');
      }
    } catch (error) {
      alert('Ошибка при отправке сообщения.');
    }
  };

  return (
    <motion.section 
      className="contact-section"
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
          <FaEnvelope className="section-icon" />
          Контакты
        </motion.h2>

        <div className="contact-content">
          {/* Контактная информация */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Свяжитесь со мной</h3>
            <p>
              Готов к новым проектам и интересным предложениям. 
              Не стесняйтесь обращаться!
            </p>

            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>tryegor41@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaPhone className="contact-icon" />
                <div className="contact-text">
                  <h4>Телефон</h4>
                  <p>+7 (968) 220-30-11</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <h4>Местоположение</h4>
                  <p>Новосибирск, Россия</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Отправить сообщение</h3>
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Ваш email"
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ваше сообщение"
                  rows="5"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <FaPaperPlane className="submit-icon" />
                Отправить сообщение
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 