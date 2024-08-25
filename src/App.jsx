import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Provider } from "./components/contexts/ItemContext";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart/>} />
            
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
