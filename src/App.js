import React from "react";
import "./App.css";
import WarmingUpPage from "./pages/game/WarmingUpPage";
import MainPage from "./pages/main/MainPage";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/main/SignInPage";
import SignUpPage from "./pages/main/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="game" element={<WarmingUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
