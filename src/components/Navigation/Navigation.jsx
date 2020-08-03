import React from 'react';
import './Navigation.scss';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = ({ location }) => {
    return (
        <React.Fragment>
            <div className="navigation">
                <div className="nav-wrapper">
                    <h4>Menu</h4>
                    <ul>
                        <li><NavLink to={{ pathname: '/AboutMe', state: { prevPath: location.pathname } }}>AboutMe</NavLink></li>
                        <li><NavLink to={{ pathname: '/Work', state: { prevPath: location.pathname } }}>Work</NavLink></li>
                        <li><NavLink to={{ pathname: '/ContactUs', state: { prevPath: location.pathname } }}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Navigation)