import React, { Component } from 'react';
import logo from '../utils/hq2-frowny-face-01.png';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <img id="frowny-face" src={logo} alt="Amazon Frowny Face"/>
          <h1 id="header-text">
            No Amazon HQ2 in NYC!
          </h1>
      </div>
    );
  }
}

export default Header;
