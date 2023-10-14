import React from "react";
import ReactDOM from "react-dom/client";

import { Body } from "./Components/Moive.style";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Body />
    <App />
  </React.StrictMode>
);
