import React, { Component } from "react";
import { FeatureContainer } from "./Home.style";
import { Container } from "../../theme/grid";

// Components
import { FeaturedCard } from "../../components/Cards/FeaturedCard/FeaturedCard";
import { Banner } from "../../components/Banner/Banner";

// Data
import { Cards, HomeBanner } from "../../mocks/homepage-data";

export default class Home extends Component {
    render () {
        return (
            <Container>
                <Banner bannerBackgroundImage={HomeBanner}/>
                <FeatureContainer>
                    {Cards.slice(0, 6).map((card, i) => <FeaturedCard key={i} cardData={ card }/>)}
                </FeatureContainer>

            </Container>
        );
    }
}
