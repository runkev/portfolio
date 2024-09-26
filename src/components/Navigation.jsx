import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

  const pages = {
    Home: '/',
    Projects: 'projects',
    About: 'about',
  }

  return (
    <nav className="navigation" >
      <ul>
        {Object.entries(pages).map(([page, url]) => (
          <Link to={url} key={page}>
            <li>{page}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
