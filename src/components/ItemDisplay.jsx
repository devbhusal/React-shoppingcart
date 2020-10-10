import React ,{useState}from "react";

const ItemDisplay = (props) => {
const [state,setState]=useState({info:""});

  return (
    <div className="border border-success card mb-5 " style={{ float:"left" ,width: "450px" }} >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={props.item.image}
            alt={props.item.title}
            className="card-img"
            width="100"
            height="100"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-title">{props.item.title}</h6>{" "}
            <p className="card-text">
              {props.item.description.substring(0, 80)}...
            </p>
            <h4> ${props.item.price}</h4>
            <button
              className="btn btn-primary"
              onClick={() =>{
                props.submitnewitem(props.item.title, props.item.price);
               //  setTimeout(() => setState({...state,info:"Added to cart"}), 3000);

              }
              }
            >
              Add to cart
            </button>
            <span className="m-2 badge-success">{state.info}</span>
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
