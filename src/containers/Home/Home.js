import React, { Component } from "react";
import { Page } from "./Home.style";
import { Container } from "../../theme/grid";

// Components
import { FeaturedCard } from "../../components/Cards/FeaturedCard/FeaturedCard";
import { Banner } from "../../components/Banner/Banner";
export default class Home extends Component {
    render () {
        return (
            <div>
                <Banner/>

                <Container>
                    <Page>
                        <FeaturedCard/>
                        <FeaturedCard/>

                        <FeaturedCard/>

                        <FeaturedCard/>

                    </Page>

                </Container>
            </div>
        );
    }
}
