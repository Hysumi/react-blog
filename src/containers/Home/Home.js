import React, { Component, PropTypes } from "react";
import {Container} from "../../theme/grid";
import {
    Image,
    HeroImage,
    RevealP
} from "./Home.style";

export default class Home extends Component {
    static propTypes = {};
    render () {
        return (
            <Container>
                <HeroImage>
                    <h1>The Procrastinator</h1>
                    <h2>QUE</h2>
                </HeroImage>
                {/*<Image src={require("../Assets/image/challenger.gif")} alt="challenger-smash" />*/}
                <RevealP hide>Mussum Ipsum, cacilds vidis litro abertis.
                     Interagi no mé, cursus quis, vehicula ac nisi.
                     Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                     Diuretics paradis num copo é motivis de denguis.
                     A ordem dos tratores não altera o pão duris.
                </RevealP>
            </Container>
        );
    }
}
