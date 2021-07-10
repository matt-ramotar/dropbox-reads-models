import "dotenv";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppHoc from "./App";
import "./index.scss";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <AppHoc />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
