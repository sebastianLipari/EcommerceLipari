import { Link } from "react-router-dom";
import carrito from '../assets/carrito-de-compras.png';
import { ItemContext } from "./contexts/ItemContext";
import { useContext } from "react";

export const CartWidget = () => {

    const {items} = useContext(ItemContext);

    return (

        <div className="cartWidgetContainer">
           <Link to="/Cart"> <img className='imgCart' src={carrito} />    
           <span>{items.length}</span></Link>

        </div>

    )



}