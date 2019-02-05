import React, { Component } from 'react';
import axios from 'axios';

import '../css/ContactYourRep.css';
import { RepCard } from './index';
import { googleKey, nycAppId, nycAppKey } from '../secrets';


const google = require('google-client-api');

// const local_pattern = /ocd-division\/country:us\/state:\D{2}\/place:\D+/;
// const district_pattern = /ocd-division\/country:us\/district:\D+/;

class ContactYourRep extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      gapi: null,
      address: "",
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
    gapi.client.setApiKey(googleKey);
    const response = await axios.get(`https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=314&street=west 100 st&borough=manhattan&app_id=${nycAppId}&app_key=${nycAppKey}`, { crossorigin: true })
    console.log('this is the response: ', response);
    try {
      await gapi.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest");
      console.log("google client loaded for API");
    } catch(err) {
      console.error("Error loading google client for API", err);
    }
    
  }

  async handleChange(e) {
    await this.setState({ address: e.target.value });
  }

  // Make sure the client is loaded before calling this method.
  async execute(e) {
    e.preventDefault();
    const { gapi, address } = this.state;
    try {
    	const response = await gapi.client.civicinfo.representatives.representativeInfoByAddress({ address: address, includeOffices: true})
        await this.setState({ representativeInfoByAddress: response.result })
    } catch (err) {
    	console.error('error fetching representative info', err);
    } 
    console.log("executed: ", this.state);
  }

  async toggleForm() {
    await this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  async enableSubmit() {
    await this.setState(prevState => ({ canSubmit: !prevState.canSubmit }))
  }


  render() {
    const { address, canSubmit } = this.state;
    return (
      <div className="ContactYourRep">
          <h1 className="repHeader" onClick={this.toggleForm} style={{padding: "2%"}}>
            Contact Your Rep
          </h1>
         { this.state.showForm && 
          <form style={{display: "flex", flexDirection: "column"}}>
            <input value={address} name="addressLine1" type="text" placeholder="Address Line 1" className="repFormInput" onChange={this.handleChange}/>
            { !canSubmit 
              ? <button type="submit" onClick={this.execute} className="repFormButton">Who's your rep?</button>
              : <button type="submit" disabled>Who's your rep?</button>
            }

          </form>
         }
          
      </div>
    );
  }
}

export default ContactYourRep;
