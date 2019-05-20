import React, { Component } from 'react';
import logo from '../utils/hq2-frowny-face-01.png';
import '../css/Header.css';
import '../css/skeleton.css';

import bgHeader from '../utils/bg-header.jpg';

class Header extends Component {
  render() {
    return (
      <div className="HeaderContainer">
        <div className="Header" style={{backgroundImage: `url(${bgHeader})`}}>
            <div className="hero-area">
                <h1>It takes our Neighborhoods to move Beyond Billionaires</h1>
                <p>All New Yorkers want to live in the best place for our families. That means funding for schools where our kids learn, homes for our families, trains, buses, and roads we take to work, good quality jobs, and all of us having an equal say in decision making. </p>
                <p>Instead, corporations demand backroom deals while they deny our rights as working people, run our local stores out of business, price us out of our neighborhoods, and dodge taxes to increase profit. For all of us to live, work and thrive here, we must rise against corporations that have rigged the rules. </p>
                <p><strong>New Yorkers proved by standing up to Amazon that when our neighborhoods are united, we can win. Together, we can make this a place where we have the schools, jobs, transportation, and housing that New Yorkers need.</strong></p>
                <a href='https://actionnetwork.org/petitions/sign-the-petition-amazons-hq2-will-only-harm-new-yorkers-reject-the-hq2-scam-now' target="_blank"  className='btn'>JOIN US</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
