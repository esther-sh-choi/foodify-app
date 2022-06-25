import React, { useState } from "react";

import SearchBar from "../../components/searchBar/SearchBar";

import LogoSmall from "../../assets/images/logo-small.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Container } from "semantic-ui-react";

const drawerWidth = 240;
const libraries = ["places"];

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries,
  // });

  // if (loadError) return "Error loading maps";
  // if (!isLoaded) return "Loading...";

  //   const handleProfileMenuOpen = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    props.onDrawerToggle(!mobileOpen);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        sx={{
          width: "150px",
          display: "flex",
          alignItems: "center",
        }}
        component="a"
        href="/login"
      >
        <LoginIcon sx={{ marginRight: "5px" }} />
        <Typography variant="subtitle1" textAlign="center" sx={{ flex: "1" }}>
          Login
        </Typography>
      </MenuItem>
      <MenuItem
        sx={{
          width: "150px",
          display: "flex",
          alignItems: "center",
        }}
        component="a"
        href="/signup"
      >
        <PersonAddAltIcon sx={{ marginRight: "5px" }} />
        <Typography variant="subtitle1" textAlign="center" sx={{ flex: "1" }}>
          Sign Up
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <a href="/">
            <Box
              component="img"
              sx={{
                width: "45px",
                display: { xs: "block", sm: "none" },
                objectFit: "contain",
                marginRight: "20px",
              }}
              alt="logo icon"
              src={LogoSmall}
            />
          </a>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <SearchBar></SearchBar>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit" href="/login">
              <Box mr={1} sx={{ display: "flex", alignItems: "center" }}>
                <LoginIcon />
              </Box>
              <Typography variant="subtitle1">Login</Typography>
            </IconButton>
            <IconButton size="large" color="inherit" href="/signup">
              <Box mr={1} sx={{ display: "flex", alignItems: "center" }}>
                <PersonAddAltIcon />
              </Box>
              <Typography variant="subtitle1">Sign Up</Typography>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
