import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "tachyons";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import ScreenError from "./ScreenError";
import "./style.css";
import { Type } from "./data";

export function cssType() {
  return "";
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#app")
);
