import React, { Component } from "react";
import { HeaderContainer, TitleContainer, NavigationContainer, NavTitle, NavItem, Logo, NavImage } from "./NavigationBar.style";
import { TitleColor, GamesColor, TutorialsColor, BlogColor, AboutColor } from "../../theme/variables";

class NavigationBar extends Component {
    render () {
        return (
            <HeaderContainer>
                <TitleContainer>
                    <NavImage to="/">
                        <Logo src={require("../../assets/images/logo.jpg")}/>
                    </NavImage>
                    <NavTitle navigationcolor={TitleColor} to="/">
                        Nome do Role
                    </NavTitle>
                </TitleContainer>
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
            </HeaderContainer>
        );
    }
}

export default NavigationBar;
