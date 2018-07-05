import React, { Component } from "react";
import { ToggleTrigger, Span, ToggleIcon, ToggleContainer } from "./ToggleButton.style";

export class ToggleButton extends Component {

    constructor () {
        super();
        this.state = {clicked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({clicked: !this.state.clicked});
    }

    render () {
        console.log(this.state.clicked);

        return (
            <ToggleContainer>
                <ToggleTrigger onClick={this.handleClick} isClick={this.state.clicked}>
                    <ToggleIcon>
                        <Span isClick={this.state.clicked}/>
                    </ToggleIcon>
                </ToggleTrigger>
            </ToggleContainer>
        );
    }
}
