import React from 'react'

import gsap from 'gsap';
const timeLine = gsap.timeline();

export default function HomePageAnimation(killAnimation) {
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
        stagger: 0.2,
        onComplete: killAnimation
    })
}
