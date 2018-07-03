import React, { Component } from "react";
import { HeaderContainer, TitleContainer, NavigationContainer, NavItem, Logo, NavLink } from "./NavigationBar.style";
import { HomeColor, BlogColor, TitleColor } from "../../theme/variables";

class NavigationBar extends Component {
    render () {
        return (
            <HeaderContainer>
                <TitleContainer>
                    <Logo src={require("../../assets/images/logo.jpg")}/>
                    <NavItem navigationcolor={TitleColor} maincolor={BlogColor} to="/blog">
                    Teste
                    </NavItem>
                </TitleContainer>
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
