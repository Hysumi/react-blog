import styled, {css} from "styled-components";
import mediaMaxWidth from "./media";

export const Div = styled.div`
     ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom};
    `}
`;

export const Container = styled(Div)`
    padding: 2em;

    ${mediaMaxWidth.tablet`
        padding; 1em;
    `}

    ${mediaMaxWidth.mobileL`
        padding: 0.7em;
    `}
    ${mediaMaxWidth.mobileM`
        padding: 0.7em;
    `}
    ${mediaMaxWidth.mobileS`
        padding: 0.5em;
    `}
`;

export const Relative = styled(Div)`
    position: relative;
`;

export const Flex = styled(Div)`
    display: flex;

    ${({ column }) => column && css`
        flex-direction: column;
    `}

    ${({ justify }) => justify && css`
        justify-content: ${justify};
    `}

    ${({ align }) => align && css`
        align-content: ${align};
    `}
`;
