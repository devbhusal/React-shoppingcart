
import React,{ useContext } from "react";

import {MainDataContext} from "../MainDataContext";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Nav } from "react-bootstrap";



const Navigationbar = () => {
const [state,setState]=useContext(MainDataContext);
return(
  <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="py-0">
   <Navbar.Brand href="#home">ShoppingXpress</Navbar.Brand>
   
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
     <Nav className="mr-auto">
      <Nav.Link href="#home"> Home </Nav.Link>
        
          

             <NavDropdown title="Shop" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Shop/all">All</NavDropdown.Item>
        <NavDropdown.Item href="#/shop/men%20clothing">Men`s Clothing</NavDropdown.Item>
        <NavDropdown.Item href="#/shop/women%20clothing">Women`s Clothing</NavDropdown.Item>
         <NavDropdown.Item href="#/shop/jewelery">Jewelery</NavDropdown.Item>
        <NavDropdown.Item href="#/shop/electronics">Electronics</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="#/shop/offers">Special Offers</NavDropdown.Item>
      </NavDropdown>
         </Nav>
          <Nav>
        <Nav.Link href ="#shoppingcart">
            🛒 
            <span className="badge badge-warning m-2">{state.items.reduce((a, b) => a + b.Quantity, 0)}</span>
            <span className="badge badge-primary">${parseFloat(state.items.reduce((a, b) => a + b.Quantity * b.Cost, 0)).toFixed(2)}</span>
          </Nav.Link>

     
          
        
      <div className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success my-5 my-sm-0" type="submit">
          Search
        </button>
      </div>
    </Nav>
    </Navbar.Collapse></Navbar>
  
  </>
);
};

export default Navigationbar;
