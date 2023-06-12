import React from "react";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import SingleProduct from "./SingleProduct";
import Preferences from "./Preferences";

const ProductList = () => {
  const { cartProducts } = useContext(ProductsContext);

  return (
    <div>
      <h2>All Products</h2>
      {cartProducts.map((product) => (
        <SingleProduct
          key={product.id}
          productId={product.id}
          productName={product.name}
          productDescription={product.description}
        />
      ))}
      <h2>Select Prefered Category</h2>
      <Preferences />
    </div>
  );
};

export default ProductList;
