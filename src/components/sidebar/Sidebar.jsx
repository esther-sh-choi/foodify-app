import React, { useState, useEffect } from "react";

import Navbar from "../navbar/Navbar";
import Logo from "../../assets/images/logo.png";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

export default function Sidebar(props: Props) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;

  const sidebarList = [
    {
      title: "Home",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      title: "Search",
      icon: <SearchIcon />,
      href: "/search",
    },
    {
      title: "Your Library",
      icon: <LibraryAddCheckIcon />,
      href: "/library",
    },
  ];

  const sidebarSublist = [
    {
      title: "Create Eatlist",
      icon: <LibraryAddIcon />,
      href: "/library",
    },
    {
      title: "Saved Eatlist",
      icon: <FavoriteIcon />,
      href: "/library/saved",
    },
  ];

  const handleDrawerToggle = (openMobile) => {
    setMobileOpen(openMobile);
  };

  const drawer = (
    <div>
      <Toolbar>
        <a href="/">
          <Box
            component="img"
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
            alt="logo"
            src={Logo}
          />
        </a>
      </Toolbar>
      <Divider />
      <List>
        {sidebarList.map((item) => (
          <ListItem
            button
            component="a"
            key={item.title}
            href={loggedIn && item.href}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sidebarSublist.map((item) => (
          <ListItem
            button
            component="a"
            key={item.title}
            href={item.href}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar onDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
