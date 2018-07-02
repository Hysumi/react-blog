import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    position: fixed;
    display: block;
    width: 100%;
    background: white;
    color: ${(props) => props.navColor};
    height: 60px;
    box-shadow: 0px 0px 5px black;
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
    font-size: 1.3em;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: ${(props) => props.navColor};
    &:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
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

export const Logo = styled.div`
    top: 30%;
    left: 15px;
    position: absolute;
`;
