import React, { Component } from "react";
import { ToggleButton } from "../ToggleButton/ToggleButton";

import { HeaderContainer, MobileBar, Header, NavList, NavItemList, TesteLink } from "./NavigationBar.style";

class NavigationBar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            toggleOn: false
        };

        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick () {
        this.setState({
            toggleOn: !this.state.toggleOn
        });
    }

    render () {
        return (
            <HeaderContainer>
                <MobileBar>
                    <ToggleButton toggleClick={this.toggleClick} isClicked={this.state.toggleOn}/>
                </MobileBar>
                <Header toggleOn={this.state.toggleOn}>
                    <NavList>
                        <NavItemList>
                            <TesteLink to="/">Link 1</TesteLink>
                        </NavItemList>
                        <NavItemList>
                            <TesteLink to="/">Link 2</TesteLink>
                        </NavItemList>
                        <NavItemList>
                            <TesteLink to="/">Link 3</TesteLink>
                        </NavItemList>
                        <NavItemList>
                            <TesteLink to="/">Link 4</TesteLink>
                        </NavItemList>
                    </NavList>
                </Header>
            </HeaderContainer>
        );
    }
}

export default NavigationBar;
