import styled, {css} from "styled-components";
import media from "./media";

export const Div = styled.div`
     ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom};
    `}
`;

export const Container = styled(Div)`
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 30px;
    ${media.mobileS`
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
    `}
    ${media.mobileM`
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    `}
    ${media.mobileL`
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
    `}
    ${media.tablet`
        padding-left: 70px;
        padding-right: 70px;
        padding-top: 15px;
    `}
    ${media.laptop`
        padding-left: 80px;
        padding-right: 80px;
        padding-top: 30px;
    `}
    ${media.laptopL`
        padding-left: 90px;
        padding-right: 90px;
        padding-top: 30px;
    `}
    ${media.desktop`
        padding-left: 100px;
        padding-right: 100px;
        padding-top: 30px;
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
