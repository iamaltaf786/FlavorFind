import "./App.css";
import MainPage from "./component/MainPage";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./component/Mealinfo";
import CategoryList from "./component/CategoryList";
import ErrorPage from "./component/ErrorPage";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route path="/:mealid" element={<MealInfo />} /> */}
        {/* <Route path="/categories" element={<CategoryList />} /> */}

        {/* <Route
          path="/categories/:categoryid"
          element={<CategoryDetail />}
        />{" "} */}
        
        {/* Example route for category detail */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
