import React from "react";

const Tarjetas = () => {
  return (

    <div className="container fluid " style={{marginBottom:"2.5rem"}}>
      <div className="cardContainer">
        <div className="card" style={{ width: "25rem" }} >
          <img src="./imagenes/conjunto-deportivo-negro.jpg" height={"68%"} className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">Conjuntos deportivos</h5>
            <p className="card-text">Aqui va alguna descripcion del producto de la foto</p>
            <a href="#" className="btn btn-success">Ver mas</a>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }} >
          <img src="./imagenes/reloj-marron.jpg" height={"68%"} className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">Accesorios</h5>
            <p className="card-text">Aqui va alguna descripcion del producto de la foto</p>
            <a href="#" className="btn btn-success">Ver mas</a>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }} >
          <img src="./imagenes/ropa-cuerpo-completo.jpg" height={"68%"} className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">Casual look</h5>
            <p className="card-text">Aqui va alguna descripcion del producto de la foto</p>
            <a href="#" className="btn btn-success">Ver mas</a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Tarjetas;