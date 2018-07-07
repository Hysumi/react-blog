import { css } from "styled-components";

const sizes = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    smallerThanTablet: 767,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
};

export const media = Object.keys(sizes).reduce((finalMedia, size) => {
    return {
        ...finalMedia,
        [size]: function (...args) {
            return css`
                @media(max-width: ${sizes[size]}px) {
                    ${css(...args)}
                }
            `;
        }
    };
}, {});


export default media;
