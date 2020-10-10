import React, { useState } from "react";

const ItemAdd = (props) => {
  const [state, setState] = useState({ newitemname: "", newitemcost: 0 });

  const updateItemname = (evt) => {
    setState({ ...state, newitemname: evt.target.value });
  };

  const updateItemcost = (evt) => {
    setState({ ...state, newitemcost: evt.target.value });
  };
  return (
    <React.Fragment>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Item Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Item Name"
            name="itemname"
            onChange={updateItemname}
          ></input>
        </div>

        <div className="form-group">
          <label>Cost per Item</label>
          <input
            className="form-control "
            type="number"
            placeholder="Enter cost per item"
            name="cost"
            onChange={updateItemcost}
          ></input>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() =>
          props.submitnewitem(state.newitemname, state.newitemcost)
        }
      >
        Add to cart
      </button>
    </React.Fragment>
  );
};

export default ItemAdd;
