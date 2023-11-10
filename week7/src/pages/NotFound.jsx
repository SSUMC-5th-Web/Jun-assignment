import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.p`
  font-size: 30px;
`;

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "200px 0 0 400px", fontSize: "30px" }}>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <Content>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</Content>
      <Content
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => navigate("")}
      >
        메인 페이지로 이동
      </Content>
    </div>
  );
}
