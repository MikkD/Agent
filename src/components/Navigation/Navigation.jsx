import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <React.Fragment>
            <div className="navigation">
                <div className="nav-wrapper">
                    <h4>Menu</h4>
                    <ul>
                        <li><NavLink to={'/AboutMe'} exact>AboutMe</NavLink></li>
                        <li><NavLink to={'/AboutMe'} exact>Work</NavLink></li>
                        <li><NavLink to={'/Contact'} exact>Contact</NavLink></li>
                        <li><NavLink to={'/Contact'} exact>ExtraPage</NavLink></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
