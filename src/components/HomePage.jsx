import React,{useContext,useEffect} from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {MainDataContext2} from "../MainDataContext";
 
const HomePage=()=> {
  

const [homeapiitem,setHomeapiitem]=useContext(MainDataContext2);
 
  //write items to localstorage
 
 useEffect( () => {
    //fetch shopping list tio apilist

    
    async function fetchdatawithoutcategory(){
    await fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((homeapiitem) => setHomeapiitem( homeapiitem ));
    }

    
    fetchdatawithoutcategory();
     //console.log(state.apiitem);

  }, []);


    return (<>
    
      

    
     

{homeapiitem.length===0 ?
       <div className="text-center">
  <div className="spinner-border" role="status">
    
  </div><h3 >Welcome to ShoppingXpress</h3>
</div>:
<Carousel autoPlay>

<div>
  
      <img alt="" src={homeapiitem[1].image} style={{width:300,height:300}} />
      <p className="legend">{homeapiitem[1].title}</p>
    </div>
    <div>
      <img alt="" src={homeapiitem[2].image} style={{width:300,height:300}} />
      <p className="legend">{homeapiitem[2].title}</p>
    </div>
    <div>
      <img alt="" src={homeapiitem[3].image} style={{width:300,height:300}} />
      <p className="legend">{homeapiitem[3].title}</p>
    </div>
    <div>
      <img alt="" src={homeapiitem[4].image} style={{width:300,height:300}} />
      <p className="legend">{homeapiitem[4].title}</p>
    </div>
    


</Carousel>}



    
    
   
    
    
    
    
   

</>
     );
  
};

export default HomePage;
