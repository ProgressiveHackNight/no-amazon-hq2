import React, { Component } from 'react';

import '../css/ContactYourRep.css';
import { RepCard } from './index';
import { key } from '../secrets';


const google = require('google-client-api');

class ContactYourRep extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      gapi: null,
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      fullAddress: "",
      canSubmit: false,
      representativeInfoByAddress: {}
    }
    this.loadClient = this.loadClient.bind(this);
    this.execute = this.execute.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.enableSubmit = this.enableSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const gapi = await google();
    await this.setState({ gapi })
    await this.loadClient();
  }
  
  async loadClient() {
    const { gapi } = this.state;
    gapi.client.setApiKey(key);
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest")
        .then(function() { console.log("google client loaded for API"); },
              function(err) { console.error("Error loading google client for API", err); });
  }

  async handleChange(e) {
    const { addressLine1, addressLine2, city, state, zip } = this.state;
    await this.setState({ [e.target.name]: e.target.value });
  
    if (addressLine1 && addressLine2 && city && state && zip){
      await this.setState({ fullAddress: addressLine1 + addressLine2 + city + state + zip }); 
    }

    if (zip.length === 4 || zip.length === 8) {
      await this.enableSubmit();
    }

  }
  // Make sure the client is loaded before calling this method.
  async execute(e) {
    e.preventDefault();
    const { gapi, fullAddress } = this.state;
    const response = await gapi.client.civicinfo.representatives.representativeInfoByAddress({ address: fullAddress, includeOffices: true})
    await this.setState({ representativeInfoByAddress: response.result })
    console.log("executed: ", this.state);
  }

  async toggleForm() {
    await this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  async enableSubmit() {
    await this.setState(prevState => ({ canSubmit: !prevState.canSubmit }))
  }


  render() {
    const { addressLine1, addressLine2, city, state, zip, canSubmit } = this.state;
    return (
      <div className="ContactYourRep">
          <button className="ContactYourRep" onClick={this.toggleForm} style={{padding: "2%"}}>
            Contact Your Rep
          </button>
         { this.state.showForm && 
          <form style={{display: "flex", flexDirection: "column"}}>
            <input value={addressLine1} name="addressLine1" type="text" placeholder="Address Line 1" className="repFormInput" onChange={this.handleChange}/>
            <input value={addressLine2} name="addressLine2" type="text" placeholder="Address Line 2 (optional)" className="repFormInput" onChange={this.handleChange}/>
            <input value={city} name="city" type="text" placeholder="City" className="repFormInput" onChange={this.handleChange}/>
            <input value={state} name="state" type="text" placeholder="State" className="repFormInput" onChange={this.handleChange}/>
            <input value={zip} name="zip" type="text" placeholder="ZIP" className="repFormInput" onChange={this.handleChange}/>
            { canSubmit 
              ? <button type="submit" onClick={this.execute} className="repFormButton">Who's your rep?</button>
              : <button type="submit" disabled>Who's your rep?</button>
            }
          </form>
         }
         {
          Object.keys(this.state.representativeInfoByAddress).length
          ? <RepCard 
            name={this.state.representativeInfoByAddress.officials[7].name}
            imgUrl={this.state.representativeInfoByAddress.officials[7].photoUrl}
            phone={this.state.representativeInfoByAddress.officials[7].phones[0]}
            email={this.state.representativeInfoByAddress.officials[7].emails[0]}
            channels={this.state.representativeInfoByAddress.officials[7].channels}
          />
          : <p></p>
          
         }
      </div>
    );
  }
}

export default ContactYourRep;
