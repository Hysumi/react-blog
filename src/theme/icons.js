import React from "react";
import styled from "styled-components";

export const Icon = styled.i`
    margin-right: 5px;
`;

export const LeftArrowIcon = () => (
    <Icon className="fas fa-arrow-right"/>
);

export const BookmarkIcon = () => (
    <Icon className="far fa-bookmark"/>
);

export const CalendarIcon = () => (
    <Icon className="far fa-calendar"/>
);

export const TagsIcon = () => (
    <Icon className="fas fa-tags"/>
);


