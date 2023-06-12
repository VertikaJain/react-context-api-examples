import React from "react";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

const RecommendedProducts = () => {
  const { getRecommendedProducts } = useContext(ProductsContext);
  const recProds = getRecommendedProducts();
  return (
    <div>
      <h2>Recommended Products</h2>
      {recProds.length > 0 ? (
        recProds.map((prod) => <li key={prod.id}>{prod.name}</li>)
      ) : (
        <p>No Recommendations</p>
      )}
    </div>
  );
};

export default RecommendedProducts;
