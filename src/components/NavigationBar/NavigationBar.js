import React, { Component } from "react";
import { NavigationContainer, NavItem, Header, Logo } from "./NavigationBar.style";
import { HomeColor, BlogColor } from "../../theme/variables";

class NavigationBar extends Component {
    render () {
        return (
            <Header>
                <Logo>LOGO</Logo>
                <NavigationContainer>
                    <NavItem maincolor={HomeColor} to="/">
                        Home
                    </NavItem>
                    <NavItem maincolor={BlogColor} to="/blog">
                        Blog
                    </NavItem>
                </NavigationContainer>
            </Header>

        );
    }
}

export default NavigationBar;
