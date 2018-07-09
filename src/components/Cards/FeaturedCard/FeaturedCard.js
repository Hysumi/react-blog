import React, { Component } from "react";
import {
    CardContainer,
    CardImage,
    CardDetails,
    CardItem,
    CardLink,
    CardTags,
    CardTag,
    CardDescriptionContainer,
    CardTitle,
    CardSubTitle,
    CardSummary,
    CardReadMore
} from "./FeaturedCard.style";

import { BookmarkIcon, CalendarIcon, TagsIcon } from "../../../theme/icons";

export class FeaturedCard extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isMouseHover: false,
            cardType: this.props.cardType
        };

        this.mouseHoverEnter = this.mouseHoverEnter.bind(this);
        this.mouseHoverLeave = this.mouseHoverLeave.bind(this);
    }

    mouseHoverEnter () {
        this.setState({
            isMouseHover: true
        });
    }

    mouseHoverLeave () {
        this.setState({
            isMouseHover: false
        });
    }

    render () {
        return (
            <CardContainer onMouseEnter={this.mouseHoverEnter} onMouseLeave={this.mouseHoverLeave}>
                <CardImage isHover={this.state.isMouseHover}/>
                <CardDetails isHover={this.state.isMouseHover}>
                    <CardItem>
                        <BookmarkIcon/>
                        <CardLink cardcolor={this.state.cardType} to="/">
                            Teste
                        </CardLink>
                    </CardItem>
                    <CardItem>
                        <CalendarIcon/>Aug. 24, 2015
                    </CardItem>
                    <CardItem>
                        <CardTags>
                            <TagsIcon/>
                            <CardTag><CardLink cardcolor={this.state.cardType} to="/">Learn</CardLink></CardTag>
                            <CardTag><CardLink cardcolor={this.state.cardType} to="/">Code</CardLink></CardTag>
                            <CardTag><CardLink cardcolor={this.state.cardType} to="/">HTML</CardLink></CardTag>
                            <CardTag><CardLink cardcolor={this.state.cardType} to="/">CSS</CardLink></CardTag>
                        </CardTags>
                    </CardItem>
                </CardDetails>
                <CardDescriptionContainer>
                    <CardTitle>Learning to Code</CardTitle>
                    <CardSubTitle>Opening a door to the future</CardSubTitle>
                    <CardSummary cardcolor={this.state.cardType}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</CardSummary>
                    <CardReadMore cardcolor={this.state.cardType} to="/">
                        Read More
                    </CardReadMore>
                </CardDescriptionContainer>
            </CardContainer>
        );
    }
}

export default FeaturedCard;
