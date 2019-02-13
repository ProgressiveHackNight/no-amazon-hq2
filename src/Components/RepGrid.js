import React, { Component } from 'react';
import { RepCard } from './index';

// row 0 = 0, 1, 2, 3
// row 1 = 4, 5, 6, 7
// row 2 = 8, 9, 10, 11 rowNum * 2 --> (rowNum * 2) + 3
export default class RepGrid extends Component {
    constructor() {
        super();
        this.state = {
            numRows: []
        }
        this.getNumRows = this.getNumRows.bind(this);
    }

    componentDidMount() {
        this.getNumRows();
    }

    async getNumRows() {
        const num = Math.ceil(this.props.reps.length / 4);
        let numRows = [];
        for (let i = 0; i < num; i++) {
            numRows.push(i)
        }
        await this.setState({ numRows })
    }

    render() {
        console.log('this.props in repgrid', this.props);
        const { numRows } = this.state;
        return (
            <div className="container">
                { numRows.map(rowNumber => (
                    <div className="row" key={rowNumber}>
                        <div className="two columns"><RepCard rep={this.props.reps[rowNumber * 2]}/></div>
                        <div className="two columns"><RepCard rep={this.props.reps[(rowNumber * 2) + 1]}/></div>
                        <div className="two columns"><RepCard rep={this.props.reps[(rowNumber * 2) + 2]}/></div>
                        <div className="two columns"><RepCard rep={this.props.reps[(rowNumber * 2) + 3]}/></div>
                    </div>
                ))}
            </div>
        );
    }
}