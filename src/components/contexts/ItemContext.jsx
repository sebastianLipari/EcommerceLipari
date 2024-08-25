import { createContext, useState } from "react";

export const ItemContext = createContext();

export const Provider = ({ children }) => {
  
  const [items, setItems] = useState([]);

  const addItem =(item)=>{
    
    setItems((prev) =>[...prev,item])
  }

  const reset = () =>{

    setItems([]);

  }


  return (
    <ItemContext.Provider value={{items,addItem,reset}}>
      {children}
    </ItemContext.Provider>
  );
};

