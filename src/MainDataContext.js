import React, { createContext, useState, useEffect } from 'react';


export const MainDataContext=createContext();
export const MainDataContext2=createContext();

export const MainDataProvider=(props)=>{

const [state, setState] = useState(() => {
    try {
      // Get from local storage by key "items"
      const items = window.localStorage.getItem("items");
      // Parse stored json or if none return initialValue
      return items
        ? { items: JSON.parse(items), apiitem: [] }
        : { items: [], apiitem: []};
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return { items: [], apiitem: [] };
    }
  });



 useEffect(() => {
   try{window.localStorage.setItem("items", JSON.stringify(state.items));}
   catch (error){console.log(error)};
    
  }, [state.items]);

    return(
    
<MainDataContext.Provider value={[state,setState]}>
{props.children}


</MainDataContext.Provider>



    );
    

};

export const MainDataProvider2=(props)=>{
  const [homeapiitem,setHomeapiitem]=useState([]);
  return (

    <MainDataContext2.Provider value={[homeapiitem,setHomeapiitem]}>
{props.children}


</MainDataContext2.Provider>

  )

}