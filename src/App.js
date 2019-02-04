import React, { Component } from 'react';
import { ContactYourRep, DropDown, EmailSignup, Footer, Header, LearnMore,  Nav, RepCard } from './Components';
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
