import React, { useState, useEffect, useRef } from 'react';
import './HomePage.scss';
import { Route, Switch } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import HeroOverlay from '../HeroOverlay/HeroOverlay';
import AboutMe from '../AboutMe';
import Contact from '../Contact';
import HomePageAnimation from './HomePageAnimation';
import gsap from 'gsap';
const timeLine = gsap.timeline();


function HomePage() {
  const [animationIsCompleted, setAnimationIsCompleted] = useState(false);

  // Refs
  const titleRef = useRef(null);
  const heroOverlayTopItemRef = useRef(null);
  const heroOverlayBottomItemRef = useRef(null);



  useEffect(() => {
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // #1 
    // timeLine.from(titleRef.current.children, 1, {
    //   opacity: 0,
    //   y: 50,
    //   skewX: 10,
    //   stagger: 0.2
    // }).to(heroOverlayTopItemRef.current.children, 1, {
    //   height: 0,
    //   stagger: 0.3
    // });

  }, [])

  const killAnimation = () => {
    setAnimationIsCompleted(true)
  }

  useEffect(() => {
    HomePageAnimation(killAnimation)
  }, []);



  return (
    <div className="App">

      {!animationIsCompleted ?
        <HeroOverlay
          heroOverlayTopItemRef={heroOverlayTopItemRef}
          heroOverlayBottomItemRef={heroOverlayBottomItemRef}
        /> : null}

      <Banner titleRef={titleRef} />
      <Projects />

    </div>
  );
}

export default HomePage;
