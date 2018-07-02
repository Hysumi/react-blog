import React, { Component } from "react";
import { HeaderContainer, NavigationContainer, NavItem } from "./NavigationBar.style";
import { HomeColor, BlogColor, TitleColor } from "../../theme/variables";

class NavigationBar extends Component {
    render () {
        return (
            <HeaderContainer>
                <NavigationContainer>
                    <NavItem navigationcolor={TitleColor} maincolor={HomeColor} to="/">
                        Home
                    </NavItem>
                    <NavItem navigationcolor={TitleColor} maincolor={BlogColor} to="/blog">
                        Blog
                    </NavItem>
                </NavigationContainer>
            </HeaderContainer>
        );
    }
}

export default NavigationBar;
