import React, { useState, useEffect } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom"; 
import ItemDetail from "./ItemDetail";



const ItemDitailContainer = () => { 

   const [item, setItem] = useState([]);
   const {id} = useParams(); 

   useEffect(()=>{
    const db = getFirestore();
    const item = doc(db, "items", id);
    getDoc (item).then((snapShot)=>{
    if (snapShot){
      setItem({id:snapShot.id, ...snapShot.data() })
    }else {
      console.log("el producto no existe ")
    }
   });
}, {});
 

    return(

<div>

  <ItemDetail item={item}/>
           
</div>


    )
}

export default ItemDitailContainer;