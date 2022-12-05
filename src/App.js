import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main/MainPage";
import SigninPage from "./pages/main/SigninPage";
import SignupPage from "./pages/main/SignupPage";

import Navbar from "./components/ui/Navbar";
import WarmingUpPage from "./pages/game/WarmingUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/game/*" element={<WarmingUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
