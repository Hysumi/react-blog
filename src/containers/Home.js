import React, { Component, PropTypes } from "react";
import Container from "../theme/grid/Container";

export default class Home extends Component {
    static propTypes = {};
    render () {
        return (
            <Container>
                <img class="mainImage" src={require("../Assets/image/challenger.gif")} alt="challenger-smash" />
                <p>Mussum Ipsum, cacilds vidis litro abertis.
                     Interagi no mé, cursus quis, vehicula ac nisi.
                     Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                     Diuretics paradis num copo é motivis de denguis.
                     A ordem dos tratores não altera o pão duris.</p>
            </Container>
        );
    }
}
