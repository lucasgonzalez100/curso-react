import React from "react";

const Tarjetas = () => {
  return (

    <div className="container fluid">
      <div className="cardContainer">
        <div className="card" style={{ width: "25rem" }} >
          <img src="./imagenes/conjunto-deportivo-negro.jpg" className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">nombre del producto</h5>
            <p className="card-text">Aqui va alguna descripcion del producto de la foto</p>
            <a href="#" className="btn btn-primary">Agregar</a>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }} >
          <img src="./imagenes/conjunto-deportivo-negro.jpg" className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">nombre del producto</h5>
            <p className="card-text">Aqui va alguna descripcion del producto de la foto</p>
            <a href="#" className="btn btn-primary">Agregar</a>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }} >
          <img src="./imagenes/conjunto-deportivo-negro.jpg" className="card-img-top" alt="conjunto marron" />
          <div className="card-body">
            <h5 className="card-title">nombre del producto</h5>
            <p className="card-text">Aqui va alguna descripcion del producto de la foto</p>
            <a href="#" className="btn btn-primary">Agregar</a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Tarjetas;