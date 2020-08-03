import React, { useState, useEffect, useRef } from 'react';
import './HomePage.scss';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import HeroOverlay from '../HeroOverlay/HeroOverlay';
import AboutMe from '../AboutMe';
import Contact from '../Contact';
import HomePageAnimation from './HomePageAnimation';
import gsap from 'gsap';
import Navigation from '../Navigation';

function HomePage() {
  const [animationIsCompleted, setAnimationIsCompleted] = useState(false);

  const killAnimation = () => {
    setAnimationIsCompleted(true)
  }

  useEffect(() => {
    // let vh = window.innerHeight * 0.1;
    // document.documentElement.style.setProperty('--vh', `${vh}px`)
    HomePageAnimation(killAnimation)
  }, []);



  return (
    <React.Fragment>
      <div className="homePage">
        {!animationIsCompleted ? <HeroOverlay /> : null}
        <Banner />
        <Projects />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
