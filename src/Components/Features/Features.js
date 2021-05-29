import React, { Component } from "react"

import Options from "../Options/Options"

class Features extends Component {
    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
                <Options
                    key={featureHash}
                    selected = {this.props.selected}
                    features = {this.props.features}
                    featureHash = {featureHash}
                    updateFeature = {this.props.updateFeature}
                />
            )
        })

        return (
            <div>
                {features}
            </div>
        );
    }
}

export default Features