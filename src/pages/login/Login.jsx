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

// import Signup from "../../components/authenticationCard/SignupCard";
import Login from "../../components/authenticationCard/LoginCard";

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
      }}
    >
      <Toolbar></Toolbar>
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
            width: 500,
          }}
        >
          <Toolbar />
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              label="Login"
              sx={{
                background: "rgb(255, 255, 255, 0.8)",
                width: 200,
                borderTopLeftRadius: "10px",
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Sign Up"
              sx={{
                background: "rgb(255, 255, 255, 0.8)",
                width: 200,
                borderTopRightRadius: "10px",
              }}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Login onSetSignUpIndex={handleGoToSignup} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            sign up
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
}
