import React, { Component } from "react";
import { NavigationContainer, NavItem, Header, Logo } from "./NavigationBar.style";

class NavigationBar extends Component {
    render () {
        return (
            <Header>
                <Logo>LOGO</Logo>
                <NavigationContainer>
                    <NavItem to="/">
                        Home
                    </NavItem>
                    <NavItem to="/blog">
                        Blog
                    </NavItem>
                </NavigationContainer>
            </Header>

        );
    }
}

export default NavigationBar;
