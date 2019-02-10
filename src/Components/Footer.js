import React, { Component } from 'react';
import twitter from '../utils/twitter.png';
import facebook from '../utils/facebook.png';

import '../css/Footer.css';

class Footer extends Component {
  constructor() {
  	super();
  	this.state ={
  		links: [
  			{
  				link:"#",
  				image:twitter,
  				alt:"twitter"
  			}, {
  				link:"#",
  				image:facebook,
  				alt:"facebook"
  			}, {
  				link:"#",
  				alt:"email",
  				text:"Contact Us"
  			}
  		]
  	}
  }

  render() {
    return (
      <div className="Footer">
      	<div className="center-container">
      	{this.state.links.map((link) => {
              return (
              	<a href={link.link} alt={link.alt}>
              		{link.image && <img className="social-logo" src={link.image}/>}
              		{link.text && link.text}
              	</a>
              )
            })
          }
         </div>
      </div>
    );
  }
}

export default Footer;
