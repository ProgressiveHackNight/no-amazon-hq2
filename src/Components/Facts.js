import React, { Component } from 'react';
import action from '../utils/take-action.jpg';
import '../css/Facts.css';
import '../css/skeleton.css';

class TakeAction extends Component {
    render() {
        return (
            <div className="Facts">
                <img src={action} alt="Woman holding sign Amazon Causes Gentrification"/>
                <div id="facts-text">
                    <h1>
                        What You Need To Know
                    </h1>
                    <ul>
                        <li>There's still time to block Amazon's move to Queens</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TakeAction;
