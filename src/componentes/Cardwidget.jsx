import React from "react";

const Cardwidget = () => {
    return(

<div>

<button type="button" className="btn position-relative">
    <img className="imagencarrito" src="./imagenes/bolso-blanco.svg" alt="bolso" width={32} height={32} /></button> 
    <span className="posotion-absolute top-0 start-100 bi bi-bag traslate-middle badge rounded-pill ">1</span>
</div>

    )
}

export default Cardwidget;