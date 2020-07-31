import React from 'react';
import './HeroOverlay.scss';

const HeroOverlay = ({ heroOverlayTopItemRef, heroOverlayBottomItemRef }) => {
    return (
        <React.Fragment>
            <div className="hero-overlay">
                <div className="hero-overlay-top" ref={heroOverlayTopItemRef}>
                    <div className="hero-overlay-top-item"></div>
                    <div className="hero-overlay-top-item"></div>
                    <div className="hero-overlay-top-item"></div>
                </div>
                <div className="hero-overlay-bottom" ref={heroOverlayBottomItemRef}>
                    <div className="hero-overlay-bottom-item"></div>
                    <div className="hero-overlay-bottom-item"></div>
                    <div className="hero-overlay-bottom-item"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroOverlay;