import React, { Component } from 'react'

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
    const { name, imgUrl, phone, email } = this.props;
    const { twitterHandle, facebookHandle } = this.state;
    return (
      <div>
        <img src={imgUrl} alt="rep"/>
        <h2>{name}</h2>
        {phone && <h3>Phone: {phone}</h3>}
        {email && <h4>Email: {email}</h4>}
        {twitterHandle && <a href={`twitter.com/${twitterHandle}`}><img src={require("../assets/twitter.png")} alt="twitter"/></a>}
        {facebookHandle && <a href={`facebook.com/${facebookHandle}`}><img src={require("../assets/facebook.png")} alt="facebook"/></a>}
      </div>
    )
  }
}

