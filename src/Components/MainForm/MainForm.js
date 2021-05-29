import React, { Component } from "react"
import slugify from 'slugify'

import Options from "../Options/Options"
import Features from "../Features/Features"
import FEATURES from "../../computerParts"

class MainForm extends Component {
    render() {

        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = FEATURES[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                  <Options 
                    key = {itemHash}
                    item = {item}
                    itemHash = {itemHash}
                    feature = {feature}
                    selected = {this.props.selected}
                    updateFeature = {this.props.updateFeature}
                  />
                );
            });

            return (
                <Features 
                    key = {featureHash}
                    feature = {feature}
                    options = {options}
                />
              );
        });

        return (
            <div className="MainForm">
                <header>
                    <h1>ELF Computing | Laptops</h1>
                </header>
                <main>
                    <form className="main__form">
                        <h2>Customize your laptop</h2>
                        {features}
                    </form>
                </main>
            </div>
        );
    }
}

export default MainForm