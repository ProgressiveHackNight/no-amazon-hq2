import React, { Component } from 'react';
import '../css/EmailSignup.css';
import '../css/skeleton.css';

class EmailSignup extends Component {
  render() {
    return (
      <div className="EmailSignup" id={this.props.id}>
          <h2>
            Sign up for the mailing list
          </h2>
          <form>
              <div className="row">
                  <div className="twelve columns, EmailFormField">
                      <label htmlFor="exampleEmailInput">Your email</label>
                      <input className="u-full-width" type="email" placeholder="test@mailbox.com"
                          id="exampleEmailInput"/>
                  </div>
              </div>
              <div>
                  <input className="button-primary" type="submit" value="Submit"/>
              </div>
          </form>
      </div>
    );
  }
}

export default EmailSignup;
