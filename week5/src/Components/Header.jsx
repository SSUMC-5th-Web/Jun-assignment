import React from "react";
import styled from "styled-components";

export const Wrap = styled.div`
  position: fixed;
  top: 0;
`;
export default function Header() {
  return (
    <Wrap>
      <img
        style={{ width: "154px", height: "20px" }}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="로고"
      />
    </Wrap>
  );
}
