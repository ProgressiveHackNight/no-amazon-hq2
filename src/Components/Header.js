import React, { Component } from 'react';
import logo from '../utils/hq2-frowny-face-01.png';
import '../css/Header.css';
import '../css/skeleton.css';

import bgHeader from '../utils/bg-header.jpg';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{backgroundImage: `url(${bgHeader})`}}>
              <div className="hero-area">
                  <h1>Neighbors Beyond Amazon Slogan</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <a href='javascript: void(null)' className='btn'>Call to Action</a>
              </div>
      </div>
    );
  }
}

export default Header;
