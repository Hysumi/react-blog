import styled from "styled-components";

export const BannerBackground = styled.div`
    background: url(${(props) => props.bannerBackgroundImage}) center no-repeat;
    /*height: 70%;*/
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-top: 70px;
`;
