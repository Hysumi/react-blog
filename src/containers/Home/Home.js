import React, { Component } from "react";
import { FeatureContainer, FeatureTitle } from "./Home.style";
import { Container } from "../../theme/grid";

// Components
import { FeaturedCard } from "../../components/Cards/FeaturedCard/FeaturedCard";
import { Banner } from "../../components/Banner/Banner";

import { GamesColor, TutorialsColor, BlogColor } from "../../theme/variables";

// Imagens
import Buckat from "../../assets/images/buckat.jpg";
import Unity from "../../assets/images/unity.jpg";
import Dire from "../../assets/images/dirediredocs.png";
import Maple from "../../assets/images/maplestory.png";


const Cards = [
    {
        Type: "Games",
        Date: "Jul. 07, 2018",
        Tags: ["Unity", "Memes"],
        Title: "Buckat: Ainda lançarei!",
        SubTitle: "Mas não é hoje...",
        Content: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
        Background: Buckat,
        ColorType: GamesColor
    },
    {
        Type: "Tutorials",
        Date: "Jul. 06, 2018",
        Tags: ["Unity", "C#", "UI"],
        Title: "Games - Unity",
        SubTitle: "Um tutorial ai",
        Content: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
        Background: Unity,
        ColorType: TutorialsColor
    },
    {
        Type: "Blog",
        Date: "Jul. 05, 2018",
        Tags: ["Music", "OST", "Super Mario 64"],
        Title: "Relaxing Musics",
        SubTitle: "Dire Dire Docs",
        Content: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
        Background: Dire,
        ColorType: BlogColor
    },
    {
        Type: "Blog",
        Date: "Jul. 05, 2018",
        Tags: ["Maple Story", "TryHard", "Crack"],
        Title: "Level 220!!!",
        SubTitle: "Que plot <3",
        Content: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
        Background: Maple,
        ColorType: BlogColor
    }
];

export default class Home extends Component {
    render () {
        return (
            <Container>
                <Banner/>
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
