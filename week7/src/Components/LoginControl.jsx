import React, { useState } from "react";
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
export default function LoginControl({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [logText, setlogText] = useState("로그인");
  const [text, setText] = useState("로그인해주세요!!");
  const handleLoginClick = () => {
    setIsLoggedIn(true);
    setlogText("로그인");
    setText("로그인 해주세요!");
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setlogText("로그아웃");
    navigate("/Login");
    setText("환영합니다!");
  };
  return (
    <>
      <LoginBtn onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
        {logText}
      </LoginBtn>
      <LoginText>{text}</LoginText>
    </>
  );
}
