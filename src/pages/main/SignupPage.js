import React from "react";
import styled from "styled-components";
import { auth, db } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  const idRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const pwRef = React.useRef(null);
  const confirmPwRef = React.useRef(null);

  const signup = async () => {
    // 비밀번호 확인
    if (pwRef.current.value !== confirmPwRef.current.value) {
      return alert("입력하신 비밀번호가 일치하지 않습니다.");
    }

    const user = await createUserWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value,
    );
    console.log(user);

    const user_doc = await addDoc(collection(db, "users"), {
      user_id: user.user.email,
      name: nameRef.current.value,
    });
    console.log();
    alert(`${nameRef.current.value}님, 회원가입을 축하합니다!`);

    navigate("/signin");
  };

  return (
    <Form>
      <h2>회원가입</h2>
      <InputSection>
        <InputValue>
          <small>Id</small>
        </InputValue>
        <input placeholder="이메일 형식으로 입력해주세요." ref={idRef} />

        <InputValue>
          <small>Name</small>
        </InputValue>
        <input placeholder="이름을 입력해주세요." ref={nameRef} />

        <InputValue>
          <small>Password</small>
        </InputValue>
        <input
          placeholder="6자리 이상 입력해주세요."
          type={"password"}
          ref={pwRef}
          autoComplete="off"
        />

        <InputValue>
          <small>Confirm Password</small>
        </InputValue>
        <input
          placeholder="비밀번호를 한번 더 입력해주세요."
          type={"password"}
          ref={confirmPwRef}
          autoComplete="off"
        />
      </InputSection>
      <BtnSection>
        <Button onClick={signup} type="button">
          회원가입
        </Button>
      </BtnSection>
    </Form>
  );
}

const Form = styled.form`
  width: 25rem;
  height: fit-content;
  padding: 3% 2%;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: tan;
  font-size: 1.5rem;
  h2 {
    margin: 5% 0;
  }
`;
const InputSection = styled.div`
  width: 80%;
  height: 60%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 80%;
    height: 40px;
    margin-bottom: 3%;
    border-radius: 5px;
    border-style: none;
    padding-left: 10px;
  }
`;
const InputValue = styled.div`
  width: 80%;
  overflow: hidden;
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
  margin: 5% 0;
`;
const Button = styled.button`
  width: 50%;
  height: 100%;
  border-style: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export default SignUpPage;
