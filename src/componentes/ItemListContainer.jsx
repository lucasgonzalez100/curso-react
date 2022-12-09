import { useState, useEffect } from "react";
import arrayProductos from "./json/Productos.json"
import ItemList from "./ItemList";


const ItemListContainer = () => { 

   const [items, setItems] = useState([]);

   useEffect(()=>{
    const promesa = new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve(arrayProductos);
       },3000);

    });

    promesa.then((data)=>{
      setItems(data);
    })
 

   })

    return(

<div>

   <div> <ItemList items={items} /></div>
  
          
      
</div>


    )
}

export default ItemListContainer;