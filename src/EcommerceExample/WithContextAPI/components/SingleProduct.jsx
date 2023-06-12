import React from "react";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

const SingleProduct = ({ productId, productName, productDescription }) => {
  const { updateCart } = useContext(ProductsContext);

  return (
    <div>
      <p>
        <b>Name:</b> {productName} <b>|| Description:</b> {productDescription}
        <b> || </b>
        <button onClick={(e) => updateCart(productId)}>Remove</button>
      </p>
    </div>
  );
};

export default SingleProduct;
