import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar.jsx";
import ItemAdd from "./components/ItemAdd.jsx";
import HomePage from "./components/HomePage.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.jsx";
import DisplayAllItem from "./components/DisplayAllItem.jsx";

//Items format
//     { id: 2, ItemName: "Puffed Rice", Cost: 4, Quantity: 2 },

//apiitemformat
// { id:1, title:'...', price:'...'category:'...',description:'...', image:'...' }

const App = () => {
  const [state, setState] = useState(() => {
    try {
      // Get from local storage by key "items"
      const items = window.localStorage.getItem("items");
      // Parse stored json or if none return initialValue
      return items
        ? { items: JSON.parse(items), apiitem: [] }
        : { items: [], apiitem: [] };
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return { items: [], apiitem: [] };
    }
  });

  useEffect(async () => {
    //fetch shopping list tio apilist
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((apiitem) => setState({ ...state, apiitem }));
  }, []);

  //write items to localstorage
  useEffect(async() => {
     window.localStorage.setItem("items", JSON.stringify(state.items));
  }, [state.items]);

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

  const submitnewitem = (newitemname, newitemcost) => {
    if ((newitemname.length && newitemcost) === 0) {
      return;
    }
    //find max id used currently and increase 1
    const newid = state.items.reduce((a, b) => (b.id > a ? b.id : a), 0) + 1;

    const items = [
      ...state.items,
      { id: newid, ItemName: newitemname, Cost: newitemcost, Quantity: 1 },
    ];
    setState({ ...state, items });
  };

  return (
    <Router>
      <Navbar
        totallist={state.items.reduce((a, b) => a + b.Quantity, 0)}
        totalcost={state.items.reduce((a, b) => a + b.Quantity * b.Cost, 0)}
      />

      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />

            <Route path="/home" component={HomePage} exact />
            <Route
              path="/shop"
              component={() => (
                <DisplayAllItem
                  item={state.apiitem}
                  submitnewitem={submitnewitem}
                />
              )}
            />

            <Route
              path="/shoppingcart"
              component={() => (
                <div className="row">
                  <div className="card-body col-sm-6">
                    <ShoppingCart
                      items={state.items}
                      handledelete={handledelete}
                      increasequantity={increasequantity}
                      decreasequantity={decreasequantity}
                    />
                  </div>
                  <ItemAdd submitnewitem={submitnewitem} />
                </div>
              )}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
