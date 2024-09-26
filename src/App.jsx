import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3
}

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const routes = ['/', '/about', '/projects'];
  const [canScroll, setCanScroll] = useState(true);

  const handleWheel = (e) => {
    if (!canScroll) return;

    if (e.deltaY > 0) {
      navigateToNextPage();
    } else if (e.deltaY < 0) {
      navigateToPrevPage();
    }

    setCanScroll(false);

    setTimeout(() => {
      setCanScroll(true);
    }, 500);
  }

  const navigateToNextPage = () => {
    const currentIndex = routes.indexOf(location.pathname);
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const navigateToPrevPage = () => {
    const currentIndex = routes.indexOf(location.pathname);
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  return (
    <div onWheel={handleWheel}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.section
                id="home"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.section>
            }
          />
          <Route
            path="/about"
            element={
              <motion.section
                id="about"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.section>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.section
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Projects />
              </motion.section>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

const App = () => {
  
  return (
    <div className="app">
      <Router>
        <div className="content-container">
          <div className='navbar-container'>
            <Navigation />
          </div>
          <div className='content-area'>
            <AnimatedRoutes />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
