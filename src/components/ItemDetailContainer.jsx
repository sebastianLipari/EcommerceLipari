import React from "react";
import { useState, useEffect } from "react";
import data from "../data/celulares.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    })
      .then((response) => {
        setProducto(response);

        const filtrado = response.find((prod) => prod.id === Number(id));
        setProducto(filtrado);
      })
      .then(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="ItemListContainer">
        <div className="CardContainer">
          <h2>Loading...</h2>
        </div>
      </div>
    );

  return (
    <div className="ItemListContainer">
      <div className="CardContainer">
        <div className="card" key={producto.id}>
          <img src={producto.imagen} alt={producto.marca} />
          <h2>{producto.marca}</h2>
          <p>{producto.category}</p>
          <Link to={`/`}>
            <button>Inicio</button>
          </Link>

          <Link to={`/category/${producto.category}`}>
            <button>Volver al listado</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
