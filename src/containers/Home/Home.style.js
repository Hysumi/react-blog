import styled from "styled-components";
import { mediaMaxWidth, mediaMinWidth } from "../../theme/media";

export const FeatureContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin-top: 2em;

    ${mediaMaxWidth.tablet`
        margin-top; 1em;
    `}
    ${mediaMaxWidth.mobileL`
        margin-top: 0.7em;
    `}
    ${mediaMaxWidth.mobileM`
        margin-top: 0.7em;
    `}
    ${mediaMaxWidth.mobileS`
        margin-top: 0.5em;
    `}

    ${mediaMinWidth.tablet`
        padding-top: 1.6em;
    `}
`;
