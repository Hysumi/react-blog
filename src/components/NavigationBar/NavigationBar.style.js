import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex, Div } from "../../theme/grid";

export const HeaderContainer = styled(Flex)`
    position: Fixed;
    color: white;
    height: 70px;
    width: 100%
    box-shadow: 0px 0px 5px black;
`;

export const NavigationContainer = styled(Flex)`
    right: 0;
    top: 25%;
    position: absolute;
`;

export const Logo = styled.img`
    width: 10%;
`;

export const NavLink = styled(Link)`
    cursor: pointer;
    position: relative;
    text-decoration: none;
    margin-right: 1em;
    font-size: 1.3em;
`;

export const NavItem = styled(Link)`
    margin-right: 1em;
    font-size: 1.3em;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: ${(props) => props.navigationcolor};
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
