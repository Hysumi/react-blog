import { css } from "styled-components";

const sizes = {
    smallest: 240,
    smallerThanMobileS: 310,
    mobileS: 325,
    smallerThanMobileM: 369,
    mobileM: 375,
    smallerThanMobileL: 415,
    mobileL: 425,
    smallerThanTablet: 767,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
};

export const mediaMaxWidth = Object.keys(sizes).reduce((finalMedia, size) => {
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

export const mediaMinWidth = Object.keys(sizes).reduce((finalMedia, size) => {
    return {
        ...finalMedia,
        [size]: function (...args) {
            return css`
                @media(min-width: ${sizes[size]}px) {
                    ${css(...args)}
                }
            `;
        }
    };
}, {});


export default mediaMaxWidth;
