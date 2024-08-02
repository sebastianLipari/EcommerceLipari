import { useState, useEffect } from "react";
import data from "../data/celulares.json";
import { Link } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() =>{

    new Promise((resolve,reject) =>{
        setTimeout(() => resolve(data),2000)
      }).then((response)=>setProductos(response))
      .finally(()=>setLoading(false));
  },[])

    if(loading) return <div className="ItemListContainer" >
            <div className="CardContainer" >

                <h2>Loading...</h2>

            </div>

    </div>

  return (
    <div className="ItemListContainer">
      <div className="CardContainer">
        {productos.map((producto) => (
          <div className="card" key={producto.id}>
            <img src={producto.imagen} alt={producto.marca} />
            <h2>{producto.marca}</h2>
            <p>{producto.gama}</p>
            <p>{producto.id}</p>
            <Link to={`/item/${producto.id}`} ><button>Ver</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

