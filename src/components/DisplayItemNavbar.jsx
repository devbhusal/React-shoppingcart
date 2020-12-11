import React from "react";
import { NavLink } from "react-router-dom";

 const DisplayItemNavbar=()=>{
return(
  
<nav className="navbar fixed-top navbar-expand-lg navbar-dark  color-nav2 py-0 px-0" style={{marginTop:50}}  >
 
  
 
    <ul className="navbar-nav">
      
      
      
      <li className="nav-item dropdown">
        <div className="dropdown">
        <a className="nav-link dropdown-toggle" type ="button" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            
            <NavLink className="dropdown-item" to="/shop/all">All</NavLink>
          <NavLink className="dropdown-item" to="/shop/men clothing">Men`s Clothing</NavLink>
          <NavLink className="dropdown-item" to="/shop/women clothing">Womens`s clothing</NavLink>
          <NavLink className="dropdown-item" to="/shop/jewelery">Jewelery</NavLink>
           <NavLink className="dropdown-item" to="/shop/electronics">Electronics</NavLink>
        </div></div>
      </li>
    </ul>
 
</nav>
);


}

export default DisplayItemNavbar;