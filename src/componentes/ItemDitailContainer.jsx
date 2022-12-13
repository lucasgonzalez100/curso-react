import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import arrayProductos from "./json/Productos.json";
import ItemDetail from "./ItemDetail";


const ItemDitailContainer = () => { 

   const [item, setItem] = useState([]);
   const {id} = useParams(); 

   useEffect(()=>{
    const promesa = new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve(arrayProductos.find(item => item.id === parseInt(id) ));
       },1000);

    });

    promesa.then((data)=>{
      setItem(data);
    })
   },[id]);

    return(

<div>

  <ItemDetail item={item}/>
           
</div>


    )
}

export default ItemDitailContainer;