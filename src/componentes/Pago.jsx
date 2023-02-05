import React from "react";

const Pago = () => {
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
    </tr>
  <tr>
      <th scope="row">cantidada final</th>
      <td colspan="2">Larry the Bird</td>
      <td>precioFinal</td>
    </tr>
<button type="button" className="btn btn-success btn-lg">Large button</button>
  </tbody>
</table>
</div>

    )
}

export default Pago;