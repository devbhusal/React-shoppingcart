import React from "react";
const ItemCounter = (props) => {
  return (
    <div className="border border-primary">
      <span className=" m-2 ">{props.item.ItemName.substring(0, 35)}</span>
      <span className=" text-muted"> ${props.item.Cost}</span>
      <span className="badge m-2 badge-primary">{props.item.Quantity}</span>
      <button
        onClick={() => props.increasequantity(props.item)}
        className="btn btn-dark btn-sm"
      >
        +
      </button>
      <button
        onClick={() => props.decreasequantity(props.item)}
        className="btn btn-secondary btn-sm m-2 "
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => props.handledelete(props.item.id)}
      >
        X
      </button>
    </div>
  );
};

export default ItemCounter;
