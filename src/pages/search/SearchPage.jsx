import React from "react";

import SearchList from "../../components/searchList/SearchList";
import Map from "../../components/map/Map";

import { CssBaseline, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const drawerWidth = 240;

function SearchPage() {
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* <Map></Map> */}Map
        </Grid>
        <Grid item xs={12} md={4}>
          <SearchList></SearchList>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchPage;
