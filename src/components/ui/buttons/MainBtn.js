import styled from "styled-components";

export const BtnEffect = styled.div`
  width: 11rem;
  height: 3.2rem;
  line-height: 3.2rem;
  box-shadow: 3.5px 4px 5px #8c08ca;
  border-radius: 50px;
  margin-bottom: 2.2rem;
  font-size: 2rem;
`;

export const StartBtn = () => {
  return (
    <BtnEffect>
      <h4>Start!</h4>
    </BtnEffect>
  );
};

export const AccountBtn = () => {
  return (
    <BtnEffect>
      <h4 style={{ fontSize: "1.2rem" }}> 회원가입/로그인 </h4>
    </BtnEffect>
  );
};
