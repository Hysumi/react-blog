import React, { Component } from "react";
import { BannerBackground } from "./Banner.style";

export class Banner extends Component {

    render () {
        return (
            <BannerBackground src={require(`../../assets/images/${this.props.bannerBackgroundImage}`)}>
            </BannerBackground>
        );
    }
}

export default Banner;
