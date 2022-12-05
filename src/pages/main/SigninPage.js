import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInPage = () => {
  const navigate = useNavigate();

  const idRef = React.useRef(null);
  const pwRef = React.useRef(null);

  const signin = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value,
    );
    console.log(user);
    navigate("/game/step1");
  };

  return (
    <Form>
      <h2>로그인</h2>
      <InputSection>
        <InputValue>
          <small>ID</small>
        </InputValue>
        <input placeholder="아이디를 입력해주세요." ref={idRef} />

        <InputValue>
          <small>PW</small>
        </InputValue>

        <input
          placeholder="비밀번호를 입력해주세요."
          type={"password"}
          autoComplete="off"
          ref={pwRef}
        />
      </InputSection>

      <BtnSection>
        <Button type="button" onClick={signin}>
          로그인
        </Button>
        <Button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </Button>
      </BtnSection>
    </Form>
  );
};

const Form = styled.form`
  width: 25rem;
  height: 30rem;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: tan;
  font-size: 1.5rem;
  h2 {
    margin-bottom: 5%;
  }
`;
const InputSection = styled.div`
  width: 80%;
  height: 40%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 80%;
    height: 40px;
    margin-bottom: 5%;
    border-radius: 5px;
    border-style: none;
    padding-left: 10px;
  }
`;
const InputValue = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 800;
`;

// Button
const BtnSection = styled.div`
  width: 65%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
`;
const Button = styled.button`
  width: 50%;
  height: 100%;
  border-style: none;
  border-radius: 5px;
  &:first-child {
    margin-right: 3%;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default SignInPage;
