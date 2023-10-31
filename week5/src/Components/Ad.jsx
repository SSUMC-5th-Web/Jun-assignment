import React, { useState } from "react";
import styled from "styled-components";
import AdPage from "./AdPage";


export const HandleButton = styled.button`
  width: 200px;
  height: 100px;
`;
export default function Ad() {
  const [on, setOn] = useState(true);
  const [btnName, setBtnName] = useState("광고 안보기");
  const handleOn = () => {
    setOn(true);
    setBtnName("광고 안보기");
  };
  const handleOff = () => {
    setOn(false);
    setBtnName("광고 보기");
  };

  return (
    <>
      {on ? <AdPage /> : <></>}
      <button onClick={on ? handleOff : handleOn}>{btnName}</button>
    </>
  );
}
