import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Step1Page from "../game/Step1Page";
import Step2Page from "../game/Step2Page";
import MyPage from "../MyPage";
import FailPage from "../result/FailPage";
import Navbar from "../../components/ui/Navbar";

const WarmingUpPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* 게임 설명을 어떻게 넣을 지 고민 중 .. */}
      <Routes>
        <Route path="/step1" element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/:username" element={<MyPage />} />
        <Route path="/result" element={<FailPage />} />
      </Routes>
    </>
  );
};

// const Wrap = styled.div`
//   width: 60%;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;

// const HowBox = styled.div`
//   width: 100%;
//   height: 500px;
//   padding: 5%;
//   line-height: 2.5rem;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: pink;
//   border-radius: 50px;
//   font-size: 1.3rem;
//   h2 {
//     border-bottom: 1px solid #333;
//   }
// `;

// const Btn = styled.button`
//   width: 200px;
//   height: 50px;
//   border-radius: 5px;
//   border-style: none;
//   background-color: hotpink;

//   font-size: 1rem;
//   cursor: pointer;
// `;

const Wrap = styled.div`
  width: 80%;
  height: fit-content;
  position: fixed;
  top: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  box-sizing: border-box;
`;

const Logo = styled.div`
  h2 {
    font-size: 2rem;
  }
`;

const Menus = styled.ul`
  list-style: none;
  li {
    float: left;
    margin-left: 30px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Menu = styled.div``;

export default WarmingUpPage;
