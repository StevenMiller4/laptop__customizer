import React, { Component } from "react"

class Features extends Component {
    render() {
        return (
            <div>
                <fieldset className="feature">
                    <legend className="feature__name">
                        <h3>{this.props.feature}</h3>
                    </legend>
                        {this.props.options}
                </fieldset>
            </div>
        )
    }
}

export default Features