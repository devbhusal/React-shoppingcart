import React ,{useState} from "react";
import ItemModal from "./ItemModal";


const ItemDisplay = (props) => {

//const [state,setState]=useContext(MainDataContext);
//const [show, setShow] = useState(true);

  //const handleClose = () => setShow(false);

  const [show,setShow]=useState(false);

 const handleClose = () =>{setShow(false);console.log("function called");}
 // const isItemmodalshow=

//<ItemModal handleClose={handleClose} show={show} item={props.item}/>

  return (
    <div className="card shadow p-3 mb-5 bg-white rounded card1"      type="button"  onClick={()=>setShow(true) }>
  {show?<ItemModal handleClose={handleClose} show={show} item={props.item}/>:null}
 
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
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-text" style={{fontSize: 16}}>{props.item.title.substring(0, 20)}</h6>{" "}
            
            <h4> ${props.item.price}</h4>
         






            <p className="card-text">
              <small className="text-muted">
                Category: {"  "} {props.item.category}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
