import react, { useState } from "react";
import { NavLink } from "react-router-dom";


const ItemCount = ({ stock }) => {

    const [counter, setCounter] = useState(1);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }

    }
    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    const onAdd = () => {

        if (stock > 0)
            console.log("Agregaste: " + counter + " productos al carrito")
    }

    return (
        <div>
            <button type="button" className="btn btn-success" onClick={decrementarStock}>-</button>
            <button type="button" className="btn btn-secondary" >{counter}</button>
            <button type="button" className="btn btn-success" onClick={incrementarStock}>+</button>

            <div><button type="button" className="btn btn-success" onClick={onAdd}>Agregar al carrito</button></div>
            <NavLink to={"/Checkout"} className="btn btn-success">Finalizar compra</NavLink>
        </div>
    )
}

export default ItemCount;