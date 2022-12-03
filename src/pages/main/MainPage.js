import React from "react";
import styled from "styled-components";
import { SignInBtn, SignUpBtn } from "../../components/ui/buttons/MainBtn";
import img1 from "../../images/main/main_img1.jpg";

const MainPage = () => {
  return (
    <Wrap>
      <Title>Sanlio keyring gamble</Title>
      <img
        src={img1}
        alt="산리오x롯데제과 빼빼로 이미지"
        style={{ margin: "4rem" }}
      />
      <SignInBtn />
      <SignUpBtn />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 6rem;
  color: #f277ab;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #f01d76;
`;

export default MainPage;
