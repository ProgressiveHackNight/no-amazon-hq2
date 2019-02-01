import React, { Component } from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import LearnMore from './Components/LearnMore';
import TakeAction from './Components/TakeAction';
import ContactYourRep from './Components/ContactYourRep';
import EmailSignup from './Components/EmailSignup';
import Footer from './Components/Footer';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <LearnMore/>
        <TakeAction/>
        <ContactYourRep/>
        <EmailSignup/>
        <Footer/>
      </div>
    );
  }
}

export default App;
