import React,{useContext,useEffect} from 'react';

import Navigationbar from "./components/navbar.jsx";
//import ItemAdd from "./components/ItemAdd.jsx";
import HomePage from "./components/HomePage.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.jsx";
import DisplayAllItem from "./components/DisplayAllItem.jsx";
//import {MainDataContext} from "./MainDataContext.js";
//import {MainDataContext2} from "./MainDataContext.js";

 const App1=()=>{

 
  

 return (
    <Router >
      
      
      <Navigationbar/>

      <div >
        <div id="page-body"  style={{marginTop:51}}>
          <Switch>
            <Route path="/" component={HomePage} exact />

            <Route path="/home" component={HomePage} exact />
            <Route exact path="/shop" >
              <Redirect to="/shop/all"/>
              </Route>
               
            <Route path="/shop/:category" component={DisplayAllItem}/>


            <Route path="/shoppingcart" component={ShoppingCart}/>

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
     
    </Router>
  );


}

export default App1;
