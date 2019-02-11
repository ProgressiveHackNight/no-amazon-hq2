import React, { Component } from 'react';
import '../css/DropDown.css';

class DropDown extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    let bool = this.state.clicked;
    this.setState({clicked: !bool});
  }

  render() {
    return (
      <div className="DropDown">
          <h5 id="headline" onClick={this.onClick}>{this.props.headline}</h5>
          {this.state.clicked && 
            <div>
              <ul>{this.props.text.map((item, idx)=>{
                return <li key={idx}>{item}</li>;
              })}</ul>
              {this.props.sources && 
                <div>
                  <p>Sources:</p>
                  <ul>{this.props.sources.map((item, idx)=>{
                    return <li key={idx}>{item}</li>;
                  })}</ul>
                </div>
              }
            </div>
          }
      </div>
    );
  }
}

export default DropDown;
