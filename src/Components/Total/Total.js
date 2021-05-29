import React, { Component } from "react"

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Total extends Component {
    render() {
        return (
            <div className="summary__total__value">
                {USCurrencyFormat.format(this.props.total)}
            </div>
        );
    }
}

export default Total