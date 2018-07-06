import React, { Component } from "react";
import { ToggleTrigger, Span, ToggleIcon, ToggleContainer } from "./ToggleButton.style";

export class ToggleButton extends Component {

    render () {
        return (
            <ToggleContainer>
                <ToggleTrigger onClick={this.props.toggleClick} isClick={this.props.isClicked}>
                    <ToggleIcon>
                        <Span isClick={this.props.isClicked}/>
                    </ToggleIcon>
                </ToggleTrigger>
            </ToggleContainer>
        );
    }
}
