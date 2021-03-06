import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import SignupCard from "../../components/authenticationCard/SignupCard";
import LoginCard from "../../components/authenticationCard/LoginCard";

const drawerWidth = 240;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs(props) {
  const theme = useTheme();
  const [value, setValue] = useState(props.index);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleGoToSignup = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: `calc(100vw - ${drawerWidth}px)` },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "flex-start", sm: "center" },
      }}
    >
      <Toolbar
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      ></Toolbar>
      <Box>
        <AppBar
          position="static"
          sx={{ width: "100vw", display: { xs: "block", sm: "none" } }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flex: { sm: "1" },
            width: { sm: 500, md: 600 },
          }}
        >
          <Toolbar />
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              label="Login"
              sx={{
                background: "rgb(255, 255, 255, 0.8)",
                width: { sm: 250, md: 300 },
                borderTopLeftRadius: "10px",
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Sign Up"
              sx={{
                background: "rgb(255, 255, 255, 0.8)",
                width: { sm: 250, md: 300 },
                borderTopRightRadius: "10px",
              }}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
      </Box>

      <TabPanel value={value} index={0}>
        <LoginCard onSetSignUpIndex={handleGoToSignup} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignupCard />
      </TabPanel>
    </Box>
  );
}
