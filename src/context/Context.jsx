import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  let totalCountProduct = cartItems.reduce(
    (cantidad, item) => cantidad + item.cantidad,
    0
  );
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.cantidad * item.price.listPrice,
    0
  );

  const TOKEN = "GCSQAVKDCT20GUACJAOT76TMDAZFZ6GAI3XCG";
  const headers = {
    Authorization: "Bearer " + TOKEN,
  };

  useEffect(() => {
    axios
      .get("https://api.babasdevel.com/invoice/range/0/99/", { headers })
      .then((response) => {
        if (response.status === 200) {
          const results = response.data;
          setData(results);
        }
      });
  }, []);

  const addToCart = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);
    if (productExit) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, cantidad: productExit.cantidad + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
    }
  };

  const deleteOneProduct = (id) => {
    const productExit = cartItems.find((item) => item.id === id);
    if (productExit) {
      if(productExit.cantidad===1){
        deleteProduct(id)
      }else{
        setCartItems(
          cartItems.map((item) =>
            item.id === id
              ? { ...productExit, cantidad: productExit.cantidad - 1 }
              : item
          )
        );
      }
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
    }
  };
  const deleteProduct = (id) => {
    if (window.confirm("Eliminar producto")) {
      cartItems.forEach((item, index) => {
        if (item.id == id) {
          totalCountProduct = 1;
          cartItems.splice(index, 1);
        }
        setCartItems([...cartItems]);
      });
    }
  };

  console.log(data);

  const value = {
    data,
    setData,
    cartItems,
    addToCart,
    totalPrice,
    totalCountProduct,
    deleteOneProduct,
    deleteProduct,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
