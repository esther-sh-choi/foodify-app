import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Eatlist from "./pages/eatlist/Eatlist";
// import PersonalPage from "./pages/personalPage/PersonalPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FE5274 ",
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
  const [mobileOpen, setMobileOpen] = useState();

  const handleDrawerToggle = (mobileOpen) => {
    setMobileOpen(mobileOpen);
    console.log(mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="permanent">
          <Sidebar
            onSetMobileOpen={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
          <Navbar onSetMobileOpen={handleDrawerToggle} />
        </div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route path=":userId" element={<Eatlist />} />
              {/* <Route path=":userId" element={<Eatlist />} /> */}
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
