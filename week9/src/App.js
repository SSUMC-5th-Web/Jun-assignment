import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const AppWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const InputBox = styled.input`
  padding: 30px;
  width: 300px;
  border-radius: 15px;
  margin-bottom: 100px;
`;
export const ResultBox = styled.div`
  padding: 20px;
  border: 1px solid;
  width: 200px;
  border-radius: 10px;
`;

function App() {
  const [city, setCity] = useState("");
  const [resultWeather, setResultWeather] = useState({});

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        console.log(data);
        setResultWeather(data);
      } catch (err) {
        alert(err);
      }
    }
  };
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=604c3b3bce8cf85c6e527fd1d04d9ac3`;
  return (
    <AppWrap>
      <InputBox
        value={city}
        type="text"
        placeholder="도시를 입력하세요"
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={searchWeather}
      ></InputBox>
      {Object.keys(resultWeather).length !== 0 && (
        <ResultBox>
          <div style={{ fontSize: "30px", marginBottom: "10px" }}>
            {resultWeather.data.name}
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {Math.round((resultWeather.data.main.temp - 273.15) * 10) / 10}℃
          </div>
          <div style={{ fontSize: "25px", textAlign: "end" }}>
            {resultWeather.data.weather[0].main}
          </div>
        </ResultBox>
      )}
    </AppWrap>
  );
}

export default App;
