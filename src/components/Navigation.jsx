import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

  const pages = {
    Home: '/',
    About: 'about',
    Projects: 'projects',
    Contact: 'contact'
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
