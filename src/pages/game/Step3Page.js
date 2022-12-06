import { React, useState } from "react";
import styled from "styled-components";
import {
  TopArrow,
  BottomArrow,
  LeftArrow,
  RighttArrow,
} from "../../components/ui/Arrow";
import { Wrap, TitleBox } from "./Step1Page";
import useInterval from "../../hooks/useInterval";

const Step3Page = () => {
  // 시간초
  const [count, setCount] = useState(10);
  useInterval(
    () => {
      setCount(count - 1);
    },
    count === 0 ? null : 1000,
  );

  return (
    <Wrap>
      <TitleBox>
        <h2>[3단계] 데굴데굴 스트레칭</h2>
      </TitleBox>

      {count}

      <ArrowBox>
        {" "}
        {/* 화살표 7개 - 랜덤으로 렌더링되게 */}
        <TopArrow />
        <LeftArrow />
        <RighttArrow />
        <BottomArrow />
        <BottomArrow />
        <BottomArrow />
        <BottomArrow />
      </ArrowBox>

      <DecorationBox>
        <div>{/* 배경 - 데코레이션 가루, 이미지 - 빼빼로 */}</div>
      </DecorationBox>
    </Wrap>
  );
};

const ArrowBox = styled.div`
  width: 100%;
  height: 150px;
  margin: 30px 0;
  position: relative;
  background-color: rebeccapurple;
  display: flex;
  flex-direction: row;
`;

const DecorationBox = styled.div`
  width: 100%;
  height: 250px;
  background-color: red;
`;

export default Step3Page;
