import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaMinWidth, mediaMaxWidth } from "../../../theme/media";

export const CardContainer = styled.div`
    transition: 0.3s height ease;
	-webkit-transition: 0.3s height ease;

    background: #fff;
	border-radius: 3px;
	box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
	margin: 0 auto 1.6%;
	overflow: hidden;
	position: relative;
	font-size: 14px;
	line-height: 1.45em;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-bottom: 2em;

    ${mediaMinWidth.tablet`
        height: 200px;
	    max-width: 600px;
    `}
`;

export const CardImage = styled.img`
    min-height: 200px;
    max-height: 240px;
    object-fit: cover;
    width: 100%;
	position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${mediaMinWidth.tablet`
        transition: 0.5s ease; -webkit-transition: 0.5s ease;
        float: left;
        width: 40%;
        max-height: 200px;
        max-width: 240px;

        ${(props) => {
        return props.isHover ? "transform: rotate(5deg) scale(1.3);" : "";
    }};

    `}
`;

export const CardDetails = styled.div`
    transition: 0.3s ease;
	-webkit-transition: 0.3s ease;

    background: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    color: #fff;
    font-family: "Open Sans";
    list-style: none;
    margin: 0;
    padding: 10px 15px;
    height: 200px;
    width: 100%;
    /*POSITION*/
    position: absolute;
    top: 0;
	left: ${(props) => {
        return props.isHover ? "0px" : "-100%";
    }};

    &:before {
        margin-right: 10px;
        vertical-align: middle;
    }

    ${mediaMinWidth.tablet`
        width: 40%;
    `}

`;

export const CardItem = styled.div`
	padding: 3px 0;

    &:before {
        margin-right: 10px;
		vertical-align: middle;
    }
`;

export const CardLink = styled(Link)`
    color: inherit;
	border-bottom: 1px dotted;
	&:hover {
		color: ${(props) => props.cardcolor};
	}
`;

export const CardTags = styled.div`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const CardTag = styled.div`
    display: inline-block;
	margin-right: 3px;
`;

export const CardDescriptionContainer = styled.div`
    padding: 10px;
    box-sizing: border-box;
    position: relative;


    ${mediaMinWidth.tablet`
        float: left;
        width: 60%;
        z-index: 0;
        &:before {
            transform: skewX(-5deg);
            content: "";
            background: #fff;
            width: 100%;
            z-index: -1;

            position: absolute;
            left: -15px;
            top: 0;
            bottom: 0;
        }
    `}

`;

export const CardTitle = styled.h1`
    font-family: "Roboto";
    line-height: 1em;
    margin: 0 0 10px 0;
`;

export const CardSubTitle = styled.h2`
    color: grey / 1.5;
    font-family: "Open Sans";
    line-height: 1.2em;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 400;
    margin: 1.2% 0;
`;

export const CardSummary = styled.p`
    position: relative;
    margin: 0;
    padding-top: 20px;

    &:after {
        content: "";
        background: ${(props) => props.cardcolor};
        height: 6px;
        width: 40px;

        /*POSITION*/
        position: absolute;
        top: 6px;
        left: 0;
    }
`;

export const CardReadMore = styled(Link)`
    color: ${(props) => props.cardcolor};
    margin-bottom: 10px;
    float: right;

    &:after {
        transition: 0.3s ease;
	    -webkit-transition: 0.3s ease;

        content:  "";
        margin-left: 0px;
        opacity: 0;
        vertical-align: middle;
    }

    &:hover:after {
        margin-left: 10px;
        opacity: 1;
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        width: 0;
        height: 0;

        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid ${(props) => props.cardcolor};
    }
`;
