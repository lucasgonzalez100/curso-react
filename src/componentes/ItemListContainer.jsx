import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import { addDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => { 

   const [items, setItems] = useState([]);
   const {category} = useParams()

   useEffect(()=>{
      

         const db = getFirestore();
         const itemsCollection = collection(db, "items");

         if(category){
            const queryFilter = query(itemsCollection, where('category', '==',category))
           getDocs(queryFilter)
           .then(res=>setItems(res.docs.map(items=> ({id: items.id, ...items.data()}))))
         console.log(queryFilter)

   }
         else {
         getDocs (itemsCollection)
         .then(res=>setItems(res.docs.map(items=>({id: items.id, ...items.data()}))))
            
         }
      },[category]);


   // funcion para subir json al Firebase
   // useEffect(()=>{
   //    const db = getFirestore();
   //    const itemsCollection = collection(db, "items");

   //    arrayProductos.forEach((item)=>{
   //       addDoc(itemsCollection,item);
   //    })

   // },[]);

    return(

<div>

   <div> <ItemList items={items} /></div>
  
          
      
</div>


    )
}

export default ItemListContainer;