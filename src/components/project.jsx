import PropTypes from 'prop-types';

function Project({ title, description, image, appLink, repoLink }) {
  return (
    <div className="project">
      <div className="project-image-wrapper">
        <img src={image} alt={`${title} logo`} className="project-image" />
        <div className="project-hover">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-links">
            <a href={appLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define PropTypes to ensure the correct types of props are passed
Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  appLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;