import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

function CategoryDetail() {
  const { categoryid } = useParams();
  const [meals, setMeals] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryMeals = async () => {
      try {
        // Fetch all categories first to get the name of the category from the ID
        const catRes = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const catData = await catRes.json();
        const matchedCategory = catData.categories.find(
          (cat) => cat.idCategory === categoryid
        );

        if (matchedCategory) {
          setCategoryName(matchedCategory.strCategory);

          // Now fetch meals for that category name
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${matchedCategory.strCategory}`
          );
          const data = await res.json();

          if (data.meals) {
            setMeals(data.meals);
          } else {
            setError("No meals found for this category.");
          }
        } else {
          setError("Invalid category ID.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch category details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryMeals();
  }, [categoryid]);

  if (loading) return <div className="text-center p-6 text-gray-500">Loading meals...</div>;
  if (error) return <div className="text-center text-red-500 p-6">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
        Meals in "{categoryName}" Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg mb-2">{meal.strMeal}</h3>
              <NavLink to={`/Food-Recipe-App/meal/${meal.idMeal}`}>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                  View Recipe
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetail;
