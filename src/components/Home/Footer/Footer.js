import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-text text-center">
                <div className="container">
                    <div className="row py-2">
                        <div className="col-md-6 text-md-start mb-3 mb-md-0">
                            <p className="m-0">&copy; {(new Date()).getFullYear()} Design with <i className=""><FontAwesomeIcon className="" icon={faHeart} /></i> by <a className="" href="https://www.linkedin.com/in/arifulsujon" target="_blank" rel="noreferrer">Ariful</a></p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="social-icons">
                                <ul className="m-0 p-0 list-unstyled">
                                    <li className="d-inline-block">
                                        <a href="https://www.linkedin.com/in/arifulsujon" target="_blank" rel="noreferrer">
                                            <i className="social-single"><FontAwesomeIcon icon={faLinkedinIn} /></i>
                                        </a>
                                    </li>
                                    <li className="d-inline-block ms-3">
                                        <a href="https://github.com/arifsujon" target="_blank" rel="noreferrer">
                                            <i className="social-single"><FontAwesomeIcon icon={faGithub} /></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;