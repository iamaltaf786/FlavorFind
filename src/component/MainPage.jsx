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

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      setLoading(true); // Set loading to true when search starts

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.meals);
          setLoading(false); // Set loading to false when data is fetched
        })
        .catch(() => {
          setLoading(false); // Stop loading if an error occurs
          setMessage("Error fetching data");
        });
      setMessage("");
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
