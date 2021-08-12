import classnames from "classnames";
import * as React from "react";
// import { cssType } from "./main";

function Badge({ type }: { type: any }) {
  return (
    <div
      className={classnames(
        `type-bg-dark`,
        "ba border3",
        "ph1 pv1 br1",
        "ttc tc b f5"
      )}
      style={{ width: 80, margin: "0.125rem" }}
    >
      {type}
    </div>
  );
}

function Matchups() {
  return <div>Matchups</div>;
}

export function Defense() {
  return <Matchups />;
}

export default Defense;
