import React, { Component } from 'react';
import logo from '../utils/hq2-frowny-face-01.png';
import '../css/Header.css';
import '../css/skeleton.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <div className="row">
              <div className="one column">
                  <h1 id="header-text">
                      No Amazon HQ2 in NYC!
                  </h1>
              </div>
              <div className="eleven columns">
                  <img id="frowny-face" src={logo} alt="Amazon Frowny Face"/>
              </div>
          </div>


      </div>
    );
  }
}

export default Header;
