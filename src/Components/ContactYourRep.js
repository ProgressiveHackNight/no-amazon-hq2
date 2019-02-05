import React, { Component } from 'react';
import axios from 'axios';

import '../css/ContactYourRep.css';
import { RepCard } from './index';
import { googleKey, nycAppKey, nycAppId } from './secrets';


const google = require('google-client-api');

const local_pattern = /ocd-division\/country:us\/state:\D{2}\/place:\D+/;
const district_pattern = /ocd-division\/country:us\/district:\D+/;

// TODO: use ocdIds to get council members with representativeInfoByDivision method https://developers.google.com/civic-information/docs/v2/representatives/representativeInfoByDivision?apix_params=%7B%22ocdId%22%3A%22ocd-division%2Fcountry%3Aus%2Fstate%3Any%2Fplace%3Anew_york%2Fcouncil_district%3A23%22%7D#try-it
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
    const response = await axios.get(`https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=314&street=west 100 st&borough=manhattan&app_id=${nycAppId}&app_key=${nycAppKey}`, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}});
    await axios.get()
    console.log('the city api response: ', response);
    try {
      await gapi.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest");
      console.log('the reps: ', gapi.client.civicinfo.divisions);
      console.log('google client loaded for API');
    } catch (err) {
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
          <form className="repForm">
            <input value={address} name="addressLine1" type="text" placeholder="Address Line 1" className="repFormInput"  onChange={this.handleChange}/>
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
