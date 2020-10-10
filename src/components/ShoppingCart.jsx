import React from "react";
import ItemCounter from "./ItemCounter.jsx";

const ShoppingCart = (props) => {
  return (
    <React.Fragment>
      {props.items.length === 0 ? (
        <h3> ShoppingCart is empty </h3>
      ) : (
        <>
          {props.items.map((item) => (
            <p>
              <ItemCounter
                item={item}
                handledelete={props.handledelete}
                increasequantity={props.increasequantity}
                decreasequantity={props.decreasequantity}
              />
            </p>
          ))}
        </>
      )}
    </React.Fragment>
  );
};

export default ShoppingCart;
