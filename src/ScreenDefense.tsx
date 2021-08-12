import * as React from "react";
import { Type } from "./data";
import Defense from "./Matchups";

export default function ScreenDefense() {
  return (
    <main>
      <Defense type1={Type.FIRE} type2={Type.ICE} fallbackCoverageTypes={[]} />
    </main>
  );
}
