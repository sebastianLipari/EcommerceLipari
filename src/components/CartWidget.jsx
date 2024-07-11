
import carrito from '../assets/carrito-de-compras.png';

export const CartWidget = () => {

    return (

        <div className="cartWidgetContainer">
            <img className='imgCart' src={carrito} />    
            <span>2</span>

        </div>

    )



}