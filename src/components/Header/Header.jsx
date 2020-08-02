import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as CircleUpArrow } from '../../assets/img/up-arrow-circle.svg';
import gsap from 'gsap';
const timeLine = gsap.timeline();


const Header = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)

    useEffect(() => {
        if (navIsOpen) {
            gsap.to('.App', { css: { overflow: 'hidden' } })
            timeLine
                .to('.homePage', {
                    duration: 1,
                    yPercent: 69,
                    ease: 'expo.inOut'
                })
        } else {
            timeLine
                .to('.homePage', {
                    duration: 1,
                    yPercent: 0,
                    ease: 'expo.inOut'
                })
        }


    }, [navIsOpen])


    return (
        <React.Fragment>
            <div className="header">
                <div className="flex-nav">
                    <div className="logo">
                        <Link to='/' >Lost Highway</Link>
                    </div>
                    <div className="header-navbar-wrapper" onClick={() => setNavIsOpen(prevState => !prevState)}>
                        <div className="hamburger-menu">
                            <span></span>
                            <span></span>
                        </div>
                        {/* <CircleUpArrow /> */}


                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;