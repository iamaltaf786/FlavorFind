import React from "react";

function FoodCart() {
  return (
    <>
      <div className="bg-gray-100">

        <h1 className="flex justify-center p-5 font-bold text-lg">Simple recipes made for everyday life</h1>

        <div className="flex justify-center items-center gap-10 mx-40">
          <div>
            <img className="rounded-2xl shadow-customRed transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="src\assets\cake-1.jpg" alt="cake-1" />
          </div>
          <div>
            <img className="rounded-2xl shadow-customRed transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="src\assets\soup-1.jpg" alt="soup-2" />
          </div>
          <div>
            <img className="rounded-2xl shadow-customRed transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="src\assets\breakfast-1.jpg" alt="breakfast-3" />
          </div>
          <div>
            <img className="rounded-2xl shadow-customRed transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="src\assets\fish-1.jpg" alt="fish-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCart;
