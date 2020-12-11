import React,{useContext,useEffect} from "react";
import ItemDisplay from "./ItemDisplay.jsx";
import DisplayItemNavbar from "./DisplayItemNavbar";
import {MainDataContext} from "../MainDataContext";
 
const DisplayAllItem = ({match}) => {
 const [state,setState]=useContext(MainDataContext);
  //
const categoryname = match.params.category;
  //const [state,setState]=useContext(MainDataContext);

  useEffect( () => {
    //fetch shopping list tio apilist
setState({...state,apiitem:[]});
    async function fetchdatawithcategory(){
    await fetch(`https://fakestoreapi.com/products/category/${categoryname}`)
      .then((res) => res.json())
      .then((apiitem) => setState({ ...state, apiitem }));
    }
    async function fetchdatawithoutcategory(){
    await fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((apiitem) => setState({ ...state, apiitem }));
    }

    
    categoryname==="all"?fetchdatawithoutcategory():fetchdatawithcategory();
     //console.log(state.apiitem);

  }, [categoryname]);




 useEffect( () => {
    //fetch shopping list tio apilist

    async function fetchdatawithcategory(){
    await fetch(`https://fakestoreapi.com/products/category/${categoryname}`)
      .then((res) => res.json())
      .then((apiitem) => setState({ ...state, apiitem }));
    }
    async function fetchdatawithoutcategory(){
    await fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((apiitem) => setState({ ...state, apiitem }));
    }

    
    categoryname==="all"?fetchdatawithoutcategory():fetchdatawithcategory();
     //console.log(state.apiitem);

  }, []);


  return (
<div  style={{marginLeft:"1px", marginTop:"50px",marginRight:"1px" }}>

   


      {state.apiitem.length===0 ?
       <div className="text-center">
  <div className="spinner-border" role="status">
    
  </div><h3 >Fetching list from server...</h3>
</div>:<></>

    
    }
    {/*console.log(state.apiitem)*/}
     <div className="card-columns" >
      {state.apiitem.map((item) => (
        <ItemDisplay item={item} key={item.id} />
      ))}
    </div></div>
  );
};

export default DisplayAllItem;
