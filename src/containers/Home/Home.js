import React, { Component } from "react";
import { Page } from "./Home.style";
import { Container } from "../../theme/grid";

// Components
import { FeaturedCard } from "../../components/Cards/FeaturedCard/FeaturedCard";
import { Banner } from "../../components/Banner/Banner";

import { GamesColor, TutorialsColor, BlogColor, AboutColor } from "../../theme/variables";

export default class Home extends Component {
    render () {
        return (
            <div>
                <Banner/>

                <Container>
                    <Page>
                        <FeaturedCard cardType={ GamesColor }/>
                        <FeaturedCard cardType={ TutorialsColor }/>

                        <FeaturedCard cardType={ BlogColor }/>

                        <FeaturedCard cardType={ AboutColor }/>

                    </Page>

                </Container>
            </div>
        );
    }
}
