import React from "react";
import { Link } from "react-router-dom";


const Item = ({item}) => {


    return(

<div>
 

           <div className="card" style={{ width: "25rem" }} >
          <img src={"/imagenes/" + item.imagen} height={"68%"} className="card-img-top" alt={item.nombre} />
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion} </p>
            <Link to={"/item/" + item.id} className="btn btn-success">Ver mas</Link>
          </div>
        </div>
</div>

    )
}

export default Item;