import styled from "styled-components";
import { TitleColor } from "../../theme/variables";
import { mediaMinWidth } from "../../theme/media";

export const ToggleContainer = styled.div`
    padding: 15px;

    ${mediaMinWidth.tablet`
        display: none;
    `}
`;

export const ToggleTrigger = styled.div`
    height: 40px;
    width: 25px;

    -webkit-transition: -webkit-transform 300ms ease;
    transition: -webkit-transform 300ms ease;
    transition: transform 300ms ease;
    transition: transform 300ms ease, -webkit-transform 300ms ease;

    ${(props) => {
        return props.isClick ? "-webkit-transform: rotate(45deg);transform: rotate(45deg);" : "";
    }};
`;

export const ToggleIcon = styled.label`
    display: block;
    position: relative;
    width: 25px;
    height: 100%;
    cursor: pointer;
`;

export const Span = styled(ToggleIcon)`
    display: block;
    position: absolute;
    top: 55%;
    margin-top: -0.3em;
    width: 100%;
    height: 0.3em;
    border-radius: 1px;
    background-color: ${TitleColor};

    &:before {
        -webkit-transform: translateY(-0.6em);
        transform: translateY(-0.6em);
    }};

    &:after {
        -webkit-transform: translateY(0.6em);
        transform: translateY(0.6em);
    };


    &:before, &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1px;
        background-color: ${TitleColor};

        -webkit-transition: -webkit-transform 300ms ease;
        transition: -webkit-transform 300ms ease;
        transition: transform 300ms ease;
        transition: transform 300ms ease, -webkit-transform 300ms ease;

        ${(props) => {
        return props.isClick ? "-webkit-transform: rotate(90deg);transform: rotate(90deg);" : "";
    }};
    }

`;
