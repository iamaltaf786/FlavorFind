import React, { useState } from "react";
import MealCards from "./MealCards";
import { Link } from "react-router-dom";

function MainPage() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // for loading screen

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      myFun(); // Trigger search when Enter key is pressed
    }
  };

  const myFun = async () => {
    if (search === "") {
      setMessage("Please Type Something like...chocolate, veg, cake, etc.");
      setData(null);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      setLoading(true); // Show loading
      setMessage(""); // Clear previous messages if any

      // Start the loading timer for 2 seconds
      const loadingTimer = setTimeout(() => {
        setLoading(false); // Hide loading after 2 seconds
      }, 4000);

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await res.json();

        // Clear loading after fetching data
        clearTimeout(loadingTimer); // Clear timer
        setData(data.meals); // Set fetched data
        setLoading(false); // Hide loading once data is ready
      } catch {
        setMessage("Error fetching data");
        clearTimeout(loadingTimer); // Clear timer if there was an error
        setLoading(false); // Stop loading in case of error
      }
    }
  };
  // console.log("MealPage rendered");
  return (
    <>
      <h1 className="block text-center text-3xl mb-1.5 mt-6 font-bold not-italic">
        Search Your Food
      </h1>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center gap-2 mt-5">
          {/* <button
            onClick={() => (window.location.href = "/#/categories")} // Navigate to categories
            className="w-24 bg-blue-500 text-white text-lg rounded cursor-pointer hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Categories
          </button> */}
          <input
            onKeyDown={handleKeyDown}
            onChange={handleInput}
            type="text"
            className="w-96 p-2 text-[22px] rounded border-none bg-customInputBg"
            placeholder="Enter Dish Name"
          />
          <button
            onClick={myFun}
            className="w-24 bg-customOrange text-white text-lg rounded cursor-pointer hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            Search
          </button>
          {/* All Categories Button - placed directly to the right of the search button */}
          <Link
            to="/categories"
            className="w-48 bg-blue-500 text-white text-lg rounded cursor-pointer hover:bg-blue-600 transition-transform transform hover:scale-105 text-center block p-2"
          >
            View All Recipies
          </Link>
        </div>
        {/* <div className="flex justify-center mt-4">
          <button
            onClick={() => (window.location.href = "/#/categories")} // Navigate to categories
            className="w-24 bg-blue-500 text-white text-lg rounded cursor-pointer hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Categories
          </button>
        </div> */}
        {message && (
          <h4 className=" mt-6 text-center bg-customErrorColor p-4 shadow-lg text-lg">
            {message}
          </h4>
        )}

        {loading ? (
          <div className="text-center text-lg text-gray-600 p-5 mt-5">
            Loading...
          </div>
        ) : (
          <div>
            <MealCards detail={data} />
          </div>
        )}
        {/* <div className="flex justify-center mt-4">
          <button
            onClick={() => (window.location.href = "/#/categories")} // Navigate to categories
            className="w-48 bg-blue-500 text-white text-lg rounded cursor-pointer hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            All Categories
          </button>
        </div> */}
      </div>
    </>
  );
}

export default MainPage;
