import gsap from 'gsap';
const timeLine = gsap.timeline();

export default function HomePageAnimation(killAnimation) {

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

    timeLine.from('.line span', 1, {
        opacity: 0,
        y: 50,
        skewX: 9,
        stagger: 0.3,
    }).to('.hero-overlay-top-item', 1.2, {
        height: 0,
        stagger: 0.2,
        ease: 'expo.inOut'
    }).to('.hero-overlay-bottom-item', 1.2, {
        height: 0,
        stagger: 0.3,
        ease: 'expo.inOut'
    }, '-=0.8').from('.project-item img', 1, {
        delay: -1,
        ease: 'expo.inOut',
        stagger: 0.2,
        onComplete: killAnimation
    })
}
