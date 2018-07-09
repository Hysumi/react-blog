import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleColor } from "../../theme/variables";

import { Flex } from "../../theme/grid";
import media from "../../theme/media";

export const Header = styled.div`

`;

export const NavBar = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: white;
    -webkit-box-shadow:  0px 0px 5px black;
    box-shadow: 0px 0px 5px black;
`;

export const NavigationContainer = styled.div`
    right: 0;
    top: 25%;
    position: absolute;
    ${media.smallerThanTablet`
        display: none;
    `}
`;

export const NavItem = styled(Link)`
    margin-right: 1em;
    font-size: 1.3em;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: ${TitleColor};
    &:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        top: 1.5em;
        left: 0;
        background-color: ${(props) => props.maincolor};
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }
    &:hover:before{
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`;

export const TitleContainer = styled(Flex)`
    flex-wrap: wrap;
    position: absolute;
    padding-left: 1em;

    ${media.smallerThanTablet`
        padding-left: 2.5em;
    `}
`;

export const Logo = styled.img`
    width: 70px;
    height: 70px;
`;

export const NavImage = styled(Link)`
`;

export const NavTitle = styled(Link)`
    margin-right: 1em;
    font-size: 1.3em;
    cursor: pointer;
    line-height: 3;
    position: relative;
    text-decoration: none;
    color: ${(props) => props.navigationcolor};

    ${media.smallerThanMobileL`
        font-size: 1.1em;
        line-height: 3.5;
    `}

    ${media.smallerThanMobileM`
        font-size: 0.9em;
        line-height: 4.5;
    `}

    ${media.mobileS`
        font-size: 0.5em;
        line-height: 7.5;
    `}
    ${media.smallest`
        display: none;
    `}
`;
