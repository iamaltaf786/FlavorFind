import React, { useState } from "react";

function MainPage() {
  const [data, setData] = useState(null);

  const myFun = async () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=cake`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        setData(data.meals);
      });
    // const get = await fetch(
    //   `https://www.themealdb.com/api/json/v1/1/search.php?s=cake`
    // );
    // const jsonData = await get.json();
    // console.log(jsonData.meals);
    // setData(jsonData.meals);
  };
  console.log(data);

  return (
    <>
      <div className="container">
        <div className="searchBar">
          <input type="text" placeholder="Enter Dish Name" />
          <button onClick={myFun}>Search</button>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default MainPage;

// Free Meal API source :-
// go to
// https://www.themealdb.com/api.php

// scroll down till you get "Search meal by name" LINK
