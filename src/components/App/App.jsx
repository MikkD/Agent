import React, { useEffect, useRef } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import HeroOverlay from '../HeroOverlay';
import gsap from 'gsap';

function App() {

  const titleRef = useRef(null);
  const heroOverlayTopItemRef = useRef(null);
  const heroOverlayBottomItemRef = useRef(null);

  useEffect(() => {
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    let timeLine = gsap.timeline();

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

    // #2
    timeLine.from('.line span', 1, {
      opacity: 0,
      y: 50,
      skewX: 9,
      stagger: 0.3
    }).to('.hero-overlay-top-item', 1.4, {
      height: 0,
      stagger: 0.2
    }).to('.hero-overlay-bottom-item', 1.2, {
      height: 0,
      stagger: 0.3
    }).from('.project-item img', 1, {
      delay: -1,
      ease: "power3.inOut",
      stagger: 0.2
    })
  }, [])

  return (
    <div className="App">
      <HeroOverlay
        heroOverlayTopItemRef={heroOverlayTopItemRef}
        heroOverlayBottomItemRef={heroOverlayBottomItemRef}
      />
      <Header />
      <Banner titleRef={titleRef} />
      <Projects />
    </div>
  );
}

export default App;
