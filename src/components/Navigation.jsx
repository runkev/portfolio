import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [blobStyle, setBlobStyle] = useState({ top: 600, height: 0, opacity: 0 });

  const items = ['Home', 'About', 'Projects', 'Contact'];

  const handleMouseEnter = (event) => {
    const { top, height } = event.currentTarget.getBoundingClientRect();
    setBlobStyle({ top, height });
  }

  const handleMouseLeave = () => {
    setBlobStyle({ top: 600, height: 0, opacity: 0 });
  };

  return (
    <nav className="navigation" >
      <motion.div
        className='blob'
        initial={{ top: blobStyle.top, height: blobStyle.height }}
        animate={{ top: blobStyle.top, height: blobStyle.height }}
        transition={{ type: 'spring', stiffness: 800, damping: 50 }}
      />
      <ul onMouseLeave={handleMouseLeave}>
        {items.map((item, index) => (
          <li key={index} onMouseEnter={handleMouseEnter}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
