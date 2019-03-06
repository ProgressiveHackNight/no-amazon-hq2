import React, { Component } from 'react';
import { Cosigners, EmailSignup, Footer, Header, LearnMore,  Nav, TakeAction, Facts } from './Components';
import './App.css';

//ContactYourRep, 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        {/*<Facts id="facts"/>*/}
        <LearnMore id="learn-more"/>
        <TakeAction id="take-action"/>
        {/*<ContactYourRep id="contact-rep"/>*/}
        <Cosigners id='cosigners' />
        <EmailSignup id="signup"/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
