import { motion } from 'framer-motion';
import './page.css';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Contact me</h1>
      <p>Text goes here</p>
    </motion.section>
  );
};

export default Contact;
