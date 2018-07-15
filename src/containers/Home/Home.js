import React, { Component } from "react";
import { FeatureContainer } from "./Home.style";
import { Container } from "../../theme/grid";

// Components
import { FeaturedCard } from "../../components/Cards/FeaturedCard/FeaturedCard";
import { Banner } from "../../components/Banner/Banner";

import { GamesColor, TutorialsColor, BlogColor } from "../../theme/variables";

const Cards = [
    {
        Type: "Games",
        Date: "Jul. 07, 2018",
        Tags: ["Unity", "Memes"],
        Title: "Buckat: Ainda lançarei!",
        SubTitle: "Mas não é hoje...",
        Content: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
        Background: "buckat.jpg",
        ColorType: GamesColor
    },
    {
        Type: "Tutorials",
        Date: "Jul. 06, 2018",
        Tags: ["Unity", "C#", "UI"],
        Title: "Games - Unity",
        SubTitle: "Um tutorial ai",
        Content: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
        Background: "unity.jpg",
        ColorType: TutorialsColor
    },
    {
        Type: "Blog",
        Date: "Jul. 05, 2018",
        Tags: ["Music", "OST", "Super Mario 64"],
        Title: "Relaxing Musics",
        SubTitle: "Dire Dire Docs",
        Content: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
        Background: "dirediredocs.png",
        ColorType: BlogColor
    },
    {
        Type: "Blog",
        Date: "Jul. 05, 2018",
        Tags: ["Maple Story", "TryHard", "Crack"],
        Title: "Level 220!!!",
        SubTitle: "Que plot <3",
        Content: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
        Background: "maplestory.png",
        ColorType: BlogColor
    }
];

export default class Home extends Component {
    render () {
        return (
            <Container>
                <Banner bannerBackgroundImage={"NewChallenger.gif"}/>
                <FeatureContainer>
                    <FeaturedCard cardData={ Cards[0] }/>
                    <FeaturedCard cardData={ Cards[1] }/>
                    <FeaturedCard cardData={ Cards[2] }/>
                    <FeaturedCard cardData={ Cards[3] }/>
                </FeatureContainer>

            </Container>
        );
    }
}
