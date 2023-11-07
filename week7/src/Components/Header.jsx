import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginControl from "./LoginControl";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  background-color: #373b69;
  padding: 30px 0 30px 60px;
`;
export const HeadTitle = styled.div`
  font-size: 20px;
  color: white;
  margin-right: 30px;
  cursor: pointer;
`;
export default function Header() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <img
        style={{
          width: "154px",
          height: "20px",
          marginRight: "10px",
          cursor: "pointer",
        }}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="로고"
        onClick={() => navigate("/")}
      />
      <HeadTitle onClick={() => navigate("/movie")}>영화</HeadTitle>
      <HeadTitle onClick={() => navigate("/tv")}>TV 프로그램</HeadTitle>
      <HeadTitle onClick={() => navigate("/celeb")}>인물</HeadTitle>
      <LoginControl>로그인</LoginControl>
    </Wrap>
  );
}
