import React from "react";
import { Categories } from "../../productsData";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

const Preferences = () => {
  const { updatePreference } = useContext(ProductsContext);

  return (
    <select onChange={(e) => updatePreference(e.target.value)}>
      <option>Select Preference</option>
      {Categories.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default Preferences;
