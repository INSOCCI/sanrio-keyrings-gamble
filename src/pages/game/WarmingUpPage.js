import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Step1Page from "../game/Step1Page";
// import Step2Page from "../game/Step2Page";
// import Step3Page from "../game/Step3Page";
// import NotFoundPage from "../NotFoundPage";
// import MyPage from "../MyPage";

const WarmingUpPage = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Btn
        onClick={() => {
          navigate("/game/step_1");
        }}
      >
        나의 키링 보관함
      </Btn>
      <Btn
        onClick={() => {
          navigate("/game/my");
        }}
      >
        빼빼로 만들고 키링 뽑기
      </Btn>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 2px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  &:first-child {
    margin-right: 5%;
  }
`;

export default WarmingUpPage;
