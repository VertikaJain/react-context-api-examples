import React from "react";
import { Categories } from "../../productsData";

const Preferences = ({ updatePreference }) => {
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
