import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const jsonData = await response.json();

        // Check if categories exist in the response
        if (jsonData.categories) {
          setCategories(jsonData.categories);
        } else {
          setError("No categories found.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {categories.map((category) => (
        <Link
          to={`/categories/${category.idCategory}`} // Adjust the route as necessary
          key={category.idCategory}
          className="flex flex-col items-center bg-yellow-200 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl" // Added hover effects on the card
        >
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            className="w-32 h-32 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px]" // Added shadow to the image
          />
          <h2 className="mt-2 text-lg font-semibold transition-transform duration-300 ease-in-out transform hover:scale-110">
            {category.strCategory}
          </h2>
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
