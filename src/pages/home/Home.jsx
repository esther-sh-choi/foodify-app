import React, { useState, useEffect } from "react";
import "./home.scss";

// material-ui
import { Grid, Paper } from "@mui/material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import List from "../../components/list/List";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

function Home() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const gridSpacing = 3;
  const drawerWidth = 240;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List />
        </Grid>
        <Grid item xs={12}>
          <List />
        </Grid>
        <Grid item xs={12}>
          <List />
        </Grid>
        <Grid item xs={12}>
          <List />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
