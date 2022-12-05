import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Step1Page = () => {
  const navigate = useNavigate();

  const [clickCounter, setClickCounter] = React.useState(0);

  const increase = () => {
    setClickCounter(clickCounter + 1);
    if (clickCounter > 45) {
      alert("실패");
    } else if (clickCounter === 44) {
      alert("성공!");
    } else {
      return;
    }
  };
  return (
    <Wrap>
      <TitleBox>
        <h2> [1단계] 은밀한 초콜릿 녹이기 </h2>
        <p> Tip! 초콜릿 중탕에 좋은 온도는 45도입니다. </p>
      </TitleBox>
      <PlayingBox>
        <Melting>{/* 초콜렛 녹이는 일러스트 */}</Melting>
        <Thermometer>
          {/* 온도계 일러스트 */}

          {/* 마우스 클릭 횟수 측정 */}
          <h3>현재 {clickCounter}도</h3>
          <button onClick={increase}> 온도 올리기! </button>
        </Thermometer>
      </PlayingBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80%;
  height: fit-content;
  /* margin-top: 50px; */
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px red dotted;
`;
const TitleBox = styled.div`
  width: 50%;
  margin: 10px 0;
  h2 {
    font-size: 2.2rem;
  }
`;

const PlayingBox = styled.div`
  width: 90%;
  height: 450px;
  padding: 3%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Melting = styled.div`
  width: 70%;
  height: 100%;
`;

const Thermometer = styled.div`
  width: 30%;
  height: 100%;
`;

export default Step1Page;
