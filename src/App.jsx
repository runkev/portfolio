import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Home />
        {/* <About />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  );
};

export default App;
