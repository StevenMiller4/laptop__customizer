import React, { Component } from "react"

import Summary from "../Summary/Summary"
import Total from "../Total/Total"

class YourCart extends Component {
    render() {

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return (
                <Summary
                    key={featureHash}
                    featureHash = {featureHash}
                    selectedOption = {selectedOption}
                />
            )
        })

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <Total 
                        total = {this.props.total}
                    />
                </div>
            </section>
        );
    }
}

export default YourCart