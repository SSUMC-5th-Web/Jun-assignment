import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const LoginInput = styled.input`
  padding: 20px;
  border-radius: 20px;
  width: 90%;
  margin-top: 10px;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: start;
  margin-top: 10px;
`;
export const LoginLabel = styled.div`
  width: 95%;
  font-weight: 700;
  margin-top: 30px;
`;
export const LoginButton = styled.button`
  width: 90%;
  margin-top: 30px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 20px;
  border-radius: 30px;
`;

export default function LoginPage({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [onBtn, setOnBtn] = useState(false);
  const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  useEffect(() => {
    if (emailRegex.test(email) && passwordRegExp.test(password)) {
      setOnBtn(true);
    } else {
      setOnBtn(false);
    }
  }, [email, password]);
  const handleOn = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <h1>
        이메일과 비밀번호를 <br />
        입력해주세요
      </h1>
      <LoginForm>
        <LoginLabel>이메일 주소</LoginLabel>
        <LoginInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></LoginInput>

        <LoginLabel>비밀번호</LoginLabel>
        <LoginInput
          type="password"
          placeholder="영문, 숫자, 특수문자 포합 8자 이상"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></LoginInput>
        <LoginButton
          style={{ backgroundColor: onBtn ? "#083358" : "grey" }}
          onClick={handleOn}
        >
          확인
        </LoginButton>
      </LoginForm>
    </div>
  );
}
