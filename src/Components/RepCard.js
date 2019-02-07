import React, { Component } from 'react';
import Modal from 'react-modal';

import '../css/RepCard.css';

export default class RepCard extends Component {
  constructor() {
    super();
    this.state = {
      twitterHandle: '',
      facebookHandle: '',
      hideOnError: false,
      showPosition: false
    };
    this.showPosition = this.showPosition.bind(this);
    this.hideBrokenImgLink = this.hideBrokenImgLink.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  async hideBrokenImgLink(e) {
    await this.setState({ hideOnError: true })
  }

  async showPosition() {
    await this.setState({ showPosition: true });
  }

  afterOpenModal(){
    // this.subtitle.style.color = '#f00';
    console.log('after open modal')
  }

  async closeModal() {
    await this.setState({ showPosition: false });
  }

  render() {

    const { name, photoUrl, phones, emails } = this.props.rep,
      email = emails ? emails[0] : null,
      phone = phones ? phones[0] : null;
      console.log('rep', this.props.rep);
      const { hideOnError } = this.state;

    return (
      <div className="repCard">
        <Modal
          isOpen={this.state.showPosition}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
        >
          <h2>a modal</h2>
          <button onClick={this.closeModal}>close</button>
        </Modal>
        <div>
          { photoUrl &&
            <img 
              src={photoUrl}
              alt="rep"
              onError={this.hideBrokenImgLink}
              className={hideOnError ? 'hideBrokenImg' : 'showImg' }
            /> 
          }
          {/* { !photoUrl && <h3></h3>} */}
          <h2>{name}</h2>
        </div>
        <div className="contactInfo">
          {phone && <h6>Phone: {phone}</h6>}
          {email && <h6>Email: {email}</h6>}
        </div>
        {/* {twitterHandle && <a href={`twitter.com/${twitterHandle}`}><img src={require("../utils/twitter.png")} alt="twitter"/></a>}
        {facebookHandle && <a href={`facebook.com/${facebookHandle}`}><img src={require("../utils/facebook.png")} alt="facebook"/></a>} */}
        {/* add some error handling for no stated position */}
        <button onClick={this.showPosition}>Position on Amazon</button>
      </div>
    )
  }
}

