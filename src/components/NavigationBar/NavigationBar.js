import React, { Component } from "react";
import { ToggleButton } from "../ToggleButton/ToggleButton";

import { NavBar } from "./NavigationBar.style";
import { TitleColor, GamesColor, TutorialsColor, BlogColor, AboutColor } from "../../theme/variables";

class NavigationBar extends Component {
    render () {
        return (
            <NavBar>
                <ToggleButton/>
            </NavBar>
        );
    }
}

export default NavigationBar;
