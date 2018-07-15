import React, { Component } from "react";
import { BannerContainer, BannerImage } from "./Banner.style";

export class Banner extends Component {

    render () {
        return (
            <BannerContainer>
                <BannerImage src={require(`../../assets/images/${this.props.bannerBackgroundImage}`)}/>
            </BannerContainer>
        );
    }
}

export default Banner;
