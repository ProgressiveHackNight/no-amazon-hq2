import React, { Component } from 'react';
import DropDown from './DropDown';
import '../css/TakeAction.css';

class TakeAction extends Component {
  constructor(props){
    super(props);
    this.state = {
      bullets: [
        { headline: "Now", 
          text: [
            "Sign the petition", 
            "Host a house party", 
            "Other option", 
            "Other other option"
        ]},
        { headline: "Upcoming", 
          text: [
            "Protest at City Council Meeting on xx/xx", 
            "Speak out at Community Board Meeting on xx/xx", 
            "Other event", 
            "Other other event"
        ]}
      ]
    }
  }
  render() {
    return (
      <div className="TakeAction">
          <h1>
            Take Action
          </h1>
          {this.state.bullets.map((bullet)=>{
            return <DropDown key={bullet.headline} headline={bullet.headline} text={bullet.text}/> 
          })}
      </div>
    );
  }
}

export default TakeAction;
