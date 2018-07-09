import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
    transition: 0.3s height ease;
	-webkit-transition: 0.3s height ease;
    height: 200px;
	max-width: 600px;

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
`;

export const CardImage = styled.div`
    height: 200px;
	position: relative;
    background: url(${require("../../../assets/images/Abyss-map-colored.jpg")}) center no-repeat;
	background-size: cover;
    float: left;
    height: 100%;
    width: 40%;
    transition: 0.5s ease; -webkit-transition: 0.5s ease;
    ${(props) => {
        return props.isHover ? "transform: rotate(5deg) scale(1.3);" : "";
    }};
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
    width: 40%;

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
		color: green;
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
    float: left;
    width: 60%;
    z-index: 0;
    &:before {
        transform: skewX(-5deg);
        content: "";
        background: #fff;
        width: 100%;
        z-index: -1;

        /*POSITION*/
        position: absolute;
        left: -15px;
        top: 0;
        bottom: 0;
    }
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
        background: green;
        height: 6px;
        width: 40px;

        /*POSITION*/
        position: absolute;
        top: 6px;
        left: 0;
    }
`;

export const CardReadMore = styled(Link)`
    color: green;
    margin-bottom: 10px;
    float: right;

    &:after {
        transition: 0.3s ease;
	    -webkit-transition: 0.3s ease;

        content: "";
        margin-left: 30px;
        opacity: 0;
        vertical-align: middle;
    }

    &:hover:after {
        margin-left: 20px;
        opacity: 1;
    }
`;

export const CardReadMoreArrow = styled(Link)`
    color: green;
    margin-bottom: 10px;
    float: right;
`;
