import React from "react";
import styled from "styled-components";

export const TopArrow = () => {
  return <ArrowStyle>⬆️</ArrowStyle>;
};
export const BottomArrow = () => {
  return <ArrowStyle>⬇️</ArrowStyle>;
};

export const LeftArrow = () => {
  return <ArrowStyle>⬅️</ArrowStyle>;
};

export const RighttArrow = () => {
  return <ArrowStyle>➡️</ArrowStyle>;
};

const ArrowStyle = styled.div`
  width: 15%;
  height: 100%;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
