import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MealInfo from "./component/Mealinfo";
import CategoryList from "./component/CategoryList";
import ErrorPage from "./component/ErrorPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import CategoryDetail from "./component/CategoryDetail";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />

        {/* Main content that changes based on route */}
        <div className="flex-grow">
          <Routes>
            <Route path="/Food-Recipe-App/" element={<HeroSection />} />
            <Route path="/home" element={<HeroSection />} />
            <Route path="/Food-Recipe-App/meal/:mealid" element={<MealInfo />} />
            <Route path="/Food-Recipe-App/categories" element={<CategoryList />} />
            <Route path="/Food-Recipe-App/categories/:categoryid" element={<CategoryDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
