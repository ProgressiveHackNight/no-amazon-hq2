import React, { Component } from 'react';
import DropDown from './DropDown';
import {learnMoreContent} from '../utils/content';
import '../css/LearnMore.css';

class LearnMore extends Component {
  constructor(props){
    super(props);
    this.state = {
      bullets: [
        {
          image: "",
          headline: "Fact # 1",
          text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"],
          sources: [
            "https://money.cnn.com/2018/04/19/technology/amazon-employee-salary/index.html", 
            "https://www.theguardian.com/cities/2018/jul/04/is-bezos-holding-seattle-hostage-the-cost-of-being-amazons-home", 
            "https://d3n8a8pro7vhmx.cloudfront.net/rwdsu/pages/31/attachments/original/1543251619/What%27s_Wrong_With_Amazon.pdf?1543251619"
          ]
        },
        {
          image: "",
          headline: "Fact # 2",
          text: ["consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"],
          sources: [
            "https://money.cnn.com/2018/04/19/technology/amazon-employee-salary/index.html", 
            "https://www.theguardian.com/cities/2018/jul/04/is-bezos-holding-seattle-hostage-the-cost-of-being-amazons-home", 
            "https://d3n8a8pro7vhmx.cloudfront.net/rwdsu/pages/31/attachments/original/1543251619/What%27s_Wrong_With_Amazon.pdf?1543251619"
          ]
        },
        {
          image: "",
          headline: "Fact # 3",
          text: ["consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"],
          sources: [
            "https://money.cnn.com/2018/04/19/technology/amazon-employee-salary/index.html", 
            "https://www.theguardian.com/cities/2018/jul/04/is-bezos-holding-seattle-hostage-the-cost-of-being-amazons-home", 
            "https://d3n8a8pro7vhmx.cloudfront.net/rwdsu/pages/31/attachments/original/1543251619/What%27s_Wrong_With_Amazon.pdf?1543251619"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="LearnMore" id={this.props.id}>
          <h1>
            Community at the center
          </h1>
          <iframe width="900" height="515" src="https://www.youtube.com/embed/0yjX2wN3oUo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className='learn-more-area'>
          {this.state.bullets.map((bullet)=>{
              return <DropDown key={bullet.headline} headline={bullet.headline} text={bullet.text} sources={bullet.sources}/>
            })
          }
          </div>
      </div>
    );
  }
}

export default LearnMore;
