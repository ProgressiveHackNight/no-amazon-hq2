import React, { Component } from 'react';
import '../css/DownloadableResources.css'

class DownloadableResources extends Component {
    constructor() {
        super()
        this.state = {
            posters: [
                {
                    gDriveId: '1MssoXNyDOn7V7I0OpYDC7GT2E1mXv6hR',
                    name: 'Amazon & I.C.E'
                },
                {
                    gDriveId: '130gioYsJC-RztUcq31OrIRZ4um1ZlgLq',
                    name: 'Amazon Delivers Lies'
                },
                {
                    gDriveId: '19NTSTodUcCVbS7m1aVHJbY_pAkjl9i9F',
                    name: 'Amazon Lies'
                }
            ],
            stickers: [
                {
                    gDriveId: '1Y5sdk9AoDntgU2GG8yfD-Pyzb-zGqkSj',
                    name: 'Worker Abuse'
                },
                {
                    gDriveId: '1w9ifmzO1aZ6d95q951sSFbDBU20dmCtz',
                    name: 'Higher Rents'
                },
                {
                    gDriveId: '18Cfhu6D4ohB5rxcHo-rqW_f5HVOm6PbY',
                    name: 'Homelessness'
                },
                {
                    gDriveId: '1-hZIiTV2aXjnBc8Y5ruDHDXpiqeysCXr',
                    name: 'Corporate Handouts'
                },
                {
                    gDriveId: '13qSGAdtVTy7opP_Yk4ZnHLemV2CIYve9',
                    name: 'Deportations'
                },
                {
                    gDriveId: '1zbRLw26le36K6vdBTj9VwcjRpPKWtv28',
                    name: '#noamazonnyc'
                }
            ],
            factSheets: [
                {
                    gDriveId: '0B2MrkrgsB-jNR1UyM2ktVUFza3pfNkY0Qm82dHNwNTEybkxJ',
                    name: 'Brand Hijacking'
                },
            ],
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
        const posters = this.state.posters.map(poster => {
            const url = `https://drive.google.com/uc?export=download&id=${poster.gDriveId}`
            return (
                <div className="four columns">
                    <a className="Downloadable" href={url}>{poster.name}</a>
                </div>
            )
        })

        const stickers = this.state.stickers.map((sticker, idx) => {
            const url = `https://drive.google.com/uc?export=download&id=${sticker.gDriveId}`
            return (
                <div className={`${idx > 0 && idx%4===0?'offset-by-three ':''}three columns`}>
                    <a className="Downloadable" href={url}>{sticker.name}</a>
                </div>
            )
        })

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
                                { posters }
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
                            { stickers }
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
                            <a className="Downloadable" href={`https://drive.google.com/uc?export=download&id=${this.state.factSheets[0].gDriveId}`}>{this.state.factSheets[0].name}</a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default DownloadableResources