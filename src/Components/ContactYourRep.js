import React, { Component } from 'react';

import '../css/ContactYourRep.css';
// import { key } from './secrets';


class ContactYourRep extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    }
    this.loadClient = this.loadClient.bind(this);
    this.execute = this.execute.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.loadClient();  
  }
  loadClient() {
    // google.client.setApiKey(key);
    // return google.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest")
    //     .then(function() { console.log("google client loaded for API"); },
    //           function(err) { console.error("Error loading google client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  execute(e) {
    e.preventDefault();
    // return google.client.civicinfo.representatives.representativeInfoByAddress({})
    //     .then(function(response) {
    //             // Handle the results here (response.result has the parsed body).
    //             console.log("Response", response);
    //           },
    //           function(err) { console.error("Execute error", err); });
    console.log('executing');
  }

  async toggleForm() {
    await this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  render() {
    return (
      <div className="ContactYourRep">
          <button className="ContactYourRep" onClick={this.toggleForm} style={{padding: "2%"}}>
            Contact Your Rep
          </button>
         { this.state.showForm && 
          <form style={{display: "flex", flexDirection: "column"}}>
            <input type="text" placeholder="Address Line 1" className="repFormInput"/>
            <input type="text" placeholder="Address Line 2" className="repFormInput"/>
            <input type="text" placeholder="City" className="repFormInput"/>
            <input type="text" placeholder="State" className="repFormInput"/>
            <input type="text" placeholder="ZIP" className="repFormInput"/>
            <button type="submit" onClick={this.execute} className="repFormButton">Who's your rep?</button>
          </form>
         }
      </div>
    );
  }
}

export default ContactYourRep;
