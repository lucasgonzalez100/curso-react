import React from "react";
import { NavLink } from "react-router-dom";


const CardWidget = () => {
    return(

  <div>
   <div >
    <NavLink to={"/Checkout"}  className="imagenCarrito" >
    <img src="/imagenes/carrito.svg" alt="bolso" width={32} height={32} /> 
    <span >1</span>
    </NavLink>
       </div>
</div>
    )
}

export default CardWidget;