import React from 'react';
import Profile from './components/Profile/Profile';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Profile />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
