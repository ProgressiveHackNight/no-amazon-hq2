import React, { Component } from 'react';
import { ContactYourRep, DropDown, EmailSignup, Footer, Header, LearnMore,  Nav, TakeAction, Facts, DownloadableResources } from './Components';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Facts/>
        <LearnMore/>
        <TakeAction/>
        <ContactYourRep/>
        <EmailSignup/>
        <DownloadableResources/>
        <Footer/>
      </div>
    );
  }
}

export default App;
