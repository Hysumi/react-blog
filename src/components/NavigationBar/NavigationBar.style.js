import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleColor } from "../../theme/variables";

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
    @media (max-width: 767px) {
        display: none;
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

export const TitleContainer = styled.div`
    position: absolute;
    @media (max-width: 767px) {
        padding-left: 70px;
    }
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
    position: relative;
    text-decoration: none;
    color: ${(props) => props.navigationcolor};
`;
