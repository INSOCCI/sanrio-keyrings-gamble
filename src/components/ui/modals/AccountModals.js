import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalEffect from "./ModalEffect";

/**
 * Modal View
 */
// SignIn
export const SignInModal = () => {
  const navigate = useNavigate();
  return (
    <ModalEffect>
      <Form>
        <h2>로그인</h2>
        <InputSection>
          <InputValue>
            <small>ID</small>
          </InputValue>
          <input placeholder="아이디를 입력해주세요." />

          <InputValue>
            <small>PW</small>
          </InputValue>

          <input placeholder="비밀번호를 입력해주세요." type={"password"} />
        </InputSection>

        <BtnSection>
          <Button
            onClick={() => {
              navigate("/game");
            }}
          >
            확인
          </Button>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </Button>
        </BtnSection>
      </Form>
    </ModalEffect>
  );
};

// SignUp
export const SignUpModal = () => {
  const navigate = useNavigate();
  return (
    <ModalEffect>
      <Form>
        <h2>회원가입</h2>
        <InputSection>
          <InputValue>
            <small>ID</small> <p>중복된 아이디가 있습니다.</p>
          </InputValue>
          <input placeholder="아이디를 입력해주세요." />

          <InputValue>
            <small>PW</small>
            <p>6자리 이상 입력해주세요.</p>
          </InputValue>
          <input placeholder="비밀번호를 입력해주세요." type={"password"} />
          <InputValue>
            <small>PW</small>
            <p>6자리 이상 입력해주세요.</p>
          </InputValue>
          <input placeholder="비밀번호를 입력해주세요." type={"password"} />
        </InputSection>
        <BtnSection>
          <Button
            onClick={() => {
              navigate("/signin");
            }}
          >
            확인
          </Button>
        </BtnSection>
      </Form>
    </ModalEffect>
  );
};

/**
 * Modal Style
 */
// Input
const Form = styled.form`
  width: 25rem;
  height: 30rem;
  margin: 0 auto;
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
  height: 50%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 80%;
    height: 30px;
    margin-bottom: 5%;
    border-radius: 5px;
    border-style: none;
    padding: 1%;
  }
`;
const InputValue = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 800;
  p {
    margin-left: 3%;
    font-size: 0.8rem;
  }
`;

// Button
const BtnSection = styled.div`
  width: 65%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
