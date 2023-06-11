import React from "react";
import { Categories } from "../../productsData";

const ProductList = ({ products, updatePreference }) => {
  return (
    <div>
      <h2>All Products</h2>
      {products.map((prod) => (
        <li key={prod.id}>{prod.name}</li>
      ))}
      <h2>Select Prefered Category</h2>
      <select onChange={(e) => updatePreference(e.target.value)}>
        <option>Select Preference</option>
        {Categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductList;
