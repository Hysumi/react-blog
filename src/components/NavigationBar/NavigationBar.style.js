import styled from "styled-components";
import { Flex, Div } from "../../theme/grid";
import { Link } from "react-router-dom";

export const Header = styled.header`
    position: fixed;
    display: block;
    width: 100%;
    background: black;
    color: white;
    height: 60px;
`;

export const NavigationContainer = styled.nav`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 20%;
    right: 15px;
`;

export const NavItem = styled(Link)`
    margin-right: 1em;
    font-size: 1.5em;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: white;
    &:hover{
        color: yellow;
        -webkit-transition: .4s ease-in-out;
        -moz-transition: .4s ease-in-out;
        transition: .4s ease-in-out;
        &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: red;
            z-index: -1;
            transform: scale(1.2, 0.1) translate(0, 7em);
        }
    }
`;

export const Logo = styled.div`
    top: 30%;
    left: 15px;
    position: absolute;
`;
