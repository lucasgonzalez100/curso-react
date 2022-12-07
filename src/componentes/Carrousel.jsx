import React from "react";

const Carrousel = () => {
    return (

        <div className="containerComponentes">

<div  id="carouselExampleCaptions" className="carousel slide"  data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src="./imagenes/sliderimagen1.jpg"  className="d-block w-100 " style={{ height:"85vh"}}  alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h5>Todos los estilos que estas buscando </h5>
        <p >Nosotros nos encargamos que de los encuentres </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="./imagenes/haciendocalistenia.jpg" className="d-block w-100"  style={{ height:"85vh"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Calidad y comodidad </h5>
        <p>Las prendas de la mas alta calidad para vos </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="./imagenes/slider_greece32.jpg" className="d-block w-100" style={{ height:"85vh"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Todas las temopradas </h5>
        <p>Consegui todo en un solo lugar invierno-verano </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>


        </div>

    )
}

export default Carrousel;