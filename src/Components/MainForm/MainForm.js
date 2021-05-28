import React, { Component } from "react"

class MainForm extends Component {
    render() {
        return (
            <div className="MainForm">
                <header>
                    <h1>ELF Computing | Laptops</h1>
                </header>
                <main>
                    <form className="main__form">
                        <h2>Customize your laptop</h2>
                        {this.props.features}
                    </form>
                </main>
            </div>
        );
    }
}

export default MainForm