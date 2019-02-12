import React, { Component } from 'react';
import '../css/Nav.css';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../utils/hq2-frowny-face-01.png';

class Nav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="Nav">
         <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="facts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Facts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="learn-more"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Learn More
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="take-action"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Take Action!
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact-rep"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Your Representatives
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="signup"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Get Updates
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}

export default Nav;
