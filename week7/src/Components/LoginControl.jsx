import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const LoginBtn = styled.button`
  border-radius: 20px;
  padding: 0 20px;
  height: 40px;
`;
export const LoginText = styled.p`
  color: #779cb9;
  margin-left: 10px;
  font-size: 20px;
`;
export default function LoginControl(props) {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/");
    props.isLoggedIn.setIsLoggedIn(true);
  };

  return (
    <>
      <LoginBtn
        onClick={() => {
          if (props.isLoggedIn.isLoggedIn) {
            navigate("/Login");
          } else {
            handle();
          }
        }}
      >
        {props.isLoggedIn.isLoggedIn ? "로그인" : "로그아웃"}
      </LoginBtn>
      <LoginText>
        {props.isLoggedIn.isLoggedIn ? "로그인 해주세요!" : "환영합니다!"}
      </LoginText>
    </>
  );
}
