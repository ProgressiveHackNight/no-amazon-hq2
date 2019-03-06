import React, { Component } from 'react';
import DropDown from './DropDown';
import action from '../utils/take-action.jpg';
import {takeActionContent} from '../utils/content';
import '../css/TakeAction.css';
import wide from '../utils/wide-img.png';
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
        <div className='TakeActionViewport'>
          <h1>Open Letter to Amazon</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <a href='javascript: void(null)' className='btn'>Call to Action</a>
        </div>
        <img src={wide} />
          {/*<img src={action} alt="Woman holding sign Amazon Causes Gentrification"/>
          <div id="action-text">
            <h1>
              Take Action
            </h1>
            {this.state.bullets.map((bullet)=>{
              return <DropDown key={bullet.headline} headline={bullet.headline} text={bullet.text}/> 
            })}
          </div>*/}
      </div>
    );
  }
}

export default TakeAction;
