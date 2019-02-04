import React, { Component } from 'react';
import '../css/ContactYourRep.css';

class ContactYourRep extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    }
    this.gapi = null
    this.loadClient = this.loadClient.bind(this);
    this.execute = this.execute.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleResponse = this.handleResponse.bind(this)
  }

  componentDidMount() {
    let script = document.getElementById("gapiclient")
    this.loadClientWhenGapiReady(script)
  }

  async loadClientWhenGapiReady(script){
    if(script.getAttribute('gapi_processed')){
      console.log('Client preprocessing completed');
      await this.loadClient()
    } else{
      console.log(`Client wasn't ready, trying again in 100ms`);
      setTimeout(() => {this.loadClientWhenGapiReady(script)}, 100);
    }
  }
  async loadClient() {
    try {
      this.gapi = window.gapi
      // remember not to push your keys =)
      this.gapi.client.setApiKey(API_KEY)
      await this.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest")
    } catch(err) {
      console.error("Could not load api", err)
    }
  }

  // Make sure the client is loaded before calling this method.
  execute(e) {
    e.preventDefault();
    //pass concated address values through here
    return this.gapi.client
      .civicinfo.representatives.representativeInfoByAddress({address: address})
      //TODO: refactor into try catch
      .then((res)=>{ console.log("Response", res); this.handleResponse(res) }, (err) => { console.error("Execute error", err)})
  }

  handleResponse(data){
    // do some data massaging, maybe set it in state and run a render on a fn?
    // TODO: compile list of rep and presntation layer, conditional render on a component to the side
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
