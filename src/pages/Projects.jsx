// import { motion } from 'framer-motion';
import './page.css';
import html_icon from '../assets/html.png';
import css_icon from '../assets/css.png';
import js_icon from '../assets/javascript.png';
import react_icon from '../assets/react.png';
import ProjectCard from '../components/ProjectCard';


const projects = [
  {
    title: "Petow's Pantry",
    icons: [
      { src: html_icon, alt: 'HTML icon' },
      { src: css_icon, alt: 'CSS icon' },
      { src: js_icon, alt: 'JavaScript icon' },
      { src: react_icon, alt: 'React icon' }
    ],
    description: 'A mobile-friendly web app that allows users to easily search for and follow recipes in kitchen settings.',
    links: [
      { url: 'https://www.petowspantry.com/', text: 'Website' },
      { url: 'https://github.com/runkev/petows-pantry-next', text: 'GitHub' }
    ]
  },
  {
    title: "Petow's Pantry",
    icons: [
      { src: html_icon, alt: 'HTML icon' },
      { src: css_icon, alt: 'CSS icon' },
      { src: js_icon, alt: 'JavaScript icon' },
      { src: react_icon, alt: 'React icon' }
    ],
    description: 'A mobile-friendly web app that allows users to easily search for and follow recipes in kitchen settings.',
    links: [
      { url: 'https://www.petowspantry.com/', text: 'Website' },
      { url: 'https://github.com/runkev/petows-pantry-next', text: 'GitHub' }
    ]
  },
  {
    title: "Petow's Pantry",
    icons: [
      { src: html_icon, alt: 'HTML icon' },
      { src: css_icon, alt: 'CSS icon' },
      { src: js_icon, alt: 'JavaScript icon' },
      { src: react_icon, alt: 'React icon' }
    ],
    description: 'A mobile-friendly web app that allows users to easily search for and follow recipes in kitchen settings.',
    links: [
      { url: 'https://www.petowspantry.com/', text: 'Website' },
      { url: 'https://github.com/runkev/petows-pantry-next', text: 'GitHub' }
    ]
  },
]

const Projects = () => {
  return (
    <div 
      id="projects" 
      className="projects"
    >
      <div className="page-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            icons={project.icons}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
