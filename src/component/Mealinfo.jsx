import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MealInfo() {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const jsonData = await response.json();
        setInfo(jsonData.meals[0]);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };
    getInfo();
  }, [mealid]); // Dependency array with mealid
  // console.log("MealInfo rendered");
  return (
    <>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="flex justify-center items-center h-[90vh] bg-yellow-300 p-8">
          <img
            src={info.strMealThumb}
            alt={info.strMeal}
            className="w-96 h-96 rounded-lg"
          />
          <div className="ml-8">
            <h1 className="text-2xl font-bold">Recipe Details</h1>
            <button className="bg-red-500 text-white text-lg rounded px-4 py-2">
              {info.strMeal}
            </button>
            <h3 className="mt-4 text-lg font-semibold">Instructions</h3>
            <p className="mt-2">{info.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MealInfo;
