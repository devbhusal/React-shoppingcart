import React, { useState } from "react";
import B from "./B.jsx";

const A = () => {
  const [state, setState] = useState({ background: "Red" });

  const changeattr = (setcolor) => {
    setState({ ...state, background: setcolor });
  };

  return (
    <div style={state}>
      <B changeattr={changeattr} />
    </div>
  );
};

export default A;
