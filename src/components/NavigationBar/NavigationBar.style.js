import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleColor } from "../../theme/variables";

import { Flex } from "../../theme/grid";
import mediaMaxWidth from "../../theme/media";

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
    -webkit-box-shadow:  0px 0px 5px rgba(204, 204, 204, 0.6);
    box-shadow: 0px 0px 5px rgba(204, 204, 204, 0.6);
`;

export const NavigationContainer = styled.div`
    right: 0;
    top: 25%;
    position: absolute;
    ${mediaMaxWidth.smallerThanTablet`
        display: none;
    `}
`;

export const NavItem = styled(Link)`
    margin-right: 1em;
    font-size: 1em;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: ${TitleColor};
    line-height: 2;
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

    ${mediaMaxWidth.smallerThanTablet`
        padding-left: 2.5em;
    `}
`;

export const Logo = styled.img`
    width: 56px;
    height: 56px;
    padding: 0.5em;
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

    ${mediaMaxWidth.smallerThanMobileL`
        font-size: 1.1em;
        line-height: 3.5;
    `}

    ${mediaMaxWidth.smallerThanMobileM`
        font-size: 0.9em;
        line-height: 4.5;
    `}

    ${mediaMaxWidth.mobileS`
        font-size: 0.5em;
        line-height: 7.5;
    `}
    ${mediaMaxWidth.smallest`
        display: none;
    `}
`;
