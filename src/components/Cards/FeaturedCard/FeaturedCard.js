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
    CardReadMore,
    CardReadMoreArrow
} from "./FeaturedCard.style";

import { BookmarkIcon, CalendarIcon, TagsIcon, LeftArrowIcon } from "../../../theme/icons";

export class FeaturedCard extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isMouseHover: false
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
                        <CardLink to="/">
                            Teste
                        </CardLink>
                    </CardItem>
                    <CardItem>
                        <CalendarIcon/>Aug. 24, 2015
                    </CardItem>
                    <CardItem>
                        <CardTags>
                            <TagsIcon/>
                            <CardTag><CardLink to="/">Learn</CardLink></CardTag>
                            <CardTag><CardLink to="/">Code</CardLink></CardTag>
                            <CardTag><CardLink to="/">HTML</CardLink></CardTag>
                            <CardTag><CardLink to="/">CSS</CardLink></CardTag>
                        </CardTags>
                    </CardItem>
                </CardDetails>
                <CardDescriptionContainer>
                    <CardTitle>Learning to Code</CardTitle>
                    <CardSubTitle>Opening a door to the future</CardSubTitle>
                    <CardSummary>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</CardSummary>
                    <CardReadMore to="/">
                        Read More
                    </CardReadMore>
                    <CardReadMoreArrow to="/">
                        <LeftArrowIcon/>
                    </CardReadMoreArrow>

                </CardDescriptionContainer>
            </CardContainer>
        );
    }
}

export default FeaturedCard;
