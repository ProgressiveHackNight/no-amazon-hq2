import React, { Component } from 'react';
import DropDown from './DropDown';
import action from '../utils/take-action.jpg';
import {takeActionContent} from '../utils/content';
import '../css/TakeAction.css';

class TakeAction extends Component {
  constructor(props){
    super(props);
    this.state = {
      bullets: takeActionContent
    }
  }
  render() {
    return (
      <div className="TakeAction" id={this.props.id}>
          <img src={action} alt="Woman holding sign Amazon Causes Gentrification"/>
          <div id="action-text">
            <h1>
              Take Action
            </h1>
            {this.state.bullets.map((bullet)=>{
              return <DropDown key={bullet.headline} headline={bullet.headline} text={bullet.text}/> 
            })}
          </div>
      </div>
    );
  }
}

export default TakeAction;
