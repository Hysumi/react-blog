import React, { Component } from "react";
import { HeaderContainer, NavigationContainer, NavItem, Logo, NavLink } from "./NavigationBar.style";
import { HomeColor, BlogColor, TitleColor } from "../../theme/variables";

class NavigationBar extends Component {
    render () {
        return (
            <HeaderContainer>
                <NavLink to="/">
                    <Logo src={require("../../assets/images/logo.jpg")}/>
                    The Procrastinator Hub
                </NavLink>
                <NavigationContainer>
                    <NavItem navigationcolor={TitleColor} maincolor={BlogColor} to="/blog">
                        Blog
                    </NavItem>
                </NavigationContainer>
            </HeaderContainer>
        );
    }
}

export default NavigationBar;
