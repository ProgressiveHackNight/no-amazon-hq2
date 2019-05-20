import React, { Component } from 'react';
import DropDown from './DropDown';
import action from '../utils/take-action.jpg';
import {cosigners} from '../utils/cosigners';
import '../css/Cosigners.css';

class Cosigners extends Component {
  constructor(props){
    super(props);
    this.state = {
      steering: cosigners.coordinatingCommittee,
      all: cosigners.cosigners
    }
  }
  render() {

    return (
      <div className="Cosigners" id={this.props.id}>
          <div id="cosigners-text">


            <h1>Coordinating Committee</h1>
            <div className='coordinating-committee'>
              <ul>
                {this.state.steering.map((item,ind) => (
                  <li className='coord-img' key={ind}>
                    <a href={item.url}>
                      <img src={item.image} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <h1>Cosigners</h1>
            <div className='full-list'>
              <ul>
                {this.state.all.map((item,ind) => (
                  <li className='all-img' key={ind}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default Cosigners;
