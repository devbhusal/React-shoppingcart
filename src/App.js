import React from "react";
import App1 from "./App1";

import {MainDataProvider} from "./MainDataContext";
import {MainDataProvider2} from "./MainDataContext";

//Items format
//     { id: 2, ItemName: "Puffed Rice", Cost: 4, Quantity: 2,Img:"" },

//apiitemformat
// { id:1, title:'...', price:'...'category:'...',description:'...', image:'...' }

const App = () => {
  
  return(
<MainDataProvider><MainDataProvider2><App1/></MainDataProvider2></MainDataProvider>

  );
 
};

export default App;
