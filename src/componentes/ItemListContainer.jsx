import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/Productos.json"
import ItemList from "./ItemList";


const ItemListContainer = () => { 

   const [items, setItems] = useState([]);
   const {id} = useParams()

   useEffect(()=>{
      console.log(id)
    const promesa = new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve( id ? arrayProductos.filter (item => item.category === id) : arrayProductos );
       },3000);

    });

    promesa.then((data)=>{
      setItems(data);
    })
 

   }, [id])

    return(

<div>

   <div> <ItemList items={items} /></div>
  
          
      
</div>


    )
}

export default ItemListContainer;