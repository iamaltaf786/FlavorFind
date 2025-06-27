import React, { useState } from "react";
import FoodCart from "./FoodCart";
import MealCards from "./MealCards";
import thaliImg from "../assets/thali-1.jpg";

function HeroSection() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // for loading screen

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const searchRecipe = async () => {
    if (search === "") {
      setData(null);
    } else {
      setLoading(true); // Show loading

      // Start the loading timer for 2 seconds
      const loadingTimer = setTimeout(() => {
        setLoading(false); // Hide loading after 2 seconds
      }, 4000);

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await res.json();

        clearTimeout(loadingTimer); // Clear timer
        setData(data.meals); // Set fetched data
        setLoading(false); // Hide loading once data is ready
      } catch {
        console.error("Error fetching data");
        
        setLoading(false); // Stop loading in case of error
        clearTimeout(loadingTimer); // Clear timer if there was an error
      }
    }
  };
  return (
    <section className="bg-white text-gray-900 py-12 px-6 md:px-16">
      {/* Hero Top */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Area */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Make delicious food <br />
            and feel experience like a <br />
            professional chef.
          </h1>
          <p className="text-gray-600 mb-6">
            It’s time to make delicious food with the best recipes and
            experience like a professional chef.
          </p>
          <div className="flex">
            <input
              onChange={handleInput}
              type="text"
              placeholder="Type your favorite recipe here"
              className="p-3 rounded-l-lg border border-gray-300 w-full max-w-md"
            />
            <button
              onClick={searchRecipe}
              className="bg-orange-500 text-white px-5 py-3 rounded-r-lg hover:bg-orange-600"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="flex-1 relative">
          <img
            src={thaliImg}
            alt="Food Plate"
            className="rounded-full shadow-lg w-[350px] h-[350px] object-cover mx-auto animate-spin [animation-duration:60s] ease-linear"
          />

          {/* Floating Info Cards */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-3 py-2 shadow-md text-xs font-medium">
            🍜 12 Recipes | ⭐ 4.5
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-lg text-xs max-w-[180px]">
            <p className="text-gray-700 mb-1">
              The meals provided are so varied and made by skilled chefs.
              Perfect!
            </p>
            <p className="text-gray-500 font-semibold">
              — Jessica Owen, Food Blogger
            </p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-lg text-gray-600 p-5 mt-5">
          Loading...
        </div>
      ) : (
        <div>
          <MealCards detail={data} />
        </div>
      )}

      <FoodCart />

      {/* Step Section + Stats */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Steps to Cook */}
        <div className="space-y-8">
          {[
            {
              title: "Read Recipe",
              description:
                "Search and read what recipe you want to cook. Find 100+ more recipes available.",
              icon: "📖",
            },
            {
              title: "Prepare the Ingredients",
              description:
                "Prepare cooking utensils and ingredients that will be used for the menu.",
              icon: "🛒",
            },
            {
              title: "Start Cooking",
              description:
                "Cook the menu of the dishes you cook, according to the instructions listed in the recipe.",
              icon: "👩‍🍳",
            },
            {
              title: "Enjoy Your Food",
              description:
                "Serve the food you cooked, then enjoy the meal with your family.",
              icon: "🍽️",
            },
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-2xl">{step.icon}</div>
              <div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cooking Stats and Testimonial */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Let's cook now</h3>
            <p className="text-gray-600 mb-4">
              Make your family happy with the dishes you make. With us, cooking
              just got easier.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-orange-500 font-bold text-xl">100+</p>
                <p className="text-sm text-gray-600">Food Recipes</p>
              </div>
              <div>
                <p className="text-orange-500 font-bold text-xl">100+</p>
                <p className="text-sm text-gray-600">Best Menu</p>
              </div>
              <div>
                <p className="text-orange-500 font-bold text-xl">10k+</p>
                <p className="text-sm text-gray-600">People Satisfied</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
            <p className="text-orange-600 font-semibold text-lg mb-1">
              20k Positive Comment
            </p>
            <p className="text-sm text-gray-700">
              See what they have to say about the recipes we made. Happy
              cooking.
            </p>
            <a
              href="#"
              className="text-orange-600 text-sm font-medium mt-2 inline-block"
            >
              See feedback →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
