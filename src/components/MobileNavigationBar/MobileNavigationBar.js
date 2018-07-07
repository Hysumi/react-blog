import React, { Component } from "react";
import { MobileNavContainer, MobileNavList, MobileNavItem, MobileNavLink } from "./MobileNavigationBar.style";

export class MobileNavigationBar extends Component {
    render () {
        return (
            <MobileNavContainer toggleOn={this.props.toggleOn}>
                <MobileNavList>
                    <MobileNavItem>
                        <MobileNavLink to="/">Home</MobileNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                        <MobileNavLink to="/">Games</MobileNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                        <MobileNavLink to="/">Tutorials</MobileNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                        <MobileNavLink to="/">Blog</MobileNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                        <MobileNavLink to="/">About</MobileNavLink>
                    </MobileNavItem>
                </MobileNavList>
            </MobileNavContainer>
        );
    }
}

export default MobileNavigationBar;
