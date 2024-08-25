import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { collection, getDocs,query,where } from "firebase/firestore";
import { db } from "../main";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
  
    const productosRef = collection(db, "items");
    const q = categoryId ? query(productosRef,where("categoryId", "==",categoryId)): productosRef;
   
    getDocs(q)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
        setLoading(false); // <- Aquí se desactiva el estado de carga
      })
  }, [categoryId]);
  

  if (loading)
    return (
      <div className="ItemListContainer">
        <div className="CardContainer">
          <h2 style={{ color: "white" }}>Cargando...</h2>
        </div>
      </div>
    );

  return (
    <div className="ItemListContainer">
      <div className="CardContainer">
        {productos.map((producto) => (
          <div className="card" key={producto.id}>
            <img src={producto.imageId} alt={producto.marca} />
            <h2>{producto.title}</h2>
            <p>{producto.categoryId}</p>
            <p>${producto.price}</p>
            <p>{producto.stock}</p>

            <Link to={`/item/${producto.id}`}>
              <button>Ver</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
