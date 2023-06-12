import React from "react";
import ProductList from "./components/ProductList";
import RecommendedProducts from "./components/RecommendedProducts";
import { ProductsProvider } from "./components/ProductsContext";

const WithContextAPI = () => {
  return (
    <div>
      <ProductsProvider>
        <ProductList />
        <RecommendedProducts />
      </ProductsProvider>
    </div>
  );
};

export default WithContextAPI;
