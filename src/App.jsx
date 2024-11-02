import "./App.css";
import MainPage from "./component/MainPage";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./component/Mealinfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealid" element={<MealInfo />} />
      </Routes>
    </>
  );
}

export default App;
