import { motion } from 'framer-motion';
import './page.css';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>About me</h1>
      <p>Text goes here</p>
    </motion.section>
  );
};

export default About;
