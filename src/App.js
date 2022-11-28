import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main/MainPage";
// import { db } from "./firebase";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
