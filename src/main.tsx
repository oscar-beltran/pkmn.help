import * as React from "react";
import * as ReactDOM from "react-dom";
import ScreenDefense from "./ScreenDefense";

export function cssType(type: any) {
  type;
  return "";
}

ReactDOM.render(<ScreenDefense />, document.querySelector("#app"));
