import React, { useState } from "react";
import ProductList from "./components/ProductList";
import RecommendedProducts from "./components/RecommendedProducts";
import { ProductsData as Products } from "../productsData";

const WithPropsDrilling = () => {
  const [productPreference, setProductPreference] = useState("");

  const getRecommendedProducts = () =>
    Products.filter((product) => product.category === productPreference);

  const updatePreference = (preference) => {
    setProductPreference(preference);
  };

  return (
    <div>
      <ProductList products={Products} updatePreference={updatePreference} />
      <RecommendedProducts getRecommendedProducts={getRecommendedProducts} />
    </div>
  );
};

export default WithPropsDrilling;
