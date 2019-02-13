import React, { Component } from 'react';

import '../css/ContactYourRep.css';
import { RepGrid} from './index';
import { googleKey } from '../secrets';
import { getOCDID } from '../utils/lookup';

const google = require('google-client-api');

const fakeReps = [
    { name: 'Andrew Cuomo'}, { name: 'Rocky Fine'}, { name: 'Abigail Demsas'}, { name: 'Lindsay Sack' }, { name: 'Chris Ernst' }, { name: 'Rapi Castillo'},
    { name: 'Andrew Cuomo'}, { name: 'Rocky Fine'}, { name: 'Abigail Demsas'}, { name: 'Lindsay Sack' }, { name: 'Chris Ernst' }, { name: 'Rapi Castillo'},
    { name: 'Andrew Cuomo'}, { name: 'Rocky Fine'}, { name: 'Abigail Demsas'}, { name: 'Lindsay Sack' }, { name: 'Chris Ernst' }, { name: 'Rapi Castillo'},
    { name: 'Andrew Cuomo'}, { name: 'Rocky Fine'}, { name: 'Abigail Demsas'}, { name: 'Lindsay Sack' }, { name: 'Chris Ernst' }, { name: 'Rapi Castillo'}
]

/**
 * 1. get num reps
 * 2. divide into groups of #
 * 3. */
class ContactYourRep extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      gapi: null,
      address: "",
      districtNumber: "",
      federalAndState: [],
      local: [],
        allReps: [],
      normalizedInput: {}
    }
    this.loadClient = this.loadClient.bind(this);
    this.getAllReps = this.getAllReps.bind(this);
    this.getFederalAndStateReps = this.getFederalAndStateReps.bind(this);
    this.getLocalReps = this.getLocalReps.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
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
    
    try {
      await gapi.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest");
    } catch(err) {
      console.error("Error loading google client for API", err);
    }
    
  }

  async handleChange(e) {
    await this.setState({ address: e.target.value });
  }
  
  async getAllReps(e) {
    e.preventDefault();
    let federalAndStateReps = [],
        localReps = [];
    try {
      federalAndStateReps = await this.getFederalAndStateReps();
    } catch(err) {
      console.log('error fetching federal and state reps', err);
    }
    
    try {
      localReps = await this.getLocalReps();
    } catch (err) {
      console.log('error fetching local reps', err);
    }
    
    await this.setState({ allReps: federalAndStateReps.concat(localReps) });
  }
  // Make sure the client is loaded before calling this method.
  async getFederalAndStateReps() {
    const { gapi, address } = this.state;
    try {
    	const response = await gapi.client.civicinfo.representatives.representativeInfoByAddress({ address: address, includeOffices: true});
      await this.setState({ federalAndState: response.result["officials"], normalizedInput: response.result["normalizedInput"], divisions: response.result["divisions"] });
      return this.state.federalAndState;
    } catch (err) {
    	console.error('error fetching representative info', err);
    } 
  }

  async getLocalReps() {
    let OCDID;
    try { 
      OCDID = await getOCDID(this.state.divisions, this.state.normalizedInput);
    } catch(err) {
      console.error('error fetching ocd id', err);
    }
    // for addresses in NYC
    if (OCDID !== 'notNYC') {
      try {
        const response = await this.state.gapi.client.civicinfo.representatives.representativeInfoByDivision({ocdId: OCDID});
        const localReps = response.result.officials;
        await this.setState({ local: localReps });
        return localReps;
      } catch(err) {
        console.error('error fetching local reps', err);
      }
    }
    // for addresses not in NYC, no local reps will be retrieved
    return [];
  }

  async toggleForm() {
    await this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  render() {
    const { address, allReps } = this.state;
    console.log('these are all the reps: ', allReps);
    return (
      <div className="ContactYourRep" id={this.props.id}>
          <h2 className="repHeader" onClick={this.toggleForm} style={{padding: "2%"}}>
            Contact Your Rep
          </h2>
        { this.state.showForm && 
          <form style={{display: "flex", flexDirection: "column"}}>
            <input value={address} name="addressLine1" type="text" placeholder="Address Line 1" className="repFormInput" onChange={this.handleChange}/>
            <button type="submit" onClick={this.getAllReps} className="repFormButton">Who's your rep?</button>
          </form>
        }
          { allReps.length > 0 && <RepGrid reps={allReps}/> }
          {/*<div className="container">*/}
              {/*<div class="row">*/}
                  {/*/!*map first four reps*!/*/}
                  {/*<div class="two columns border">{fakeReps[0].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[1].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[2].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[3].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[4].name}</div>*/}
              {/*</div>*/}
              {/*<div className="row">*/}
                  {/*/!*map next 4 reps*!/*/}
                  {/*<div className="two columns border">{fakeReps[0].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[1].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[2].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[3].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[4].name}</div>*/}
              {/*</div>*/}
              {/*<div className="row">*/}
                  {/*/!*map next 4 reps*!/*/}
                  {/*<div className="two columns border">{fakeReps[0].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[1].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[2].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[3].name}</div>*/}
                  {/*<div className="two columns border">{fakeReps[4].name}</div>*/}
              {/*</div>*/}
          {/*</div>*/}
      </div>
    );
  }
}

export default ContactYourRep;
