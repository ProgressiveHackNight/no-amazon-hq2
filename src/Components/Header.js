import React, { Component } from 'react';
import logo from '../utils/hq2-frowny-face-01.png';
import '../css/Header.css';
import '../css/skeleton.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <div className="row">
              <div className="twelve columns">
                  <h1>
                      Keep Amazon Out!
                  </h1>
              </div>
              <div className="twelve columns">
                  <img id="frowny-face" src={logo} alt="Amazon Frowny Face"/>
              </div>
              <div className="twelve columns">
                  <h4>
                      Help say no to Amazon HQ2 in Queens
                  </h4>
              </div>
          </div>


      </div>
    );
  }
}

export default Header;
