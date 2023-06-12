import React from "react";
import SingleProduct from "./SingleProduct";
import Preferences from "./Preferences";

const ProductList = ({ cartProducts, updateCart, updatePreference }) => {
  return (
    <div>
      <h2>Products Cart</h2>

      {cartProducts.map((product) => (
        <SingleProduct
          key={product.id}
          productId={product.id}
          productName={product.name}
          productDescription={product.description}
          updateCart={updateCart}
        />
      ))}

      <h2>Select Prefered Category</h2>

      <Preferences updatePreference={updatePreference} />
    </div>
  );
};

export default ProductList;
