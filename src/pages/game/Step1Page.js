import React from "react";
import styled from "styled-components";

const Step1Page = () => {
  return (
  <Wrap>
    <TitleBox>
      <h2> [1단계] 은밀한 초콜릿 녹이기 </h2>
      <p> Tip! 초콜릿 중탕에 좋은 온도는 45도입니다. </p>
    </TitleBox>
  </Wrap>
  )
};

const Wrap = styled.div`
  width: 100%;
`;
const TitleBox = styled.div`
  width: 50%;
  height: 200px;
  h2{
    font-size: 1.5rem;
  }
`;

export default Step1Page;
