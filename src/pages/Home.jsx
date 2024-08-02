import React from 'react';
import { motion } from 'framer-motion';
import './page.css';

const Home = () => {
  return (
    <motion.section 
      id="home" 
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Scroll down to learn more about me.</p>
    </motion.section>
  );
};

export default Home;
