import React from "react";

const Carrousel = () => {
    return (

        <div  className="containerComponentes">


            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="./imagenes/sliderimagen1.jpg" className="d-block w-100" alt="conjunto deportivo negro" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./imagenes/haciendocalistenia.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./imagenes/slider_greece32.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>


    )
}

export default Carrousel;