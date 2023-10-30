import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./Components/Movie.style";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
