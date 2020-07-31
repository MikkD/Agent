import React, { useEffect } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

function App() {

  useEffect(() => {
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <div className="App">
      <Header />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
