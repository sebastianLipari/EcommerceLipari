import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ItemContext } from "./contexts/ItemContext";
import { getDoc,doc} from "firebase/firestore";
import { db } from "../main";


function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addItem, reset, items } = useContext(ItemContext);

  useEffect(() => {
  
    const docRef = doc(db,"items",id);
    getDoc(docRef)
    .then((snapshot) =>{
      setProducto({...snapshot.data(), id: snapshot.id});

      setLoading(false); // <- Aquí se desactiva el estado de carga
    });


  }, [id]);

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
        <div className="card" key={producto.id}>
          <img src={producto.imageId} alt={producto.marca} />
          <h1>producto</h1>
          <h2>{producto.title}</h2>

          <p>{producto.categoryId}</p>
          <Link to={`/`}>
            <button>Inicio</button>
          </Link>

          <Link to={`/category/${producto.categoryId}`}>
            <button>Volver al listado</button>
          </Link>

          <button onClick={() => addItem(producto)}>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
