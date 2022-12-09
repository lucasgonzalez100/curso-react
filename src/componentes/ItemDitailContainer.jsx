import React, { useState, useEffect } from "react";
import arrayProductos from "./json/Productos.json";
import ItemDetail from "./ItemDetail";


const ItemDitailContainer = () => { 

   const [item, setItem] = useState([]);

   useEffect(()=>{
    const promesa = new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve(arrayProductos.find(item => item.id === 1));
       },1000);

    });

    promesa.then((data)=>{
      setItem(data);
    })
   })

    return(

<div>

  <ItemDetail item={item}/>
           
</div>


    )
}

export default ItemDitailContainer;