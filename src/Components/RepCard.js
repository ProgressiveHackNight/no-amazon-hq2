import React, { Component } from 'react';

import '../css/RepCard.css';

export default class RepCard extends Component {
  constructor() {
    super();
    this.state = {
      twitterHandle: '',
      facebookHandle: ''
    }
  }

  async sortChannels() {
    if (this.props.channels.length) {
      await this.props.channels.forEach(async channel => {
        if (channel.type === 'Facebook'){
          await this.setState({ facebookHandle: channel.id })
        }
        if (channel.type === 'Twitter') {
          await this.setState({ twitterHandle: channel.id })
        }
      })
    }
  }
  render() {
    const { name, photoUrl, phones, emails } = this.props.rep,
        phone = phones ? phones[0] : '',
        email = emails ? emails[0] : '';
    const { twitterHandle, facebookHandle } = this.state;
    console.log('this.props in repcard: ', this.props);
    const defaultImg = require('../utils/default_avatar.png');
    return (
      <div id={this.props.id} className="repCard" onError={(e)=>{e.target.onerror = null; e.target.src=defaultImg}}>
        <img src={photoUrl} alt="rep" className="repPhoto"/>
        <h6>{name}</h6>
        {/*{phone && <h3>Phone: {phone}</h3>}*/}
        {/*{email && <h4>Email: {email}</h4>}*/}
        {/*{twitterHandle && <a href={`twitter.com/${twitterHandle}`}><img src={require("../utils/twitter.png")} alt="twitter"/></a>}*/}
        {/*{facebookHandle && <a href={`facebook.com/${facebookHandle}`}><img src={require("../utils/facebook.png")} alt="facebook"/></a>}*/}
      </div>
    )
  }
}

