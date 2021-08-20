import React, { Fragment } from 'react';
// React Icon component
import { GiSpaceSuit } from 'react-icons/gi';

// Custom made navbar component
const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://github.com/edisonabdiel"><GiSpaceSuit size="2.5rem" title="mars and beyond logo"/><strong>Mars&Beyond</strong></a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/" >
                            Home
                        </a>
                        <a className="navbar-item" href="/" >
                            Get Started
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="/">
                                Details
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="/">
                                    Our Space Suits
                                </a>
                                <a className="navbar-item" href="/">
                                    Our Space Ships
                                </a>
                                <a className="navbar-item" href="/">
                                    Our Interplanetary Bases
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" href="/">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light" href="/">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;
