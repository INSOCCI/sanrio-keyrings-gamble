import { BtnEffect } from "./BtnEffect";
import { Link } from "react-router-dom";

export const SignInBtn = () => {
  return (
    <BtnEffect>
      <Link to="/signin">로그인</Link>
    </BtnEffect>
  );
};

export const SignUpBtn = () => {
  return (
    <BtnEffect>
      <Link to="/signup">회원가입</Link>
    </BtnEffect>
  );
};
