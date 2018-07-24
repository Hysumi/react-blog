import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleColor, ItemHover } from "../../theme/variables";
import { mediaMinWidth } from "../../theme/media";

export const MobileNavContainer = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left: -70%;
    padding-top: 70px;
    width: 70%;
    height: 100%;
    max-height: -webkit-fill-available;
    max-height: -moz-available;
    max-height: fill-available;
    background-color: white;
    overflow-y: scroll;
    text-align: center;
    color: ${TitleColor};
    -webkit-transition: -webkit-transform 300ms ease;
    transition: -webkit-transform 300ms ease;
    transition: transform 300ms ease;
    transition: transform 300ms ease, -webkit-transform 300ms ease;

    ${(props) => {
        return props.toggleOn ?
            "-webkit-transform: translateX(100%); transform: translateX(100%);" +
            "-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);" +
            "-webkit-box-shadow: 0px 0px 5px 0px; -moz-box-shadow: 0px 0px 5px 0px; box-shadow: 0px 0px 5px 0px;"
            : "";
    }};

    ${mediaMinWidth.tablet`
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);    `}
`;

export const MobileNavList = styled.div`
    height: 100%;
`;

export const MobileNavItem = styled.div`
    border-bottom: 1px solid ${TitleColor};
`;

export const MobileNavLink = styled(Link)`
    display: block;
    padding: 20px;
    font-size: 1em;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: ${TitleColor};
    -webkit-transition: background-color 300ms ease-in;
    transition: background-color 300ms ease-in;

    &:hover {
        background-color:  ${ItemHover};
    }
`;
