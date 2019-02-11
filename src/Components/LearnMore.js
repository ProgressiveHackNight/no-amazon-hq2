import React, { Component } from 'react';
import DropDown from './DropDown';
import '../css/LearnMore.css';

class LearnMore extends Component {
  constructor(props){
    super(props);
    this.state = {
      bullets: [
        { headline: "Amazon's impact on jobs", 
        text: ["Amazon promises 25,000 jobs, but in reality these are jobs that pay....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."] 
        },
        { headline: "Amazon's impact on housing", 
        text: ["Homelessness has increased xxxxx in Seattle due to Amazon's influence....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
        },
        { headline: "Amazon's impact on transportation", 
        text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
        }
      ]
    }
  }

  render() {
    return (
      <div className="LearnMore" id={this.props.id}>
          <h1>
            Learn More
          </h1>
          {this.state.bullets.map((bullet)=>{
              return <DropDown key={bullet.headline} headline={bullet.headline} text={bullet.text}/>
            })
          }
      </div>
    );
  }
}

export default LearnMore;
