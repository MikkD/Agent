import React from 'react';
import { ReactComponent as RightArrow } from '../../assets/img/arrow-right.svg';
import './Banner.scss';


export default function Banner({ titleRef }) {
    return (
        <React.Fragment>
            <div className="banner">
                <div className="banner-wrapper">
                    <h2 className="animate-header" ref={titleRef}>
                        <div className="line" >
                            <span>Creating unique design</span>
                        </div>
                        <div className="line" >
                            <span>Is what we do</span>
                        </div>
                    </h2>
                    <div className="about-us-wrapper">
                        <a href="#">More about us<RightArrow /></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
