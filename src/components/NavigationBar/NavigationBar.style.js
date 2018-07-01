import styled from "styled-components";
import { Flex, Div } from "../../theme/grid";
import { Link } from "react-router-dom";

export const NavigationContainer = styled(Flex)`

`;

export const NavItem = styled(Link)`
    margin-right: 30px;
    font-size: 1.5em;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: white;

    &:hover{
        color: yellow;
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
