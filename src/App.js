import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main/MainPage";
import SigninPage from "./pages/main/SigninPage";
import SignupPage from "./pages/main/SignupPage";
import Step1Page from "./pages/game/Step1Page";
import MyPage from "./pages/MyPage";
import FailPage from "./pages/result/FailPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="game/*" element={<Navbar />} />
      </Routes>

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="signin/" element={<SigninPage />} />
        <Route path="signup/" element={<SignupPage />} />
      </Routes>

      <Routes>
        <Route path="game/*" element={<Step1Page />} />
        <Route path="game/:username" element={<MyPage />} />
        <Route path="game/result" element={<FailPage />} />
      </Routes>
    </div>
  );
}

export default App;
