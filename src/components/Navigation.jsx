import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Navigation.css';

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const blobRef = useRef(null);

  const items = ['Home', 'About', 'Projects', 'Contact'];

  const handleMouseEnter = (event, index) => {
    const { top, left, width, height } = event.currentTarget.getBoundingClientRect();
    setHoveredItem(index);
    
    gsap.to(blobRef.current, {
      duration: 0.1,
      top: top + window.scrollY,
      left: left + 20,
      height: height + 30,
      width: width + 40,
      borderRadius: 30,
      opacity: 1,
      ease: 'power3.inOut'
    })
  }

  const handleMouseLeave = () => {
    gsap.to(blobRef.current, {
      duration: 0.1,
      opacity: 0,
      ease: 'power3.inOut'
    })

    setHoveredItem(null);
  }


  return (
    <nav className="navigation" >
      {/* <div className="blob" ref={blobRef} /> */}
      <svg
        ref={blobRef}
        className="blob"
        viewBox="100 100 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#000000" d="M42.3,-68.4C54.5,-62.3,60.4,-45.4,66.3,-29.8C72.1,-14.2,77.9,0.1,75.3,12.8C72.6,25.4,61.5,36.3,49.3,47.4C37.2,58.5,24.1,69.8,9.8,71.2C-4.5,72.6,-20.1,64.1,-29.1,53.3C-38.1,42.5,-40.6,29.3,-47.5,16.6C-54.4,3.9,-65.6,-8.3,-65.1,-20.5C-64.7,-32.7,-52.6,-45,-38.8,-53.6C-25.1,-62.3,-12.5,-67.3,3.1,-71C18.6,-74.6,37.2,-77.1,42.3,-68.4Z" transform="translate(100 100)" />
      </svg>
      <ul>
        {items.map((item, index) => (
          <li 
            key={index} 
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
