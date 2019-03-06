import React, { Component } from 'react';
import DropDown from './DropDown';
import action from '../utils/take-action.jpg';
import {takeActionContent} from '../utils/content';
import '../css/Cosigners.css';

class Cosigners extends Component {
  constructor(props){
    super(props);
    this.state = {
      bullets: takeActionContent
    }
  }
  render() {
    return (
      <div className="TakeAction" id={this.props.id}>
          <div id="cosigners-text">
            <h1>
              Cosigners
            </h1>
          </div>
      </div>
    );
  }
}

export default Cosigners;
