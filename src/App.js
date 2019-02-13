import React, { Component } from 'react';
import { ContactYourRep, EmailSignup, Footer, Header, LearnMore,  Nav, TakeAction, Facts, DownloadableResources} from './Components';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Facts id="facts"/>
        <LearnMore id="learn-more"/>
        <TakeAction id="take-action"/>
        <ContactYourRep id="contact-rep"/>
        <EmailSignup id="signup"/>
        <DownloadableResources id="downloadable-sources"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
