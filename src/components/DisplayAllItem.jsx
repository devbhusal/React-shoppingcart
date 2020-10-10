import React from "react";
import ItemDisplay from "./ItemDisplay.jsx";
const DisplayAllItem = (props) => {
  //

  return (
    <div style={{marginLeft:"200px", marginTop:"50px"}}>
      {props.item.map((item) => (
        <ItemDisplay item={item} submitnewitem={props.submitnewitem} />
      ))}
    </div>
  );
};

export default DisplayAllItem;
