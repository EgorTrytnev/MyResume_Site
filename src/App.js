import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Главный контейнер с плавной прокруткой */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="resume-container"
      >
        {/* Заголовок с фото и основной информацией */}
        <Header />
        
        {/* Секция "О себе" */}
        <About />
        
        {/* Секция опыта работы */}
        <Experience />
        
        {/* Секция навыков */}
        <Skills />
        
        {/* Секция контактов */}
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
