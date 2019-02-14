import React, { Component } from 'react';
import '../css/DownloadableResources.css'

class DownloadableResources extends Component {
    constructor() {
        super()
        this.state = {
            showPoster: false,
            showSticker: false,
            showFactSheet: false
        }
        this.togglePoster = this.togglePoster.bind(this)
        this.toggleSticker = this.toggleSticker.bind(this)
        this.toggleFactSheet = this.toggleFactSheet.bind(this)
    }


    togglePoster() {
        this.setState( {showPoster: !this.state.showPoster})
    }

    toggleSticker() {
        this.setState( {showSticker: !this.state.showSticker})
    }

    toggleFactSheet() {

        this.setState( {showFactSheet: !this.state.showFactSheet})
    }

    render() {
        return (
            <div className="DownloadableResources">
                <h2>
                    Downloadable Resources
                </h2>
                <div className="row">
                    <div className="offset-by-five two columns">
                        <h3 className="accordian-title" onClick={this.togglePoster}>posters</h3>
                    </div>
                </div>
                    {
                        this.state.showPoster &&
                            <div className="row">
                                <div className="four columns">
                                    <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=1MssoXNyDOn7V7I0OpYDC7GT2E1mXv6hR">Amazon & I.C.E</a>
                                </div>
                                <div className="four columns">
                                    <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=130gioYsJC-RztUcq31OrIRZ4um1ZlgLq">Amazon Delivers Lies</a>
                                </div>
                                <div className="four columns">
                                    <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=19NTSTodUcCVbS7m1aVHJbY_pAkjl9i9F">Amazon Lies</a>
                                </div>
                            </div>
                    }
                <div className="row">
                    <div className="offset-by-five two columns">
                        <h3 className="accordian-title" onClick={this.toggleSticker}>stickers</h3>
                    </div>
                </div>
                {
                    this.state.showSticker &&
                    <div>
                        <div className="row">
                            <div className="three columns">
                                <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=1Y5sdk9AoDntgU2GG8yfD-Pyzb-zGqkSj">Worker Abuse</a>
                            </div>
                            <div className="three columns">
                                <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=1w9ifmzO1aZ6d95q951sSFbDBU20dmCtz">Higher Rents</a>
                            </div>
                            <div className="three columns">
                                <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=18Cfhu6D4ohB5rxcHo-rqW_f5HVOm6PbY">Homelessness</a>
                            </div>
                            <div className="three columns">
                                <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=1-hZIiTV2aXjnBc8Y5ruDHDXpiqeysCXr">Corporate Handouts</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-by-three three columns">
                                <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=13qSGAdtVTy7opP_Yk4ZnHLemV2CIYve9">Deportations</a>
                            </div>
                            <div className="three columns">
                                <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=1zbRLw26le36K6vdBTj9VwcjRpPKWtv28">#noamazonnyc</a>
                            </div>
                        </div>
                    </div>

                }
                <div className="row">
                    <div className="offset-by-four four columns">
                        <h3 className="accordian-title" onClick={this.toggleFactSheet}>fact sheets</h3>
                    </div>
                </div>
                {
                    this.state.showFactSheet &&
                    <div className="row">
                        <div className="offset-by-four four columns">
                            <a className="Downloadable" href="https://drive.google.com/uc?export=download&id=0B2MrkrgsB-jNR1UyM2ktVUFza3pfNkY0Qm82dHNwNTEybkxJ">Brand Hijacking</a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default DownloadableResources