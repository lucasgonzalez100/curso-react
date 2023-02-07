import React from "react";
import { NavLink } from "react-router-dom";


const Checkout = () => {
    return(

  <div>
  

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">cantidad items</th>
      <td>nombre item</td>
      <td>descripcion item</td>
      <td>Precio item</td>
      <td><button type="button" className="btn btn-success btn-lg"> + </button></td>
    </tr>
  <tr>
      <th scope="row">cantidada final</th>
      <td colSpan="2">Nombre item</td>
      <td>precioFinal</td>
      <td><button type="button" className="btn btn-success btn-lg"> + </button></td>
    </tr>
<button type="button" className="btn btn-success btn-lg">Confirmar </button>
  </tbody>
</table>

</div>

    )
}

export default Checkout;