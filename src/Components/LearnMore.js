import React, { Component } from 'react';
import DropDown from './DropDown';
import {learnMoreContent} from '../utils/content';
import '../css/LearnMore.css';

class LearnMore extends Component {
  constructor(props){
    super(props);
    this.state = {
      bullets: learnMoreContent
    }
  }

  render() {
    return (
      <div className="LearnMore">
          <h1>
            Amazon's Lies
          </h1>
          {this.state.bullets.map((bullet)=>{
              return <DropDown key={bullet.headline} headline={bullet.headline} text={bullet.text} sources={bullet.sources}/>
            })
          }
      </div>
    );
  }
}

export default LearnMore;
