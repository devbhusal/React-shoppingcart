import React,{useContext} from "react";
import {MainDataContext} from "../MainDataContext";
import rightlogo from '../icons/right.png';
import leftlogo from '../icons/left.png';
import {Button} from "react-bootstrap";

const ItemCounter = (props) => {

const [state,setState]=useContext(MainDataContext);

 const increasequantity = (ItemID) => {
    const items = [...state.items];
    const index = items.indexOf(ItemID);
    items[index] = { ...ItemID };
    items[index].Quantity++;
    setState({ ...state, items });
  };

  const decreasequantity = (ItemID) => {
    const items = [...state.items];
    const index = items.indexOf(ItemID);
    items[index] = { ...ItemID };
    items[index].Quantity === 1
      ? setState({ ...state, items })
      : items[index].Quantity--;
    setState({ ...state, items });
  };

  const handledelete = (ItemID) => {

    
    const items = state.items.filter((c) => c.id !== ItemID);
    setState({ ...state, items });
  };


  return (
    <div className="card shadow p-1 mb-15 bg-white rounded card2 m-2"    >
      <div className="card-header">
        <h6>{props.item.ItemName.substring(0, 50)}<button
       
        type="button btn-sm" className="close" aria-label="Close"
        onClick={() =>handledelete(props.item.id)}
      >
         <span aria-hidden="true">&times;</span>
        
      </button></h6>
         </div>








<div className="row mt-80 ">
        <div className="col">
          <img
            src={props.item.Img}
            alt={props.item.ItemName}
            className="card-img"
            
            style={{
    height: 50,
    width: 50,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    borderWidth: 1,
   
}}
          />
          <h6> ${props.item.Cost}</h6>
        </div> 
        
<div className="col "><div className="row">
  <div className="col">
  <Button  variant="light" onClick={() => decreasequantity(props.item)}><img src={leftlogo} style={{width:15,height:15}}/> </Button></div>
 <div className="col"><h4 style={{marginTop: 10}}>{props.item.Quantity}</h4></div>
 <div className="col"><Button  variant="light" onClick={() =>increasequantity(props.item)}><img src={rightlogo} style={{width:15,height:15}}/>   </Button>
 </div></div></div>


    <div className="col" style={{display: 'flex', justifyContent: 'flex-end'}} >
        <h5 style={{marginTop: 25,marginRight:20}}> ${parseFloat(props.item.Cost * props.item.Quantity).toFixed(2)}</h5>
 </div>

  
        



</div>



 </div>
  );
};

export default ItemCounter;
