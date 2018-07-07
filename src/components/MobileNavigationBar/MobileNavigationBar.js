import React, { Component } from "react";
import { MobileNavContainer, MobileList, MobileItemList, MobileBarLink } from "./MobileNavigationBar.style";

export class MobileNavigationBar extends Component {
    render () {
        return (
            <MobileNavContainer toggleOn={this.props.toggleOn}>
                <MobileList>
                    <MobileItemList>
                        <MobileBarLink to="/">Home</MobileBarLink>
                    </MobileItemList>
                    <MobileItemList>
                        <MobileBarLink to="/">Games</MobileBarLink>
                    </MobileItemList>
                    <MobileItemList>
                        <MobileBarLink to="/">Tutorials</MobileBarLink>
                    </MobileItemList>
                    <MobileItemList>
                        <MobileBarLink to="/">Blog</MobileBarLink>
                    </MobileItemList>
                    <MobileItemList>
                        <MobileBarLink to="/">About</MobileBarLink>
                    </MobileItemList>
                </MobileList>
            </MobileNavContainer>
        );
    }
}

export default MobileNavigationBar;
