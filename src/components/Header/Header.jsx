import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <div className="flex-nav">
                    <div className="logo">
                        <a href="#">Lost Highway</a>
                    </div>
                    <div className="hamburger-menu">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
