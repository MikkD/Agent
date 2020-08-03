import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.scss';
import gsap from 'gsap';
const timeLine = gsap.timeline();



const Header = ({ location, history }) => {
    const [navIsOpen, setNavIsOpen] = useState(false);

    useEffect(() => {
        if (navIsOpen) {
            gsap.to('.App', { css: { overflow: 'hidden' } })
            gsap.to('.top-hamburger', { css: { transform: 'rotate(-45deg) translate(-5px)' } })
            gsap.to('.bottom-hamburger', { css: { transform: 'rotate(45deg) translate(-5px)' } })
            timeLine
                .to('.homePage', {
                    duration: 1,
                    y: '50vh',
                    ease: 'expo.inOut'
                }).to('.navigation', {
                    duration: 1,
                    yPercent: 0,
                    ease: 'expo.inOut'
                }, '<0.1')
        } else {
            gsap.to('.top-hamburger', { css: { transform: 'rotate(0deg) translate(0px)' } })
            gsap.to('.bottom-hamburger', { css: { transform: 'rotate(0deg) translate(0px)' } })
            timeLine
                .to('.homePage', {
                    duration: 1,
                    y: '0vh',
                    ease: 'expo.inOut'
                })
                .to('.navigation', {
                    duration: 1,
                    yPercent: -100,
                    ease: 'expo.inOut'
                })
        }

    }, [navIsOpen]);

    useEffect(() => {
        setNavIsOpen(false)

    }, [location.pathname])




    return (
        <React.Fragment>
            <div className="header">
                <div className="flex-nav">
                    <div className="logo">
                        <Link to='/' >Lost Highway</Link>
                    </div>
                    <div className="header-navbar-wrapper" onClick={() => setNavIsOpen(prevState => !prevState)}>
                        <div className="hamburger-menu">
                            <span className="top-hamburger"></span>
                            <span className="bottom-hamburger"></span>
                        </div>
                        {/* <CircleUpArrow /> */}


                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Header);