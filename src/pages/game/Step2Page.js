import React from "react";
import styled from "styled-components";
import { TitleBox, PlayingBox } from "./Step1Page";
import useInterval from "../../hooks/useInterval";

const Step2Page = () => {
  // Mission : 막대 과자가 위에서부터 조금씩 내려오는 애니메이션 효과 && 스페이스바 눌러서 멈출 수 있게 하기 
    // useInterval -> 시간초에 따라 y좌표값도 변하게? ,ㄴㄴ 그냥 animation keyframes로 시간초마다 포지션 설정주기?

  return (
    <Wrap>
      <TitleBox>
        <h2>[2단계] 깐깐한 막대과자 손님</h2>
      </TitleBox>
      
    {/* Choco와 Marking이 만나는 즉시 이벤트(스페이스바)를 일으키지 않으면 실패 */}
      <PlayingBox>
        <Boll />
        <Choco />
        <StickBox>
          <Stick>
            <Marking />
          </Stick>
        </StickBox>
      </PlayingBox>

    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80%;
  height: fit-content;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
  border: 2px red dotted;
`;
const Boll = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 0 0 150px 150px;
  background-color: #eee;
  position: absolute;
  bottom: 20px;
`;
const Choco = styled.div`
  width: 240px;
  height: 160px;
  border-radius: 0 0 150px 150px;
  background-color: chocolate;
  position: absolute;
  bottom: 25px;
`;
const StickBox = styled.div`
  width: 20px;
  height: 150px;
  position: absolute;
  top: 0;
`;
const Stick = styled.div`
  width: 20px;
  height: 150px;
  border-radius: 50px;
  background-color: lightgoldenrodyellow;
  position: relative;
`;
const Marking = styled.div`
  width: 20px;
  height: 2px;
  background-color: red;
  position: absolute;
  top: 40px;
`;

export default Step2Page;
