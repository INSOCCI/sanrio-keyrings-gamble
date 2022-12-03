import React from "react";
import "./App.css";
import WarmingUpPage from "./pages/game/WarmingUpPage";
import MainPage from "./pages/main/MainPage";
import { Routes, Route } from "react-router-dom";
import SigninPage from "./pages/main/SigninPage";
import SignupPage from "./pages/main/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/signin/" element={<SigninPage />} />
        <Route path="/signup/" element={<SignupPage />} />
        <Route path="/game/*" element={<WarmingUpPage />} />
        <Route path="/user/*" element={<MyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
