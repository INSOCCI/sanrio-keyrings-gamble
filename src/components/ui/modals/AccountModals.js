import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ModalEffect from "./ModalEffect";

/**
 * Modal View
 */
// SignIn
export const SignInModal = () => {
  return (
    <ModalEffect>
      <Form>
        <h2>로그인</h2>
        <InputSection>
          <ValueName>
            <small>ID</small>
            <p>state 알림</p>
          </ValueName>
          <input placeholder="아이디를 입력해주세요." />
          <ValueName>
            <small>PW</small> <p>앙디</p>
          </ValueName>

          <input placeholder="비밀번호를 입력해주세요." type={"password"} />
        </InputSection>

        <BtnSection>
          <Link to="/game">
            <Button>확인</Button>
          </Link>
          <Button>회원가입</Button>
        </BtnSection>
      </Form>
    </ModalEffect>
  );
};
// SignUp
export const SignUpModal = () => {
  return (
    <ModalEffect>
      <Form>
        <h2>회원가입</h2>
        <InputSection>
          <ValueName>
            <p>ID</p> <small>중복된 아이디가 있습니다.</small>
          </ValueName>
          <input placeholder="아이디를 입력해주세요." />

          <ValueName>
            <small>PW</small>
            <p>아이디를s</p>
          </ValueName>
          <input placeholder="비밀번호를 입력해주세요." type={"password"} />
        </InputSection>
        <BtnSection>
          <Button>확인</Button>
          <Button>회원가입</Button>
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
  height: 25rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: tan;
  font-size: 1.5rem;
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
const ValueName = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  font-weight: 800;
  p {
    margin: 0px 5px;
    font-size: 1rem;
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
`;
