import styled, {css} from "styled-components";
import mediaMaxWidth from "./media";

export const Div = styled.div`
     ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom};
    `}
`;

export const Container = styled(Div)`
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 30px;

    ${mediaMaxWidth.desktop`
        padding-left: 100px;
        padding-right: 100px;
        padding-top: 30px;
    `}

    ${mediaMaxWidth.laptopL`
        padding-left: 90px;
        padding-right: 90px;
        padding-top: 30px;
    `}

    ${mediaMaxWidth.laptop`
        padding-left: 80px;
        padding-right: 80px;
        padding-top: 30px;
    `}
    ${mediaMaxWidth.tablet`
        padding-left: 70px;
        padding-right: 70px;
        padding-top: 15px;
    `}

    ${mediaMaxWidth.mobileL`
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
    `}
    ${mediaMaxWidth.mobileM`
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    `}
    ${mediaMaxWidth.mobileS`
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
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
