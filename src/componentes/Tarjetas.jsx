import React from "react";
import { NavLink } from "react-router-dom";

const Tarjetas = () => {
  return (

    <div className="container fluid " style={{marginTop:"1.5rem"}}>
      
      <div className="cardContainer">
        <div className="card" style={{ width: "25rem" }} >
          <img src="/imagenes/conjunto-deportivo-negro.jpg" height={"60%"} className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">Conjuntos deportivos</h5>
            <p className="card-text">Vas a encontrar los conjuntos deportivos mas comodos y eficientes para tus entrenamientos</p>
            <NavLink to={"/category/deportiva"} className="btn btn-success">Ver mas</NavLink>
          </div>
        </div>
       
        <div className="card" style={{ width: "25rem" }} >
          <img src="/imagenes/reloj-marron.jpg" height={"60%"} className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">Accesorios</h5>
            <p className="card-text">Por que los detalles suman, aqui vas a poder conseguir todos los accesorios que buscas </p>
            <NavLink to={"/category/accesorios"} className="btn btn-success">Ver mas</NavLink>
          </div>
        </div>
       
        <div className="card" style={{ width:"25rem"}} >
          <img src="/imagenes/ropa-cuerpo-completo.jpg" height={"60%"} className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">Casual look</h5>
            <p className="card-text">Para que luzcas y puedas sentirte siempre al top, por que nuestra identidad tambien es lo que se ve ...</p>
            <NavLink to={"/category/vestir"} className="btn btn-success">Ver mas</NavLink>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Tarjetas;