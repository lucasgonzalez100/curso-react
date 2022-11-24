import React from "react";
import Cardwidget from './Cardwidget';

const Navbar = () => {
    return(

<div className="containesComponentes" >
<nav className="navbar navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Dark Style</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark Style</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Iniciar Sesion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">+ Info</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Deportiva </a></li>
              <li><a className="dropdown-item" href="#">Casual </a></li>
              <li><a className="dropdown-item" href="#">Accesorios </a></li>
              <li><a className="dropdown-item" href="#"> Fragancias </a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Conjuntos </a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </div>
  <Cardwidget/>

</nav>

</div>


    )
}

export default Navbar;