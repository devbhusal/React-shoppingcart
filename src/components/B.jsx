import React from "react";

const B = (props) => {
  return (
    <div>
      <button onClick={() => props.changeattr("Black")}>change color</button>
    </div>
  );
};

export default B;
