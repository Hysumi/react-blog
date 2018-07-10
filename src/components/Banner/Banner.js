import React, { Component } from "react";
import { BannerBackground } from "./Banner.style";

export class Banner extends Component {
    constructor (props) {
        super(props);

        this.state = {
            bannerBackgroundImage: this.props.bannerBackgroundImage
        };
    }

    render () {
        return (
            <BannerBackground bannerBackgroundImage={this.state.bannerBackgroundImage}>
            </BannerBackground>
        );
    }
}

export default Banner;
