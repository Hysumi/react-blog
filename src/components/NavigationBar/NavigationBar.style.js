import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleColor, ItemHover } from "../../theme/variables";

export const HeaderContainer = styled.div`
`;

export const MobileBar = styled.div`
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

export const Header = styled.div`
    position: fixed;
    top: 0;
    left: -70%;
    padding-top: 60px;
    width: 70%;
    height: 100%;
    background-color: white;
    overflow-y: scroll;
    text-align: center;
    color: ${TitleColor};
    -webkit-transition: -webkit-transform 300ms ease;
    transition: -webkit-transform 300ms ease;
    transition: transform 300ms ease;
    transition: transform 300ms ease, -webkit-transform 300ms ease;

    transform: ${(props) => {
        return props.toggleOn ?
            "-webkit-transform: translateX(100%); transform: translateX(100%);" +
            "-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);" : "";
    }};
`;

export const NavList = styled.ul`
    height: 100%;
    margin-top: 15px;
`;

export const NavItemList = styled.li`
    border-bottom: 1px solid ${TitleColor};
`;

export const TesteLink = styled(Link)`
    display: block;
    padding: 20px;
    -webkit-transition: background-color 300ms ease-in;
    transition: background-color 300ms ease-in;

    &:hover {
        background-color:  ${ItemHover};
    }
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
