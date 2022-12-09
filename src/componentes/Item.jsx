import React from "react";

const Item = ({item}) => {


    return(


      <div className="card" style={{ width: "25rem" }} >
          <img src={item.imagen} height={"68%"} className="card-img-top" alt={item.nombre} />
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion} </p>
            <a href="#" className="btn btn-success">Ver mas</a>
          </div>
        </div>


    )
}

export default Item;