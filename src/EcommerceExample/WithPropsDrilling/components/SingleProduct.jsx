import React from "react";

const SingleProduct = ({
  productId,
  productName,
  productDescription,
  updateCart,
}) => {
  return (
    <div>
      <p>
        <b>Name:</b> {productName} <b>|| Description:</b> {productDescription}{" "}
        || <button onClick={(e) => updateCart(productId)}>Remove</button>
      </p>
    </div>
  );
};

export default SingleProduct;
