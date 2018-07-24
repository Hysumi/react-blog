import React, { Component } from "react";

// components
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { MobileNavigationBar } from "../MobileNavigationBar/MobileNavigationBar";

import { Header, NavBar, NavigationContainer, NavItem, TitleContainer, NavTitle, NavImage, Logo } from "./NavigationBar.style";
import { TitleColor, GamesColor, TutorialsColor, BlogColor, AboutColor } from "../../theme/variables";

export class NavigationBar extends Component {
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
            <Header>
                <NavBar>
                    <TitleContainer>
                        <NavImage to="/">
                            <Logo src={require("../../assets/images/logo.png")}/>
                        </NavImage>
                        <NavTitle navigationcolor={TitleColor} to="/">
                            The Procrastinator Hub
                        </NavTitle>
                    </TitleContainer>

                    <ToggleButton toggleClick={this.toggleClick} isClicked={this.state.toggleOn}/>

                    <NavigationContainer>
                        <NavItem navigationcolor={TitleColor} maincolor={GamesColor} to="/blog">
                            Games
                        </NavItem>
                        <NavItem navigationcolor={TitleColor} maincolor={TutorialsColor} to="/blog">
                            Tutorials
                        </NavItem>
                        <NavItem navigationcolor={TitleColor} maincolor={BlogColor} to="/blog">
                            Blog
                        </NavItem>
                        <NavItem navigationcolor={TitleColor} maincolor={AboutColor} to="/blog">
                            About
                        </NavItem>
                    </NavigationContainer>
                </NavBar>
                <MobileNavigationBar toggleOn={this.state.toggleOn}/>
            </Header>
        );
    }
}

export default NavigationBar;
