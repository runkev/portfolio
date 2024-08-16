import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ title, images, description, links }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className="project-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Project ${index + 1}`} />
        ))}
      </div>
      <p>{description}</p>
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
    images: PropTypes.arrayOf(
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
