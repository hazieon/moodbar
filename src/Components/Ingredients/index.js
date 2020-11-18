import "../../App.css";
import React from "react";

function Ingredients({ ingredients }) {
  return (
    <div>
      <h3>Ingredients:</h3>
      <ol className="ingredients-list">
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.measure} {item.ingredient}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Ingredients;
