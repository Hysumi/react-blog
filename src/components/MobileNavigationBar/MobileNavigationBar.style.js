import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleColor, ItemHover } from "../../theme/variables";

export const MobileNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: -70%;
    padding-top: 70px;
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
            "-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);" +
            "-webkit-box-shadow: 0px 0px 5px 0px; -moz-box-shadow: 0px 0px 5px 0px; box-shadow: 0px 0px 5px 0px;"
            : "";
    }};

    @media (min-width: 768px) {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`;

export const MobileList = styled.div`

    height: 100%;
`;

export const MobileItemList = styled.div`
    border-bottom: 1px solid ${TitleColor};
`;

export const MobileBarLink = styled(Link)`
    display: block;
    padding: 20px;
    font-size: 1.3em;
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
