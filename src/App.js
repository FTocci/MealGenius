import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MealGenius from "./MealGenius/MealGenius";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-genius" element={<MealGenius />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;