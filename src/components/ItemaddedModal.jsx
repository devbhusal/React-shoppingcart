import React from 'react';
import {Modal} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import bagged from "../icons/bagged.gif";
const ItemaddedModal=(props)=>{

    return (

         <div   >
    
     <Modal style={{marginTop:20}} show={props.show} onHide={props.handleClose}  backdrop="static"
        keyboard={false} size="lg" >
        <Modal.Header >
          <Modal.Title>Successfully Added!</Modal.Title>
        </Modal.Header>
      <Modal.Body>
         
<div className="row mt-40 ">
        <div className="col-md-4">
          <img
            src={bagged}
            alt="Success"
            className="card-img"
            
            
          /><div >


         </div>
        </div> 
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-text" style={{fontSize: 16}}>{props.title}</h6>{" "}
            
            <h4> {props.count} items successfully added` </h4>

         <p className="card-text" style={{fontSize: 14}}>
             
            </p>
       <p className="card-text">
              <small className="text-muted">
               
              </small>
            </p>
      </div></div></div></Modal.Body>
      <Modal.Footer>
        <button
              className={"btn-sm btn-primary m-2 column"}
              
            ><NavLink className={"btn-sm btn-primary m-2 column"} to="/shoppingcart">
              CheckOut</NavLink>
            </button> 
            <button type="button" className="btn btn-danger" onClick={()=>props.handleClose()}>Continue Shopping
            
            
            </button>
       
      </Modal.Footer>
   

  
</Modal></div>
    );
}
export default ItemaddedModal;