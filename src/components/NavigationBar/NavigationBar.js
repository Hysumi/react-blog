import React, { Component } from "react";
import { NavigationContainer, NavItem, Header, Logo } from "./NavigationBar.style";
import { HomeColor, BlogColor, TitleColor } from "../../theme/variables";

class NavigationBar extends Component {
    render () {
        return (
            <Header navigationcolor={TitleColor}>
                <Logo>LOGO</Logo>
                <NavigationContainer>
                    <NavItem navigationcolor={TitleColor} maincolor={HomeColor} to="/">
                        Home
                    </NavItem>
                    <NavItem navigationcolor={TitleColor} maincolor={BlogColor} to="/blog">
                        Blog
                    </NavItem>
                </NavigationContainer>
            </Header>
        );
    }
}

export default NavigationBar;
