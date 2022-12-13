import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {


    return(


        <div className="row" >
   
               <div className="col-md-4 offser-md-2">

                    <img src={"./imagenes/" + item.imagen} alt={item.nombre} className="img-fluid" />
                </div>

                <div className="col-md-4 offset-md-2">
                         <h1>{item.nombre}</h1>
                         <h3>${item.precio}</h3>
                         <h5>{item.descripcion}</h5>
                         <p> stock disponible: {item.stock}</p>
                         <div> <ItemCount stock={item.stock}/></div>
                </div>


        </div>


    )
}

export default ItemDetail 