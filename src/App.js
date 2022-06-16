import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Eatlist from "./pages/eatlist/Eatlist";
// import PersonalPage from "./pages/personalPage/PersonalPage";

function App() {
  const [mobileOpen, setMobileOpen] = useState();

  const handleDrawerToggle = (mobileOpen) => {
    setMobileOpen(mobileOpen);
    console.log(mobileOpen);
  };

  return (
    <div className="app">
      <div className="permanent">
        <Sidebar onSetMobileOpen={handleDrawerToggle} mobileOpen={mobileOpen} />
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
  );
}

export default App;
