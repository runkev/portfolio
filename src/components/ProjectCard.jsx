import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ title, icons, description, links }) => {
  const githubLink = links.find(link => link.alt === 'GitHub');
  const externalLink = links.find(link => link.alt !== 'GitHub');

  return (
    <div className="project-card">
        <div className='title'>
            <h3>{title}</h3>
        </div>
      <div className="project-icons">
        {icons.map((icon, index) => (
          <div key={index} className="icon-wrapper">
            <img src={icon.src} loading="lazy" alt={icon.alt} />
            <span className="tooltip">{icon.alt}</span>
          </div>
        ))}
      </div>
      <div className='project-details'>
        <p>{description}</p>
      </div>
      <div className="project-links">
        {githubLink && (
          <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="link-github">
            <img src={githubLink.src} loading="lazy" alt={githubLink.alt} />
            <span className="tooltip">{githubLink.alt}</span>
          </a>
        )}
        {externalLink && (
          <a href={externalLink.url} target="_blank" rel="noopener noreferrer" className="link-website">
            <img src={externalLink.src} loading="lazy" alt={externalLink.alt} />
            <span className="tooltip">{externalLink.alt}</span>
          </a>
        )}
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
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
      })
    ).isRequired,
  };

export default ProjectCard;
