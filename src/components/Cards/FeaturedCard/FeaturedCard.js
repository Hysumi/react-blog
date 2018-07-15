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
            data: this.props.cardData
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
                <CardImage isHover={this.state.isMouseHover} src={require(`../../../assets/images/${this.props.cardData.Background}`)}/>
                <CardDetails isHover={this.state.isMouseHover}>
                    <CardItem>
                        <BookmarkIcon/>
                        <CardLink cardcolor={this.state.data.ColorType} to="/">
                            {this.state.data.Type}
                        </CardLink>
                    </CardItem>
                    <CardItem>
                        <CalendarIcon/>{this.state.data.Date}
                    </CardItem>
                    <CardItem>
                        <CardTags>
                            <TagsIcon/>

                            {this.state.data.Tags.map((tag, i) =>
                                <CardTag key={i}>
                                    <CardLink cardcolor={this.state.data.ColorType} to="/">
                                        {tag}
                                    </CardLink>
                                </CardTag>)}
                        </CardTags>
                    </CardItem>
                </CardDetails>
                <CardDescriptionContainer>
                    <CardTitle>{this.state.data.Title}</CardTitle>
                    <CardSubTitle>{this.state.data.SubTitle}</CardSubTitle>
                    <CardSummary cardcolor={this.state.data.ColorType}>{this.state.data.Content}</CardSummary>
                    <CardReadMore cardcolor={this.state.data.ColorType} to="/">
                        Read More
                    </CardReadMore>
                </CardDescriptionContainer>
            </CardContainer>
        );
    }
}

export default FeaturedCard;
