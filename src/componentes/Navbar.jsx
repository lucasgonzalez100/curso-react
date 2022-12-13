import React from "react";
import CardWidget from './CardWidget';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(

<div className="containesComponentes" >
<nav className="navbar navbar-dark bg-dark ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={"#"}>Dark Style</NavLink>
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
            <NavLink className="nav-link active" aria-current="page" to={"#"}>Iniciar Sesion</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"#"}>+ Info</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><NavLink className="dropdown-item" to={"#"}>Deportiva </NavLink></li>
              <li><NavLink className="dropdown-item" to={"#"}>Casual </NavLink></li>
              <li><NavLink className="dropdown-item" to={"#"}>Accesorios </NavLink></li>
              <li><NavLink className="dropdown-item" to={"#"}> Fragancias </NavLink></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><NavLink className="dropdown-item" to={"#"}>Conjuntos </NavLink></li>
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
  <CardWidget/>

</nav>

</div>


    )
}

export default Navbar;