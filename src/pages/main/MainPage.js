import React from "react";
import styled from "styled-components";
import { SignInBtn, SignUpBtn } from "../../components/ui/buttons/AccountBtn";
import img1 from "../../images/main/main_img1.jpg";
import { Routes, Route } from "react-router-dom";
import SignInPage from "../main/SignInPage";
import SignUpPage from "../main/SignUpPage";
import WarmingUpPage from "../game/WarmingUpPage";
import NotFoundPage from "../NotFoundPage";

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

      <Routes>
        <Route index element={null} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="game" element={<WarmingUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
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
