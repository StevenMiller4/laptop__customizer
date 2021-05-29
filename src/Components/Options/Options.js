import React, { Component } from "react"
import slugify from 'slugify'

import FeatureItem from "../FeatureItem/FeatureItem"

class Options extends Component {
    render() {

        const options = this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));

            return (
                <FeatureItem
                    item = {item}
                    feature = {this.props.feature}
                    updateFeature = {this.props.updateFeature}
                    selected = {this.props.selected}
                    options = {options}
                    itemHash = {itemHash}
                />
            )
        })

        return (
            <div>
                {options}
            </div>
        )
    }
}

export default Options