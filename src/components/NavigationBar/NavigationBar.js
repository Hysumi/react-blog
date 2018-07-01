import React, { Component } from "react";
import { NavigationContainer, NavItem } from "./NavigationBar.style";

class NavigationBar extends Component {
    render () {
        return (
            <header>
                <div className="logo">LOGO</div>
                <nav>
                    <NavItem to="/">
                        Home
                    </NavItem>
                    <NavItem to="/blog">
                        Blog
                    </NavItem>
                </nav>
            </header>

        );
    }
}

export default NavigationBar;
