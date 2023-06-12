import React, { useState } from "react";
import ProductList from "./components/ProductList";
import RecommendedProducts from "./components/RecommendedProducts";
import { ProductsData as Products } from "../productsData";

const WithPropsDrilling = () => {
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

  return (
    <div>
      <ProductList
        cartProducts={cartProducts}
        updateCart={updateCart}
        updatePreference={updatePreference}
      />
      <RecommendedProducts getRecommendedProducts={getRecommendedProducts} />
    </div>
  );
};

export default WithPropsDrilling;
