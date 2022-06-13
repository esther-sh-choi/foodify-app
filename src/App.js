import React from "react";
import "./App.css";

import "./assets/css/blk-design-system-react.min.css";
import { Button } from "reactstrap";

import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
