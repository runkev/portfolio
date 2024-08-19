// import { motion } from 'framer-motion';
import './page.css';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/project_data';

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
