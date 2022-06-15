import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
