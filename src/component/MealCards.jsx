import React from "react";
import { NavLink } from "react-router-dom";

function MealCards({ detail }) {
  return (
    <>
      <div className="meals">
        {detail && detail.length > 0 ? ( // Check if detail is not empty
          detail.map((curItem) => {
            return (
              <div key={curItem.idMeal} className="mealImg">
                <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })
        ) : (
          <p>No meals found. Please try a different search.</p> // Message for no data fetched from API
        )}
      </div>
    </>
  );
}

export default MealCards;
