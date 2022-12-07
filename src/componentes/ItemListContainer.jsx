import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ arenga }) => {
    return(

<div>

   <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="alert alert-primary" role="alert">
        promocion mundial {arenga}</div>
           <ItemCount stock={10}/>
        </div>
      </div>
   </div>
</div>


    )
}

export default ItemListContainer;