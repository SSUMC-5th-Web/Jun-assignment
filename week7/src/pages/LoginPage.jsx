import React from "react";
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
  background-color: #083358;
  color: white;
  padding: 20px;
  border-radius: 30px;
`;

export default function LoginPage() {
  return (
    <div>
      <h1>
        이메일과 비밀번호를 <br />
        입력해주세요
      </h1>
      <LoginForm>
        <LoginLabel>이메일 주소</LoginLabel>
        <LoginInput type="email"></LoginInput>

        <LoginLabel>비밀번호</LoginLabel>
        <LoginInput
          type="password"
          placeholder="영문, 숫자, 특수문자 포합 8자 이상"
        ></LoginInput>
        <LoginButton>확인</LoginButton>
      </LoginForm>
    </div>
  );
}
