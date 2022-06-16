import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import Sidebar from "./components/sidebar/Sidebar";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Eatlist from "./pages/eatlist/Eatlist";
// import PersonalPage from "./pages/personalPage/PersonalPage";

import "./app.scss";

const themeLight = createTheme({
  palette: {
    primary: {
      main: "#FE5274 ",
      maingradient:
        "linear-gradient(158deg, rgba(220,184,255,1) 0%, rgba(250,182,203,1) 50%, rgba(255,116,176,1) 100%)",
      darker: "#C02241",
      contrastText: "#fff",
    },
    neutral: {
      main: "#FFF6F8",
      contrastText: "black",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function App() {
  const [light, setLight] = useState(true);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login index={0} />} />
            <Route path="/signup" element={<Login index={1} />} />
            <Route path="/library">
              <Route path=":userId" element={<Eatlist />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
