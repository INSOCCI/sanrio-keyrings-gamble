import React from "react";
import "./App.css";
import WarmingUpPage from "./pages/game/WarmingUpPage";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      <WarmingUpPage />
    </div>
  );
}

export default App;
