import React ,{useContext,useState,useEffect} from "react";
import {MainDataContext} from "../MainDataContext";
import {Modal,Toast} from "react-bootstrap";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uplogo from '../icons/up.png';
import downlogo from '../icons/down.png';
import {Button} from 'react-bootstrap';
import ItemaddedModal from './ItemaddedModal';

const ItemModal=(props)=>{
const [state,setState]=useContext(MainDataContext);
    
 // const handleClose = () => ()=>props.handleClose();
 
const [show,setShow]=useState(false);

 const handleClose = () =>{setShow(false);props.handleClose();}


const [count,setCount]=useState(1);

const submitnewitem = (newitemname, newitemcost) => {
    if ((newitemname.length && newitemcost) === 0) {
      return;
    }
    //find max id used currently and increase 1
    const newid = state.items.reduce((a, b) => (b.id > a ? b.id : a), 0) + 1;

    const items = [
      ...state.items,
      { id: newid, ItemName: newitemname, Cost: newitemcost, Quantity: count ,Img:props.item.image},
    ];
    setState({ ...state, items });
    
   setShow(true);
     
      
   
    
    
  };



    return (<><ItemaddedModal show ={show} count={count} handleClose={handleClose} title={props.item.title} />
      <div   onClick={e => e.stopPropagation()}>
    
     <Modal style={{marginTop:20}} show={props.show} onHide={()=>props.handleClose()}  backdrop="static"
        keyboard={false} size="lg" >
        <Modal.Header >
          <Modal.Title>{props.item.title.substring(0, 20)}</Modal.Title>
        </Modal.Header>
      <Modal.Body>
         
<div className="row mt-40 ">
        <div className="col-md-4">
          <img
            src={props.item.image}
            alt={props.item.title}
            className="card-img"
            
            style={{
    height: 80,
    width: 80,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    borderWidth: 1,
   
}}
          /><div >
<Button  variant="light" onClick={()=>setCount(count+1)}><img src={uplogo}></img>   </Button><p></p>
<h2>{count}</h2><p></p>

<Button  variant="light" onClick={()=>setCount((count)=> (count>2)?count-1:1)}><img src={downlogo}></img> </Button><p></p>

         </div>
        </div> 
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-text" style={{fontSize: 16}}>{props.item.title}</h6>{" "}
            
            <h4> ${props.item.price}</h4>

         <p className="card-text" style={{fontSize: 14}}>
              {props.item.description}
            </p>
       <p className="card-text">
              <small className="text-muted">
                Category: {"  "} {props.item.category}
              </small>
            </p>
      </div></div></div>
      <ItemaddedModal show ={show} count={count} handleClose={handleClose} title={props.item.title} />
      </Modal.Body>

      <Modal.Footer>
        <button
              className="btn-sm btn-primary m-2 column"
              onClick={() =>{
                submitnewitem(props.item.title, props.item.price);
              

              }
              }
            >
              Add to cart
            </button> <button type="button" className="btn btn-danger" onClick={()=>props.handleClose()}>Close</button>
       
      </Modal.Footer>
   

  
</Modal></div></>);
};
export default ItemModal;