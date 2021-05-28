import React, { Component } from "react"
import Summary from "../Summary/Summary"

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class YourCart extends Component {
    render() {

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return (
                <Summary
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
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(this.props.total)}
                    </div>
                </div>
            </section>
        );
    }
}

export default YourCart