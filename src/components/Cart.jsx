import React, { useContext } from "react";
import { ItemContext } from "./contexts/ItemContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, reset } = useContext(ItemContext);
    console.log(items);

    return (
        <div className="ItemListContainer">
          <div className="CardContainer">
            {items.map((producto) => (
              <div className="card" key={producto.id}>
                <img src={producto.imageId} alt={producto.marca} />
                <h2>{producto.title}</h2>
                <p>{producto.categoryId}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Cart;
