import "./App.css";
import MainPage from "./component/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MealInfo from "./component/Mealinfo";
import CategoryList from "./component/CategoryList";
import ErrorPage from "./component/ErrorPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import FoodCart from "./component/FoodCart";
import HeroSection from "./component/HeroSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />

        {/* Main content that changes based on route */}
        <div className="flex-grow">
          <Routes>
            {/* <Route path="/Food-Recipe-App/" element={<FoodCart />} /> */}
            <Route path="/Food-Recipe-App/" element={<HeroSection />} />
            {/* <Route path="/home" element={<MainPage />} /> */}
            {/* <Route path="/meal/:mealid" element={<MealInfo />} /> */}
            {/* <Route path="/categories" element={<CategoryList />} /> */}
            {/* <Route path="/categories/:categoryid" element={<CategoryDetail />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
