import React, { useState } from "react";
import styled from "styled-components";

export const HandleButton = styled.button`
  width: 200px;
  height: 100px;
`;
export default function Ad() {
  const [on, setOn] = useState(false);
  const handleOn = () => {
    setOn(true);
  };
  const handleOff = () => {
    setOn(false);
  };

  return (
    <>
      <button onClick={on ? handleOff : handleOn}
        
      >광고 안보기</button>
    </>
  );
}
