import React, { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import Sidebar from "./components/sidebar/Sidebar";
import LocationContext from "./api/locationContext";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Library from "./pages/library/Library";
import SavedList from "./pages/savedList/SavedList";
import SearchPage from "./pages/search/SearchPage";

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

function App() {
  const locationCtx = useContext(LocationContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      locationCtx.saveLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <ThemeProvider theme={themeLight}>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login index={0} />} />
            <Route path="/signup" element={<Login index={1} />} />
            <Route path="/library" element={<Library />}>
              <Route path=":saved" element={<SavedList />} />
            </Route>
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
