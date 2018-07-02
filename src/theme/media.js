import { css } from "styled-components";

const sizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
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
