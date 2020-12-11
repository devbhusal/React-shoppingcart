import React,{useContext} from "react";
import ItemCounter from "./ItemCounter.jsx";
import  {MainDataContext} from "../MainDataContext";

const ShoppingCart = () => {
const [state,setState]=useContext(MainDataContext);

  return (
    <React.Fragment >



      {state.items.length === 0 ? (
        <h3> ShoppingCart is empty </h3>
      ) : (
        <>
        <div className="row  " style={{marginLeft:"2%", marginTop:"50px" }}>
          <div className="column col-md ">
         <div className=" cards" >
          {state.items.map((item,key) => (
            
              <ItemCounter
                item={item}
                key={key}
                
              />
            
          ))}
          </div></div>
<div className="column col-sm " style={{display: 'flex', justifyContent: 'flex-end'}} >
  <div className="card shadow p-3  bg-light rounded" style={{position:"sticky",top:50,height:250,width:250}}   >
  <h6>Total  Cost: ${parseFloat(state.items.reduce((a, b) => a + b.Quantity * b.Cost, 0)).toFixed(2)}</h6> 
  <button className="btn btn-primary">Checkout</button></div>

 
</div>

          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default ShoppingCart;
