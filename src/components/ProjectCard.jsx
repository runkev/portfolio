import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ title, icons, description, links }) => {
  return (
    <div className="project-card">
        <div className='title'>
            <h3>{title}</h3>
        </div>
      <div className="project-icons">
        {icons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
      <div className='project-details'>
        <p>{description}</p>
      </div>
      <div className="project-links">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        })
    ).isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  };

export default ProjectCard;
