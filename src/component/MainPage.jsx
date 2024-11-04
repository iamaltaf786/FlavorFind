import React, { useState } from "react";
import MealCards from "./MealCards";

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
      return;
    }

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
  };

  return (
    <>
      <h1 className="head">Food Recipe App</h1>
      <div className="container">
        <div className="searchBar">
          <input
            onKeyDown={handleKeyDown} // onKeyDown event to trigger Enter button
            onChange={handleInput}
            type="text"
            placeholder="Enter Dish Name"
          />
          <button onClick={myFun}>Search</button>
        </div>
        {message && <h4 className="error">{message}</h4>}

        {/* Loading screen */}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div>
            <MealCards detail={data} />
          </div>
        )}
      </div>
    </>
  );
}

export default MainPage;
