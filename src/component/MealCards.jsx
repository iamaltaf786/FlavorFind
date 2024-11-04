import React from "react";
import { NavLink } from "react-router-dom";

function MealCards({ detail }) {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-11/12 mx-auto mt-11">
      {detail && detail.length > 0 ? (
        detail.map((curItem) => (
          <div
            key={curItem.idMeal}
            className="shadow-customRed w-72 h-96 text-center bg-white rounded-lg"
          >
            <img
              src={curItem.strMealThumb}
              alt={curItem.strMeal}
              className="w-full h-64 rounded-t-lg"
            />
            <p className="font-semibold mt-4 mb-4">{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}>
              <button className="w-40 bg-customOrange text-white text-lg border-none rounded-full py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600">
                Recipe
              </button>
            </NavLink>
          </div>
        ))
      ) : (
        <p>No meals found. Please try a different search.</p>
      )}
    </div>
  );
}

export default MealCards;
