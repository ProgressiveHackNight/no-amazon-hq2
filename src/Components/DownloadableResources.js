import React, { Component } from 'react';
import '../css/DownloadableResources.css'

class DownloadableResources extends Component {
    constructor() {
        super()
        this.state = {
            posters: [

            ],
            factSheets: [

            ],
            stickers: [

            ],
            ActionCards: [

            ]
        }
    }

    render() {
        return (
            <div className="DownloadableResources">
                <h2>
                    Downloadable Resources
                </h2>
                <div className="row">

                </div>
            </div>
        )
    }
}

export default DownloadableResources