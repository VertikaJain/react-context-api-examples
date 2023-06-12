import { createContext, useState } from "react";
import { ProductsData as Products } from "../../productsData";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productPreference, setProductPreference] = useState("");
  const [cartProducts, setCartProducts] = useState(Products);

  const getRecommendedProducts = () =>
    Products.filter((product) => product.category === productPreference);

  const updatePreference = (preference) => {
    setProductPreference(preference);
  };

  const updateCart = (productId) => {
    setCartProducts(cartProducts.filter((cp) => cp.id !== productId));
  };

  const context = {
    cartProducts,
    getRecommendedProducts,
    updatePreference,
    updateCart,
  };

  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  );
};
